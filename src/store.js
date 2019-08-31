import { createStore, applyMiddleware } from 'redux';
import searchMeteoritesReducer from './reducers';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const store = createStore(searchMeteoritesReducer, applyMiddleware(logger));

export default store;