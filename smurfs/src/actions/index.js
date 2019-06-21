/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import * as types from "./actionTypes";

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

export function addSmurfs(smurfs) {
  return {
    type: SUCCESS,
    payload: smurfs,
  };
}

export function failure(error) {
    return {
        type: FAILURE,
        payload: error
    }
}

export function fetch(works) {
  return {
      type: FETCH,
      payload: works
  }
}

export const fetchSmurfs = () => dispatch => {
  dispatch(fetch(true));
  //dispatch({type: FETCH})
  // we code
  axios.get('http://localhost:3333/smurfs/')
    .then(res => {
        console.log(res.data)
      dispatch(addSwapis(res.data.results)); // option 2
      //dispatch(fetch(false));
    })
    .catch(error => {
      //dispatch(fetch(false));
      dispatch(failure(error.message));
      console.log(error.message);
    });
};