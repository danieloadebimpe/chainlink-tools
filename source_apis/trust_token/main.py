from flask import Flask, jsonify, request

app = Flask(__name__)


response_data = {

    "accountName": "TrueUSD",
    "totalTrust": 140.00,
    "totalToken": 137.87276643,
    "updatedAt": "2022-04-08T14:39:13.724Z",
    "updatedTms": 1649428753724,
    "token": [
        {
        "tokenName": "TUSDB(BNB)",
        "principle": 76.39276643,
        "totalTrustbyChain": 77.00,
        "bankBalances": [
            {
            "Prime Trust": 1.00,
            "Silvergate": 2.00,
            "Signature Bank": 3.00,
            "First Digital Trust": 4.00,
            "Customers Bank": 5.00,
            "Other": 6.00
            }]
        },
        {
        "tokenName": "TUSD(TRON)",
        "principle": 20.22,
        "totalTrustbyChain ": 21.00,
        "bankBalances ": [
            {
            "Prime Trust": 1.00,
            "Silvergate": 2.00,
            "Signature Bank": 3.00,
            "First Digital Trust": 4.00,
            "Customers Bank": 5.00,
            "Other": 6.00
            }],
        },
        {
        "tokenName": "TUSD(ETH)",
        "principle": 20.54,
        "totalTrustbyChain ": 21.00,
        "bankBalances ": [
            { 
            "Prime Trust": 1.00,
            "Silvergate": 2.00,
            "Signature Bank": 3.00,
            "First Digital Trust": 4.00,
            "Customers Bank": 5.00,
            "Other": 6.00
            }]
        },
        {
        "tokenName": "TUSD(AVA)",
        "principle": 20.72,
        "totalTrustbyChain ": 21.00,
        "bankBalances ": [
            {
            "Prime Trust": 1.00,
            "Silvergate": 2.00,    
            "Signature Bank": 3.00,
            "First Digital Trust": 4.00,
            "Customers Bank": 5.00,
            "Other": 6.00
            }]
        }
    ]
}

response_data2 = [
   { 
        "tokenName": "TUSDB(BNB)",
        "principle": 76.39276643,
        "totalTrustbyChain": 77.00,
        "bankBalances": [
            {
            "Prime Trust": 1.00,
            "Silvergate": 2.00,
            "Signature Bank": 3.00,
            "First Digital Trust": 4.00,
            "Customers Bank": 5.00,
            "Other": 6.00
            }], 
   },
   {
        "tokenName": "TUSD(TRON)",
        "principle": 20.22,
        "totalTrustbyChain ": 21.00,
        "bankBalances ": [
            {
            "Prime Trust": 1.00,
            "Silvergate": 2.00,
            "Signature Bank": 3.00,
            "First Digital Trust": 4.00,
            "Customers Bank": 5.00,
            "Other": 6.00
            }],
    },
    {
        "tokenName": "TUSD(ETH)",
        "principle": 20.54,
        "totalTrustbyChain ": 21.00,
        "bankBalances ": [
            { 
            "Prime Trust": 1.00,
            "Silvergate": 2.00,
            "Signature Bank": 3.00,
            "First Digital Trust": 4.00,
            "Customers Bank": 5.00,
            "Other": 6.00
            }],
    },
    {
        "tokenName": "TUSD(AVA)",
        "principle": 20.72,
        "totalTrustbyChain ": 21.00,
        "bankBalances ": [
            {
            "Prime Trust": 1.00,
                "Silvergate": 2.00,    
            "Signature Bank": 3.00,
            "First Digital Trust": 4.00,
            "Customers Bank": 5.00,
            "Other": 6.00
            }]
    }
    
]



@app.route("/chainlink/TrueUSD/all", methods=["GET"])
def full_response():
    return jsonify(response_data)



@app.route('/chainlink/TrueUSD', methods=['GET'])
def api_token_name():
    if 'tokenName' in request.args:
        token_name = str(request.args['tokenName'])
    else:
        return response_data
        
    results = []
        
    for token in response_data2:
        print(token['tokenName'])
        if token['tokenName'] == token_name:
            print('match')
            results.append(token)
        
      
    return jsonify(results)

