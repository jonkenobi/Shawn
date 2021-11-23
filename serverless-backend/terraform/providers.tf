terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.7"
    }
  }
}

provider "aws" {
  version = "~> 3.7"
  region  = "ap-northeast-1"
}
