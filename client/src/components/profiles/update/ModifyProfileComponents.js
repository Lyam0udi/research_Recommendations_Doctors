import React, { useState, useEffect } from 'react'
import UpdateMedcinFields from './UpdateMedcinFields'
import UpdateProfileFields from './UpdateProfileFields'
import UpdateCliniqueFields from './UpdateCliniqueFields'
import UpdateAdressFields from './UpdateAdressFields'
import UpdateWebSiteFields from './UpdateWebSiteFields'

export default function ModifyProfileComponents({ token, setToken }) {
    const [medcin, setMedcin] = useState()
    const [reload, setReload] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        fetch('http://localhost:8080/profile/medcin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(token)
        })
            .then(res => res.json())
            .then(data => {
                setMedcin(data)
            })
            .catch(e => { setError('something went wrong please verrify the connexion') })
    }, [token, reload])
    return (
        <div>
            {
                medcin &&
                <div>
                    <div className="modify-profil-medcin-container">
                        <UpdateMedcinFields
                            token={token}
                            name={medcin.name}
                            speciality={medcin.speciality}
                            reload={reload}
                            setReload={setReload}
                            setError={setError}
                        />
                    </div>
                    <div className="modify-profil-medcin-container">
                        <UpdateProfileFields
                            token={token}
                            setToken={setToken}
                            reload={reload}
                            setReload={setReload}
                            setError={setError}
                        />
                    </div>
                    <div className="modify-profil-medcin-container">
                        <UpdateCliniqueFields
                            token={token}
                            clinique={medcin.clinique}
                            reload={reload}
                            setReload={setReload}
                            setError={setError}
                        />
                    </div>
                    <div className="modify-profil-medcin-container">
                        <UpdateAdressFields
                            token={token}
                            adress={medcin.clinique.adress}
                            reload={reload}
                            setReload={setReload}
                            setError={setError}
                        />
                    </div>
                    <div className="modify-profil-medcin-container">
                        <UpdateWebSiteFields
                            token={token}
                            webSite={medcin.clinique.webSite}
                            reload={reload}
                            setReload={setReload}
                            setError={setError}
                        />
                    </div>

                </div>
            }

            <div>
                <p>{error}</p>
            </div>
        </div>
    )
}
