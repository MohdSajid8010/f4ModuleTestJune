import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
const Detailpost = () => {
    // let x = useSelector((store) => console.log(store));//selPostObj
    let sel_po_obj = useSelector((store) => store.selPostObj);
    return (
        <div className='detail-cont'>
            <h1>Detail Post</h1>
            <div >
                {
                    sel_po_obj && (
                        <div className='post' >
                            <img src={`https://picsum.photos/200?random=${sel_po_obj.id}`} alt={`user-image-${sel_po_obj.id}`} />
                            <div className='post-down'>
                                <div>userId:{sel_po_obj.userId}</div>
                                <div>{sel_po_obj.title}</div>
                                <div>{sel_po_obj.body}</div>
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Detailpost