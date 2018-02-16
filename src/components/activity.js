import React from 'react';

import '../css/activity.css';

export default ({accountBalance}) => {
  return (
    <div className='balance-details'>
      <p className='attention-stmt'>Current Balance</p>
      <div className='info-container'>
      <p>{accountBalance}</p>
      </div>
    </div>
   )
}