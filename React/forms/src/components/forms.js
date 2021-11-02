import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorFN, setErrorFN] = useState("");
    const [errorLN, setErrorLN] = useState("");
    const [errorE, setErrorE] = useState("");
    const [errorP, setErrorP] = useState("");
    const [errorCP, setErrorCP] = useState("");


    const validateFN= (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setErrorFN(""); 
        } else if(e.target.value.length < 2) {
            setErrorFN("First name must be at least 2 characters or longer!");
        }else{
        setErrorFN("");
    }
    };
    const validateLN= (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setErrorLN("");
        } else if(e.target.value.length < 2) {
            setErrorLN("Last name must be at least 2 characters or longer!");
        }else{
        setErrorLN("");
    }
    };
    const validateE= (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setErrorE("");
        } else if(e.target.value.length < 5) {
            setErrorE("Email must be at least 5 characters or longer!");
        }else{
        setErrorE("");
    }
    };
    const validateP= (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setErrorP("");
        } else if(e.target.value.length < 8) {
            setErrorP("Password must be at least 8 characters or longer!");
        }else{
        setErrorP("");
    }
    };
    const validateCP= (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 1) {
            setErrorCP("");
        } else if(e.target.value != password) {
            setErrorCP("Passwords must match!");
        }else{
        setErrorCP("");
    }
    };
    return(
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
            <label>First Name: </label>
            <input type="text" onChange={ validateFN } />
                {
                    errorFN ?
                    <p style={{color:'red'}}>{ errorFN }</p> :
                    ''
                }
            </div>
            <div>
            <label>Last Name: </label>
            <input type="text" onChange={ validateLN } />
                {
                    errorLN ?
                    <p style={{color:'red'}}>{ errorLN}</p> :
                    ''
                }
            </div>
            <div>
            <label>Email: </label>
            <input type="text" onChange={ validateE } />
                {
                    errorE ?
                    <p style={{color:'red'}}>{ errorE }</p> :
                    ''
                }
            </div>
            <div>
            <label>Password: </label>
            <input type="text" onChange={ validateP } />
                {
                    errorP ?
                    <p style={{color:'red'}}>{ errorP }</p> :
                    ''
                }
            </div>
            <div>
            <label>Confirm Password: </label>
            <input type="text" onChange={ validateCP } />
                {
                    errorCP ?
                    <p style={{color:'red'}}>{ errorCP }</p> :
                    ''
                }
            </div>

        </form>
    );
    
};

export default UserForm