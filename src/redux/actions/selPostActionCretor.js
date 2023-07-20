import {SELECTED_POST} from "./postActionType";

const selectedPost=(postObj)=>{
    return{
        type:SELECTED_POST,
        payload:postObj,
    }
}
export default selectedPost;