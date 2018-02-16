import {REACT_APP_API_BASE_URL} from '../config';

export const TRANSACTION_ACTION_REQUEST = 'TRANSACTION_ACTION_REQUEST';
export const transactionActionRequest = () => ({
  type: TRANSACTION_ACTION_REQUEST,
});

export const TRANSACTION_SUCCESS = 'TRANSACTION_SUCCESS';
export const transactionSuccess = (transactionAmount, transactionId) => ({
  type: TRANSACTION_SUCCESS,
  transactionAmount,
  transactionId
});

export const TRANSACTION_ERROR = 'TRANSACTION_ERROR';
export const transactionError = () => ({
  type: TRANSACTION_ERROR,
});

export const ACCOUNT_ACTION_REQUEST = 'ACCOUNT_ACTION_REQUEST';
export const accountActionRequest = () => ({
  type: ACCOUNT_ACTION_REQUEST,
});

export const ACCOUNT_SUCCESS = 'ACCOUNT_SUCCESS';
export const accountSuccess = (accountBalance) => ({
  type: ACCOUNT_SUCCESS,
  accountBalance
});

export const ACCOUNT_ERROR = 'ACCOUNT_ERROR';
export const accountError = () => ({
  type: ACCOUNT_ERROR,
});

//works
export const createNewUser = () => dispatch => {
  console.log('createNewUser action was called');
  dispatch(accountActionRequest());
  return fetch(`${REACT_APP_API_BASE_URL}/user/new`, {
    method: 'POST',
  })
  .then(response =>  {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  })
  .then( request => {
    dispatch(accountSuccess(request))})
  .catch(error => dispatch(accountError(error)))
}

//works
export const initiateTransaction = values => dispatch => {
  console.log('initiateTransaction action was called');
  dispatch(transactionActionRequest());
  return fetch(`${REACT_APP_API_BASE_URL}/transaction/send`, {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
      "content-type": "application/json"
    }
  })
  .then(response =>  {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  })
  .then( request => {
    dispatch(updateInitiatorAccount(request)); 
    dispatch(transactionSuccess(request))})
  .catch(error => dispatch(transactionError(error)))
}

//works
const updateInitiatorAccount = values => dispatch => {
  console.log('updateInitiatorAccount action was called');
  dispatch(accountActionRequest());
  fetch(`${REACT_APP_API_BASE_URL}/account/send`, {
    method: 'PUT',
    body: JSON.stringify(values),
    headers: {
      "content-type": "application/json"
    }
  })
  .then(response =>  {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  })
  .then( request => {
    dispatch(accountSuccess(request))})
  .catch(error => dispatch(accountError(error)))
}


//works
export const claimTransaction = (values, transactionId) => dispatch => {
  console.log('claimTransaction action was called');
  dispatch(transactionActionRequest());
  fetch(`${REACT_APP_API_BASE_URL}/transaction/receive/${transactionId}`, {
    method: 'PUT',
    body: JSON.stringify(values),
    headers: {
      "content-type": "application/json"
    }
  })
  .then(response =>  {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  })
  .then( request => {
    dispatch(updateClaimerAccount(request));
    dispatch(transactionSuccess(request))})
  .catch(error => dispatch(transactionError(error)))
}

//works
const updateClaimerAccount = values => dispatch => {
  console.log('updateClaimerAccount action was called');
  dispatch(accountActionRequest());
  fetch(`${REACT_APP_API_BASE_URL}/account/receive/${values._id}`, {
    method: 'PUT',
    body: JSON.stringify(values),
    headers: {
      "content-type": "application/json"
    }
  })
  .then(response =>  {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  })
  .then( request => {
    dispatch(accountSuccess(request))})
  .catch(error => dispatch(accountError(error)))
}
