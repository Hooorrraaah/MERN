import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default props => {
    const { initialName, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const [nameError,setNameError] = useState('')

    const handleName = (e)=>{
        setName(e.target.value)
        if(e.target.value.length > 2){
            setNameError('')
        }
        else{
            setNameError('Name is too short')
        }
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name});
    }
        
    return (
        <form onSubmit={onSubmitHandler}>
                <label>Name:</label><br />
                <input type="text" name="name" value={name} onChange={(e) => { handleName(e) }} />
                <p>{nameError}</p>
            
            <Link to="/">Cancel</Link>
            <input type="submit" />
        </form>
    )
}

