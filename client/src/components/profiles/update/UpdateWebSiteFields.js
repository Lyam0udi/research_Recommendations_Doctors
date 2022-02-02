import React, { useState } from 'react'

export default function UpdateWebSiteFields({ token, webSite, reload, setReload, setError }) {
    const [name, setName] = useState(webSite.name)
    const [url, setUrl] = useState(webSite.url)


    const [btnBackground, setBtnBackground] = useState({ 'backgroundColor': 'rgb(27, 50, 73)' })

    const handleChange = e => {
        e.preventDefault()

        setError('')
        let urlApi = `http://localhost:8080/profile/update/adress/name=${name}/url${url}`

        fetch(urlApi, {
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
            <h1 className="update-medcin-title">WebSite</h1>
            <form onSubmit={handleChange}>
                <div className="update-mdc-elts">
                    <h3>Url Name :</h3>
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
                    <h3>Url : ( sans http:// ou https:// )</h3>
                    <input
                        type="texte"
                        value={url}
                        onChange={e => {
                            setUrl(e.target.value)
                            setBtnBackground({ 'backgroundColor': 'rgb(117, 54, 54)' })
                        }}
                        className="update-mdc-input"
                        required
                    />
                </div>
                <div>
                    <button className="update-medcin-btn" type="submit" style={btnBackground}>Change Website</button>
                </div>
            </form>
        </div>
    )
}
