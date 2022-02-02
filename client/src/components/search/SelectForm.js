import React, { useState } from 'react'

export default function SelectForm({ setMedcins, setError, setLoading, setSelectedMedcin }) {
    const villes = ["Casablanca", "El Jadida", "El mohammadia", "Tanger", "Rabat"]
    const specialites = ["Neurologue", "Endocrinologue", "Dermatologue", "Cardiologue",
        "Chirurgien", "Gynecologue", "Urologue", "Hepatologue", "Pediatre", "Anesthesiologue",
        "Ophtalmologue", "Gastro-enterologue", "Rhumatologue"]
    const [selectedVille, setSelectedVille] = useState('0')
    const [selectedSpeciality, setselectedSpeciality] = useState('0')

    const search = e => {
        setError(null)
        setMedcins([])
        setSelectedMedcin(null)
        let url = 'http://localhost:8080/search'
        if (selectedVille !== '0' && selectedSpeciality !== '0') {
            url += `/ville/${selectedVille}/speciality/${selectedSpeciality}`
        } else if (selectedVille !== '0') {
            url += `/ville/${selectedVille}`
        } else if (selectedSpeciality !== '0') {
            url += `/speciality/${selectedSpeciality}`
        } else {
            setError("Error: veuillez choisir au moin une ville ou une specialisation")
            return;
        }
        setLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.length === 0)
                    setError(`Error : No ${selectedSpeciality} Available at ${selectedVille}`)
                setMedcins(data)
                setLoading(false)
            })
            .catch(e => {
                setError("Error : something went wrong, please verrify the connection")
                setLoading(false)
            })
    }
    return (
        <div id="select-form">
            <p>ville :</p>
            <select defaultValue="0" onChange={e => setSelectedVille(e.target.value)}>

                {
                    villes.map((ville, index) => {
                        return (
                            <option key={index} value={ville}>{ville}</option>
                        )
                    })
                }
                <option value="0"> select Ville</option>
            </select>
            <p>Spécialité</p>
            <select defaultValue="0" onChange={e => setselectedSpeciality(e.target.value)}>

                {
                    specialites.map((specialite, index) => {
                        return (
                            <option key={index} value={specialite}>{specialite}</option>
                        )
                    })
                }

                <option value="0"> select Specialité</option>
            </select>
            <button onClick={search}>search</button>
        </div>
    )
}
