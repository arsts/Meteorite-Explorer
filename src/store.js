import { createStore } from 'redux';
import searchMeteoritesReducer from './reducers';

const store = createStore(searchMeteoritesReducer);

export default store;