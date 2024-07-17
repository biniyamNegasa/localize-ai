import React, { useState } from 'react';
import './signin.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signin() {
    const navigate = useNavigate();
    const [name, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !password || !confirmPassword) {
            setError("Please fill in all fields");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        axios.post('http://localhost:5000/api/auth/register', {
            name,
            email,
            password
        }).then((res) => {
            console.log(res.data)
            if (res.data.data.success) {
                navigate('/login');
                
                return; 
            }else{
                setError(res.data.data.message);
            }
        })
        .catch(e => {
            setError("Unkown Error")    
        })
        
        // setError("Sign up successful");
        
        
    };

    return (
        <div className="Signin-wrapper">
            <div className="Signin-box">

                <h1 className = "welcome-messaeg">እንኳን ደህና መጡ</h1>

                <form onSubmit={handleSubmit}>

                <div className="textbox">
                        <input
                            type="text"
                            placeholder="ሙሉ ስም"
                            value={name}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>

                    <div className="textbox">
                        <input
                            type="text"
                            placeholder="ኢሜይል"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="textbox">
                        <input
                            type="password"
                            placeholder="የይለፍ ቃል"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="textbox">
                        <input
                            type="password"
                            placeholder="የይለፍ ቃል ያረጋግጡ"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <p className = "error">{error}</p>
                    <input type="submit" className="btn" value="ይመዝገቡ" />
                </form>
                <p className = "option">መለያ አሎት? <span className  = "option-link" onClick={() => navigate("/login")}>ይግቡ</span></p>

            </div>
          
        </div>
    );
}

export default Signin;
