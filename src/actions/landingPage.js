import {REACT_APP_API_BASE_URL} from '../config';

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