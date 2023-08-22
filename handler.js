const aws = require('aws-sdk');
const dynamodb = new aws.DocumentClient()

const getUsers = async (event, context) => {

    const params = {
        ExpressionAttributeValues: { ':pk': '1' },
        keyConditionExpression: 'pk = :pk',
        TableName: 'users',
    }
    console.log("🚀 ~ file: handler.js:11 ~ getUsers ~ params:", params)


    return dynamodb.query(params, (res, erro) => {
        console.log(res, erro)
        return {
            status: 200,
            body: JSON.stringify({ users: res })
        }
    });

}

export default {
    getUsers
}
