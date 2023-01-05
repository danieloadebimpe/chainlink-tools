import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { CallConsume_Contract, ConsumePiAddress } from "./Web3"


const Caller = () => {

    const [data, setData] = useState("");

    useEffect(() => {
        getData()
    },[]);

    const getData = async () => {
        console.log("calling the contract");
        const tx = await CallConsume_Contract.callPi(ConsumePiAddress);
        setData(tx.toNumber());
    }



    return(
        <div>
            
        </div>


    );
}


export default Caller;