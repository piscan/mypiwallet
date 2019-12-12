import React, { useState } from 'react';
import Container from '../container';
import Input from '../container/Input';
import Fetch from '../../request/Fetch';
import { GET_BALANCE } from '../../request';

function Balance(props) {

    const [address, setAddress] = useState('');
    const [data, setData] = useState({});
    const [isExec, setIsExec] = useState(false);

    const handleChangeAddress = (e) => {

        setAddress(e.target.value);
    }
    const handleBalanceClick = async (e) => {
        e.preventDefault();
        setIsExec(true);
        const { data } = await Fetch(GET_BALANCE(address));

        setData(data);
    }
    const handleClose = () => {
        setIsExec(false);
    }

    return (<>

        {
            isExec ? <div className="notification">
                <button onClick={handleClose} className="delete"></button>
                <div className="card-content">
                    <pre> {JSON.stringify(data, null, 2)}</pre>
                </div>
            </div>
                :
                <Container header="Get Balance" style={props.style}>

                    <Input className="is-small" placeholder="Address" value={address}
                        onChange={handleChangeAddress} helperId="helper" icon="address-card" />

                    <div className="has-text-centered download_btn_margin">
                        <button onClick={handleBalanceClick}
                            className="button  is-outlined is-small is-fullwidth has-text-weight-bold gradientBlue has-text-white" > Balance </button>
                    </div>

                </Container>
        }

    </>)
}

export default Balance; 
