import {REACT_APP_API_BASE_URL} from '../config';
import {SubmissionError} from 'redux-form';

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

export const initiateTransaction = values => dispatch => {
  console.log('what is values in action initiateTransaction', values);
  return fetch(`${REACT_APP_API_BASE_URL}/transaction/send`, {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
      "content-type": "application/json"
    }
  })
  .then(res => {
    if (!res.ok){
      if (
        res.headers.has('') && 
        res.headers
          .get('')
          .startsWith('')
      ) {
        return res.json().then(err => Promise.reject(err));
      }
      return Promise.reject({
        code: res.status,
        message: res.statusText,
      });
    }
    return;
  })
  .then(() => {console.log('Submitted with values', values); this.updateInitiatorAccount();})
  .catch(error => {
    if (error.reason === 'ValidationError') {
      return Promise.reject(
        new SubmissionError({
          [error.location]: error.message
          })
      );
    }
    return Promise.reject(
      new SubmissionError({
        _error: 'Could not complain at this time'
        })
    );
  });
}




export const claimTransaction = values => dispatch => {
  console.log('what is claimTransaction', values);
  return fetch(`${REACT_APP_API_BASE_URL}/transaction/receive/${values._id}`, {
    method: 'PUT',
    body: JSON.stringify(values),
    headers: {

    }
  })
  .then(res => {
    if (!res.ok){
      if (
        res.headers.has('') && 
        res.headers
          .get('')
          .startsWith('')
      ) {
        return res.json().then(err => Promise.reject(err));
      }
      return Promise.reject({
        code: res.status,
        message: res.statusText,
      });
    }
    return;
  })
  .then(() => console.log('Submitted with values', values))
  .catch(error => {
    if (error.reason === 'ValidationError') {
      return Promise.reject(
        new SubmissionError({
          [error.location]: error.message
          })
      );
    }
    return Promise.reject(
      new SubmissionError({
        _error: 'Could not complain at this time'
        })
    );
  });
}