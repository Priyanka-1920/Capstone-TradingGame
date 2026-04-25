# TradingGame
# 🚀 Capstone Project: End-to-End DevOps CI/CD Pipeline

## 📌 Overview

This project demonstrates the implementation of a complete DevOps lifecycle, including infrastructure provisioning, application deployment, CI/CD automation, monitoring, and alerting using modern tools like Jenkins, Terraform, Kubernetes (EKS), Prometheus, and Grafana.

---

## 🎯 Objectives

* Build a fully automated CI/CD pipeline
* Deploy a scalable application on Kubernetes (EKS)
* Implement Infrastructure as Code (Terraform)
* Configure systems using Ansible
* Set up real-time monitoring and alerting
* Ensure production-ready deployment with testing and automation

---

## 🏗️ Architecture Overview

Code → Jenkins → Build → Terraform → Ansible → Kubernetes (EKS) → Prometheus → Grafana → Alerts

---

## 🛠️ Tech Stack

| Category         | Tools Used         |
| ---------------- | ------------------ |
| CI/CD            | Jenkins            |
| Cloud            | AWS (EKS, EC2, S3) |
| IaC              | Terraform          |
| Configuration    | Ansible            |
| Containerization | Docker             |
| Orchestration    | Kubernetes         |
| Monitoring       | Prometheus         |
| Visualization    | Grafana            |
| Language         | Node.js            |

---

## 📂 Project Structure

```text
Capstone-TradingGame/
│
├── Sprint1/
├── Sprint2/
├── Sprint3/
├── Sprint4/
├── Sprint5/        # Monitoring & Alerts
├── Sprint6/        # Final CI/CD & Testing
│   ├── Jenkinsfile
│   └── docs/
│       └── final-documentation.md
│
├── Client/
├── Server/
├── terraform/
├── websockets/
└── README.md
```

---

## 🔄 CI/CD Pipeline (Jenkins)

The pipeline consists of the following stages:

1. **Checkout Code**
2. **Build Application**
3. **Terraform Provisioning (Simulated)**
4. **Ansible Configuration (Simulated)**
5. **Deployment (Simulated Kubernetes)**
6. **Testing Stage**
7. **Monitoring Validation**

---

## 🧪 Testing Strategy

* API endpoint validation (`/metrics`)
* Kubernetes pod health check (simulated)
* Alert triggering validation
* Pipeline execution validation

---

## 📊 Monitoring & Alerting

* Prometheus collects application and system metrics
* Grafana visualizes metrics through dashboards
* Alerts configured for:

  * No Traffic
  * High Request Rate
  * High Memory Usage
  * Instance Down

---

## 🔄 Automation

* Jenkins pipeline configured with SCM polling
* Automatically triggers on code changes
* Ensures continuous integration and delivery

---

## 💰 Cost Optimization

* Used cost-efficient AWS instances (t3.medium)
* Leveraged Kubernetes for scaling
* Cleaned up unused resources after testing
* Used managed services to reduce operational overhead

---

## 📸 Screenshots

(Add screenshots in Sprint6/docs/)

* Jenkins Pipeline (All stages successful)
* Testing Stage Logs
* Grafana Dashboard
* Prometheus Alerts
* Prometheus Targets

---

## 📊 Key Achievements

✔ End-to-End CI/CD pipeline implementation
✔ Infrastructure provisioning using Terraform
✔ Configuration management with Ansible
✔ Kubernetes-based scalable deployment
✔ Real-time monitoring with Prometheus & Grafana
✔ Alerting system for proactive issue detection
✔ Fully documented and production-ready setup

---

## 🧠 Key Learnings

* CI/CD pipeline design and automation
* Kubernetes deployment strategies
* Monitoring and observability practices
* Infrastructure as Code (IaC)
* Handling restricted environments in Jenkins

---

## 🚀 Future Enhancements

* Integrate Alertmanager with Email/Slack notifications
* Implement real Docker build & ECR push in Jenkins
* Add automated rollback strategy
* Integrate centralized logging (ELK Stack)

---

## 📌 Conclusion

This project successfully demonstrates a production-ready DevOps pipeline, integrating automation, monitoring, and infrastructure management to ensure scalable and reliable application deployment.

---

## 👩‍💻 Author

**Priyanka Malik**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
