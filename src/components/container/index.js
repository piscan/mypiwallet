import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


function Container(props) {

    return (<>
        <article className="message cw_card box " style={props.style}>
            <div className="message-header gradientBlue cw_card_header">
                <p className=""> {props.header} </p>
                {props.close}
            </div>
            <div className="message-body">
                {props.children}
            </div>
        </article>

    </>);

}

export default Container;  
