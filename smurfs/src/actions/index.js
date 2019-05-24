/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios'

export const GET_SMURF = 'GET_SMURF';
export const ADD_SMURF = 'ADD_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const FETCH_START = 'FETCH_START';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const CREATING = 'CREATING';
export const ADD_FAIL = 'ADD_FAIL'


/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurf = () => dispatch => {
    dispatch({type: FETCH_START})
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res.data)
        dispatch({type: GET_SMURF, payload: res.data})
      })
      .catch(err => console.log(err))
}

export const addSmurf = smurf => dispatch => {
    // dispatch({type: CREATING})
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        console.log(res.data)
        dispatch({ type: ADD_SMURF, payload: res.data})
      })
      .catch(err => {
        dispatch({ type: ADD_FAIL})
      })
}