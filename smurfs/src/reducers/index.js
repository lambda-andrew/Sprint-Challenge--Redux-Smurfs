import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAIL,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAIL,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAIL,
} from '../actions'


 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   error: null,
   deletingSmurf: false
 }

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true
      }
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        error: '',
        fetchingSmurfs: false,
        smurfs: action.payload
      }
    case FETCH_SMURFS_FAIL:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false,
      }
    case ADD_SMURF_START:
      return {
        ...state,
        addingSmurf: true
      }
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        error: '',
        smurfs: action.payload
      }
    case ADD_SMURF_FAIL:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      }
    case DELETE_SMURF_START:
      return {
        ...state,
        deletingSmurf: true
      }
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        deletingSmurf: false,
        error: '',
        smurfs: action.payload
      }
    case DELETE_SMURF_FAIL:
      return {
        ...state,
        deletingSmurf: false,
        error: action.payload
      }
    default:
      return state
  }
}
export default reducer;