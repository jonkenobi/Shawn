resource "aws_dynamodb_table" "shawn_areas" {
  name           = "shawn_areas"
  billing_mode   = "PROVISIONED"
  read_capacity  = 1
  write_capacity = 1
  hash_key       = "area_name"

  attribute {
    name = "area_name"
    type = "S"
  }
}

resource "aws_dynamodb_table" "shawn_locations" {
  name           = "shawn_locations"
  billing_mode   = "PROVISIONED"
  read_capacity  = 1
  write_capacity = 1
  hash_key       = "UUID"

  attribute {
    name = "UUID"
    type = "S"
  }

}

resource "aws_dynamodb_table_item" "init_data" {
  table_name = aws_dynamodb_table.shawn_areas.name
  hash_key   = aws_dynamodb_table.shawn_areas.hash_key

  item = <<ITEM
{
  "area_name": {"S": "新宿"}
}
ITEM
}

//When larger amounts of intial data are required, use this https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html
//write a json file and use the aws cli to batch-write-item the json into the datatable.

