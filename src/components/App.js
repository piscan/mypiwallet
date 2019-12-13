import React from 'react';
import '../style/main.scss'
import Navigation from './navigation';
import Wallet from './wallet'; 
import Home from './home/NewHome'; 
import CreateWallet from './account/CreateWallet';
import ImportWallet from './account/ImportWallet'; 

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {

  return (
    
      <Router >

        <Navigation />

        <Switch>

          <Route exact path="/" component={Home}/>          
          <Route path="/wallet" component={Wallet}/>
          <Route path="/createwallet" component={CreateWallet}/>
          <Route path="/importwallet" component={ImportWallet}/>
                 
        </Switch>

      
      </Router>

  
  );
}

export default App;
