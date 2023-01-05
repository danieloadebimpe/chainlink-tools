const https = require("https");

const createRequest = (input, callback) => {
    console.log(input)
    const data = input['data']
    console.log(data)
    const param = data.tokenName;
    //console.log(param)
    const url = `https://58g0nyd5b4.execute-api.us-east-1.amazonaws.com/chainlink/TrueUSD?tokenName=${param}`;
    //console.log(url)

    request = https.get(url);

    request.on("response", response => {
        let status = response.statusCode;
        response.setEncoding("utf-8");
        let body = "";

        response.on("data", chunk => {body += chunk; });

        response.on("end", () => {
            console.log(body)
            if(status === 200) {
                let responseData = JSON.parse(body)
                //console.log(responseData[0])
                let data = responseData[0]
               // console.log(data.principle)
               // console.log(data.totalTrustbyChain)
                callback(status, data);
            } else {
                callback(status, null);
            }
        });
    });

    request.on("error", (err) => {
        console.log(err)
        callback(err, null);
    });
}


module.exports = createRequest;