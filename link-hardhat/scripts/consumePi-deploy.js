const hre = require("hardhat");

async function main() {

  const ConsumePi = await hre.ethers.getContractFactory("ConsumePi");
  const consumePi = await ConsumePi.deploy();

  await consumePi.deployed();

  console.log("ConsumePi deployed to:", consumePi.address);

  saveFrontendFiles();
}

function saveFrontendFiles() {
  const fs = require("fs");

  const abiDir = __dirname + "/../frontend/src/abis";

  if(!fs.existsSync(abiDir)) {
    fs.mkdirSync(abiDir);
  }

  const artifact = artifacts.readArtifactSync("ConsumePi");


  fs.writeFileSync(
    abiDir + "/ConsumePi.json",
    JSON.stringify(artifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
