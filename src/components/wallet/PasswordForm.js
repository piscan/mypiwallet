import React from 'react';
import Input from '../container/Input';

function PasswordForm(props) {

    return (<>
            <Input  id= {props.id} className="is-small" 
                value={props.value}
                onChange={props.onChange}
                helper={props.helper}
                icon="lock"
                helperId={props.helperId}
                placeholder="Password"
            />
            <div className="has-text-centered download_btn_margin">
                <button onClick={props.onClick}   disabled={props.disabled}
                    className="button is-info is-small is-fullwidth has-text-weight-bold" > Sign Transaction </button>
            </div>
    </>)
}

export default PasswordForm; 