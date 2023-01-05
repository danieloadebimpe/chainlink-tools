import requests


raspberry_payload = {
    "id": 1, 
    "data": {
        "pi_temp": "cpuTemp"
    }   
}

headers = { "Content-Type": "application/json"}


r = requests.post("http://localhost:3000/chainlink", json=raspberry_payload, headers=headers)
print(r.status_code)
print(r.json())

# test the raspberry pi server to ensure its working
# r = requests.get("http://10.0.0.179:80/chainlink/temp",json=raspberry_payload, headers=headers)
# print(r.status_code)
# print(r.json())

# r = requests.post("https://1om6em92sb.execute-api.us-east-1.amazonaws.com", headers=headers, json=raspberry_payload)
# print(r.status_code)
# print(r.json())
