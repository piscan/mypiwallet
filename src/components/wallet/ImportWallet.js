import React, { useState } from 'react';
import Container from '../container';
import Input from '../container/Input';
import Textarea from '../container/Textarea';
import { Account } from '../../pweb3';
import Swal from 'sweetalert2';
import { Redirect } from 'react-router-dom';
import Name from './../container/input/Name'; 
import Password from '../container/input/Password';

function ImportWallet(props) {

    const [password, setPassword] = useState('');
    const [privateKey, setPrivateKey] = useState('');
    const [helper, setHelper] = useState('Enter 8 chars as password.');
    const [helper1, setHelper1] = useState('Enter a valid privateKey');
    const [helper2, setHelper2] = useState('Enter a name for Wallet');
    const [name, setName] = useState('');
    const [redir  , setRedir] = useState(false); 

    const reset =()=>{
        setPassword('') ; 
        setPrivateKey ('');
        setHelper('Enter 8 chars as password.');
        setHelper1('Enter a valid privateKey')
        setHelper2('Enter a name for Wallet') 
        setName('');
        document.getElementById('helper').classList.remove('is-success'); 
        document.getElementById('helper1').classList.remove('is-success');
        document.getElementById('helper2').classList.remove('is-success'); 
 
    
    }

    const disableButton = () =>{
        if(helper2 === "Ok!" && helper==="Ok!" && helper1==="Ok!" )return false ; 
        return true ; 
    }

    const handleChangePrivateKey = e => {

        setPrivateKey(e.target.value)

        // if (e.target.value.length === 0) {
        //     setHelper1('privateKey can not be empty.');
        //     document.getElementById("helper1").classList.add('is-danger');


        // } else if (e.target.value.length < 66) {
        //     setHelper1('the privateKey length is less than 64 chars.');
        //     document.getElementById("helper1").classList.add('is-danger');


        // }
        // else {

        //     document.getElementById("helper1").classList.remove('is-danger');
        //     document.getElementById("helper1").classList.add('is-success');
        //     setHelper1('Ok!');

        // }

    }
    const handleChangePassword = e => {

        setPassword(e.target.value);

        // if (e.target.value.length === 0) {
        //     setHelper('password can not be empty.');
        //     document.getElementById("helper").classList.add('is-danger');


        // } else if (e.target.value.length < 8) {
        //     setHelper('the password length is less than 8 chars.');
        //     document.getElementById("helper").classList.add('is-danger');


        // } else {

        //     document.getElementById("helper").classList.remove('is-danger');
        //     document.getElementById("helper").classList.add('is-success');
        //     setHelper('Ok!');

        // }

    }

    const handleChangeName = (e) => {

        setName(e.target.value);

        // if (localStorage.getItem(e.target.value) != null) {
        //     setHelper2('Name already exists!');
        //     document.getElementById('helper2').classList.add('is-danger'); 
        // }
        // else if (e.target.value.length === 0) {
        //     setHelper2('This field can not be empty.');
        //     document.getElementById('helper2').classList.add('is-danger'); 

        // } else {
        //     setHelper2('Ok!');
        //     document.getElementById('helper2').classList.remove('is-danger');
        //     document.getElementById('helper2').classList.add('is-success'); 
 

        // }
    }

    const handleImport = async () => {

        const myWallet = {
            address: Account.privateKeyToAccount(privateKey).address,
            privateKey: null
        };

        if (localStorage.getItem(name) === null) {

            const encrypted_privateKey = Account.encrypt(privateKey, password);
            myWallet.privateKey= JSON.stringify(encrypted_privateKey) ; 
            localStorage.setItem(name, JSON.stringify(myWallet) ) ;

            Swal.fire({
                title:'Successfull!',
                icon:'success' ,
            }).then(()=>{

                reset(); 
            })

        } else {

            alert('Name already exists.');

        }

    }
const  handleCloseImportWallet  = () =>{
    setRedir(true);
}

if (redir) return <Redirect to="/" />

    return (

        <Container header="Import Wallet" style={props.style} style={{margin:'50px'}} 
        close={<button onClick={handleCloseImportWallet} className="delete" aria-label="delete"></button>}>

            {/* <Input className=" is-small" value={name}
                onChange={handleChangeName}
                helper={helper2}
                icon="registered"
                placeholder="Name"
                helperId="helper2" />

            <Input className=" is-small" value={password}
                onChange={handleChangePassword}
                helper={helper}
                icon="lock"
                placeholder="Password"
                helperId="helper"
            /> */}
        
            <Name label="Name" onChange={handleChangeName} value={name} />
            <Password value={password} onChange={handleChangePassword} 
             label="Password"/>
            <Textarea value={privateKey} onChange={handleChangePrivateKey} helper={helper1} />

            <div className="has-text-centered download_btn_margin">
                <button onClick={handleImport}
                disabled={disableButton()}
                    className="button  is-small is-fullwidth has-text-weight-bold gradientBlue has-text-white" > Import </button>
            </div>

        </Container>
    )

}

export default ImportWallet; 
