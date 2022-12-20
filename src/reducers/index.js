import { RESET_JOKES, FIND_JOKES_SUCCESS, FIND_JOKES_FAIL } from "../actions";

const initialState = {
    id: null,
    type: "",
    setup: "",
    punchline: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        // case RESET_JOKES:
        //     return {
        //         ...state,
        //         movies: state.movies.filter(item=>(action.payload !== item.id))
        //     }
        // case FIND_JOKES_SUCCESS:
        //     const newMovie = {
        //         ...action.payload,
        //         id: Date.now()
        //     }
        // case FIND_JOKES_FAIL:
        //     const newMovie = {
        //         ...action.payload,
        //         id: Date.now()
        //     }
        //     return {
        //         ...state, 
        //         movies: [...state.movies, newMovie]
        //     }
        default:
            return state;
    }
}

export default reducer;