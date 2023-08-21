
const hello = async (event, context) => {

    const date = new Date()

    const time = `Fecha y hora actual en milisegundos es: ${date.getTime()} | Fecha y hora actual ${date}`

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
    hello
}
