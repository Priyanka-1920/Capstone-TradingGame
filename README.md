# TradingGame

# 🌍 Sprint 2: Infrastructure Provisioning with Terraform

---

## 🎯 Objective

To provision cloud infrastructure on AWS using Terraform (Infrastructure as Code), enabling automated, scalable, and consistent environment setup.

---

## 🛠️ Tools & Technologies

* Terraform
* AWS (VPC, EC2, EKS, S3)
* AWS CLI

---

## 🏗️ Architecture Overview

Terraform → AWS Cloud → VPC → EC2 / EKS → Networking Components

---

## 🚀 Implementation Steps

### 1. Terraform Setup

* Installed Terraform locally
* Verified installation:

```bash id="tf1"
terraform --version
```

---

### 2. AWS Configuration

* Configured AWS CLI:

```bash id="tf2"
aws configure
```

* Provided:

  * Access Key
  * Secret Key
  * Region

---

### 3. Infrastructure Code

Created Terraform configuration files:

#### Example (main.tf)

```hcl id="tf3"
provider "aws" {
  region = "us-east-1"
}

resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
}
```

---

### 4. Initialize Terraform

```bash id="tf4"
terraform init
```

---

### 5. Plan Infrastructure

```bash id="tf5"
terraform plan
```

---

### 6. Apply Configuration

```bash id="tf6"
terraform apply
```

---

### 7. State Management

* Terraform state used to track infrastructure
* (Optional) Stored in S3 for persistence and team collaboration

---

## 📊 Resources Created

* VPC (Virtual Private Cloud)
* Subnets
* EC2 Instances
* EKS Cluster (for Kubernetes deployment)

---

## 📸 Screenshots

(Add images in `docs/` folder)

* Terraform Init Output
* Terraform Plan Output
* Terraform Apply Output
* AWS Console Resources

---

## 🧠 Key Learnings

* Infrastructure can be automated using Terraform
* IaC ensures consistency and repeatability
* Terraform state helps manage infrastructure lifecycle
* AWS resources can be provisioned efficiently

---

## 🚀 Outcome

* Successfully provisioned AWS infrastructure
* Established foundation for configuration management (Sprint 3)
* Enabled scalable and reusable infrastructure setup

---

## 🔮 Future Enhancements

* Store Terraform state in remote backend (S3 + DynamoDB)
* Use Terraform modules for reusable code
* Implement multi-environment setup (dev, prod)

---

## 📌 Conclusion

Sprint 2 focused on automating infrastructure provisioning using Terraform, laying the foundation for scalable deployments and further DevOps automation in subsequent sprints.
