# TradingGame
# 📊 Sprint 5: Monitoring Setup with Prometheus, Grafana, and Jenkins Alerts

---

## 🎯 Objective

To implement real-time monitoring and alerting for the trading application using Prometheus and Grafana, and integrate it with Jenkins for better visibility into system health.

---

## 🛠️ Tools & Technologies

* Kubernetes (EKS)
* Prometheus
* Grafana
* Jenkins
* Node.js (prom-client)

---

## 🏗️ Architecture Overview

Application → `/metrics` endpoint → Prometheus → Grafana Dashboards → Alerts → Jenkins (CI visibility)

---

## 🚀 Implementation Steps

### 1. Application Instrumentation

* Integrated `prom-client` in Node.js backend
* Exposed metrics endpoint:

  ```
  /metrics
  ```
* Verified using:

  ```
  curl http://localhost:8000/metrics
  ```

---

### 2. Prometheus Setup

* Deployed Prometheus in Kubernetes cluster
* Configured scraping for backend service:

  ```
  http://backend-service:5000/metrics
  ```
* Verified targets status (UP)

---

### 3. Grafana Setup

* Connected Grafana with Prometheus
* Created dashboards for:

  * Request Rate
  * Response Time
  * CPU Usage
  * Memory Usage

---

### 4. Alert Configuration

#### Grafana Alerts

* Created alert rules using PromQL queries

#### Prometheus Alerts

* Configured YAML-based alert rules
* Mounted using Kubernetes ConfigMap

---

### 🚨 Alerts Implemented

* No Traffic Alert
* High Request Rate Alert
* High Memory Usage Alert
* Instance Down Alert

---

### 5. Testing Alerts

* Simulated failures:

  * Stopped backend service
  * Reduced traffic
* Verified:

  * Alerts triggered in Grafana
  * Alerts visible in Prometheus UI

---

## 📊 Sample PromQL Queries

```promql
rate(http_requests_total[5m])
process_resident_memory_bytes
up
```

---

## 📸 Screenshots

(Add images in `docs/` folder)

* Grafana Dashboard
* Prometheus Targets
* Prometheus Query Results
* Alert Firing (Grafana)
* Prometheus Alerts Page

---

## 🧠 Key Learnings

* Monitoring is critical for production systems
* Prometheus collects time-series metrics efficiently
* Grafana enables powerful visualization
* Alerting helps in proactive issue detection
* Kubernetes integration with monitoring tools

---

## 🚀 Outcome

* Successfully implemented monitoring pipeline
* Real-time metrics visibility achieved
* Alerting system configured and validated
* Integrated monitoring with CI/CD workflow

---

## 🔮 Future Enhancements

* Integrate Alertmanager with Slack/Email
* Add advanced dashboards
* Implement log monitoring (ELK Stack)

---

## 📌 Conclusion

Sprint 5 established a complete monitoring and alerting system, enabling visibility into application performance and ensuring proactive system management.

