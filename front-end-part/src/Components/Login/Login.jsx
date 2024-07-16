import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError("Please fill in all fields");
            return;
        }

        axios.post('http://localhost:5000/login', {
            username,
            password
        }).then((res) => {
            if (res.data === "Incorrect password") {
                setError("Incorrect password");
                return; 
            }
            if (res.data === "User not found") {
                setError("User not found");
                return; 
            }
        })

        navigate('/template');
        setError("Login successful");
    };

    return (
        <div className="login-wrapper">
            <div className="login-box">

                <h1 className = "welcome-messaeg">Welcome back</h1>

                <form onSubmit={handleSubmit}>

                    <div className="textbox">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="textbox">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <p className="error">{error}</p>
                    <input type="submit" className="btn" value="Continue" />
                </form>
                <p className = "option">Don't have an account? <span className  = "option-link" onClick = {() => navigate('/signup')}> Sign Up</span></p>

            </div>
          
        </div>
    );
}

export default Login;
