import * as actionTypes from '../actions/types';


export default function(state = null, action) {
  switch (action.type) {
    case actionTypes.FETCH_USER:
    // FETCH_USER action returns an object when there is a fetched user and an empty string when no user is found
      return action.payload || false
    default:
      return state;
  }
}