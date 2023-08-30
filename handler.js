const aws = require('aws-sdk');

// Configure the AWS SDK to use DynamoDB Local
aws.config.update({
    region: 'localhost',
    endpoint: 'http://localhost:8000',
    accessKeyId: 'DEFAULT_ACCESS_KEY',  // These values are typically not needed for DynamoDB Local
    secretAccessKey: 'DEFAULT_SECRET', // These values are typically not needed for DynamoDB Local
});

const dynamodb = new aws.DynamoDB.DocumentClient();

const getUsers = async (event, context) => {
    const params = {
        ExpressionAttributeValues: { ':pk': '1' }, // No need for 'S' type for local DynamoDB
        KeyConditionExpression: 'pk = :pk',
        TableName: 'usersTable',
    };

    try {
        const result = await dynamodb.query(params).promise();
        console.log(result);
        return {
            statusCode: 200,
            body: JSON.stringify({ users: result }),
        };
    } catch (error) {
        console.log("🚀 ~ file: handler.js:22 ~ getUsers ~ error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
    }
};

module.exports = {
    getUsers
};