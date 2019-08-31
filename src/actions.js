import {
  CHANGE_SEARCH_FIELD,
  REQUEST_METEORITES_PENDING,
  REQUEST_METEORITES_SUCCESS,
  REQUEST_METEORITES_FAILED
} from './constants';

import {message} from 'antd';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})


export const requestMeteorites = () => (dispatch) => {
  dispatch({ type: REQUEST_METEORITES_PENDING});
  fetch("https://data.nasa.gov/resource/gh4g-9sfh.json")
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_METEORITES_SUCCESS, payload: data}))
    .catch(error => dispatch({type: REQUEST_METEORITES_FAILED, payload: error }))
}