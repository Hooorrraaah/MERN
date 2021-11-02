import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("")

    const validation = (e) =>{
        setFirstName(e.target.value);
        if(e.target.value.length <1) {
            setError("");
        } else if(e.target.value.length <2) {
            setError("must be atleast 2 characters");
        }
    };
    return(
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ validation} value={ firstName }/>
                {
                    error ?
                    <p style={{color:'red'}}>First name {error}</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ validation} />
                {
                    error ?
                    <p style={{color:'red'}}>Last name {error}</p> :
                    ''
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={ validation} />
                {
                    error ?
                    <p style={{color:'red'}}>Email {error}</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ validation} />
                {
                    error ?
                    <p style={{color:'red'}}>Password {error}</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ validation} />
                {
                    error ?
                    <p style={{color:'red'}}>Confirm Password {error}</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
    
};

export default UserForm