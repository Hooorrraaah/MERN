import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const newUser = (e) => {
        e.preventDefault();
    }

    return(
        <form onSubmit={ newUser }>
            <div>
            <label>First Name: </label>
            <input type="text" onChange={ (e) => setFirstName(e.target.value) } value={ firstName } />
            </div>

            <div>
            <label>Last Name: </label>
            <input type="text" onChange={ (e) => setLastName(e.target.value) } value={ lastName } />
            </div>

            <div>
            <label>Email: </label>
            <input type="text" onChange={ (e) => setEmail(e.target.value) } value={ email } />
            </div>

            <div>
            <label>Password: </label>
            <input type="text" onChange={ (e) => setPassword(e.target.value) } value={ password } />
            </div>

            <div>
            <label>Confirm Password: </label>
            <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } value={ confirmPassword } />
            </div>

            <h3> User Information:</h3>
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </form>
    );
};

export default UserForm