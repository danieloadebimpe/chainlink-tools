import { List, ListItemText, ListItem, ListItemButton, ListItemIcon} from "@mui/material";
import Box from "@mui/material/Box";
import  InboxIcon  from "@mui/icons-material/Inbox"
import { ConsumePi_Contract } from "./Web3"
import { ethers } from "ethers";
import { useState } from "react";



// change URL for API contract
const Settings = () => {

    const [jobs, setJobs] = useState([]);

    const get_jobs = async () => {
        console.log("you clicked me");

        const jobs = await ConsumePi_Contract.getjobs();
        const formatJobs = ethers.utils.parseBytes32String(jobs);
        console.log(formatJobs);
        transformJobData(formatJobs);

        const job_items = formatJobs.map((job) => {
            <li>{job}</li>
        })
        return({job_items})
        

    }

    const get_urls = async () => {
        console.log("getting urls");

        const urls = await ConsumePi_Contract.getUrls();
        console.log(urls);
        const url_items = urls.map((url) => {
            <li>{url}</li>
        })
        return({url_items});

    }

    const get_oracles = async () => {

    }

    const get_owners = async () => {

    }

    const transformJobData = (formatJobs) => {
        let data = [];
        formatJobs.forEach(job => {
            data.push(job);
        });

        setJobs(data);

    }
    


    return(
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'gray' }}>
        <nav>
            <List>
                <ListItem disablepadding>
                    <ListItemButton onClick={get_jobs}>
                    <ListItemIcon>
                        <InboxIcon/>
                    </ListItemIcon>
                    <ListItemText primary="jobs"></ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablepadding>
                    <ListItemButton onClick={get_oracles}>
                    <ListItemIcon>
                        <InboxIcon/>
                    </ListItemIcon>
                    <ListItemText primary="oracles"></ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablepadding>
                    <ListItemButton onClick={get_urls}>
                    <ListItemIcon>
                        <InboxIcon/>
                    </ListItemIcon>
                    <ListItemText primary="urls"></ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablepadding>
                    <ListItemButton onClick={get_owners}>
                    <ListItemIcon>
                        <InboxIcon/>
                    </ListItemIcon>
                    <ListItemText primary="owners"></ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </nav>
        </Box>
    );
}


export default Settings;