import  GET_METEORITES_DATA from './actions';

const initialState = {
  meteoritesData: [],
  searchTerm: 'asdfa'
};

function reducer(state = initialState, action={}) {
  switch (action.type) {
    case GET_METEORITES_DATA:
      return {
        meteoritesData: Object.assign({}, state, {meteoritesData: action.payload})
      }; 
        default:
      return state;
  }
}

export default reducer;