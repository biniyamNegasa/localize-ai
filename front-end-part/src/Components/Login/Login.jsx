import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Please fill in all fields");
            return;
        }
        if (!email.includes('@') || !email.includes('.')){
            setError('Email is not Valid')
            return
        }

        axios.post('http://localhost:5000/api/auth/login', {
            email,
            password
        }).then((res) => {
            //console.log(res.data.data)
            if (res.data.data.success) {
                navigate('/main');
            }else{
                setError(res.data.data.message);
            }
            
        })
        .catch(e => {
            setError('Unknow Error Occured' + e)
        })
        
    };

    return (
        <div className="login-wrapper">
            <div className="login-box">

                <h1 className = "welcome-messaeg">ይግቡ</h1>

                <form onSubmit={handleSubmit}>

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
                    <p className="error">{error}</p>
                    <input type="submit" className="btn" value="ይግቡ" />
                </form>
                <p className = "option">መለያ የለህም?? <span className  = "option-link" onClick = {() => navigate('/signup')}> ተመዝገቢ</span></p>

            </div> 
          
        </div>
    );
}

export default Login;
