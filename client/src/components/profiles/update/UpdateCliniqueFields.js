import React, { useState } from 'react'

export default function UpdateCliniqueFields({ token, clinique, reload, setReload, setError }) {
    const [name, setName] = useState(clinique.name)
    const [email, setEmail] = useState(clinique.email)
    const [number, setNumber] = useState(clinique.number)
    const [oppenAt, setOppenAt] = useState(clinique.oppenAt)
    const [closeAt, setCloseAt] = useState(clinique.closeAt)

    const [btnBackground, setBtnBackground] = useState({ 'backgroundColor': 'rgb(27, 50, 73)' })

    const handleChange = e => {
        e.preventDefault()

        setError('')
        let url = `http://localhost:8080/profile/update/clinique/name=${name}/oppenat${oppenAt}/closeat=${closeAt}/number=${number}/email=${email}`

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(token)
        })
            .then(res => res.json())
            .then(data => {
                setBtnBackground({ 'backgroundColor': 'rgb(27, 50, 73)' })
                setReload(!reload)
            })
            .catch(e => { setError('something went wrong please verrify the connexion') })

    }


    return (
        <div>
            <h1 className="update-medcin-title">Clinique</h1>
            <form onSubmit={handleChange}>
                <div className="update-mdc-elts">
                    <h3>Nom : *</h3>
                    <input
                        type="texte"
                        value={name}
                        onChange={e => {
                            setName(e.target.value)
                            setBtnBackground({ 'backgroundColor': 'rgb(117, 54, 54)' })
                        }}
                        className="update-mdc-input"
                        required
                    />
                </div>
                <div className="update-mdc-elts">
                    <h3>Email :</h3>
                    <input
                        type="texte"
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value)
                            setBtnBackground({ 'backgroundColor': 'rgb(117, 54, 54)' })
                        }}
                        className="update-mdc-input"
                    />
                </div>
                <div className="update-mdc-elts">
                    <h3>Number tel :</h3>
                    <input
                        type="texte"
                        value={number}
                        onChange={e => {
                            setNumber(e.target.value)
                            setBtnBackground({ 'backgroundColor': 'rgb(117, 54, 54)' })
                        }}
                        className="update-mdc-input"
                    />
                </div>
                <div className="update-mdc-elts">
                    <h3>Oppen at :</h3>
                    <input
                        type="texte"
                        value={oppenAt}
                        onChange={e => {
                            setOppenAt(e.target.value)
                            setBtnBackground({ 'backgroundColor': 'rgb(117, 54, 54)' })
                        }}
                        className="update-mdc-input"
                    />
                </div>
                <div className="update-mdc-elts">
                    <h3>Close at :</h3>
                    <input
                        type="texte"
                        value={closeAt}
                        onChange={e => {
                            setCloseAt(e.target.value)
                            setBtnBackground({ 'backgroundColor': 'rgb(117, 54, 54)' })
                        }}
                        className="update-mdc-input"
                    />
                </div>
                <div>
                    <button className="update-medcin-btn" type="submit" style={btnBackground}>Change Clinique</button>
                </div>
            </form>

        </div>
    )
}
