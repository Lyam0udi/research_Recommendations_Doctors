import React from 'react'
import MedcinComponent from './MedcinComponent'

import ClipLoader from "react-spinners/ClipLoader";
import MedcinProfile from '../profiles/MedcinProfile';

export default function SearchResults({ medcins, error, isLoading, selectedMedcin, setSelectedMedcin }) {

    const override = { display: "block", margin: '20px auto', 'borderColor': 'black' }
    return (
        <div>
            {
                selectedMedcin ?
                    <div>
                        <MedcinProfile
                            medcin={selectedMedcin}
                            setSelectedMedcin={setSelectedMedcin}
                        />
                    </div>
                    :
                    <div>
                        {medcins.map(medcin => {
                            return (
                                <MedcinComponent
                                    key={medcin.id}
                                    medcin={medcin}
                                    setSelectedMedcin={setSelectedMedcin}
                                />
                            )
                        })}
                    </div>
            }
            {error &&
                <div id="search-error">
                    <p>{error}</p>
                </div>
            }
            <ClipLoader loading={isLoading} css={override} size={50} />
        </div>
    )
}
