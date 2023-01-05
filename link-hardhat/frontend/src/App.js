import './App.css';
import Oracle from "./components/Oracle";
import ConsumePi from "./components/ConsumePi";
import { useState, useEffect } from "react";
import detectEthereumProvider  from '@metamask/detect-provider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Caller from "./components/Caller";
import Navbar from "./components/Navbar";
import Settings from "./components/Settings";

function App() {

  return (
    
    <Router>
      <Navbar/>
      <div className='App'></div>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/call">
          <Caller/>
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
