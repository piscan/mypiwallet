import { gql } from 'apollo-boost';

export const GET_BLOCK_NUMBER = {
    query: `
    query {
        getBlockNumber
    }
    `
}

export const GET_PENDING_TRANSACTIONS = {
    query: `
    query{
   getPendingTransactions
   {
    hash
    nonce
    blockHash
    transactionIndex
    from
    to
    value
    gasPrice
    gas
    input
        }
    }`
};

export const GET_BLOCK = function (input) {
    return {
        query: `
    query {
        getBlock(numberBlock:"${input}"){
number
hash
parentHash
nonce
sha3Uncles
logsBloom
transactionsRoot
stateRoot
receiptsRoot
miner
difficulty
totalDifficulty
extraData
size
gasLimit
gasUsed
timestamp
transactions
            
        }
    }           
    `
    }
};

export const GET_TRANSACTION = function (input) {
    return {
        query: `
    query { 
    getTransaction(transactionHash: "${input}"){
    hash
    nonce
    blockHash
    transactionIndex
    from
    to
    value
    gasPrice
    gas
    input
    

        }
    }
    
    
    `
    }
}

export const GET_TRANSACTION_COUNT = function (input) {
    return {
        query: `

        query{
            getTransactionCount(address:"${input}")
        }
        
        `
    }
}

export const GET_BALANCE = function (input) {
    return {
        query: `

        query{
            getBalance(address:"${input}")
        }
        
        `
    }
};
export const GET_BALANCE_ = function (input) {

    return (
        gql`
            {
                getBalance(address:"${input}")
            } 
        `
    )

}




export const GET_TRANSACTION_RECEIPT = function (input) {
    return {
        query: `

        query{
            getTransactionReceipt(transactionHash:"${input}"){
                status
                blockHash
                blockNumber
                transactionHash
                transactionIndex
                from
                to
                contractAddress
                cumulativeGasUsed
                gasUsed
            }
        }
        
        `
    }
}
export const GET_BLOCK_TRANSACTION_COUNT = function (input) {
    return {
        query: `

        query{
            getBlockTransactionCount(numberBlock:"${input}")
        }
        
        `
    }
}

export const GET_TRANSACTION_FROM_BLOCK = function (input, input1) {
    return {
        query: `
        query{
            getTransactionFromBlock(numberBlock:"${input}" , transactionIndex :"${input1}"){
                hash
                nonce
                blockHash
                transactionIndex
                from
                to
                value
                gasPrice
                gas
                input
            }
        }
        
        `
    }
}


export const GET_FULL_BALANCE = function (input, input1, input2 = false) {
    return {
        query: `
        query{
        getFullBalance(address:"${input}" , numberBlock :"${input1}" , fullProxied:${input2}){
        balance
        delegateBalance
        depositBalance
        depositProxiedBalance
        pendingRefundBalance
        proxiedBalance
        proxied_detail{
        ProxiedBalance
        DepositProxiedBalance 
        PendingRefundBalance
  }
            }
        }
        
        `
    }
}

export const SEND_RAW_TRANSACTION = function (input) {

    return {
        query: `
        query{
            sendRawTransaction(signedTransaction:"${input}"){
                to
                blockNumber
                transactionHash               
            }
        }  
        `
    }
}