import Oracle from "./Oracle";
import ConsumePi from "./ConsumePi";
import { useState, useEffect } from "react";
import detectEthereumProvider  from '@metamask/detect-provider';

function Home() {

  const [account, setAccount] = useState(false);

  useEffect(() => {
    isConnected()
  }, []);

  
  const isConnected = async () => {
    const provider = await detectEthereumProvider();
    const accounts = await provider.request({method: "eth_accounts"});

    if(accounts > 0) {
      setAccount(accounts[0]);
    } else {
      console.log("no authorized account found");
    }
  }

  const connect = async () => {
    try {
    
      const provider = await detectEthereumProvider();

      const accounts = await provider.request({method: "eth_requestAccounts"});


      if (accounts.length > 0) {
        setAccount(accounts[0]);
      } else {
        alert("no account found");
      }

    } catch (error) {
      console.log(error);
    }
    }

    return (
        <div className="App">
          <header className="App-header">
           <h1> Welcome to oracle testing </h1>
           <br />
          </header>
          {!account && <button onClick={connect}> connect wallet </button>}
          {account && <Oracle />}
        </div>
    
      );
}

export default Home; 
