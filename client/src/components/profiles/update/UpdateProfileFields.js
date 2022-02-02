import React, { useState } from 'react'

export default function UpdateProfileFields({ token, setToken, reload, setReload, setError }) {

    const [selectedEmail, setSelectedEmail] = useState(token.email)
    const [selectedPassword, setSelectedPassword] = useState(token.password)

    const [btnBackground, setBtnBackground] = useState({ 'backgroundColor': 'rgb(27, 50, 73)' })


    const handleSubmit = e => {
        e.preventDefault()

        setError('')
        let url = `http://localhost:8080/profile/update/profile/email=${selectedEmail}/password=${selectedPassword}`

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(token)
        })
            .then(res => res.json())
            .then(data => {
                const newToken = { email: data.email, password: data.password }
                setToken(newToken)
                setBtnBackground({ 'backgroundColor': 'rgb(27, 50, 73)' })
                setReload(!reload)
            })
            .catch(e => { setError('something went wrong please verrify the connexion') })
    }


    return (
        <div>
            <div>
                <h1 className="update-medcin-title">Profile</h1>
                <form onSubmit={handleSubmit}>
                    <div className="update-mdc-elts">
                        <h3>Email :</h3>
                        <input
                            type="texte"
                            value={selectedEmail}
                            onChange={e => {
                                setSelectedEmail(e.target.value)
                                setBtnBackground({ 'backgroundColor': 'rgb(117, 54, 54)' })
                            }}
                            className="update-mdc-input"
                            required
                        />
                    </div>
                    <div className="update-mdc-elts">
                        <h3>Password :</h3>
                        <input
                            type="texte"
                            value={selectedPassword}
                            onChange={e => {
                                setSelectedPassword(e.target.value)
                                setBtnBackground({ 'backgroundColor': 'rgb(117, 54, 54)' })
                            }}
                            className="update-mdc-input"
                            required
                        />
                    </div>
                    <div>
                        <button className="update-medcin-btn" type="submit" style={btnBackground}>Change Profile</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
