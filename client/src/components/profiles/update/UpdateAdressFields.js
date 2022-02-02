import React, { useState } from 'react'
import Map from '../../map/Map'

export default function UpdateAdressFields({ token, adress, reload, setReload, setError }) {
    const [ville, setVille] = useState(adress.ville)
    const [location, setLocation] = useState(adress.location)
    const [longitude, setLongitude] = useState(adress.longitude)
    const [latitude, setLatitude] = useState(adress.latitude)

    const [btnBackground, setBtnBackground] = useState({ 'backgroundColor': 'rgb(27, 50, 73)' })

    const handleChange = e => {
        e.preventDefault()

        setError('')
        let url = `http://localhost:8080/profile/update/website/ville=${ville}/location${location}/longitude=${longitude}/latitude=${latitude}`

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
            <h1 className="update-medcin-title">Adress</h1>
            <form onSubmit={handleChange}>
                <div className="update-mdc-elts">
                    <h3>Ville : *</h3>
                    <input
                        type="texte"
                        value={ville}
                        onChange={e => {
                            setVille(e.target.value)
                            setBtnBackground({ 'backgroundColor': 'rgb(117, 54, 54)' })
                        }}
                        className="update-mdc-input"
                        required
                    />
                </div>
                <div className="update-mdc-elts">
                    <h3>Location :</h3>
                    <input
                        type="texte"
                        value={location}
                        onChange={e => {
                            setLocation(e.target.value)
                            setBtnBackground({ 'backgroundColor': 'rgb(117, 54, 54)' })
                        }}
                        className="update-mdc-input"
                    />
                </div>
                <div className="modify-medcin-profile-map-container">
                    <Map
                        lng={longitude}
                        lat={latitude}
                        printMarker={true}
                    />
                </div>
                <div className="update-mdc-elts">
                    <h3>Longitude : *</h3>
                    <input
                        type="number"
                        value={longitude}
                        onChange={e => {
                            setLongitude(e.target.value)
                            setBtnBackground({ 'backgroundColor': 'rgb(117, 54, 54)' })
                        }}
                        className="update-mdc-input"
                        required
                    />
                </div>
                <div className="update-mdc-elts">
                    <h3>Latitude : *</h3>
                    <input
                        type="number"
                        value={latitude}
                        onChange={e => {
                            setLatitude(e.target.value)
                            setBtnBackground({ 'backgroundColor': 'rgb(117, 54, 54)' })
                        }}
                        className="update-mdc-input"
                        required
                    />
                </div>
                <div>
                    <button className="update-medcin-btn" type="submit" style={btnBackground}>Change Adress</button>
                </div>
            </form>
        </div>
    )
}
