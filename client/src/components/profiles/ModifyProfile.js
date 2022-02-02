import React from 'react'
import Login from '../../auth/Login'
import useMedcinToken from '../../auth/useMedcinToken'
import ModifyProfileComponents from './update/ModifyProfileComponents'

export default function ModifyProfile({ setModifyProfile }) {

    const { token, setToken, logout } = useMedcinToken()

    const urlApi = 'http://localhost:8080/profile/login'
    const type = 'Medcin'

    if (!token) return <Login
        setToken={setToken}
        urlApi={urlApi}
        type={type}
        setModifyProfile={setModifyProfile}
    />

    return (
        <div>
            <div className="profile-link-container">
                <p className="clickable-p" onClick={e => { setModifyProfile(false) }}>{"< "} Back</p>
                <button onClick={e => { logout() }}>logout</button>
            </div>
            <ModifyProfileComponents token={token} setToken={setToken} />
        </div>
    )
}
