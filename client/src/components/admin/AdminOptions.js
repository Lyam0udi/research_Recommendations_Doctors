import React, { useState, useEffect } from 'react'
import './admin.css'

export default function AdminOptions({ logout, setOption, option }) {

    const [styles, setStyles] = useState([
        { 'backgroundColor': 'rgb(74, 125, 167)' },
        { 'backgroundColor': 'rgb(74, 125, 167)' },
        { 'backgroundColor': 'rgb(74, 125, 167)' },
        { 'backgroundColor': 'rgb(74, 125, 167)' }
    ])

    const handleOptionChange = (opt) => {
        setOption(opt)
    }

    useEffect(() => {
        const selected = { 'backgroundColor': 'rgb(35, 84, 124)' }
        const notSelected = { 'backgroundColor': 'rgb(74, 125, 167)' }

        if (option === "listAdmins")
            setStyles([selected, notSelected, notSelected, notSelected])
        else
            if (option === "listMedcins")
                setStyles([notSelected, selected, notSelected, notSelected])
            else if (option === "listDemandes")
                setStyles([notSelected, notSelected, selected, notSelected])
            else
                if (option === "ModiyProfile")
                    setStyles([notSelected, notSelected, notSelected, selected])
                else
                    setStyles([notSelected, notSelected, notSelected, notSelected])

    }, [option])

    return (
        <div id="admin-header">
            <div id="admin-opts-container">
                <div id="admin-opts">
                    <div className="admin-option" style={styles[0]} onClick={() => handleOptionChange("listAdmins")}>
                        <p>liste Admin</p>
                    </div>
                    <div className="admin-option" style={styles[1]} onClick={() => handleOptionChange("listMedcins")}>
                        <p>Liste Medcin</p>
                    </div>
                    <div className="admin-option" style={styles[2]} onClick={() => handleOptionChange("listDemandes")}>
                        <p>Liste Demandes</p>
                    </div>
                    <div className="admin-option" style={styles[3]} onClick={() => handleOptionChange("ModiyProfile")}>
                        <p>Modifier Profile</p>
                    </div>
                </div>
            </div>
            <div className="logout">
                <button onClick={e => logout()}>logout</button>
            </div>
        </div>
    )
}
