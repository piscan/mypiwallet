import React from 'react'; 

function Input(props){

    return( <div className="field">
    <div className="control has-icons-left">
    
        <input value={props.value}
            defaultValue={props.defaultValue}
            onChange={props.onChange}
            id={props.id}
            readOnly={props.readOnly}
            className={`input ${props.className}` }
            type={props.type} placeholder={props.placeholder} />
       {
           props.icon && 
           <span className="icon is-small is-left">
            <i className={`fa fa-${props.icon}`} aria-hidden="true"></i>
        </span>
       }
        

    </div>

    <p id={props.helperId} className="help">{props.helper}</p>

</div>)
}

export default Input ; 
