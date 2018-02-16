import React from 'react';
import {Link} from 'react-router-dom';

import '../css/placeholder.css';

export default ({accountBalance, userId}) => {
  return (
    <div className='new-user-details'>
      <p className='attention-stmt'>Success!</p>
      <p><span className='key-name'>Account Balance:</span> {accountBalance}</p>
      <p><span className='key-name'>New User Id:</span> {userId}</p>
      <p className='info-stmt'>Safeguard your new Zhip ID to manage any IOUs you create or any IOUs you receive from other Zhip users.</p>
      <div className='link-container'>
      <Link to={`/create`} className='link-new-iou'>
          New IOU
      </Link>
      </div>
    </div>
   )
}