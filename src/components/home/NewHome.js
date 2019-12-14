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

                        <p className="has-text-black  has-text-justified">
                            <strong>Create A New Pchain Wallet  </strong>
                            <p>You can generate a pchain wallet easily with this web app. </p>

                            </p>
                    </li>
                    <li>
                        <p className="has-text-black  has-text-left ">
                            <strong className="is-size-6-mobile is-size-5"> Import A Wallet  </strong>
                            <p>
                                You can import your wallet in two ways,
                                either with privateKey or keystore file and then
                                you can see the wallet information and also send
                                PI to others.
                            </p>

                             
                        </p>

                    </li>
                </ul>
            </section>

            <section id="primary">
                <h1>MyPiWallet.org</h1>
                <p>Pchain Wallet Web base.</p>
                <a href="/createwallet">Create Wallet!</a>

            </section>

        </main>

    </>)
}

export default NewHome;

