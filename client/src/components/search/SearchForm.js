import React from 'react'
import './searchForm.css'
import SelectForm from './SelectForm'
import SentenceForm from './SentenceForm'

export default function SearchForm({ setMedcins, setError, setLoading, setSelectedMedcin }) {
    return (
        <div id="search-form">
            <div className="search-part">
                <SelectForm
                    setMedcins={setMedcins}
                    setError={setError}
                    setLoading={setLoading}
                    setSelectedMedcin={setSelectedMedcin}
                />
            </div>
            <div className="search-part">
                <SentenceForm
                    setMedcins={setMedcins}
                    setError={setError}
                    setLoading={setLoading}
                    setSelectedMedcin={setSelectedMedcin}
                />
            </div>
        </div>
    )
}
