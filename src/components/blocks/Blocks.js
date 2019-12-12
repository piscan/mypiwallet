import React, { useState } from 'react';
// import { GET_BLOCK, GET_BLOCK_NUMBER, GET_BLOCK_TRANSACTION_COUNT } from '../../request';
import RadioButton from '../RadioButton';

function Blocks() {
  const [selected, setSelected] = useState("BlockNumber");
  const radioChangeHandler = e => {

    setSelected(e.target.value)

  }
  return (<> 
    
    <br />
    <div className="container is-fluid">
      <div className="columns has-text-grey	">         
          <div className="column is-3">
            <div className="box">
              <p className="title is-5">Select a Method -> </p>
              <RadioButton
                changed={radioChangeHandler}
                isSelected={selected === "BlockNumber"}
                name="answer"
                id="1"
                label="Block Number"
                value="BlockNumber"
              />

              <RadioButton
                name="answer"
                changed={radioChangeHandler}
                isSelected={selected === "Block"}
                id="2"
                label="Block"
                value="Block"
              />

              <RadioButton
                name="answer"
                changed={radioChangeHandler}
                isSelected={selected === "BlockTransactionCount"}
                id="3"
                label="Block Transaction Count"
                value="BlockTransactionCount"
              />


            </div>


          </div>
          <div className="column is-9">

            {/* {
              selected === "BlockNumber" && <Mnoparma header="getBlockNumber" request={GET_BLOCK_NUMBER}/>
            }
            {
              selected === "Block" && <Moneparam header="getBlock" request={GET_BLOCK} placeholder="Block Number" />
            }
            { 
              selected === "BlockTransactionCount" && <Moneparam header="getBlockTransactionCount" request={GET_BLOCK_TRANSACTION_COUNT} placeholder="Block Number" />
            } */}

          </div>
       
      </div>
    </div>
 

  </>)

}

export default Blocks; 
