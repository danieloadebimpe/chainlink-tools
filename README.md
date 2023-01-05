# Chainlink-Tools

This is a respository to assist with oracle service engagements. It sets up a pipeline to test oracles, APIs, and customer's smart contracts. There are four components involved in this oracle service pipeline. Some of which, armanino may not have ownership of. They are described below.

# Source APIs

The source API is the data source that is looking to be "blockchain-enabled" - or wants to integrate with smart contracts on-chain. In this repo, we use python frameworks such as Flask - https://flask.palletsprojects.com/en/2.1.x/ or fastAPI - https://fastapi.tiangolo.com/ "mock" some data source's API. These mock APIs are then deployed as Lambda Functions in AWS using the serverless framework - https://www.serverless.com/ . This way, we create API endpoints that are callable from any IP address, simulating a data source's API

# External Adapters

External Adapters are essentially "wrapped APIs" where there the adapter takes in a data payload from a chainlink node which specifies a URL, and additional paramters such as API keys, or custom endpoints for a data provider or the source API. The adapter takes the data from the payload, constructs a new request, then forwards that request to the source API. The source API will respond, then the adapter will forward the response back to the chainlink node in JSON with an async callback function.

In this repo, the adapters are written in JavaScript, and are deployed as Lambda functions on AWS,again using the serverless framework making the adapter "cloud-enabled". This folder - adapters - also has an additional feature where we use express.js to test the adapter, ensuring that its parsing the payload and generating the correct response, before deploying it to AWS Lambda.

# Chainlink Node 

The chainlink node is essentially the "ultimate bridge" between the on-chain and off-chain world. The node can take in standard requests without the need for external adapters, however, if you need to customize the request, and add additional parameters, such as API credentials, you will need to build an external adapter and connect it to the node. 

You can connect it to the node, by adding the URL of the external adapter to a chainlink "bridge" either through the chainlink GUI, or the CLI. 

The chainlink node requires some ether in order to execute callbacks to smart contracts on-chain. In other words it needs gas to execute transactions on-chain. 

There are folders provided here for booting a chainlink node on your local system, (you will need to connect to an ethereum node also - either with some 3rd party, or you can host the eth node yourself too). More information, or better guidelines for booting nodes can be found on Daniel's Notion page: 

Chainlink Instructions:
https://www.notion.so/armaninocrypto/Chainlink-Node-e6fa91b2ba7b478f885695f63cddad2e 

Ethereum/Geth Instructions:
https://www.notion.so/armaninocrypto/Ethereum-Node-88850c3b40fa4748badaff151cc3a353

The chainlink node has many configurations, which can be found in the infrastructure documentation: 
https://github.com/armaninollp/infrastructure2.0/blob/master/node-forest/cloudformation/chainlink/README.md#software


# Ethereum Smart Contracts 

The final component to this pipeline is the eth smart contracts (what blockchain the smart contracts are on might vary in the future) which are the applications that need off-chain data. Sometimes the applications might want to integrate certain logic or conditions for a mint, or some other event that require off-chain data checks.

For the purpose of this repo, we try to replicate customer's smart contracts to ensure that they can call our oracle, receive the data in the right fashion, and make sure the off-chain data is generating the desired outcome. Often times clients will that are integrating off-chain data into their smart contracts or dApps, will want to make test calls, with test tokens - in an effort to see if there are any adjustments they can make, or to see if they can better optimize their smart contracts. 

(Documentation on the frontend coming soon)

