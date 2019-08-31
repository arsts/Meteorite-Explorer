import { createStore, applyMiddleware, combineReducers } from 'redux';
import {searchMeteorites, requestMeteorites} from './reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();

const rootReducer = combineReducers({ searchMeteorites, requestMeteorites })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

export default store;