const hre = require("hardhat");


async function main() {

  const TestOracle = await hre.ethers.getContractFactory("TestOracle");
  const rink_token = "0x01BE23585060835E02B77ef475b0Cc51aA1e0709";
  const testOracle = await TestOracle.deploy(rink_token);

  await testOracle.deployed();

  console.log("TestOracle deployed to:", testOracle.address);

  saveFrontendFiles();
}

function saveFrontendFiles() {
  const fs = require("fs");

  const abiDir = __dirname + "/../frontend/src/abis"

  if(!fs.existsSync(abiDir)) {
    fs.mkdirSync(abiDir);
  }

  const artifact = artifacts.readArtifact("TestOracle");


  fs.writeFileSync(
    abiDir + "/TestOracle.json",
    JSON.stringify(artifact, null, 2)
  );
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
