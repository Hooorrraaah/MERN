import React, {useState} from 'react'
import axios from 'axios'

export default ()=>{
    const [productTitle, setProductTitle] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDescription, setProductDescription] = useState('')

    const onSubmitHandler = e =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/products',{
            productTitle,productPrice,productDescription
        })
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <label>Title:</label>
            <input type='text' onChange={(e)=>{setProductTitle(e.target.value)}} value={productTitle} /><br/>
            <label>Price:</label>
            <input type='text' onChange={(e)=>{setProductPrice(e.target.value)}} value={productPrice} /><br/>
            <label>Description:</label>
            <input type='text' onChange={(e)=>{setProductDescription(e.target.value)}} value={productDescription} /><br/>
            <input type='submit' value='Create' />
        </form>
    )
}