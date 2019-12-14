import React from 'react';
import Navigation from './../navigation';
import Wallet from './../wallet';
import Home from './../home/NewHome';
import '../../style/main.scss';

import {
    BrowserRouter ,
    Switch,
    Route,

} from "react-router-dom";
import ImportWallet from "../account/ImportWallet";
import CreateWallet from "../account/CreateWallet";

function Router() {

    return (

        <BrowserRouter >

            <Navigation />

            <Switch>

                <Route exact path="/" component={Home}/>
                <Route path="/wallet" component={Wallet}/>
                <Route path="/createwallet" component={CreateWallet}/>
                <Route path="/importwallet" component={ImportWallet} />

            </Switch>


        </BrowserRouter>


    );
}

export default Router;
