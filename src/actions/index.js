import axios from "axios";

export const RESET_JOKES = "RESET_JOKES";
export const FIND_JOKES_START = "FIND_JOKES_START";
export const FIND_JOKES_SUCCESS = "FIND_JOKES_SUCCESS";
export const FIND_JOKES_FAIL = "FIND_JOKES_FAIL";

export const resetJokes = ()=>{
    return({type: RESET_JOKES});
}

export const findJokesStart = (url) => dispatch => {
    dispatch({ type: FIND_JOKES_START });
    axios
    .get(url)
    .then(res => {
        console.log(res.data)
        dispatch({type: FIND_JOKES_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err.response);
        dispatch({type: FIND_JOKES_FAIL, payload: err.response})
    })
}


