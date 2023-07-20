import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from "../actions/postActionType";
let initial_state = {
    loading: false,
    data: [],
    err: "",
}

const postReducers = (state = initial_state, actions) => {
    switch (actions.type) {
        case FETCH_POST_REQUEST: return { ...state, loading: true, err: "" };
        case FETCH_POST_SUCCESS: return { ...state, loading: false, data: actions.payload, err: "" };
        case FETCH_POST_FAILURE: return { ...state, loading: false, data: [], err: actions.payload };
        default: return state
    }
}

export default postReducers