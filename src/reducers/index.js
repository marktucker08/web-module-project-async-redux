import { RESET_JOKES, FIND_JOKES_SUCCESS, FIND_JOKES_FAIL, FIND_JOKES_START } from "../actions";

const jokes = [{
    id: null,
    type: "",
    setup: "",
    punchline: ""
}];

const initialState = {
    jokes: jokes,
    error: '',
    isFetching: false
};


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case RESET_JOKES:
            return {
                initialState
            }
        case FIND_JOKES_START:
            return {
                ...state,
                error: '',
                isFetching: true
            }
        case FIND_JOKES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                jokes: action.payload
            }
        case FIND_JOKES_FAIL:
            return {
                ...state, 
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;