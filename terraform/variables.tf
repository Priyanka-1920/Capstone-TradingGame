variable "region" {
  description = "AWS region"
  default     = "eu-west-2"
}

variable "vpc_cidr" {
  description = "CIDR block for VPC"
  default     = "10.0.0.0/16"
}

variable "subnet_1_cidr" {
  default = "10.0.1.0/24"
}

variable "subnet_2_cidr" {
  default = "10.0.2.0/24"
}

variable "az_1" {
  default = "eu-west-2a"
}

variable "az_2" {
  default = "eu-west-2b"
}

variable "cluster_name" {
  default = "trading-eks"
}

variable "tags" {
  description = "Common tags"
  type        = map(string)

  default = {
    Project = "TradingGame"
    Env     = "Dev"
  }
}