// Updated version for node18
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({region: "ap-northeast-1"});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
     const command = new ScanCommand ({
        TableName: 'shawn_areas',
        ProjectionExpression: "area_name, longitude, latitude, drinks, coffee, nature, shopping"
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


