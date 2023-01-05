const createRequest = require('./request.js');


const handler = (event, context, callback) => {
    console.info(event)
    const payload = JSON.parse(event.body)
    //const payload = event
    //console.log(JSON.stringify(event, null, 2))
    createRequest(payload, (statusCode, data) => {
        callback(null, {
            statusCode: statusCode,
            body: JSON.stringify(data),
            isBase64Encoded: false

        })
    })

}


module.exports.handler = handler;