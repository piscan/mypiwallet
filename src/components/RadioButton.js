import React from "react";
import "../style/radiobutton.scss";

const RadioButton = (props) => {

    return (<>
            <div className="md-radio">
                <input name={props.name} id={props.id} onChange={props.changed}
                    value={props.value} type="radio" checked={props.isSelected} />
                <label htmlFor={props.id}>{props.label}</label>
            </div>
            
    </>
    );
}

export default RadioButton