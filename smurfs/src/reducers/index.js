/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
import {
  FETCHING_SMURFS,
  FETCHING_SMURFS_SUCCESS,
  ADDING_SMURFS,
  ADDING_SMURFS_SUCCESS
} from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurfs: false,
  updatingSmurfs: false,
  deletingSmurfs: false,
  error: ""
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURFS: {
      return {
        ...state,
        fetchingSmurfs: true,
      }
    }
    case FETCHING_SMURFS_SUCCESS: {
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      }
    }
    case ADDING_SMURFS: {
      return {
        ...state,
        addingSmurfs: true
      }
    }
    case ADDING_SMURFS_SUCCESS: {
      return {
        ...state,
        addingSmurfs: false,
        smurfs: action.payload
      }
    }
    default: return state;
  }
}

export default reducer;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
