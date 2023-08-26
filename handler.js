const { DynamoDBClient, QueryCommand } = require('@aws-sdk/client-dynamodb');

const dynamodbClient = new DynamoDBClient({ region: 'us-east-1' });

const getUsers = async (event, context) => {
    const params = {
        ExpressionAttributeValues: { ':pk': { S: '1' } },
        KeyConditionExpression: 'pk = :pk',
        TableName: 'users',
    };

    try {
        const command = new QueryCommand(params);
        const response = await dynamodbClient.send(command);

        return {
            statusCode: 200,
            body: JSON.stringify({ users: response.Items }),
        };
    } catch (error) {
        console.log("🚀 ~ file: handler.js:22 ~ getUsers ~ error:", error)
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
    }
};

module.exports = {
    getUsers
};
