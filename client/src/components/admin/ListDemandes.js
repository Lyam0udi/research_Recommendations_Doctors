import React, { useState, useEffect } from 'react'
import useAdminToken from '../../auth/useAdminToken'
import DemandeComponent from './DemandeComponent'

export default function ListDemandes({ setError }) {
    const [listDemandes, setListDemandes] = useState([])
    const [reload, setReload] = useState(true)

    const { token } = useAdminToken()

    useEffect(() => {
        setError('')
        fetch('http://localhost:8080/demandes/form/all', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(token)
        })
            .then(res => res.json())
            .then(data => {
                if (data.length <= 0)
                    setError('Demande List Empty !!')
                setListDemandes(data)
            })
            .catch(e => setError('Error : something went wrong !'))
    }, [reload, token, setError])

    return (
        <div>
            {
                listDemandes.map(demande => {
                    return (
                        <div key={demande.id}>
                            <DemandeComponent
                                demande={demande}
                                reload={reload}
                                setReload={setReload}
                                token={token}
                                setError={setError}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}
