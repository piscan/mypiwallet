import React from 'react';
// import { AnimateOnChange } from 'react-animation'
import { animations } from 'react-animation'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const BALANCE = gql`
    {
        getBalance(address:"0xEA048c9D9B3D226550bDDb6515a6425153474D8b")
    }
`

const style = {
    animation: animations.popIn
};

function NewHome() {

    const { loading, error, data } = useQuery(BALANCE);

    console.log("loading : ", loading ); 
    if(error){
        console.log(error);
        throw new Error(error);

    }else {
        console.log(data); 
    }

    return (<>

        <div id="bg" > </div>

        <main>
            <section  id="card" style={style}>
                <ul >
                    <li>

                        <div className="has-text-black  has-text-justified">
                            <strong className="is-size-6-mobile is-size-5">Create A New Pchain Wallet  </strong>
                            <p>You can generate a pchain wallet easily with this web app. </p>

                            </div>
                    </li>
                    <li>
                        <div className="has-text-black  has-text-left ">
                            <strong className="is-size-6-mobile is-size-5"> Import A Wallet  </strong>
                            <p>
                                You can import your wallet in two ways,
                                either with privateKey or keystore file and then
                                you can see the wallet information and also send
                                PI to others.
                            </p>

                             
                        </div>

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

