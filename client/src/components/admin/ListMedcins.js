import React, { useState, useEffect } from 'react'
import useAdminToken from '../../auth/useAdminToken'
import Medcin from './Medcin'

export default function ListMedcins({ setError }) {
    const [listMedcins, setListMedcins] = useState([])
    const [reload, setReload] = useState(true)

    const { token } = useAdminToken()

    useEffect(() => {
        setError('')
        fetch('http://localhost:8080/listmedcins/all', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(token)
        })
            .then(res => res.json())
            .then(data => {
                if (data.length <= 0)
                    setError('List Medcin is Empty !!')
                setListMedcins(data)
            })
            .catch(e => setError('Error : something went wrong !'))
    }, [reload, token, setError])

    return (
        <div>
            {
                listMedcins.map(medcin => {
                    return (
                        <div key={medcin.id} >
                            <Medcin
                                medcin={medcin}
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
