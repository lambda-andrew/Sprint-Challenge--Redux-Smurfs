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
  FETCHING_SMURFS_FAILURE,
  ADDING_SMURFS,
  ADDING_SMURFS_SUCCESS,
  ADDING_SMURFS_FAILURE,
  DELETE_SMURFS,
  DELETE_SMURFS_SUCCESS,
  DELETE_SMURFS_FAILURE,
  EDIT_SMURFS,
  EDIT_SMURFS_SUCCESS,
  EDIT_SMURFS_FAILURE,
} from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurfs: false,
  editingSmurfs: false,
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
    case FETCHING_SMURFS_FAILURE: {
      return {
        ...state,
        error: "Your Smurfs got eaten by Gargamel!"
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
    case ADDING_SMURFS_FAILURE: {
      return {
        ...state,
        error: "Your new Smurf got eaten by Gargamel!"
      }
    }
    case DELETE_SMURFS: {
      return {
        ...state,
        deletingSmurfs: true,
      }
    }
    case DELETE_SMURFS_SUCCESS: {
      return {
        ...state,
        deletingSmurfs: false,
        smurfs: action.payload
      }
    }
    case DELETE_SMURFS_FAILURE: {
      return {
        ...state,
        error: "Your deleted Smurf got saved by Papa Smurf!"
      }
    }
    case EDIT_SMURFS: {
      return {
        ...state,
        editingSmurfs: true,
      }
    }
    case EDIT_SMURFS_SUCCESS: {
      return {
        ...state,
        editingSmurfs: false,
        smurfs: action.payload
      }
    }
    case EDIT_SMURFS_FAILURE: {
      return {
        ...state,
        error: "Your edited Smurf forgot their one role in Smurf Village"
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
