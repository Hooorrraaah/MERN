import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { Link } from 'react-router-dom';


export default () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res =>{ 
                setAuthors(res.data)
                setLoaded(true);
            });
    }, [])

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res=>{
                setAuthors([...authors, res.data]);
            })
    }
    return (
        <div>
            <Link to="/">Home</Link>
            <p>Add a new author</p>
            <hr/>
            <AuthorForm onSubmitProp={createAuthor} initialName=""/>
            <hr/>
        </div>
    )
}

