 const GET_METEORITES_DATA = (meteoritesData) => {
   
  console.log(meteoritesData)
  return {
  type: 'GET_METEORITES_DATA',
  payload: meteoritesData
}}
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';

export default GET_METEORITES_DATA;