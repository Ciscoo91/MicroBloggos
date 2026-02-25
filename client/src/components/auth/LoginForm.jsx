import React, { useState } from 'react';
import AuthService from './auth.service';


const LoginForm = () => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        AuthService.login(username, password);
    }

    return (
        <div className="container col-sm-6">
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="">Username</label>
                    <input type="text" name="username" className="form-control" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;

