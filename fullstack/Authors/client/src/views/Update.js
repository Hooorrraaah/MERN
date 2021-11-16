import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory, Link } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';
const Update = (props) => {
    
    const history = useHistory()
    const { id } = useParams();
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [author]);
    
    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/authors/' + id, author)
            .then(res => {history.push('/')});
    }
    
    return (
        <div>
            <Link to="/">Home</Link>
            <p>Edit this Author</p>
            {loaded && (
                <div>
                    <hr/>
                    <AuthorForm
                        onSubmitProp={updateAuthor}
                        initialName={author.name}>
                    </AuthorForm>
                    <hr/>
                </div>
            )}
        </div>
    )
}
    
export default Update;

