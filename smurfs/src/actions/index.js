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

const baseURL = "http://localhost:3333/api";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";

export const getSmurfs = () => dispatch => {
  dispatch({type:FETCHING_SMURFS});
  axios.get(`${baseURL}/smurfs`)
  .then(res => {
    console.log(res.data);
    dispatch({type: FETCHING_SMURFS_SUCCESS, payload: res.data})
  })
  .catch(err =>
    console.log(err))
}

export const ADDING_SMURFS = "ADDING_SMURFS";
export const ADDING_SMURFS_SUCCESS = "ADDING_SMURFS_SUCCESS";

export const addSmurfs = smurf => dispatch => {
  dispatch({type:ADDING_SMURFS});
  axios.post(`${baseURL}/smurfs`, smurf)
  .then(res => {
    console.log(res.data);
    dispatch({type: ADDING_SMURFS_SUCCESS, payload: res.data})
  })
  .catch(err =>
    console.log(err))
}