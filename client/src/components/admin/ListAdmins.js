import React, { useState, useEffect } from 'react'
import useAdminToken from '../../auth/useAdminToken'
import AdminComponent from './AdminComponent'
import AddAdmin from './AddAdmin'


export default function ListeAdmins({ setError, logout }) {
    const [adminList, setAdminList] = useState([])
    const [reload, setReload] = useState(true)


    const { token } = useAdminToken()


    useEffect(() => {
        setError('')
        fetch('http://localhost:8080/admin/all', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(token)
        })
            .then(res => res.json())
            .then(data => {
                if (data.length <= 0)
                    setError('No Admin !!')
                setAdminList(data)
            })
            .catch(e => setError('Error : something went wrong !'))
    }, [reload, token, setError])
    return (
        <div>
            <div>
                <AddAdmin
                    token={token}
                    reload={reload}
                    setReload={setReload}
                    setError={setError}
                />
            </div>
            {
                adminList.map(admin => {
                    return (
                        <div key={admin.id}>
                            <AdminComponent
                                admin={admin}
                                reload={reload}
                                setReload={setReload}
                                token={token}
                                setError={setError}
                                logout={logout}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}
