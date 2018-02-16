import React from 'react';
import {REACT_APP_CLIENT_URL} from '../config';


export default ({transactionAmount, transactionId}) => {
  let link = `${REACT_APP_CLIENT_URL}/transaction/receive/${transactionId}`
  return (
    <div>
      <p>Success!</p>
      <p>Transaction Id: {transactionId}</p>
      <p>Transaction Amount: {transactionAmount}</p>
      <p>Provide this unique url to IOU recipient:</p>
      <p>{link}</p>
    </div>
   )
}