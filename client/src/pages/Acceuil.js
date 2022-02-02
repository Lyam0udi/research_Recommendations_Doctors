import React, { useState } from 'react'
import SearchForm from '../components/search/SearchForm'
import SearchResults from '../components/search/SearchResults'
import '../App.css'

export default function Acceuil() {
    const [medcins, setMedcins] = useState([])
    const [error, setError] = useState()
    let [isLoading, setLoading] = useState(false)
    const [selectedMedcin, setSelectedMedcin] = useState()

    return (
        <div>
            <div className="search-form">
                <div className="container">
                    <SearchForm
                        setMedcins={setMedcins}
                        setError={setError}
                        setLoading={setLoading}
                        setSelectedMedcin={setSelectedMedcin}
                    />
                </div>

            </div>
            <div>
                <div className="container">
                    <SearchResults
                        medcins={medcins}
                        error={error}
                        isLoading={isLoading}
                        selectedMedcin={selectedMedcin}
                        setSelectedMedcin={setSelectedMedcin}
                    />
                </div>
            </div>
        </div>
    )
}
