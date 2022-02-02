import React, { useState } from 'react'
import useAdminToken from '../auth/useAdminToken'
import AdminOptions from '../components/admin/AdminOptions'
import Optionresults from '../components/admin/OptionResults'
import Login from '../auth/Login'

export default function Admin() {
    const [option, setOption] = useState()
    const { token, setToken, logout } = useAdminToken()
    const urlApi = 'http://localhost:8080/admin/login'
    const type = 'Admin'


    if (!token)
        return <Login
            setToken={setToken}
            urlApi={urlApi}
            type={type}
        />

    return (
        <div>
            <div className="admin-pg-header">
                <div className="container">
                    <AdminOptions
                        logout={logout}
                        option={option}
                        setOption={setOption}
                    />
                </div>
            </div>
            <div>
                <div className="container">
                    <Optionresults
                        option={option}
                        logout={logout}
                        setToken={setToken}
                        token={token}
                    />
                </div>
            </div>
        </div>
    )
}
