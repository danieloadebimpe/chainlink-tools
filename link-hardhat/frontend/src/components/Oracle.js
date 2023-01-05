import { ethers } from "ethers";
import { TextField, Button, Container, Typography } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { useState } from "react";
import { Oracle_Contract } from "./Web3";
import  ConsumePi  from "./ConsumePi";
import { makeStyles } from "@mui/styles";
import Caller from "./Caller";


const Oracle = () => {
    
    const [address, setAddress] = useState("");

    const addClient = async () => {
        console.log("adding a client node to this oracle");


        const addNode = await Oracle_Contract.setFulfillmentPermission(address, true);
        
    }



    const handleSubmit = (e) => {
        e.preventDefault()

        if(address) {
            console.log(address)
        }
    } 
    const classes =  useStyles();

    return(
    <div>
        <Caller />
            <Container size="sm">
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <h2> Add a chainlink client to this oracle </h2>
            <p> paste in the address of the chainlink client, this will enable your oracle contract to process requests, 
                and send the money back to your node
            </p>
            <TextField
            label="chainlink client address"
            multiline
            variant="outlined"
            color="secondary"
            fullWidth
            //value={value}
            onChange={(e) => setAddress(e.target.value)}
            onSubmit={handleSubmit}
            />
            <Button 
            className={classes.button}
            type="submit"
            variant="containted"
            onClick={addClient}
            >
            submit
            </Button>

            </form>
            <ConsumePi />
        </Container>


    </div>



// add router with following functions 
// withdraw, checkbalance, add nodes, consumer contracts 

// implement some withdraw functionality 

// balance of contract 

// check authorization status 


    )

}

const useStyles = makeStyles({

    button: {
        color: "black"
    }
});

export default Oracle;