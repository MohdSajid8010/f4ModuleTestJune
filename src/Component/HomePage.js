import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios";
import { fetchPostRequest, fetchPostSuccess, fetchPostFailure, fetchDataFromAPI } from "../redux/actions/postActionCreator"
import selectedPost from "../redux/actions/selPostActionCretor";
import { useNavigate, NavLink } from 'react-router-dom';

const HomePage = ({ setId }) => {
    let p = useSelector((state) => console.log(state))
    let post_data = useSelector((state) => state.postDataObj.data)
    // console.log(post_data)
    let dispatch = useDispatch();

    /*
    useEffect(() => {
        dispatch(fetchPostRequest())
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => dispatch(fetchPostSuccess(res.data)))
            .catch((err) => dispatch(fetchPostFailure(err.message)))
    }, [])
*/

    useEffect(() => {
        dispatch(fetchDataFromAPI())
    }, [])

    let navigate = useNavigate();

    return (
        <div>
            <div>
                <h1>All Post </h1>
                <div className='post-cont'>
                    {
                        post_data.length > 0 ?
                            (post_data.map((obj) => {
                                return (
                                    <div className='post' onClick={() => {
                                        dispatch(selectedPost(obj))
                                        navigate(`/item/${obj.id}`)
                                        setId(obj.id)
                                    }}>
                                        <img src={`https://picsum.photos/200?random=${obj.id}`} alt={`user-image-${obj.id}`} />
                                        <div className='post-down'>
                                            <div>userId:{obj.userId}</div>
                                            <div>{obj.title.trim().slice(0, 18)}…</div>
                                            <div>{obj.body.trim().slice(0, 23)} <NavLink>Read More…</NavLink></div>
                                        </div>

                                    </div>
                                )
                            })) : (<div className='parent'><div className='loader'></div> </div>)
                    }
                </div>
            </div>

        </div>
    )
}

export default HomePage