import React from 'react';
import '../style/main.scss'
import Router from './reouter';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './../apollo_setup' ;

function App() {

  return (

      <ApolloProvider client={client}>

        <Router/>

      </ApolloProvider>

  );
}

export default App;
