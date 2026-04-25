# TradingGame
# ☸️ Sprint 4: Application Deployment on Kubernetes (EKS)

---

## 🎯 Objective

To deploy the trading application on a Kubernetes cluster (AWS EKS), ensuring scalability, high availability, and reliable service exposure.

---

## 🛠️ Tools & Technologies

* AWS EKS (Elastic Kubernetes Service)
* Kubernetes (kubectl)
* Docker
* Node.js Application

---

## 🏗️ Architecture Overview

Docker Image → Kubernetes Deployment → Service → Application Access

---

## 🚀 Implementation Steps

### 1. Containerization

* Built Docker image for backend application
* Verified container runs locally

---

### 2. Kubernetes Cluster Setup

* Created EKS cluster using Terraform (from previous sprint)
* Configured `kubectl` to connect to cluster

---

### 3. Deployment Configuration

Created Kubernetes Deployment for backend:

```yaml id="dep1"
apiVersion: apps/v1
kind: Deployment
metadata:
  name: trading-backend
spec:
  replicas: 2
  selector:
    matchLabels:
      app: trading-backend
  template:
    metadata:
      labels:
        app: trading-backend
    spec:
      containers:
      - name: backend
        image: trading-server:v1
        ports:
        - containerPort: 3000
```

---

### 4. Service Configuration

Exposed backend using ClusterIP service:

```yaml id="svc1"
apiVersion: v1
kind: Service
metadata:
  name: backend-service
spec:
  selector:
    app: trading-backend
  ports:
  - port: 5000
    targetPort: 3000
  type: ClusterIP
```

---

### 5. Deployment Execution

Applied configurations:

```bash id="cmd1"
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

---

### 6. Verification

Checked running resources:

```bash id="cmd2"
kubectl get pods
kubectl get svc
```

Verified application is running successfully.

---

## 📊 Scaling & Availability

* Configured replicas for high availability
* Kubernetes automatically manages pod restarts
* Supports horizontal scaling

---

## 📸 Screenshots

(Add images in `docs/` folder)

* Kubernetes Pods Running
* Services List
* Deployment Details

---

## 🧠 Key Learnings

* Kubernetes simplifies container orchestration
* EKS provides managed Kubernetes service
* Deployments ensure desired state management
* Services enable internal communication

---

## 🚀 Outcome

* Successfully deployed application on Kubernetes (EKS)
* Achieved scalable and resilient deployment
* Prepared system for monitoring (next sprint)

---

## 🔮 Future Enhancements

* Add LoadBalancer service for external access
* Implement Ingress controller
* Enable auto-scaling (HPA)

---

## 📌 Conclusion

Sprint 4 focused on deploying the application in a Kubernetes environment, enabling scalability, reliability, and readiness for monitoring and automation in subsequent sprints.
