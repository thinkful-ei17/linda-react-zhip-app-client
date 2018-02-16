import React from 'react';
import {REACT_APP_CLIENT_URL} from '../config';


export default ({transactionAmount, transactionId}) => {
  let link = `${REACT_APP_CLIENT_URL}/transaction/receive/${transactionId}`
  return (
    <div>
      <p>Success!</p>
      <p>IOU Id: {transactionId}</p>
      <p>IOU Amount: {transactionAmount}</p>
      <p>Provide this unique url to IOU recipient:</p>
      <p>{link}</p>
    </div>
   )
}