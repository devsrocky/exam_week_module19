import React, { useState } from 'react';
import axios from 'axios'
import Helper from './../utility/ValidationHelper';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const AddRecipeForm = () => {

    let [regData, setregData] = useState({foodName: "", foodCode: "", foodImage: "", foodCategory: "", QTY: "", price: ""})
    const navigate = useNavigate()

    let inputOnChange = (e) => {
        let key = e.target.name
        let value = e.target.value
        setregData(regData=> ({
            ...regData,
            [key]: value
        }))
    }

    let saveData =async (e) => {
        
        e.preventDefault()

        const res = await axios.post(`${Helper.API_BASE}/createFood`, regData)
        const addStatus = res.data['status']

        if(addStatus === "success"){
            toast.success('Reciped has been published')
            navigate('/')
        }else{
            toast.error('Reciped published failed')
        }

        // alert(JSON.stringify(regData))
    }

    return (
        <div className="container py-3">
            <div className="row">
                <div className="col-12 p-5">
                    <h3 className='primary_title'>Create new recipe</h3>
                    <form onSubmit={saveData}>

                        <div className='d-flex cust_css'>
                                <label htmlFor="name">Food Name<br/>
                                <input name='foodName' onChange={(e) => {inputOnChange(e)}} type="text"  id='name'/>
                                </label> <br/>
                                 
                                <label htmlFor="code">Food code <br/>
                                    <input name='foodCode' onChange={(e) => {inputOnChange(e)}} type="text" id='code' />
                                </label> 
                                
                                <label htmlFor="thumb">Food Image <br/>
                                    <input name='foodImage' onChange={(e) => {inputOnChange(e)}} type="text" id='thumb' />
                                </label> 
                        </div>

          

                        <div className='d-flex cust_css'>
                                <label htmlFor="category">Food Category<br/>
                                    <input name='foodCategory' onChange={(e) => {inputOnChange(e)}} type="text" id='category' />
                                </label> <br/>
                                
                                <label htmlFor="QTY">QTY <br/>
                                    <input name='QTY' onChange={(e) => {inputOnChange(e)}} type="text" id='QTY' />
                                </label> 
                                
                                <label htmlFor="price">Price <br/>
                                    <input name='price' onChange={(e) => {inputOnChange(e)}} type="text" id='price' />
                                </label> 
                        </div>
                        <br/>
                        <button type='submit' className='btn sub_btn'>Published food</button>
                    </form>
                </div>
            </div>
            <Toaster/>
        </div>
    );
};

export default AddRecipeForm;