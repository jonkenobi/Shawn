//setup dynamo-db stuff
const AWS = require("aws-sdk");
AWS.config.update({region: "ap-northeast-1"});
const dynamodb = new AWS.DynamoDB.DocumentClient;

exports.handler = async (event) => {
    let data = await getAreas();
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

function getAreas() {
    const params = {
        TableName: 'shawn_areas',
        ProjectionExpression: "area_name"
    };
    return dynamodb.scan(params, (err, data) => {
        if (err) {
            console.log(err); // an error occurred
        }
    }).promise();
}

