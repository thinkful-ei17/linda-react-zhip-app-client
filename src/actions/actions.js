import {REACT_APP_API_BASE_URL} from '../config';

export const TRANSACTION_ACTION_REQUEST = 'TRANSACTION_ACTION_REQUEST';
export const transactionActionRequest = () => ({
  type: TRANSACTION_ACTION_REQUEST,
});

export const TRANSACTION_SUCCESS = 'TRANSACTION_SUCCESS';
export const transactionSuccess = (transaction) => ({
  type: TRANSACTION_SUCCESS,
  payload: {transactionAmount: transaction.transactionAmount, transactionId: transaction._id}
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
export const accountSuccess = (account) => ({
  type: ACCOUNT_SUCCESS,
  payload: {accountBalance: account.accountBalance, userId: account._id}
});

export const ACCOUNT_ERROR = 'ACCOUNT_ERROR';
export const accountError = () => ({
  type: ACCOUNT_ERROR,
});

export const SETUP_USER_ACTION_REQUEST = 'SETUP_USER_ACTION_REQUEST';
export const setupUserActionRequest = () => ({
  type: SETUP_USER_ACTION_REQUEST,
});

export const SETUP_USER_SUCCESS = 'SETUP_USER_SUCCESS';
export const setupUserSuccess = (account) => ({
  type: SETUP_USER_SUCCESS,
  payload: {accountBalance: account.accountBalance, userId: account._id}
});

export const SETUP_USER_ERROR = 'SETUP_USER_ERROR';
export const setupUserError = () => ({
  type: SETUP_USER_ERROR,
});


//works
export const createNewUser = () => dispatch => {
  console.log('createNewUser action was called');
  dispatch(setupUserActionRequest());
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
    dispatch(setupUserSuccess(request));
    return '1'
  })
  .catch(error => dispatch(setupUserError(error)))
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
    dispatch(transactionSuccess(request));
    return '2'
  })
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

//works
export const fetchBalance = values => dispatch => {
  console.log('fetchBalance action was called');
  dispatch(accountActionRequest());
  console.log('what is in my values', values);
  fetch(`${REACT_APP_API_BASE_URL}/user/balance/${values.userId}`, {
    method: 'GET',
    headers: {
      "Accept": "application/json"
    }
  })
  .then(response =>  {
    console.log('are we doing anything here response',response);
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  })
  .then( request => {
    console.log('what and where am i request', request);
    dispatch(accountSuccess(request));
    return '3'
  })
  .catch(error => dispatch(accountError(error)))
}