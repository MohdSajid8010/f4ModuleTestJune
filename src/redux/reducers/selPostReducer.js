import {SELECTED_POST} from "../actions/postActionType";

let initial_post=null;

const selPostReducer = (state=initial_post,actions) => {
 switch(actions.type)
 {
    case SELECTED_POST:return actions.payload
    default:return state;
 }
}

export default selPostReducer