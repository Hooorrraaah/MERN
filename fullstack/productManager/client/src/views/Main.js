import axios from 'axios';
import { response } from 'express';
import React, { useEffect, useState } from 'react'

import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

export default () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(response=>setProducts(response.data))
            .catch(error =>console.log("error:",error))
    }, [])
    return (
        <div>
            <ProductForm/>
            <ProductList products={products}/>
        </div>
    )
}