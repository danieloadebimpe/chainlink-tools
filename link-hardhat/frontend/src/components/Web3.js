import OracleAbi from "../abis/TestOracle.json" 
import ConsumePiAbi from "../abis/ConsumePi.json" 
import CallConsumeAbi from "../abis/CallConsume.json"

import  config  from "../config";
import { ethers } from "ethers";

// create web3 instance to connect to Ethereum RPC interface 
// for both contracts

const provider = new ethers.providers.Web3Provider(window.ethereum);

// oracle contract 
const OracleAddress = config.oracle_address;
const oracleABI = OracleAbi.abi;
const Oracle = new ethers.Contract(OracleAddress, oracleABI, provider.getSigner());


// consumepi contract
const ConsumePiAddress = config.pi_address_v3;
const consumeABI = ConsumePiAbi.abi;
const ConsumePi = new ethers.Contract(ConsumePiAddress, consumeABI, provider.getSigner());

// caller contract (TrueUSD)
const CallConsumeAddress = config.call_consume;
const CallConsumeABI = CallConsumeAbi.abi;
const CallConsume = new ethers.Contract(CallConsumeAddress, CallConsumeABI, provider.getSigner());


export {Oracle as Oracle_Contract, ConsumePi as ConsumePi_Contract};
export { CallConsume as CallConsume_Contract};

// export address for caller 
export {ConsumePiAddress as ConsumePiAddress};

