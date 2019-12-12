import React , {useState , useEffect }from 'react';
import { GET_TRANSACTION_COUNT, GET_BALANCE } from '../../request/';
import Fetch from '../../request/Fetch';

function Balance(props) {

    const [balance , setBalance ] = useState(0); 
    const [transactionOut ,setTransactionOut ] = useState(0) ; 
    
    useEffect(()=>{

        const { address } = JSON.parse(localStorage.getItem(props.name)) ;        
        console.log("address : " , address); 

        Fetch(GET_BALANCE(address)).then(data => {            
            const b = (Number.parseFloat(data.data.getBalance) / Number.parseFloat(1000000000000000000));
            setBalance('' + b);
        }).catch(error => {
            throw new Error(error);
        });

        Fetch(GET_TRANSACTION_COUNT(address)).then(data=>{
        setTransactionOut(data.data.getTransactionCount)
        }).catch(error=>{
            throw new Error(error); 
        })

    } , [props.name])

    return (<>

        <nav className="level">
            <div className="level-item has-text-centered">
                <div>
                    <p className="heading is-family-code is-size-6 is-size-7-mobile">Balance</p>
                    <p className="has-text-info is-size-4 is-size-6-mobile is-family-code">
                        {balance}
                    </p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <p className="heading is-family-code is-size-6 is-size-7-mobile">Transaction Out</p>
                    <p className="has-text-danger is-size-4 is-size-6-mobile is-family-code	">
                        {transactionOut}
                    </p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <p className="heading is-family-code is-size-6 is-size-7-mobile">Transaction In </p>
                    <p className="has-text-success is-size-4 is-size-6-mobile is-family-code">
                        0
                    </p>
                </div> 
            </div>

        </nav>
    </>)
}

export default Balance; 
