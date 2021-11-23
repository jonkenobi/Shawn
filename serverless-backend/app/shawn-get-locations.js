//setup dynamo-db stuff
const AWS = require("aws-sdk");
AWS.config.update({region: "ap-northeast-1"});
const dynamodb = new AWS.DynamoDB.DocumentClient;

exports.handler = async (event) => {
    let data = await getAll();
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

function getAll() {
    const params = {
        TableName: 'shawn_locations',
        ProjectionExpression: "location_name, google_maps_url, area"
    };
    return dynamodb.scan(params, (err, data) => {
        if (err) {
            console.log(err); // an error occurred
        }
    }).promise();
}

