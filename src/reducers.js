import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_METEORITES_PENDING,
  REQUEST_METEORITES_SUCCESS,
  REQUEST_METEORITES_FAILED
} from './constants';

const initialStateSearch = {
  searchTerm: ''
};

export const searchMeteorites = (state = initialStateSearch, action = {}) => {    
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, {searchTerm: action.payload})
    default: 
      return state;
  }
}

const initialStateMeteorites = {
  isPending: false,
  meteorites: [],
  error: ''
}

export const requestMeteorites = (state = initialStateMeteorites, action = {}) =>
{
  switch(action.type) {
    case REQUEST_METEORITES_PENDING: 
      return Object.assign({}, state, { isPending: true })
    case REQUEST_METEORITES_SUCCESS: 
      return Object.assign({}, state, { meteorites: action.payload, isPending: false })
    case REQUEST_METEORITES_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false })
    default: 
      return state;
  }
}

// export default searchMeteoritesReducer;