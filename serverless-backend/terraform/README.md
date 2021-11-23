### Prerequsites 
1.  Manually zip any updated .js files in ../app into the same folder (overwrite old zips files)

### Getting Started
Configure aws credentials, then run terraform commands
```
cd ./terraform
terraform init 
terraform apply   
```

At the end of the command, there should be something like
```
 Outputs:
 
 base_url = https://1111111.execute-api.ap-northeast-1.amazonaws.com/dev 
```
Go to the link
https://1111111.execute-api.ap-northeast-1.amazonaws.com/dev/~~~~api-url
and you can get a response. 

A full working backend will be created upon terraform apply in /terraform.
Just take the base_url output from Terraform, refer to open.yaml, and you can use the API from any frontend.   

References:
https://learn.hashicorp.com/tutorials/terraform/lambda-api-gateway


### To add new functions 
1. Add the api in openapi.yaml
2. Write the lambda.js function, zip it
3. Create lambda function block in lambda.tf, add it in the iam_role "toSet"
4. Create the function_name as a variable name in variables.tf
5. Add dynamodb table if needed
