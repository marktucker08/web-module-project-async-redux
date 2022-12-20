export const RESET_JOKES = "RESET_JOKES";
export const FIND_JOKES = "FIND_JOKES";
export const FIND_JOKES_SUCCESS = "FIND_JOKES_SUCCESS";
export const FIND_JOKES_FAIL = "FIND_JOKES_FAIL";

export const resetJokes = ()=>{
    return({type: RESET_JOKES});
}

export const findJokesFail = (error) => {
    return({type: FIND_JOKES_FAIL, payload:error});
}

export const findJokesSuccess = (jokes) => {
    return({type: FIND_JOKES_SUCCESS, payload:jokes})
}

