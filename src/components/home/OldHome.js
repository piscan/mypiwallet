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

        <div className="container-fluid" >

            <section className="hero is-medium is-family-code "  >

                <div className="hero-body ">


                    <div className="container " style={style2}>
                        <h1 className="title is-size-1 is-size-3-mobile is-family-code" style={style}>

                            MyPiWallet.org
                        </h1>

                        <p className=" subtitle i s-size-5 is-size-6-mobile" style={style1}>
                            Pchain Wallet web base!
                        </p>
                        <br />
                        <hr /><hr />
                        <div className="contnet" >

                            <div className="columns">

                                <div className="column is-6" >
                                    <div className="notification has-background-white">
                                        <div className="is-size-6 box " >

                                            <strong className="has-text-black-ter has-text-weight-bold is-size-4 is-size-6-mobile">Create Pchain Wallet </strong>

                                            <p className="has-text-grey has-text-justified has-text-left-mobile	" style={{ padding: '2px' }}>

                                                Pchain wallet has an address and privateKey,
                                              both address and privateKey starts with <strong>0x</strong> and you should store the privateKey in a safe
                                                place because we can not recover your privateKey or password.
  
                                            </p>
                                            <div className="has-text-right">
                                                <small>
                                                    <NavLink to="/createwallet" > create wallet </NavLink>
                                                </small >
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div className="column is-6" style={style2}>
                                    <div className="notification has-background-white has-text-justified is-danger ">
                                        <div className="is-size-6 box ">
                                            <strong className="has-text-grey-dark has-text-weight-bold is-size-4 is-size-5-mobile">Import Wallet  </strong><hr />
                                            <p className="has-text-grey ">

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

export default OldHome;

