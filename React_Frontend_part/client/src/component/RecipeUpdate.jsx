import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Helper from './../utility/ValidationHelper';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const RecipeUpdate = () => {


    const navigate = useNavigate()
    const {id} = useParams()
    const [existing, setExisting] = useState(null)


    const existingInfo = async (id) => {

        const res = await axios.get(`${Helper.API_BASE}/foodListById/${id}`)
        setExisting(res.data['Foods'][0])

    }

    useEffect(() => {

        (async()=> {
            await existingInfo(id)
        })()

    }, [])



    let inputOnChange = (e) => {
        let key = e.target.name
        let value = e.target.value
        setregData(regData=> ({
            ...regData,
            [key]: value
        }))
    }

    let updateData =async (e) => {
        
        e.preventDefault()

        const res = await axios.post(`${Helper.API_BASE}/updateFood/${id}`)
        const addStatus = res.data['status']

        if(addStatus === "suceess"){
            toast.success('Recipe has updated')
            navigate('/')
        }else{
            toast.error('Recipe update failed')
        }

        // alert(JSON.stringify(regData))
    }

    return (
        <div className="container py-3">
            <div className="row">
                <div className="col-12 p-5">
                    <h3 className='primary_title'>Update existing recipe</h3>
                    <form onSubmit={updateData}>
                        <div className='d-flex cust_css'>
                                <label htmlFor="name">Food Name<br/>
                                <input defaultValue={existing!==null?(existing['foodName']):("")} name='foodName' onChange={(e) => {inputOnChange(e)}} type="text"  id='name'/>
                                </label> <br/>
                                 
                                <label htmlFor="code">Food code <br/>
                                    <input defaultValue={existing!==null?(existing['foodCode']):("")} name='foodCode' onChange={(e) => {inputOnChange(e)}} type="text" id='code' />
                                </label> 
                                
                                <label htmlFor="thumb">Food Image <br/>
                                    <input defaultValue={existing!==null?(existing['foodImage']):("")} name='foodImage' onChange={(e) => {inputOnChange(e)}} type="text" id='thumb' />
                                </label> 
                        </div>

          

                        <div className='d-flex cust_css'>
                                <label htmlFor="category">Food Category<br/>
                                    <input defaultValue={existing!==null?(existing['foodCategory']):("")} name='foodCategory' onChange={(e) => {inputOnChange(e)}} type="text" id='category' />
                                </label> <br/>
                                
                                <label htmlFor="QTY">QTY <br/>
                                    <input defaultValue={existing!==null?(existing['QTY']):("")} name='QTY' onChange={(e) => {inputOnChange(e)}} type="text" id='QTY' />
                                </label> 
                                
                                <label htmlFor="price">Price <br/>
                                    <input defaultValue={existing!==null?(existing['price']):("")} name='price' onChange={(e) => {inputOnChange(e)}} type="text" id='price' />
                                </label> 
                        </div>
                        <br/>
                        <button type='submit' className='btn sub_btn'>Update recipe</button>
                    </form>
                </div>
            </div>
            <Toaster/>
        </div>
    );
};

export default RecipeUpdate;