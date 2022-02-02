import React, { useState } from 'react'
import Map from '../map/Map'
import ModifyProfile from './ModifyProfile'
import './profile.css'

export default function MedcinProfile({ medcin, setSelectedMedcin }) {
    const [modifyProfile, setModifyProfile] = useState()

    return (
        <div>
            {
                modifyProfile ?
                    <div>
                        <ModifyProfile setModifyProfile={setModifyProfile} />
                    </div> :
                    <div>
                        <div className="profile-link-container">
                            <p className="clickable-p" onClick={e => { setSelectedMedcin(null) }}>{"< "} Back</p>
                            <p className="clickable-p" onClick={e => { setModifyProfile(true) }}>Modifier votre Clinique</p>
                        </div>
                        <div>
                            <h1>{medcin.name}</h1>
                        </div>
                        <div className="medcin-profile-map">
                            {

                                <Map
                                    lng={medcin.clinique.adress.longitude}
                                    lat={medcin.clinique.adress.latitude}
                                    printMarker={true}
                                />
                            }
                        </div>
                        <div>

                            <h3>clinique : {medcin.clinique.name}</h3>
                        </div>
                    </div>
            }
        </div>
    )
}
