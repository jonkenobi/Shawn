resource "aws_lambda_function" "get_areas" {
  function_name = var.shawn_get_areas_function_name
  filename      = "../app/${var.shawn_get_areas_function_name}.zip"

  # "var.frankii_get_question_categories_function_name" is the filename within the zip file
  #(${var.frankii_get_question_categories_function_name}.js) and "handler"
  # is the name of the property under which the handler function was
  # exported in that file.
  handler = "${var.shawn_get_areas_function_name}.handler"
  runtime = "nodejs12.x"

  role = aws_iam_role.my_lambda_iam_role.arn
}

# IAM role which dictates what other AWS services the Lambda function
# may access.
resource "aws_iam_role" "my_lambda_iam_role" {
  name               = "my_lambda_iam_role"
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_iam_role_policy_attachment" "role_policy_attachment" {
  //  leaving for_each here in case multiple role policies need to be attached in future
  for_each = toset([
    "arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess"
  ])

  role       = aws_iam_role.my_lambda_iam_role.name
  policy_arn = each.value
}

resource "aws_lambda_permission" "apigw_lambda_permission" {
  for_each = toset([
    aws_lambda_function.get_areas.function_name,
  ])

  statement_id = "AllowAPIGatewayInvoke"
  action       = "lambda:InvokeFunction"

  function_name = each.value
  principal     = "apigateway.amazonaws.com"

  # The "/*/*" portion grants access from any method on any resource
  # within the API Gateway REST API.
  source_arn = "${aws_api_gateway_rest_api.api_gateway_rest_api.execution_arn}/*/*"
}
