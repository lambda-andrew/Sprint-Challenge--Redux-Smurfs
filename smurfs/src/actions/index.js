/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

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
import axios from 'axios';

const baseURL = "http://localhost:3333";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE"

export const getSmurfs = () => dispatch => {
  dispatch({type:FETCHING_SMURFS});
  axios.get(`${baseURL}/smurfs`)
  .then(res => {
    dispatch({type: FETCHING_SMURFS_SUCCESS, payload: res.data})
  })
  .catch(err => {
    console.log(err)
    dispatch({type: FETCHING_SMURFS_FAILURE})
  })
}

export const ADDING_SMURFS = "ADDING_SMURFS";
export const ADDING_SMURFS_SUCCESS = "ADDING_SMURFS_SUCCESS";
export const ADDING_SMURFS_FAILURE = "ADDING_SMURFS_FAILURE";

export const addSmurfs = smurf => dispatch => {
  dispatch({type:ADDING_SMURFS});
  axios.post(`${baseURL}/smurfs`, smurf)
  .then(res => {
    dispatch({type: ADDING_SMURFS_SUCCESS, payload: res.data})
  })
  .catch(err => {
    console.log(err)
    dispatch({type: ADDING_SMURFS_FAILURE})
  })
}

export const DELETE_SMURFS = "DELETE_SMURFS";
export const DELETE_SMURFS_SUCCESS = "DELETE_SMURFS_SUCCESS";
export const DELETE_SMURFS_FAILURE = "DELETE_SMURFS_FAILURE";

export const deleteSmurfs = id => dispatch => {
  dispatch({type: DELETE_SMURFS});
  axios.delete(`${baseURL}/smurfs/${id}`)
  .then(res => {
    dispatch({type: DELETE_SMURFS_SUCCESS, payload: res.data})
  })
  .catch(err => {
    console.log(err)
    dispatch({type: DELETE_SMURFS_FAILURE})
  })
}