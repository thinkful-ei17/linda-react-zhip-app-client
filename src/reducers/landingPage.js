import {REQUEST, SUCCESS, ERROR} from '../actions/landingPage';

const initialState = {
    userIdInitator: '',
    userIdClaimer: '',
    transactionAmount: 0,
    accountBalance: 0,
    loading: false,
    error: null,
    page: '',
    transactionId: ''
};

export default (state = initialState, action) => {
    switch(action.type) {
      case REQUEST: 
        return Object.assign({}, state, {
          loading: true
        })
      case SUCCESS:
        return Object.assign({}, state, {
          loading: false,
          error: null,
          amount: action.amount,
          balance: action.balance
        })
      case ERROR:
        return Object.assign({}, state, {
          loading: false,
          error: action.error
        })
      default:
        return state
    }
}
     