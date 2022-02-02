import React, { useState } from 'react'

export default function AddAdmin({ token, reload, setReload, setError }) {
    const [nom, setNom] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        setError('')
        let url = `http://localhost:8080/admin/add/name/${nom}/email/${email}`

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(token)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setReload(!reload)
                    setNom('')
                    setEmail('')
                } else {
                    setError('Error : email already in use')
                }
            })
            .catch(e => setError('something went wrong please verify connexion !'))
    }

    return (
        <div className="add-admin-container">
            <h2>Add new Admin</h2>
            <form onSubmit={handleSubmit}>
                <div className="add-admn-frm-container">
                    <div>
                        <label>
                            <p>Nom :</p>
                            <input className="add-admn-inpt" type="texte" value={nom} onChange={e => { setNom(e.target.value) }} required />
                        </label>
                    </div>
                    <div>
                        <label>
                            <p>Email :</p>
                            <input className="add-admn-inpt" type="texte" value={email} onChange={e => { setEmail(e.target.value) }} required />
                        </label>
                    </div>
                    <div>
                        <button className="add-admin-btn" type="submit">Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
