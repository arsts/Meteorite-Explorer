import  GET_METEORITES_DATA from './actions';

const initialState = {
  meteoritesData: [],
  searchTerm: 'asdfa'
};

function reducer(state = initialState, action={}) {
  console.log(action.payload);
  
  console.log(action.type);
  
  
  switch (action.type) {
    case 'GET_METEORITES_DATA':
      console.log('SUCCESS');
      
      return {
        meteoritesData: Object.assign({}, state, {
          meteoritesData: action.payload
        })
        
      }; 
        default:
      return state;
  }
}



export default reducer;