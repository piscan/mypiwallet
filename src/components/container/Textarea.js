import React from 'react';

function Textarea(props) {
    return (<div className="field">
        <div className="field-body">
            <div className="field">
                <div className="control is-expanded">
                    <textarea placeholder="PrivateKey"
                        onChange={props.onChange}
                        defaultValue={props.defaultValue}
                        className={`textarea  is-small ${props.className}`}
                        value={props.value}
                        readOnly={props.readOnly}
                        />
                </div>
            </div>
        </div>
        <p id="helper1" className="help">{props.helper}</p>
    </div>)
}
export default Textarea