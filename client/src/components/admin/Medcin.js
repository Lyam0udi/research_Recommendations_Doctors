import React from 'react'
import MedcinComponent from '../search/MedcinComponent'

export default function Medcin({ medcin, reload, setReload, token, setError }) {

    const deleteMedcin = () => {
        setError('')
        let url = `http://localhost:8080/listmedcins/delete/${medcin.id}`

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(token)
        })
            .then(res => {
                setReload(!reload)
            })
            .catch(e => setError('Error : something went wrong please verrify your connexion !'))
    }
    return (
        <div>
            <div>
                <MedcinComponent
                    medcin={medcin}
                    adminMode={true}
                    deleteMedcin={deleteMedcin}
                />
            </div>
        </div>
    )
}
