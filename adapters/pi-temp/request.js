const axios = require('axios');

const createRequest = async (input, callback) => {
    //console.log(input)
    const data = await input.data['pi_temp']
    console.log(data)
    //const sensor_url = "http://10.0.0.179:80/chainlink/temp"
    const sensor_url = "http://0812-2601-547-1184-8da0-e2c1-1933-ff0d-4cda.ngrok.io/chainlink/temp"
    //console.info(res)
    if(data == 'cpuTemp') {
        console.log('making request')
        await axios.get(sensor_url).then((res) => {
            console.log(res.data['temperature-status'], res.status)
            callback(res.status, res.data['temperature-status'])
        })
    } else {
        callback(res.status, null)
        console.log('incorrect request')
    }


}

module.exports = createRequest;

