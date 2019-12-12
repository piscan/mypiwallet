import React from 'react';
// import { AnimateOnChange } from 'react-animation'
import { animations, easings } from 'react-animation'

const style = {
    animation: `pop-in ${easings.easeOutExpo} 500ms forwards`
}
const style1 = {
    animation: `pop-in ${easings.easeOutExpo} 500ms forwards`
}
const style2 = {
    animation: animations.popIn
}

function Home() {


    return (<>

        <div className="container-fluid" style={{ margin: "15px" }}>

            <section className="hero is-medium is-family-code"  >
            
                <div className="hero-body">
                
                    
                    <div className="container" style={style2}>
                        <h1 className="title is-size-1 is-size-3-mobile is-family-code" style={style}>

                            MyPiWallet.org
                        </h1>

                        <p className=" subtitle is-size-5 is-size-6-mobile" style={style1}>
                            Pchain Wallet web base!
                        </p>
                        <br/>
                            <hr/>
                        <div className="contnet" >

                            <div className="columns">
                                
                                <div className="column is-4" >
                                    <div className="notification has-background-white has-text-justified is-family-code">
                                        <div className="is-size-6 box ">

                                            <strong className="has-text-black ">MyPiWallet.org </strong><hr/> 
                                            <p className="has-text-grey" style={{wordSpacing:'-4px' , textJustify: 'distribute' , textAlignLeft :'left' }}>
                                            Provides a way to 
                                            <a style={{textDecoration:'none' , wordSpacing:'-4px'}} className="has-text-info" href="/account"><strong> create wallet</strong> </a>
                                            and Import Wallet,
                                            after creation you can import it for importing you should Enter a name and password
                                             and privateKey at the End,in 
                                             <a style={{textDecoration:'none'}} className="has-text-info" href="/wallet"><strong> wallet </strong> </a> 
                                             sending you can send pi to another Wallet. and also you can see the 
                                             <a style={{textDecoration:'none'}} className="has-text-info" href="/account"><strong> wallet balance.</strong> </a>
                                             </p>
                                            
                                        </div>
                                    </div>

                                </div>


                                <div className="column is-4" style={style2}>
                                    <div className="notification has-background-white has-text-justified is-danger ">
                                        <div className="is-size-6 box  ">
                                            <strong className="has-text-black">PrivateKey  </strong><hr/>
                                            <p className="has-text-grey">
                                             Pchain privateKey starts with 0x and has 64 characters without 0x 
                                             and is used to sign a transaction 
                                             when you send a transaction to pchain network at the first time, you should sign 
                                             the transaction with privateKey and then send the transaction to pchain network. 
                                             </p>
                                            
                                        </div>
                                    </div>

                                </div>



                                <div className="column is-4"  style={style2}>
                                    <div className="notification has-background-white has-text-justified is-danger ">
                                        <div className="is-size-6 box  ">
                                            <strong className="has-text-black">Password</strong> <hr/>
                                            <p className="has-text-grey">
                                            is used to encrypt the wallet privateKey, you should store password in a safe place 
                                            because MyPiWallet.org can not recover your password. 
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
        </div>

    </>)
}

export default Home;

