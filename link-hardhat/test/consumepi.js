// assertions library, "matchers" functions come from waffle
// some matchers return a promise instead of executing immediately 
const { expect, assert } = require("chai");
// ethers is available in global scope, but good practice to declare for explicitness
const { ethers } = require("hardhat");



describe("ConsumerPi", function () {
  let Contract, contract;
  let owner, addr1, addr2;  

  // beforeEach() will run before each test (it) 
  // we don't need to deploy the contract for every test, or get an account to test with

  beforeEach(async function () {
    // getting some accounts, namely owner
    [owner, addr1, addr2] = await ethers.getSigners();
    // get an instance of the contract from contracts folder
    Contract = await ethers.getContractFactory("ConsumePi");
    // deploy the instance 
    contract = await Contract.deploy();
    await contract.deployed();

  });


  it("get the current job", async function () {
    
    const job1Text = "1107006c124a4ecc891676ef7bae7e4";
    const job2Text = "1107006c124a4ecc891676ef7bae7e4";

    // test will fail because the format funcation requires 31 bytes or less, and 
    // our JobIds are exactly 32 bytes
    // however, we can check with great accuracy 
    const job1 = ethers.utils.formatBytes32String(job1Text);
    const job2 = ethers.utils.formatBytes32String(job2Text);
    // expect, to and equal are "matchers from waffle"
    expect(await contract.getJob()).to.equal(job1);

    // call the contract and set a new job as the owner 
    const setJobTx = await contract.connect(owner).setJob(job2);
   
    // wait until the transaction is mined
    await setJobTx.wait();

    expect(await contract.getJob()).to.equal(job2);
  });


  it("fee functions", async function() {

    const decimals = 18;
    const fee = ethers.utils.parseUnits('.1', decimals);
    console.log(fee);
    expect(await contract.getFee()).to.equal(fee);

    const newFee = ethers.utils.parseUnits('5', decimals);
    const newFeeTx = await contract.setFee(5);

    await newFeeTx.wait()
    
    expect(await contract.getFee()).to.equal(newFee);

  });


  it("setter premissions", async function() {
    // set fee 
    await expect(contract.connect(addr1).setFee(5))
        .to.be.revertedWith("unauthorized");

    // set oracle 
   const oracleAddr = "0x1e7555CB89481ca1bA28eD4d01D406aa46c1FA32";
  
    await expect(contract.connect(addr1).setOracle(oracleAddr))
        .to.be.revertedWith("unauthorized");

    // set job
    const jobId = "1107006c124a4ecc891676ef7bae7e4";
    const job = ethers.utils.formatBytes32String(jobId);

    await expect(contract.connect(addr2).setJob(job))
        .to.be.revertedWith("unauthorized");

  });

  it("adding functionality premissions", async function() {
    
    const oracleToAdd = "0x2f246937F10A50f8DB8437814A6163c452FcDc18";

    await expect(contract.connect(addr1).addOracle(oracleToAdd))
          .to.be.revertedWith("unauthorized");

    const jobToAdd = "1107006c124a4ecc891676ef7bae7e4";
    const job = ethers.utils.formatBytes32String(jobToAdd);

    await expect(contract.connect(addr1).addJob(job))
          .to.be.revertedWith("unauthorized");
  });

  it("add functionality", async function() {
    
    const oracleToAdd = "0x0090287468cB42f796e65A9eFfd3038066D21A16";

    const tx = await contract.connect(owner).addOracle(oracleToAdd);
    await tx.wait();
    const addedOracle = await contract.oracleAuth(oracleToAdd);

    assert.isTrue(addedOracle, "Oracle added")
  
    const jobToAdd = "1107006c124a4ecc891676ef7bae7e4";
    const job = ethers.utils.formatBytes32String(jobToAdd);
    const tx2 = await contract.connect(owner).addJob(job);

    await tx2.wait();

    const addedJob = await contract.jobAuth(job);

    assert.isTrue(addedJob, "Job added");


  });

  it("request data ", async function() {

    const request = await contract.connect(owner).requestData();

    await request.wait()

    

  })


});
