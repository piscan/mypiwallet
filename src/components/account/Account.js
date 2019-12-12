import React, { useState } from 'react';
import loadable from '@loadable/component'
import RadioButton from '../RadioButton';
import { animations } from 'react-animation';

const style = {
    animation: animations.popIn
}

const CreateWallet = loadable(() => import('./CreateWallet'),
  {
    fallback: <div>
      <progress className="progress is-small is-primary" max="100">15%</progress>
      <progress className="progress is-danger" max="100">30%</progress>
      <progress className="progress is-medium is-dark" max="100">45%</progress>
    </div>
  });

  const ImportWallet = loadable(() => import('./ImportWallet'),
  {
    fallback: <div>
      <progress className="progress is-small is-primary" max="100">15%</progress>
      <progress className="progress is-danger" max="100">30%</progress>
    </div>
  });

  const Balance  = loadable(() => import('./Balance'),
  {
    fallback: <div>
      <progress className="progress is-small is-primary" max="100">15%</progress>
      <progress className="progress is-danger" max="100">30%</progress>
      <progress className="progress is-medium is-dark" max="100">45%</progress>
    </div>
  });
  
function Account() {
  const [selected, setSelected] = useState("Balance");

  const radioChangeHandler = e => {

    setSelected(e.target.value)

  }
  return (<>

    <br />
    <div className="container is-fluid ">
      <div className="columns has-text-grey	">
        <div className="column is-2">
          <div className="box">
            <p className="title is-5">Select a Method -> </p>
            <RadioButton 
              changed={radioChangeHandler}
              isSelected={selected === "Balance"}
              name="answer"
              id="1"
              label="Balance"
              value="Balance"
            />
            <RadioButton
              name="answer"
              changed={radioChangeHandler}
              isSelected={selected === "CreateWallet"}
              id="3"
              label="Create Wallet"
              value="CreateWallet"
            />
            <RadioButton
              name="answer"
              changed={radioChangeHandler}
              isSelected={selected === "ImportWallet"}
              id="5"
              label="Import Wallet"
              value="ImportWallet"
            />

            {/* <RadioButton
              name="answer"
              changed={radioChangeHandler}
              isSelected={selected === "FullBalance"}
              id="2"
              label="Full Balance"
              value="FullBalance"
            /> */}
          </div>


        </div>
        <div className="column is-10">

          {
            selected === "Balance" && <Balance style={style}/>
          }
          {
            selected === "CreateWallet" &&

            <CreateWallet style={style}/>

          }
          {
            selected === "ImportWallet" &&

            <ImportWallet  style={style} />

          }
          {/* 
          {
            selected === "FullBalance" && <Mthreeparam header="getFullBalance" request={GET_FULL_BALANCE} placeholder="Address" placeholdertwo="Block Number"
              placeholderthree="Full Proxied" />
          } */}

        </div>
      </div>
    </div>

  </>)

}

export default Account; 