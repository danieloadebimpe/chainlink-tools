const hre = require("hardhat");

async function main() {

  const CallConsume = await hre.ethers.getContractFactory("CallConsume");
  const callConsume = await CallConsume.deploy();

  await callConsume.deployed();

  console.log("caller contract deployed to:", callConsume.address);

  saveFrontendFiles();
}

function saveFrontendFiles() {
  const fs = require("fs");

  const abiDir = __dirname + "/../frontend/src/abis";

  if(!fs.existsSync(abiDir)) {
    fs.mkdirSync(abiDir);
  }

  const artifact = artifacts.readArtifactSync("CallConsume");


  fs.writeFileSync(
    abiDir + "/CallConsume.json",
    JSON.stringify(artifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
