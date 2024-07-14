import React, { useState } from 'react';
import './signin.css';
import { Link } from 'react-router-dom';

function Signin() {
    const [FullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Full Name:', FullName);
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);

        setError("something went wrong");
    };

    return (
        <div className="Signin-wrapper">
            <div className="Signin-box">

                <h1 className = "welcome-messaeg">Welcome</h1>

                <form onSubmit={handleSubmit}>

                <div className="textbox">
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={FullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>

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
                    <div className="textbox">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <p className = "error">{error}</p>
                    <input type="submit" className="btn" value="Continue" />
                </form>
                <p className = "option">Already have an account? <span className  = "option-link"><Link to = "/login"> Log in </Link></span></p>

            </div>
          
        </div>
    );
}

export default Signin;
