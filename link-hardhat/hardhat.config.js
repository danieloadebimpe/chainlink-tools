require("@nomiclabs/hardhat-waffle");
// can test locally with ganache
require("./tasks/ganache");
require("./tasks/accounts");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.10"
      },
      {
        version: "0.8.0"
      },
      {
        version: "0.6.0"
      },
      {
        version: "0.4.19"
      }
    ]
    },
  networks: {

    rinkeby: {
    // url: "can use alchemy or some node infrastructure service",
      url: "https://eth-rinkeby.alchemyapi.io/v2/avV4zb6w4SVPFvG3zYWT_5TObPfSbIC7",
      
    // accounts: ["keys here"]
      accounts: ["10b7fe4d661e75d3d31c296e86575b1a875c0ba087376cc6c012574e22f69211"],
    },
    // ganache
    localhost: {
      url: "http://127.0.0.1:80",
      
      accounts:["10b7fe4d661e75d3d31c296e86575b1a875c0ba087376cc6c012574e22f69211"],

    }
  },
};
