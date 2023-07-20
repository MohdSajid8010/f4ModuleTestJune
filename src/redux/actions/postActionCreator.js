import {FETCH_POST_REQUEST,FETCH_POST_SUCCESS,FETCH_POST_FAILURE} from "./postActionType";
import axios from "axios";
export const  fetchPostRequest=()=>
{
    return ({
        type:FETCH_POST_REQUEST,
    })
}

export const fetchPostSuccess=(data)=>{
    return {
        type:FETCH_POST_SUCCESS,
        payload:data,
    }
}

export const fetchPostFailure=(errMsg)=>{
    return {
        type:FETCH_POST_FAILURE,
        payload:errMsg,
    }
}

export const fetchDataFromAPI=()=>{

    return (dispatch)=>{
        dispatch(fetchPostRequest());
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=> dispatch(fetchPostSuccess(res.data)))
        .catch((err)=> dispatch(fetchPostFailure(err.message)))
    }
}

