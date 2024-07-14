import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        console.log('Username:', username);
        console.log('Password:', password);

        setError("something went wrong");
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
                <p className = "option">Don't have an account? <span className  = "option-link"> <Link to="/signup">Sign Up</Link></span></p>

            </div>
          
        </div>
    );
}

export default Login;
