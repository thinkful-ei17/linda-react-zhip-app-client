
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import appReducer from './reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default createStore(combineReducers({form: formReducer, appReducer}), composeWithDevTools(), applyMiddleware(thunk));