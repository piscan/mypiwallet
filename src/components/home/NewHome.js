import React from 'react';
// import { AnimateOnChange } from 'react-animation'
import { animations } from 'react-animation'


const style = {
    animation: animations.popIn
}

function NewHome() {

    return (<>

        <div id="bg" ></div>

        <main>
            <section className="box" id="card" style={style}>
                <ul>
                    <li>
                        <span></span>
                        
                        <p className="has-text-black is-size-5 is-size-7-mobile has-text-justified">
                            <strong>Create Wallet </strong> You can generate a pchain wallet easily with this web app . 
                          </p>
                        
                    </li>
                    <li>
                        <span></span>
                        <p className="has-text-black is-size-5 is-size-7-mobile has-text-justified"> 
                        <strong> Import Wallet  </strong> You can Import Wallet to get the your wallet information and send pi to others.
                         </p>
                
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

export default NewHome;

