resource "aws_dynamodb_table" "shawn_areas" {
  name           = "shawn_areas"
  billing_mode   = "PROVISIONED"
  read_capacity  = 1
  write_capacity = 1
  hash_key       = "uuid"

  attribute {
    name = "uuid"
    type = "S"
  }
}

resource "aws_dynamodb_table" "shawn_places" {
  name           = "shawn_places"
  billing_mode   = "PROVISIONED"
  read_capacity  = 1
  write_capacity = 1
  hash_key       = "place_name"

  attribute {
    name = "place_name"
    type = "S"
  }

}

resource "aws_dynamodb_table_item" "init_data" {
  table_name = aws_dynamodb_table.shawn_areas.name
  hash_key   = aws_dynamodb_table.shawn_areas.hash_key
  key = {
    pk = "uuid"
  }
  item = <<ITEM
{
  "area_name": {"S": "新宿"}
}
ITEM
}

//When larger amounts of intial data are required, use this https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html
//write a json file and use the aws cli to batch-write-item the json into the datatable.

