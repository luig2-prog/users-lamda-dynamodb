
const getTime = async (_event, _context) => {

    const date = new Date()

    const time = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
        hour: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    };

    const response = {
        message: 'Get Time',
        data: time,
        status: 200
    }

    return {
        "statusCode": 200,
        "body": JSON.stringify(response)
    }
}

module.exports = {
    getTime
}
