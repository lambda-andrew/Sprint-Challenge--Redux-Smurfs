/*
  Be sure to import in all of the action types from `../actions`
*/
import { 
  FETCH_START, 
  FETCH_FAILURE,
  GET_SMURF,
  ADD_SMURF,
  UPDATE_SMURF,
  DELETE_SMURF,
  CREATING,
  ADD_FAIL
} from '../actions'

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

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const rootReducer = (state = initialState, action ) => {
  switch(action.type) {
    case FETCH_START: 
      return {
        ...state,
        fetchingSmurfs: true,
        error: null
      }
    case GET_SMURF: 
      return {
        ...state,
        fetchingSmurfs: false,
        error: null,
        smurfs: action.payload
      }
    case ADD_SMURF: 
      return{
        ...state,
        fetchingSmurfs: false,
        addingSmurf: true,
        error: null,
        smurfs: [...state.smurfs, action.payload]
      }
    case ADD_FAIL: 
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        error: action.payload
      }
    case FETCH_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
    default: {
      return state;
    }
  }
}

export default rootReducer;