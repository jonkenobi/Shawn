import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";


const client = new DynamoDBClient({region: "ap-northeast-1"});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
     let filters = event.attributes.join(' >= :filter_val and ')
     filters += ' >= :filter_val'
     console.log(filters)
     const command = new ScanCommand ({
        TableName: 'shawn_areas',
        FilterExpression: filters,
        ExpressionAttributeValues: {":filter_val": 3},
        ProjectionExpression: "area_name"
        // ProjectionExpression: "area_name, longitude, latitude, drinks, coffee, nature, shopping"
    });

    let data = await docClient.send(command);
    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin' : '*'
        },
        body: JSON.stringify(data.Items),
        isBase64Encoded: false
    };

    return response;
};


