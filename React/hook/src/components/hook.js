import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");


    const validateFN= (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setError("");
        } else if(e.target.value.length < 2) {
            setError("First name must be at least 2 characters or longer!");
        }else{
        setError("");
    }
    };
    const validateLN= (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setError("");
        } else if(e.target.value.length < 2) {
            setError("Last name must be at least 2 characters or longer!");
        }else{
        setError("");
    }
    };
    const validateE= (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setError("");
        } else if(e.target.value.length < 5) {
            setError("Email must be at least 5 characters or longer!");
        }else{
        setError("");
    }
    };
    const validateP= (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setError("");
        } else if(e.target.value.length < 8) {
            setError("Password must be at least 8 characters or longer!");
        }else{
        setError("");
    }
    };
    const validateCP= (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 1) {
            setError("");
        } else if(e.target.value != password.target.value) {
            setError("Passwords must match!");
        }else{
        setError("");
    }
    };
    return(
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
            <label>First Name: </label>
            <input type="text" onChange={ validateFN } />
                {
                    error ?
                    <p style={{color:'red'}}>{ error }</p> :
                    ''
                }
            </div>
            <div>
            <label>Last Name: </label>
            <input type="text" onChange={ validateLN } />
                {
                    error ?
                    <p style={{color:'red'}}>{ error}</p> :
                    ''
                }
            </div>
            <div>
            <label>Email: </label>
            <input type="text" onChange={ validateE } />
                {
                    error ?
                    <p style={{color:'red'}}>{ error }</p> :
                    ''
                }
            </div>
            <div>
            <label>Password: </label>
            <input type="text" onChange={ validateP } />
                {
                    error ?
                    <p style={{color:'red'}}>{ error }</p> :
                    ''
                }
            </div>
            <div>
            <label>Confirm Password: </label>
            <input type="text" onChange={ validateCP } />
                {
                    error ?
                    <p style={{color:'red'}}>{ error }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
    
};

export default UserForm