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
                            <strong>Create A New Pchain Wallet  </strong> <br />You can generate a pchain wallet easily with this web app .
                          </p>
                    </li>
                    <li>
                        <span></span>
                        <p className="has-text-black is-size-5 is-size-7-mobile has-text-left ">
                            <strong> Import A Wallet  </strong><br /> 
                            You can import your wallet in two ways, 
                            either with privateKey or kestore file and then 
                            it shows you the wallet information and also you can send 
                            PI to others. 
                             
                        </p>

                    </li>
                </ul>
            </section>

            <section id="primary">
                <h1>Mypiwallet.org</h1>
                <p>Pchain Wallet Web base.</p>
                <a href="/createwallet">Create Wallet!</a>

            </section>

        </main>

    </>)
}

export default NewHome;

