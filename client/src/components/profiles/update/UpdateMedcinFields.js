import React, { useState } from 'react'

export default function UpdateMedcinFields({ token, name, speciality, reload, setReload, setError }) {
    const [changedName, setChangedName] = useState(name)
    const [changedSpeciality, setChangedSpeciality] = useState(speciality)


    const [btnBackground, setBtnBackground] = useState({ 'backgroundColor': 'rgb(27, 50, 73)' })

    const handleChange = e => {
        e.preventDefault()

        setError('')
        let url = `http://localhost:8080/profile/update/name=${changedName}/speciality=${changedSpeciality}`

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
            <h1 className="update-medcin-title">Medcin</h1>
            <form onSubmit={handleChange}>
                <div className="update-mdc-elts">
                    <h3>Nom :</h3>
                    <input
                        type="texte"
                        value={changedName}
                        onChange={e => {
                            setChangedName(e.target.value)
                            setBtnBackground({ 'backgroundColor': 'rgb(117, 54, 54)' })
                        }}
                        className="update-mdc-input"
                        required
                    />
                </div>
                <div className="update-mdc-elts">
                    <h3>Specialité :</h3>
                    <input
                        type="texte"
                        value={changedSpeciality}
                        onChange={e => {
                            setChangedSpeciality(e.target.value)
                            setBtnBackground({ 'backgroundColor': 'rgb(117, 54, 54)' })
                        }}
                        className="update-mdc-input"
                        required
                    />
                </div>
                <div>
                    <button className="update-medcin-btn" type="submit" style={btnBackground}>Change Medcin</button>
                </div>
            </form>
        </div>
    )
}
