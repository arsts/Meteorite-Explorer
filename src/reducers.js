import { CHANGE_SEARCH_FIELD } from './constants';

const initialState = {
  searchTerm: ''
};

const searchMeteoritesReducer = (state = initialState, action = {}) => {    
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, {searchTerm: action.payload})
    default: 
      return state;
  }
}

export default searchMeteoritesReducer;