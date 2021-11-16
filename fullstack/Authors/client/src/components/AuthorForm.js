import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

export default props => {
    const history = useHistory()
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
        if(nameError){
            console.log(nameError)
        }
        else{
        onSubmitProp({name});
            history.push("/")
        }
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

