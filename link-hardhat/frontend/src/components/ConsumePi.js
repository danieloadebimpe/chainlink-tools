import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import  { CardActions, Grid } from "@mui/material";
import { ethers } from "ethers"; 
import { ConsumePi_Contract } from "./Web3";
import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";


const ConsumePi = () => {

    const [data, setData] = useState("");
    const [job, setJob] = useState("");
    const [oracleAddr, setOracleAddr] = useState("");

    const [withdrawAmount, setWithdrawAmount] = useState("");
    const [addressToSend, setAddressToSend] = useState("");

    const [url, setUrl] = useState("");
    const [path, setPath] = useState("");

    const [fee, setFee] = useState("");
    

    // useEffect(() => {
    //     fulfillData()
    // }, []);

    const fulfillData = async () => {
        const contractData = await ConsumePi_Contract.data();
        setData(data.toNumber());
    }

    const request = async () => {
        console.log("getting data");
        const request_data = await ConsumePi_Contract.requestData();

    }

    const getData = async () => {
        const get_data = await ConsumePi_Contract.data();
        setData(get_data.toNumber());
        console.log("the temperature of the raspberry pi cpu is: ", get_data.toNumber());
    }

    const withdraw = async () => {
        console.log("sending funds back to client")
        const sendToClient = await ConsumePi_Contract.withdrawLink(addressToSend, withdrawAmount);

    }

    const appendJob = async () => {
        console.log("adding job", job)
        const jobByte = ethers.utils.formatBytes32String(job)
        const job_add = await ConsumePi_Contract.addJob(jobByte);

    }

    const appendOracle = async () => {
        console.log("adding oracle", oracleAddr)
        const oracle_add = await ConsumePi_Contract.addOracle(oracleAddr);

    }

    const changeFee = async () => {
        console.log("changing fee")
        const decimals = 18;
        const format_fee = ethers.utils.parseUnits(fee, decimals); 
        const fee_change = await ConsumePi_Contract.setFee(format_fee);

    }

    const appendUrl = async () => {
        console.log("adding url");
        const url_add = await ConsumePi_Contract.addUrl(url);
        console.log("added: ", url_add);
    }

    const appendPath = async () => {
        console.log("adding path");
        const path_add = await ConsumePi_Contract.addPath(path);
        console.log("added: ", path_add);
    }

    // styling 
    // sylesheet at bottom of program
    const classes = useStyles();

    return (
        <div>
        <h2> API Features </h2>
        <br></br>
        <Grid container justify="center" spacing={4} >
            <Grid item xs={6} sm={6} md={4} >
                <Card sx={{maxWidth: 345}} className={classes.root}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Fetched data
                            <p>this is the variable you got after requesting data</p>
                            <br></br>
                            {data}
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary" >
                        </Typography> */}
                    </CardContent>
                    <Button
                        className={classes.button}
                        variant="contained"
                        onClick={getData}
                        > get
                    </Button>
                </Card>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
                <Card sx={{maxWidth: 345}} className={classes.root}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Request Data
                            <p> this will send a request to the api you set in the contract</p>
                        </Typography>
                    </CardContent>
                    <Button
                    className={classes.button}
                    variant="contained"
                    onClick={request}
                    > request data 
                    </Button>
                </Card>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
                <Card sx={{minWidth: 345}} className={classes.root}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Set fee 
                            <p> you can set the fee for people calling this </p>
                        </Typography>
                        <TextField
                        variant="outlined"
                        color="secondary"
                        label="fee amount in link"
                        onChange={(e) => setFee(e.target.value)}
                        >
                        </TextField>
                    </CardContent>
                    <Button 
                    className={classes.button}
                    variant="contained"
                    onClick={changeFee}
                    > set fee
                    </Button>
                </Card>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
                <br></br>
                <Card sx={{minWidth: 345}} className={classes.root}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Add Job
                            <p> you can add different jobs that your node has</p>
                        </Typography>
                        <TextField
                        variant="outlined"
                        label="jobID"
                        color="secondary"
                        onChange={(e) => setJob(e.target.value)}
                        >
                        </TextField>
                    </CardContent>
                    <Button 
                    className={classes.button}
                    variant="contained"
                    onClick={appendJob}
                    > add job
                    </Button>
                </Card>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
                <Card sx={{minWidth: 345}} className={classes.root}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Add Oracle 
                            <p> you can add another oracle if you'd like</p>
                        </Typography>
                        <TextField
                        variant="outlined"
                        label="oracle address"
                        color="secondary"
                        onChange={(e) => setOracleAddr(e.target.value)}
                        >
                        </TextField>
                    </CardContent>
                    <Button 
                    className={classes.button}
                    variant="contained"
                    onClick={appendOracle}
                    > add oracle 
                    </Button>
                </Card>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
                <Card sx={{minWidth: 345}} className={classes.root}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Withdraw funds 
                            <p> withdraw the link in this contract to some addresscd </p>
                        </Typography>
                        <TextField
                        variant="outlined"
                        label="address"
                        onChange={(e) => setAddressToSend(e.target.value)}
                        >
                        </TextField>
                        <TextField
                        variant="outlined"
                        label="amount"
                        onChange={(e) => setWithdrawAmount(e.target.value)}
                        >
                        </TextField>
                    </CardContent>
                    <Button 
                    className={classes.button}
                    variant="contained"
                    onClick={withdraw}
                    > withdraw
                    </Button>
                </Card>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
                <Card sx={{minWidth: 345}} className={classes.root}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Add URL 
                            <p> add another url that you'd like to call </p>
                        </Typography>
                        <TextField
                        variant="outlined"
                        label="url"
                        onChange={(e) => setUrl(e.target.value)}
                        >
                        </TextField>
                    </CardContent>
                    <Button 
                    className={classes.button}
                    variant="contained"
                    onClick={appendUrl}
                    > add
                    </Button>
                </Card>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
                <Card sx={{minWidth: 345}} className={classes.root}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Add Path 
                            <p> add the path/endpoint for the url </p>
                        </Typography>
                        <TextField
                        variant="outlined"
                        label="path"
                        onChange={(e) => setPath(e.target.value)}
                        >
                        </TextField>
                    </CardContent>
                    <Button 
                    className={classes.button}
                    variant="contained"
                    onClick={appendPath}
                    > add 
                    </Button>
                </Card>
            </Grid>
             <Grid item xs={6} sm={6} md={4}>
                <Card sx={{minWidth: 345}} className={classes.root}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Withdraw funds 
                            <p> withdraw the link in this contract to some addresscd </p>
                        </Typography>
                        <TextField
                        variant="outlined"
                        label="address"
                        onChange={(e) => setAddressToSend(e.target.value)}
                        >
                        </TextField>
                        <TextField
                        variant="outlined"
                        label="amount"
                        onChange={(e) => setWithdrawAmount(e.target.value)}
                        >
                        </TextField>
                    </CardContent>
                    <Button 
                    className={classes.button}
                    variant="contained"
                    onClick={withdraw}
                    > withdraw
                    </Button>
                </Card>
            </Grid>
        </Grid>

        </div>
    )
}


const useStyles = makeStyles({

    root: {
        backgroundColor: "forestgreen",
        color: "white"

    },

    button: {
        color: "black",
        backgroundColor: "orange"

    }

});


export default ConsumePi;