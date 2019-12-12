import React from 'react';

function Description() {

    return (<>

        <div className="tile is-ancestor ">
            <div className="tile is-vertical is-8">
                <div className="tile">
                    <div className="tile is-parent is-vertical is-small">
                        <article className="tile is-child notification">
                            <p className="title is-family-monospace">Balance</p>
                            <p className=" content is-size-5 has-text-justified is-size-6-mobile is-family-monospace">Enter your wallet Address to get the Wallet Balance. </p>
                            <p className="subtitle is-family-monospace"> <a href="/account"> Balance </a> </p>
                        </article>

                        <article className="tile is-child notification">
                            <p className="title is-family-monospace">Create Wallet </p>
                            <p className="content is-size-5 has-text-justified is-size-6-mobile is-family-monospace">
                                You can create a new Wallet with entering a password to encrypt the privateKey
                                for increasing the security of using this wallet interface.

                                </p>
                            <p className="subtitle is-family-monospace">
                                <a href="/account" > Create Wallet </a>
                            </p>
                        </article>
                    </div>

                    <div className="tile is-parent">
                        <article className="tile is-child notification ">
                            <p className="title is-family-monospace">Wallet </p>

                            <p className="content is-size-5 has-text-justified is-size-6-mobile is-family-monospace">
                                In Wallet you can see Balance of your wallet Transactions and also you can send Pi to another wallet.
                                  also you can have multiple wallets at the same time. and also you can manage the all wallets.
                                </p>
                            <p className="subtitle is-family-monospace">
                                <a href="/wallet" > Wallet </a>
                            </p>
                        </article>
                    </div>


                </div>

                <div className="tile is-parent">
                    <article className="tile is-child notification is-danger">
                        <p className="title is-family-monospace">Import Wallet </p>

                        <p className="content is-size-5 has-text-justified is-size-6-mobile is-family-monospace">
                            For importing a wallet you should enter a name a password an privateKey Wallet.
                                password is used to encrypt the privateKey and storing in browser so please Enter a strong password.
                             </p>
                        <p className="subtitle is-family-monospace">
                            <a href="/account" > Import Wallet </a>
                        </p>
                    </article>
                </div>
            </div>

            <div className="tile is-parent">
                <article className="tile is-child notification ">
                    <div className="content">
                        <p className="title is-family-monospace">Send</p>

                        {/* <figure className="image is-4by3">
            <img src={logo} alt="logo"/>
          </figure> */}

                        <p className="content is-size-5 has-text-justified is-size-6-mobile is-family-monospace">
                            For sending Pi to others , you should Enter the destination address and the value to send after that
                            you should enter the password for decrypting the privatKey of Wallet for singning the send transaction.
                            also you can copy the singed transaction and use it later.
                            for successfull sending you should wait for 1 minute for finishing the send process.
                             </p>
                        <p className="subtitle is-family-monospace">
                            <a href="/wallet" > Send </a>
                        </p>
                    </div>
                </article>
            </div>
        </div>




    </>)
}

export default Description ; 
