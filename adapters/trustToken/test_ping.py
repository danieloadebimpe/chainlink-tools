import requests

# r = requests.get("http://localhost:3000/")
# print(r.status_code)
# print(r.text)


#ethereum
eth_payload = {
    "id": 0, 
    "data": {
        "tokenName": "TUSD(ETH)"
    }
    
}



#binance 
bnb_payload = { 
        "id": 1, 
        "data": {
            "tokenName": "TUSDB(BNB)"
        }
}

#tron
tron_payload = {
    "id": 2, 
    "data": {
        "tokenName": "TUSD(TRON)"
    }
}

#avalance
ava_payload = {

    "id": 3,
    "data": {
        "tokenName": "TUSD(AVA)"
    }
}

#payload should result in error, incorrect parameter name
# payload = {
#         "id": 0, 
#         "data": {}
# }


headers = { "Content-Type": "application/json"}

# r = requests.post("http://localhost:3000/chainlink", headers=headers, json=tron_payload)
# print(r.status_code)
# print(r.json())

# p2 = requests.post("http://localhost:3000/post", headers=headers, json=eth_payload)
# print(p2.status_code)
# print(p2.json)

p3 = requests.post("https://j4hmtde9y7.execute-api.us-east-1.amazonaws.com", headers=headers, json=eth_payload)
print(p3.status_code)
print(p3.text)











