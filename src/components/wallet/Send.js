import React, { useState, useEffect } from 'react';
import Container from '../container';
import Input from '../container/Input';
import Tx from 'pchainjs-tx';
import { GET_TRANSACTION_COUNT, GET_BALANCE, SEND_RAW_TRANSACTION } from '../../request/';
import { Account } from '../../pweb3';
import Swal from 'sweetalert2'
import Loader from 'react-loader-spinner'
import Fetch from '../../request/Fetch';
import TransactionSent from '../wallet/TransactionSent';
import PasswordForm from './PasswordForm';
import { isAddress } from 'pweb3-utils';
import SignedTransaction from './SignedTransaction';

function Send(props) {

    const [to, setTo] = useState('');
    const [piValue, setPiValue] = useState('');
    const [balance, setBalance] = useState(0);
    const [toHelper, setToHelper] = useState('Enter wallet address you want send Pi to.');
    const [valueHelper, setValueHelper] = useState('Enter the number of Pi to send.');
    const [selected, setSelected] = useState('sendForm');
    const [ts, setTs] = useState({});
    const [password, setPassword] = useState('');
    const [passHelper, setPassHelper] = useState('Enter wallet password.');
    const [signed, setSigned] = useState();

    useEffect(() => {

        const { address } = JSON.parse(localStorage.getItem(props.name));

        Fetch(GET_BALANCE(address)).then(data => {
            const b = (Number.parseFloat(data.data.getBalance) / Number.parseFloat(1000000000000000000));
            setBalance('' + b);
        }).catch(error => {
            throw new Error(error);
        })

    }, [props.name]);

    const disableButton = () => {
        if (toHelper === 'Ok!' && valueHelper === 'Ok!') {
            return false;
        }
        return true;

    }
    const handleNextClick = () => {


        setSelected('passwordForm');

        // Swal.fire({

        //     title: 'Are you sure to send ?',
        //     text: 'You can not retrive your Pi after sending!',
        //     icon: 'question',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, Send!'

        // }).then(result => {

        //     if (result.value) {
        //     }

        // })

    }

    const handleChangeTo = e => {

        setTo(e.target.value)
        const isAddr = isAddress(e.target.value);
        const { address } = JSON.parse(localStorage.getItem(props.name));

        if (!isAddr) {
            setToHelper('Invalid Address.');
            document.getElementById('addressHelperTo').classList.add('is-danger');
            document.getElementById('addressTo').classList.add('is-danger');
        } else if (e.target.value === address) {

            setToHelper('You can not send Pi to yourself.');
            document.getElementById('addressHelperTo').classList.add('is-danger');
            document.getElementById('addressTo').classList.add('is-danger');
        }
        else {
            setToHelper('Ok!')
            document.getElementById('addressHelperTo').classList.remove('is-danger');
            document.getElementById('addressTo').classList.remove('is-danger');
            document.getElementById('addressHelperTo').classList.add('is-success');
            document.getElementById('addressTo').classList.add('is-success');
        }
    }

    const handleChangeValue = e => {

        setPiValue(e.target.value);

        if (e.target.value.length === 0) {

            setValueHelper('This field can not be empty.')
            document.getElementById('valueTo').classList.add('is-danger');
            document.getElementById('valueHelperTo').classList.add('is-danger');



        } else if (e.target.value === '0' || Number.parseFloat(e.target.value) < 0) {

            setValueHelper('Invalid value');
            document.getElementById('valueTo').classList.add('is-danger');
            document.getElementById('valueHelperTo').classList.add('is-danger');


        }
        else if (e.target.value > balance) {

            setValueHelper('Insufficient Balanc');
            document.getElementById('valueTo').classList.add('is-danger');
            document.getElementById('valueHelperTo').classList.add('is-danger');

        } else {

            setValueHelper('Ok!')
            document.getElementById('valueTo').classList.remove('is-danger');
            document.getElementById('valueHelperTo').classList.remove('is-danger');
            document.getElementById('valueTo').classList.add('is-success');
            document.getElementById('valueHelperTo').classList.add('is-success');

        }

    }

    const handleChangePassword = e => {

        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPassHelper('Password is short.');
            document.getElementById('passwordHelper').classList.add('is-danger');
            document.getElementById('passwordForm').classList.add('is-danger');


        } else {
            setPassHelper('Ok!');

            document.getElementById('passwordHelper').classList.remove('is-danger');
            document.getElementById('passwordForm').classList.remove('is-danger');
            document.getElementById('passwordHelper').classList.add('is-success');
            document.getElementById('passwordForm').classList.add('is-success');

        }

    }

    const handleSignClick = async () => {

        setSelected('sending');

        try {

            const { address } = JSON.parse(localStorage.getItem(props.name));

            const { data } = await Fetch(GET_TRANSACTION_COUNT(address));


            const { privateKey } = Account.decrypt(JSON.parse(localStorage.getItem(props.name)).privateKey, password);
            console.log("privateKey in line 165 : ", privateKey);
            const p = privateKey.slice(2).toString();

            const privateKey1 = Buffer.from(p, 'hex');

            const rawTx = {
                nonce: (data.getTransactionCount),
                gasPrice: '0x3B9ACA00',
                gasLimit: '0xA410',
                to: to,
                value: '0x' + (Number.parseFloat(piValue) * 1000000000000000000).toString(16),
                data: '',
                chainId: 'pchain'
            };

            const tx = new Tx(rawTx);
            tx.sign(privateKey1);
            const serializedTx = await tx.serialize();
            const s = '0x' + serializedTx.toString('hex');
            setSigned(s);
            setSelected('signedTransaction');
        }
        catch (error) {
            if (error.message === "Key derivation failed - possibly wrong password")
                Swal.fire({
                    title: "Wrong Password ",
                    text: "The password is not invalid ",
                    icon: 'error',
                    showConfirmButton: true,
                    confirmButtonText: "Ok ",
                    confirmButtonColor: "red"

                }).then(() => {
                    setSelected('passwordForm');
                    setPassword(''); 
                    setPassHelper('password can not be empty!'); 
                    document.getElementById('passwordHelper').classList.add('is-danger');
                    document.getElementById('passwordForm').classList.add('is-danger');
        
                    
                })

        }

    }

    const handleSendClick = () => {

        const beforSending = Swal.mixin({
            customClass: {

                title: ''
            },

        })


        beforSending.fire({
            title: 'Are you Sure to Send Pi ? ',
            text: `You won't be able to revert this! `,
            icon: 'warning',
            showConfirmButton: true,
            showCancelButton: true,
            cancelButtonText: 'Cancerl',
            confirmButtonText: 'Agree',

        }).then(async () => {

            setSelected('sending');
            const transactionHash = await Fetch(SEND_RAW_TRANSACTION(signed))

            setTs(transactionHash);

            Swal.fire({
                title: 'Sent Successfully!',
                text: `${piValue} sent to destination wallet`,
                icon: 'success',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ok'
            });

            setSelected('transactionSent');

        });



    }

    return (<>

        {
            selected === "sendForm" &&
            <Container header="Send Pi" close={<button onClick={props.onClick} className="delete" aria-label="delete"></button>}>

                <Input value={to} onChange={handleChangeTo} id="addressTo" helperId="addressHelperTo"
                    type="text" placeholder="To " className=" is-small" icon="hashtag" helper={toHelper} />

                <Input value={piValue} onChange={handleChangeValue} id="valueTo" helperId="valueHelperTo"
                    type="number" placeholder={`Balance : ${balance}`} className=" is-small" icon="rub" helper={valueHelper} />

                <button onClick={handleNextClick} disabled={disableButton()}
                    className="button is-info is-small is-fullwidth has-text-weight-bold" >
                    Next
                    </button>

            </Container>

        }

        {
            selected === "sending" &&

            <div className="has-text-centered">
                <Loader
                    type="Oval"
                    color="#00BFFF"
                    height={100}
                    width={100} />
            </div>
        }

        {selected === "transactionSent" &&

            <Container header="Sent Successfully!" close={<button onClick={props.onClick} className="delete" aria-label="delete"></button>}>
                <TransactionSent info={ts} />
            </Container>
        }

        {selected === 'passwordForm' &&

            <Container header="Sign Transaction" close={<button onClick={props.onClick} className="delete" aria-label="delete"></button>}>
                <PasswordForm value={password}
                    onClick={handleSignClick}
                    onChange={handleChangePassword}
                    helper={passHelper}
                    helperId="passwordHelper"
                    id="passwordForm"
                    disabled={passHelper === "Ok!" ? false : true}
                />
            </Container>

        }
        {selected === "signedTransaction" &&
            <Container header="Send" close={<button onClick={props.onClick} className="delete" aria-label="delete"></button>}>
                <SignedTransaction defaultValue={signed} onClick={handleSendClick} />
            </Container>
        }
    </>);
}

export default Send; 