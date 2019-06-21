/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios"
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
    type: types.SUCCESS,
    payload: smurfs,
  };
}

export function failure(error) {
    return {
        type: types.FAILURE,
        payload: error
    }
}

export function fetch(works) {
  return {
      type: types.FETCH,
      payload: works
  }
}

export const fetchSmurfs = () => dispatch => {
  dispatch(fetch(true))
  axios.get('http://localhost:3333/smurfs/')
    .then(res => {
      dispatch(addSmurfs(res.data)); // option 2
      dispatch(fetch(false));
    })
    .catch(error => {
      dispatch(fetch(false));
      dispatch(failure(error.message));
      console.log(error.message);
    });
};




//Add smurfs

export function increaseSmurf(name, age, height) {
  return {
    type: types.ADD_SMURF,
    payload: {
      name,
      age,
      height,
    },
  };
}

export const postNewSmurf = (smurf) => dispatch => {
  axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      dispatch(fetchSmurfs());
    })
    .catch(error => {
      console.log(error.message);
    });
};


//Delete smurf

export function deleteSmurf(id) {
  return {
    type: types.DELETE_SMURF,
    payload: id,
  };
}

export const removeSmurf = (id) => dispatch => {
  axios.delete('http://localhost:3333/smurfs/' + id)
    .then(res => {
      dispatch(fetchSmurfs());
    })
    .catch(error => {
      console.log(error.message);
    });
};