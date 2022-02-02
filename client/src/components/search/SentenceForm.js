import React, { useState } from 'react'

export default function SentenceForm({ setMedcins, setError, setLoading, setSelectedMedcin }) {
    const [douleurs, setDouleurs] = useState('')

    const search = () => {

        setError(null)
        setMedcins([])
        setSelectedMedcin(null)
        setSelectedMedcin(null)
        if (douleurs.length <= 0) {
            setError('Error : Pleaase enter douleurs')
            return;
        }
        setLoading(true)
        fetch('http://localhost:8080/search/douleurs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ douleurs })
        })
            .then(res => res.json())
            .then(data => {
                if (data.length === 0)
                    setError('Error : No doctor Available for these douleurs')
                setMedcins(data)
                setLoading(false)
            })
            .catch(e => {
                setError("Error : something went wrong, please verrify the connection")
                setLoading(false)
            })
    }
    return (
        <div id="sentecnce-form">
            <p>Douleurs : </p>
            <input
                type="text"
                value={douleurs}
                onChange={e => setDouleurs(e.target.value)}
                maxLength="55"
                id="sentence-srch-input"
            />
            <button onClick={search}>search</button>
        </div>
    )
}
