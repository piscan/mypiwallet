import React from 'react';
import Input from '../container/Input';
import Textarea from '../container/Textarea';

function TransactionSent(props) {

    return (<>
        <div className="box">

        <div className="field">
                <label className="label">To Address </label>
                <div className="control">
                    <Input className="has-text-grey is-small" defaultValue="0x71509F188a846032029E93E2bBe2B9FC61329F25" icon="address-card" readOnly={true} />
                </div>
            </div>
            <div className="field">
                <label className="label">Block Number </label>
                <div className="control">
                    <Input className="has-text-grey is-small" defaultValue="8599123" icon="calculator" readOnly={true} />
                </div>
            </div>
            <div className="field">
                <label className="label">Transaction Hash</label>
                <div className="control">
                    <Textarea defaultValue="0x055f6aeb9ad1a6ba8efc21e6f7fa45d04182680488d69ec28f6f8795e14ee9ec" readOnly={true}
                        className="has-text-grey" />
                </div></div>

        </div>
    </>);
}

export default TransactionSent;  
