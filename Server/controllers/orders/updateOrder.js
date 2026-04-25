const { tradeCounter } = require('../../index');
const mongoose = require("../../models/conn").mongoose;
const participantModel = require("../../models/participantModel");
const orderModel = require("../../models/orderModel");

const modifyParticipantStockData = async (order, tickerprice) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // get participant data
    var participantData = await participantModel.participantModel.find(
      { _id: order.participant },
      null,
      session
    );

    if (participantData.length === 0) {
      await session.abortTransaction();
      session.endSession();
      return;
    }

    participantData = participantData[0];

    var participantStocklocation = new Map();

    for (let i = 0; i < participantData.stocks.length; i++) {
      participantStocklocation.set(participantData.stocks[i].ticker, i);
    }

    // ✅ MARK ORDER COMPLETED
    order.status = "Completed";

    // 🔥 TRACK TRADE (business metric)
    tradeCounter.inc(order.qty); // counts number of shares traded

    // BUY LOGIC
    if (order.transactiontype == "BUY") {
      if (participantStocklocation.has(order.ticker)) {
        var pstockloc = parseFloat(participantStocklocation.get(order.ticker));
        var oldprice = parseFloat(participantData.stocks[pstockloc].buyprice);
        var oldqty = parseFloat(participantData.stocks[pstockloc].qty);

        participantData.stocks[pstockloc].buyprice =
          (oldprice * oldqty + parseFloat(tickerprice) * order.qty) /
          (order.qty + oldqty);

        participantData.stocks[pstockloc].qty += order.qty;
      } else {
        participantData.stocks.push({
          ticker: order.ticker,
          name: "",
          buyprice: tickerprice,
          qty: order.qty,
        });
      }

      let refundprice = (order.required_price - tickerprice) * order.qty;
      participantData.balance =
        parseFloat(participantData.balance) + refundprice;

    } else {
      // SELL LOGIC
      if (participantStocklocation.has(order.ticker)) {
        var pstockloc = participantStocklocation.get(order.ticker);

        if (parseInt(order.qty) > participantData.stocks[pstockloc].qty) {
          console.log("Invalid Quantity", order._id);
          order.status = "Rejected";
        } else {
          participantData.balance =
            parseFloat(participantData.balance) +
            parseFloat(tickerprice) * order.qty;

          participantData.stocks[pstockloc].qty -= parseInt(order.qty);
        }
      } else {
        console.log("Participant has no Stocks");
        order.status = "Rejected";
      }
    }

    // SAVE CHANGES
    var newParticipantData = participantModel.participantModel(participantData);
    newParticipantData = await newParticipantData.save({ session });

    var updatedorder = orderModel.orderModel(order);
    updatedorder = await updatedorder.save({ session });

    await session.commitTransaction();
    session.endSession();

    return;

  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    console.log(err);
    return;
  }
};

const updateOrder = async (ticker, tickerprice) => {
  try {
    var orders = await orderModel.orderModel.find({
      $and: [
        { ticker: ticker },
        { status: "Pending" },
        {
          $or: [
            {
              $and: [
                { required_price: { $gte: tickerprice } },
                { transactiontype: "BUY" },
              ],
            },
            {
              $and: [
                { required_price: { $lte: tickerprice } },
                { transactiontype: "SELL" },
              ],
            },
          ],
        },
      ],
    });

    if (orders.length > 0) {
      for (let i = 0; i < orders.length; i++) {
        await modifyParticipantStockData(orders[i], tickerprice);
      }
    }

  } catch (err) {
    console.log(err);
  }
};

module.exports = { updateOrder };
