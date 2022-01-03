resource "aws_api_gateway_rest_api" "api_gateway_rest_api" {
  name        = var.api_name
  description = "API gateway rest API "

  endpoint_configuration {
    types = ["REGIONAL"]
  }

  body = templatefile("../openapi.yaml", {
    title                                       = var.api_name
    get_area_function_invoke_arn = aws_lambda_function.get_areas.invoke_arn
    get_places_function_invoke_arn = aws_lambda_function.get_places.invoke_arn
    # get_input_template_function_invoke_arn      = aws_lambda_function.get_input_template.invoke_arn
    # register_input_template_function_invoke_arn = aws_lambda_function.register_input_template.invoke_arn
    # format_service_function_invoke_arn          = aws_lambda_function.format_service.invoke_arn
    # delete_input_template_function_invoke_arn   = aws_lambda_function.delete_input_template.invoke_arn
  })
}

resource "aws_api_gateway_deployment" "my_api_gateway_deployment" {
  rest_api_id = aws_api_gateway_rest_api.api_gateway_rest_api.id
  stage_name  = var.deploy_stage

  depends_on = [aws_api_gateway_rest_api.api_gateway_rest_api]
}
