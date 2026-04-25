# Sprint 5 - Monitoring Setup (Prometheus, Grafana, Jenkins)

## 🎯 Objective
Set up monitoring and alerting for the trading application using Prometheus and Grafana, and integrate basic Jenkins notifications.

---

## 🛠️ Tools Used
- Kubernetes (EKS)
- Prometheus
- Grafana
- Node.js (prom-client)
- Jenkins

---

## 🚀 Step 1: Expose Metrics in Backend

- Added `prom-client` in Node.js backend
- Created `/metrics` endpoint
- Verified using:

```bash
curl http://localhost:8000/metrics


Step 2: Deploy Prometheus
Installed Prometheus in EKS cluster
Configured scraping for backend service:
http://backend-service:5000/metrics
Verified in Prometheus UI:
Status → Targets → UP


Step 3: Setup Grafana
Deployed Grafana in cluster
Connected Prometheus as data source:
http://prometheus-server


Step 4: Create Dashboards

Created panels for:

Total Requests
Request Rate
Response Time
CPU Usage
Memory Usage

tep 5: Configure Alerts

Created alert rules:

No Traffic
High Request Rate
High Memory Usage
Instance Down

Defined in:

alerts/prometheus-alerts.yaml


Step 6: Jenkins Integration
Configured pipeline notifications:
Success → message logged
Failure → alert triggered


Step 7: Testing
Generate traffic:
for i in $(seq 1 100); do curl http://localhost:8000/metrics; done
Verify:
Metrics visible in Prometheus
Graphs updated in Grafana
Alerts triggered when app is stopped


