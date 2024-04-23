import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Helper from '../utility/ValidationHelper';
import FullScreenLoader from './FullScreenLoader';
import toast, { Toaster } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom';

const RecipeList = () => {

    const [data, setData] = useState(null)
    const [refresh, setRefresh] = useState(0)
    const [updateData, setUpdateData] = useState(-1)
    const navigate = useNavigate()

    useEffect(() => {
        (async ()=> {
            await CallFoodList()
        })()
    }, [refresh])

    const CallFoodList = async () => {
        let res = await axios.get(`${Helper.API_BASE}/foodList`)

        let foodList = res.data['Foods']
        setData(foodList)


    }

    // const handleEdit = (id) => {
    //     setUpdateData(id)
    //     navigate('/edit-recipe')

    // }

    const deleteFood =async (id) => {
        let res = await axios.get(`${Helper.API_BASE}/deleteFood/${id}`)
        let deleteStatus = res.data['status']
        if(deleteStatus === "success"){
            toast.success("Delete success")
            setRefresh(refresh+1)
        }else{
            toast.error("Delete fail")
        }
    }


    return (
        <div className='container'>
                <div className="row">
                    <div className="col-12 p-5">
                        <h3 className='primary_title'>Most popular recipes</h3>

                    </div>
                </div>

            <div className='row'>
                {data==null? <FullScreenLoader/>: (
                    <div className="container">
                        <div className="row">
                            {
                                data.map((item, i) => {
                                    return (
                                        <div className="col-md-3" key={i}>
                                            <div className="card mb-4">
                                                <img className='food_thumb' src={item['foodImage']} alt="" />
                                                <div className="content">
                                                <h4>{item['foodName']}</h4>
                                                <p className='top_right'>TK: {item['price']}</p>
                                                <div className="buttons d-flex gap-4">
                                                    {/* <button onClick={()=> handleEdit(item._id)} type='button' className='btn cust_btn'>Edit</button> */}
                                                    <Link to={`/edit-recipe/${item['_id']}`} className='btn cust_btn'>Edit</Link>
                                                    <button onClick={() => {deleteFood(item['_id'])}} className='btn cust_btn'>Delete</button>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )}
            </div>
                <Toaster/>
        </div>

    );
};

export default RecipeList;