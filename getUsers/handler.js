const aws = require("aws-sdk")

let dynamoDBClientParams = {}

console.log("🚀 ~ file: handler.js:6 ~ IS_OFFLINE:", process.env.IS_OFFLINE)
if (process.env.IS_OFFLINE) {
    dynamoDBClientParams =  {
        region: 'localhost',
        endpoint: 'http://localhost:8000',
        accessKeyId: 'accessKeyId',  // needed if you don't have aws credentials at all in env
        secretAccessKey: 'secretAccessKey' // needed if you don't have aws credentials at all in env
    }
}

const dynamodb = new aws.DynamoDB.DocumentClient(dynamoDBClientParams)

const getUsers = async (event, context) => {

    let userId = event.pathParameters.id

    var params = {
        ExpressionAttributeValues: { ':pk': userId },
        KeyConditionExpression: 'pk = :pk',
        TableName: 'usersTable'
    };

    return dynamodb.query(params).promise().then(res => {
        console.log(res)
        return {
            "statusCode": 200,
            "body": JSON.stringify({ 'user': res})
        }
    })
}

module.exports = {
    getUsers
}