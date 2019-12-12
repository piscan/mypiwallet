import React, { useState } from 'react';
import Receive from './Receive';
import Swal from 'sweetalert2';
import loadable from '@loadable/component'

const Send = loadable(() => import('./Send'),
  {
    fallback: <div>
      <progress className="progress is-small is-primary" max="100">15%</progress>
      <progress className="progress is-danger" max="100">30%</progress>
      <progress className="progress is-medium is-dark" max="100">45%</progress>
      <progress className="progress is-large is-info" max="100">60%</progress>
    </div>
  });
  const Balance = loadable(() => import('./Balance'),
  {
    fallback: <div>
      <progress className="progress is-small is-primary" max="100">15%</progress>
      <progress className="progress is-danger" max="100">30%</progress>
      <progress className="progress is-medium is-dark" max="100">45%</progress>
      <progress className="progress is-large is-info" max="100">60%</progress>
    </div>
  });
function Imported(props) {


    const [selected, setSelected] = useState('wallet');

    const handleClickSend = () => {

        setSelected('send');

    }

    const handleClickReceive = () => {

        setSelected('receive');

    }

    const handleClose = () => {
        setSelected('wallet');
    }

    const handleDeleteClick = () => {
        Swal.fire({
            title: "Are you sure ?",
            text: "This action will remove the wallet from your browser.",
            icon: 'warning',
            cancelButtonText: 'Cancerl',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "Remove",
            confirmButtonColor: 'red'

        }).then(r => {

            if (r.value) {
                console.log(localStorage.getItem(props.name))
                localStorage.removeItem(props.name);

            }
        })
    }


    return (<>
        <br />

        {
            selected === "send" &&
            <Send onClick={handleClose} name={props.name} />
        }

        {
            selected === "wallet" &&

            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        {props.name}
                    </p>
                    <span className="card-header-icon" >
                        <a onClick={handleClickSend}
                            href=" #" className="icon " style={{ marginRight: '20px' }} >
                            <i className="fa fa-send" ></i>
                        </a>

                        <a onClick={handleClickReceive}
                            href=" #" className="icon" style={{ marginRight: '10px' }}>
                            <i className="fa fa-qrcode" ></i>
                        </a>

                    </span>
                </header>


                <div className="card-content">
                    <div className="content">
                        <Balance name={props.name} />

                    </div>
                </div>

                <footer className="card-footer">
                    <button className="is-fullwidth button  is-small ">Reload</button>
                    <button onClick={handleDeleteClick}
                        className="button is-fullwidth is-small">Delete</button>
                </footer>
            </div>

        }

        {
            selected === "receive" &&
            <Receive onClick={handleClose} />
        }
        <br />
    </>)
}

export default Imported; 
