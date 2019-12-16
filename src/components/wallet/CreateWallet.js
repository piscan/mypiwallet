import React, { useState } from 'react';
import { Account } from '../../pweb3';
import { Toast, Warning } from '../../popup';
import Container from '../container';
import { Redirect } from 'react-router-dom';
import Password from '../container/input/Password';
import Stepper from '../container/Stepper';

function CreateWallet(props) {

    const [isExec, setIsExec] = useState(false);
    const [state, setState] = useState({ address: '', privateKey: '' });
    const [password, setPassword] = useState("");
    const [status , setStatus ] = useState(false); 
    const [helper, setHelper] = useState('');
    const [redir, setRedir] = useState(false);
    const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = (e) => {
    e.preventDefault();

    setIsExec(true);
    let { address, privateKey } = Account.create();
    setState({ address: address, privateKey: privateKey });

    setActiveStep(prevActiveStep => prevActiveStep + 1);
   
  };

  const handleBack = () => {
   
    setIsExec(false);
    setState({ address: '', privateKey: '' })
    setActiveStep(prevActiveStep => prevActiveStep - 1);

  };

    const handleChange = e => {

        setPassword(e.target.value);

        if (e.target.value.length === 0) {
            setHelper('password can not be empty.');
            setStatus(true); 


        } else if (e.target.value.length < 8) {
            setHelper('the password length is less than 8 chars.');
            setStatus(true); 


        } else {

            setHelper('Ok!');
            setStatus(false); 

        }

    }


    const handleCopyAddress = () => {


        const copyText = document.getElementById("account_address");

        /* Select the text field */
        console.log(copyText)
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
        /* Copy the text inside the text field */

        document.execCommand('copy');

        Toast.fire({
            icon: 'success',
            title: 'copied'
        })


    }
    const handleCopyPrivateKey = () => {

        const copyText = document.getElementById("privatekey");
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
        /* Copy the text inside the text field */
        document.execCommand("copy");
        Toast.fire({
            icon: 'success',
            title: 'copied'
        })
    }

    const handleDownloadClick = () => {
        Warning.fire({}).then(result => {
            if (result.value) {
                const element = document.createElement('a');
                const encryptedPrivatedKey = JSON.stringify(Account.encrypt(state.privateKey, password));
                element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(encryptedPrivatedKey));
                element.setAttribute('download', state.address);
                element.style.display = 'none';
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
                Toast.fire({
                    icon: 'success',
                    title: 'Downloaded'
                })
            }

        });

    }
    const handleClose = () => {
        setIsExec(false);
        setState({ address: '', privateKey: '' })
        setActiveStep(prevActiveStep => prevActiveStep - 1);

    }
    const handleCloseCreateWallet = () => {

        setRedir(true);
        
    }

    if (redir) return <Redirect to="/" />

    if (isExec) return <div className="container">
        <br />
        <article className="message  cw_card box" style={props.style}>
            <div className="message-header gradientBlue cw_card_header">
                <p className="is-size-5 is-size-6-mobile has-text-white"> Account </p>
                <button className="delete" aria-label="delete" onClick={handleClose}></button>
            </div>
            <div className="message-body">

                <fieldset >
                    <span className=" is-family-code has-text-grey-dark"> Address</span>
                    <div className="field has-addons">

                        <p className="control is-expanded">
                            <input id="account_address" readOnly={true} className="input has-background-light is-small has-text-grey-light" type="text" value={state.address} />
                        </p>
                        <div className="control">
                            <button onClick={handleCopyAddress} className="button is-small has-background-light">copy</button>
                        </div>

                    </div>
                    <span className=" is-family-code has-text-grey-dark">Privatekey</span>
                    <div className="field is-horizontal">

                        <div className="field-body">
                            <div className="field has-addons">
                                <div className="control is-expanded">
                                    <textarea id="privatekey" readOnly={true} className="textarea has-background-light is-small has-text-grey-light  " value={state.privateKey} />
                                </div>
                                <div className="control">
                                    <button onClick={handleCopyPrivateKey} className="button is-small height_copy_button has-background-light">copy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <div className="has-text-centered download_btn_margin">
                    <div className="field ">
                        <div className="file has-name is-boxed is-fullwidth" onClick={handleDownloadClick}>
                            <label className="file-label">
                                <input className="file-input " type="text" readOnly={true} name="resume" />
                                <span className="file-cta">
                                    <span className="file-icon has-text-grey-dark ">
                                        <i className="fa fa-cloud-download"></i>
                                    </span>
                                    <span className="file-label has-text-grey-dark is-family-code">
                                        keystore
                                </span>
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        <Stepper onNextClick={handleNext} onBackClick={handleBack} activeStep={activeStep} steps={2}/>

    </div>


    return <>
        <div className="container">
            <br />
            <Container header="Create Wallet" style={props.style} close={<button onClick={handleCloseCreateWallet} className="delete" aria-label="delete"></button>}>

                <br />
                <Password value={password} onChange={handleChange} label="Password" helper={helper} error={status}  />
                <br />
                <div style={{marginLeft: '25px'}}>
                <ol >
                    <li>Enter 8 chars for password.</li>
                    <li>
                        Keep safe your password. 
                    </li>
                    <li>
                        We can not recover it.  
                    </li>                    
                </ol>
                </div>
               
               
            </Container>

            <Stepper onNextClick={handleNext} onBackClick={handleBack} activeStep={activeStep} steps={2} status ={password.length >= 8 }/>
        
        </div></>

    
    
   
    
    

}

export default CreateWallet; 
