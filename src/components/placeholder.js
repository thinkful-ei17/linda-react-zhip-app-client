import React from 'react';

export default ({accountBalance, userId}) => {
  return (
    <div>
      <p>Account Balance: {accountBalance}</p>
      <p>Unique User Id: {userId}</p>
    </div>
   )
}