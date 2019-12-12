import React from 'react';
import Container from '../container';

function Receive(props) {

    return (
    <>
       
       <Container header="Wallet Address" close={<button onClick={props.onClick} className="delete" aria-label="delete"></button>}>

      </Container>

    </>
    );
}

export default Receive; 