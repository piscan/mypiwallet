import React, { useState } from 'react';
import { Account } from '../../pweb3';
import { Toast, Warning } from '../../popup';
import Container from '../container';
import Input from '../container/Input';
import { Redirect } from 'react-router-dom';

function CreateWallet(props) {

    const [isExec, setIsExec] = useState(false);
    const [state, setState] = useState({ address: '', privateKey: '' });
    const [password, setPassword] = useState("");
    const [helper, setHelper] = useState('Enter 8 chars as password.');
    const [redir, setRedir] = useState(false);

    const handleChange = e => {

        setPassword(e.target.value);

        if (e.target.value.length === 0) {
            setHelper('password can not be empty.');
            document.getElementById("helper").classList.add('is-danger');


        } else if (e.target.value.length < 8) {
            setHelper('the password length is less than 8 chars.');
            document.getElementById("helper").classList.add('is-danger');


        } else {

            document.getElementById("helper").classList.remove('is-danger');
            document.getElementById("helper").classList.add('is-success');
            setHelper('ok !!!');

        }

    }
    const handleClick = e => {
        e.preventDefault();

        setIsExec(true);
        let { address, privateKey } = Account.create();
        setState({ address: address, privateKey: privateKey });

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
    }
    const handleCloseCreateWallet = () => {
        setRedir(true);
    }

    if (redir) return <Redirect to="/" />

    if (isExec) return <div className="container">
        <br />
        <article className="box is-light" style={props.style}>
            <div className="message-header">
                <code className="is-size-5 is-size-6-mobile has-text-grey-dark"> Account </code>
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
                    <div className="field">
                        <div className="file is-light has-name is-boxed is-fullwidth" onClick={handleDownloadClick}>
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

    </div>



    return <>
        <div className="container">
            <br />
            <Container header="Create Wallet" style={props.style} close={<button onClick={handleCloseCreateWallet} className="delete" aria-label="delete"></button>}>

                <Input id="helper" className="input is-small" value={password} onChange={handleChange} helper={helper} icon="lock" placeholder="Password" />
                <button onClick={handleClick}
                    disabled={!(password.length >= 8)}
                    className="button is-small is-fullwidth has-text-weight-bold gradientBlue has-text-white" > Create </button>


            </Container>
        </div></>

}

export default CreateWallet; 
