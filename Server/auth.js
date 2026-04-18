const passport = require("passport");
const dotenv = require("dotenv");
dotenv.config();

const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

const backendurl = "http://localhost:3000/";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

// ✅ Only initialize Google OAuth if credentials exist
if (GOOGLE_CLIENT_ID && GOOGLE_CLIENT_SECRET) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: backendurl + "/auth/google/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        return done(null, profile);
      }
    )
  );
} else {
  console.log("Google OAuth not configured. Skipping...");
}

module.exports = passport;