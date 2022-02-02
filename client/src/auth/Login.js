import React, { useState, useEffect } from 'react'
import './auth.css';
import { getLocalToken, setLocalToken, deleteLocalToken } from './RememberMe'
import PropTypes from 'prop-types';

export default function Login({ setToken, urlApi, type, setModifyProfile }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [remeberMe, setRemeberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false)


    const handleSubmit = e => {
        e.preventDefault();
        setError("");
        fetch(urlApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
            .then(data => {
                if (data && data.email && data.password) {
                    let token = { email: data.email, password: data.password }
                    setToken(token)
                    if (remeberMe) {
                        setLocalToken(type, token)

                    } else {
                        deleteLocalToken(type)
                    }
                }
            })
            .catch(e => {
                setError("Email or Password is invalid !");
            })

    }

    useEffect(() => {
        const LocalToken = getLocalToken(type);
        if (LocalToken) {
            setEmail(LocalToken.email);
            setPassword(LocalToken.password);
            setRemeberMe(true)
        }
    }, [type]);

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <h1 className="login-title">Log In {type}</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Email :</p>
                        <input type="email" className="login-inputs" value={email} onChange={e => setEmail(e.target.value)} required />
                    </label>
                    <label>
                        <p>Password :</p>
                        <input type={showPassword ? "texte" : "password"} className="login-inputs" value={password} onChange={e => setPassword(e.target.value)} required />
                    </label>
                    <div className="login-check-boxes-container">
                        <label>
                            Show Password :
                            <input type="checkbox" defaultChecked={showPassword} onChange={e => setShowPassword(!showPassword)} />
                        </label>
                    </div>
                    <div className="login-check-boxes-container">
                        <label>
                            Remeber me :
                            <input type="checkbox" checked={remeberMe} onChange={e => setRemeberMe(!remeberMe)} />
                        </label>
                    </div>
                    <div className="login-button-container">
                        {
                            type === 'Medcin' &&
                            <button className="cancel-btn btn" onClick={e => { setModifyProfile(false) }}>Cancel</button>
                        }
                        <button className="login-button btn" type="submit">Login</button>
                    </div>
                </form>

                {
                    error &&
                    <div className="login-error-container">
                        <p className="login-error">{error}</p>
                    </div>
                }

            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
