import React, { useEffect, useState } from 'react'
import axios from 'axios';

import ProductForm from '../Components/ProductForm';
import ProductList from '../Components/ProductList';

export default () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(res=>setProducts(res.data))       
            .catch(err=>console.log("Error:", err))
    }, []);

    return (
        <div>
            <ProductForm></ProductForm>
            <ProductList products={products}></ProductList>
        </div>
    )
}