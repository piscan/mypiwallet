import React, { useState } from 'react';
import Container from '../container';
import Textarea from '../container/input/Textarea';
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
    const [nameError , setNameError ] = useState({state : false , helper : ''}); 
    const [passwordError , setPasswordError] = useState({state : false , helper : ''}); 
    const [pkError , setPkError] = useState({state:false , helper : ''}); 

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

        if (e.target.value.length === 0) {
            setPasswordError({state:true , helper:'password can not be empty.'})

        } else if (e.target.value.length < 8) {
            setPasswordError({state:true , helper:'the password length is less than 8 chars.'})

        } else {
            setPasswordError({state:false , helper:'Ok!'})

        }

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
        <div className="container">
            <br/>
        <Container header="Import Wallet" 
        close={<button onClick={handleCloseImportWallet} className="delete" aria-label="delete"></button>}>

    
            <Name label="Name" onChange={handleChangeName} value={name} error={nameError.state} helper = {nameError.helper}/>

            <Password value={password} onChange={handleChangePassword} status={passwordError.state} helper={passwordError.helper} 
             label="Password" />

            <Textarea value={privateKey} onChange={handleChangePrivateKey} label ="PrivateKey" error={pkError.state}
             helper={pkError.helper} />

            <div className="has-text-centered download_btn_margin">
                <button onClick={handleImport}
                
                    className="button  is-small is-fullwidth has-text-weight-bold gradientBlue has-text-white" > Import </button>
            </div>

        </Container>
        </div>
    )

}

export default ImportWallet; 
