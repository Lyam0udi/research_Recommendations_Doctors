import React, { useState, useEffect } from 'react'

export default function ModifyAdminProfil({ logout, setToken, setError, token }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [btnBackground, setBtnBackground] = useState({ 'backgroundColor': 'rgb(27, 50, 73)' })

    const handleSubit = e => {
        e.preventDefault()
        setError('')
        let url = `http://localhost:8080/admin/update/name=${name}/email=${email}/password=${password}`

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(token)
        })
            .then(res => res.json())
            .then(data => {
                if (data && data.email && data.password) {
                    setToken({ email: data.email, password: data.password })
                    setBtnBackground({ 'backgroundColor': 'rgb(27, 50, 73)' })
                }
            })
            .catch(e => setError('Error : something went wrong please verrify the connexion'))
    }


    useEffect(() => {
        setError('')
        fetch('http://localhost:8080/admin/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(token)
        })
            .then(res => res.json())
            .then(data => {
                if (data && data.email && data.password) {
                    setName(data.name ? data.name : '')
                    setEmail(data.email)
                    setPassword(data.password)
                } else {
                    logout()
                }
            })
            .catch(e => setError('Error : something went wrong please verrify the connexion'))
    }, [logout, setError, token])
    return (
        <div>
            <div>
                <h1 className="modify-admn-title">Modify Admin Profile</h1>
            </div>
            <div>
                <form onSubmit={handleSubit}>
                    <div className="modify-admin-elem">
                        <h3>Name : </h3>
                        <input
                            type="texte"
                            value={name}
                            className="modify-admin-input"
                            onChange={e => { setName(e.target.value) }}
                        />
                    </div>
                    <div className="modify-admin-elem">
                        <h3>Email : </h3>
                        <input
                            type="email"
                            value={email}
                            className="modify-admin-input"
                            onChange={e => {
                                setEmail(e.target.value)
                                setBtnBackground({ 'backgroundColor': 'rgb(117, 54, 54)' })
                            }}
                            required
                        />
                    </div>
                    <div className="modify-admin-elem">
                        <h3>Password : </h3>
                        <input
                            type="texte"
                            value={password}
                            className="modify-admin-input"
                            onChange={e => {
                                setPassword(e.target.value)
                                setBtnBackground({ 'backgroundColor': 'rgb(117, 54, 54)' })
                            }}
                            required
                        />
                    </div>

                    <div>
                        <button className="modify-admin-sbmt-btn" type="submit" style={btnBackground}>Submit Changes</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
