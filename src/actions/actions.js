import {REACT_APP_API_BASE_URL} from '../config';
//import {SubmissionError} from 'redux-form';

export const REQUEST = 'REQUEST';
export const actionRequest = () => ({
  type: REQUEST,
});

export const SUCCESS = 'SUCCESS';
export const requestSuccess = (amount, balance) => ({
  type: SUCCESS,
  amount,
  balance
});

export const ERROR = 'ERROR';
export const requestError = () => ({
  type: ERROR,
});

export const putRequest = () => (dispatch) => {
  dispatch(actionRequest());
  fetch(`${REACT_APP_API_BASE_URL}/request`)
  .then(response =>  {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    return response.json();
  })
  .then(request => {console.log('what is request here', request);
    dispatch(requestSuccess(request))})
  .catch(error => dispatch(requestError(error)))
}

//works
export const initiateTransaction = values => dispatch => {
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
    dispatch(requestSuccess(request))})
  .catch(error => dispatch(requestError(error)))
}

export const updateInitiatorAccount = values => dispatch => {
  console.log("Am I working");
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
    dispatch(requestSuccess(request))})
  .catch(error => dispatch(requestError(error)))
}


//works
export const claimTransaction = (values, transactionId) => dispatch => {
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
    dispatch(requestSuccess(request))})
  .catch(error => dispatch(requestError(error)))
}
