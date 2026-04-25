# TradingGame

# ⚙️ Sprint 3: Configuration Management with Ansible

---

## 🎯 Objective

To automate server configuration and environment setup using Ansible, ensuring consistency, scalability, and reduced manual effort.

---

## 🛠️ Tools & Technologies

* Ansible
* AWS EC2
* Linux (Ubuntu)
* Node.js

---

## 🏗️ Architecture Overview

Ansible Control Node → EC2 Instances → Automated Configuration

---

## 🚀 Implementation Steps

### 1. Ansible Setup

* Installed Ansible on control machine
* Verified installation:

```bash id="q2qg3p"
ansible --version
```

---

### 2. Inventory Configuration

Created inventory file:

```ini id="m5jv0d"
[web]
ec2-instance-ip ansible_user=ubuntu ansible_ssh_private_key_file=key.pem
```

---

### 3. Ansible Playbook

Created playbook to configure servers:

```yaml id="o1trxb"
---
- name: Configure Application Server
  hosts: web
  become: yes

  tasks:
    - name: Update apt packages
      apt:
        update_cache: yes

    - name: Install Node.js
      apt:
        name: nodejs
        state: present

    - name: Install npm
      apt:
        name: npm
        state: present

    - name: Print success message
      debug:
        msg: "Server configured successfully"
```

---

### 4. Execute Playbook

```bash id="9gpnxy"
ansible-playbook -i inventory playbook.yml
```

---

### 5. Verification

* Verified Node.js installation on EC2
* Ensured dependencies installed successfully

---

## 📊 Benefits Achieved

* Automated server setup
* Reduced manual configuration effort
* Ensured consistent environments
* Scalable configuration management

---

## 📸 Screenshots

(Add images in `docs/` folder)

* Ansible Playbook Execution
* Successful Task Output
* Server Configuration Logs

---

## 🧠 Key Learnings

* Infrastructure configuration can be automated using Ansible
* Playbooks ensure repeatability and consistency
* Inventory helps manage multiple servers efficiently
* Automation reduces human error

---

## 🚀 Outcome

* Successfully automated server configuration
* Prepared environment for application deployment (Sprint 4)
* Established foundation for CI/CD pipeline

---

## 🔮 Future Enhancements

* Use Ansible roles for modular structure
* Integrate with CI/CD pipeline
* Add security configurations

---

## 📌 Conclusion

Sprint 3 focused on automating server configuration using Ansible, enabling efficient and consistent environment setup, and preparing the system for deployment in the next sprint.
