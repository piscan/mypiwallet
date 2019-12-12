import React, { useState } from 'react';
// import { GET_TRANSACTION_COUNT, GET_TRANSACTION, GET_TRANSACTION_RECEIPT, GET_TRANSACTION_FROM_BLOCK } from '../../request';

import RadioButton from '../RadioButton';

function Transactions() {

  const [selected, setSelected] = useState("Transaction");
  const radioChangeHandler = e => {

    setSelected(e.target.value)

  }
  return (<>

    <br />

    <div className="container is-fluid">
      <div className="columns has-text-grey">
        <div className="column is-3">
        <div className="box">
        <p className="title is-5">Select a Method -> </p>
        <RadioButton
            changed={radioChangeHandler}
            isSelected={selected === "Transaction"}
            name="answer"
            id="1"
            label="Transaction"
            value="Transaction"
          />

          <RadioButton
            name="answer"
            changed={radioChangeHandler}
            isSelected={selected === "TransactionCount"}
            id="2"
            label="Transaction Count"
            value="TransactionCount"
          />

          <RadioButton
            name="answer"
            changed={radioChangeHandler}
            isSelected={selected === "TransactionReceipt"}
            id="3"
            label="Transaction Receipt"
            value="TransactionReceipt"
          />
          <RadioButton
            name="answer"
            changed={radioChangeHandler}
            isSelected={selected === "TransactionFromBlock"}
            id="4"
            label="Transaction From Block"
            value="TransactionFromBlock"
          />

      </div>
        </div>

        <div className="column is-9">
         
          {/* {
            selected === "Transaction" && <Moneparam header="getTransaction" request={GET_TRANSACTION} placeholder="Transaction Hash" />
          }

          {
            selected === "TransactionCount" && <Moneparam header="getTransactionCount" request={GET_TRANSACTION_COUNT} placeholder="Address" />
          }
          {
            selected === "TransactionReceipt" && <Moneparam header="getTransactionReceipt" request={GET_TRANSACTION_RECEIPT} placeholder="Transaction Hash" />
          }
          {
            selected === "TransactionFromBlock" && <Mtwoparam header="getTransactionFromBlock" request={GET_TRANSACTION_FROM_BLOCK} placeholder="Block Number" placeholdertwo="Transaction Index" />
          } */}

</div>
        </div>
      </div>
   


  </>)

}

export default Transactions; 