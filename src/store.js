
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default createStore(combineReducers({form: formReducer}), composeWithDevTools(), applyMiddleware(thunk));