require("@nomiclabs/hardhat-web3");

task("balance", "Prints the accounts balance")
    .addParam("account", "The account's address")
    .setAction(async (taskArgs) => {
        const account = web3.utils.toChecksumAddress(taskArgs.account);
        const balance = web3.eth.getBalance(account);

        // print the balance in ether
        console.log(web3.utils.fromWei(balance, "ether"), "ETH");

    });

module.exports = {};

