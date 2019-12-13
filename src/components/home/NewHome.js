import React from 'react';
// import { AnimateOnChange } from 'react-animation'
import { animations, easings } from 'react-animation'
import { NavLink } from 'react-router-dom';

const style = {
    animation: `pop-in ${easings.easeOutExpo} 500ms forwards`
}
const style1 = {
    animation: `pop-in ${easings.easeOutExpo} 500ms forwards`
}
const style2 = {
    animation: animations.popIn
}

function OldHome() {

    return (<>

        <div id="bg" ></div>

        <main>
            <section id="card">
                <ul>
                    <li>
                        <span></span>
                        <strong>Create Wallet </strong>
                        
                    </li>
                    <li>
                        <span></span>
                        <strong>Import Wallet </strong>
                        
                    </li>
                </ul>
            </section>

            <section id="primary">
                <h3>MyPIWallet.org</h3>
                <p>Pchain Wallet Web base.</p>
                <a href="/createwallet">Create Wallet!</a>
            </section>

        </main>

    </>)
}

export default OldHome;

