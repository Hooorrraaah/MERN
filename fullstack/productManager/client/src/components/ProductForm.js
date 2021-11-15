import React, { useState } from 'react'
import axios from 'axios';

export default props => {
    
    const [productTitle, setProductTitle] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDescription, setProductDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            productTitle,
            productPrice,
            productDescription
        })
            .then(res=>console.log("Response:", res))
            .catch(err => console.log("Error:", err))
    }
    return(
        <form onSubmit={onSubmitHandler}>
        <p>
            <label>Title</label>
            <input type="text" onChange={(e)=>setProductTitle(e.target.value)} value={productTitle}/>
        </p>
        <p>
            <label>Price</label>
            <input type="number" onChange={(e)=>setProductPrice(e.target.value)} value={productPrice}/>
        </p>
        <p>
            <label>Description</label>
            <input type="text" onChange={(e)=>setProductDescription(e.target.value)} value={productDescription}/>
        </p>
        <input type="submit" value="Create"/>
        </form>
    )
}