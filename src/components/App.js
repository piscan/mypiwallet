import React from 'react';
import '../style/main.scss'
import Navigation from './navigation';
import Account from './account/Account';
import Wallet from './wallet'; 
import Home from './home/Home'; 

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
          <Route  path="/account" component={Account}/>
          
          <Route path="/wallet" component={Wallet}/>
                 
        </Switch>

      
      </Router>

  
  );
}

export default App;
