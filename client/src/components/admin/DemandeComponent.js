import React from 'react'

export default function DemandeComponent({ token, demande, reload, setReload, setError }) {
    const accept = () => {
        let url = `http://localhost:8080/demandes/form/accept/${demande.id}`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(token)
        })
            .then(res => {
                setReload(!reload)
            })
            .catch(e => setError('Error : something went wrong please verrify your connexion !'))
    }

    const reject = () => {
        let url = `http://localhost:8080/demandes/form/reject/${demande.id}`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(token)
        })
            .then(res => {
                setReload(!reload)
            })
            .catch(e => setError('Error : something went wrong please verrify your connexion !'))
    }
    return (
        <div className="demande-cpt">

            <div className="demande-row">
                <div className="demande-col-1">
                    <p>Nom : <strong>{demande.name}</strong></p>
                </div>
                <div className="demande-col-2">
                    <p>Specialité : <strong>{demande.speciality}</strong></p>
                </div>
                <div className="demande-col-3">
                    <p>Ville : <strong>{demande.ville}</strong> </p>
                </div>
                <div className="demande-col-4">
                    <p>Public Email : <strong>{demande.publicEmail}</strong></p>
                </div>
            </div>
            <div className="demande-row">
                <div className="demande-col-1">
                    <p>Adress : <strong>{demande.adress}</strong> </p>
                </div>
                <div className="demande-col-2">
                    <p>Clinique : <strong>{demande.cliniqueName}</strong> </p>
                </div>
                <div className="demande-col-3">
                    <p>Open at: <strong>{demande.oppenAt}</strong> </p>
                </div>
                <div className="demande-col-4">
                    <p>Website : <strong>{demande.webSiteName}</strong></p>
                </div>
            </div>
            <div className="demande-row">
                <div className="demande-col-1">
                    <p>Tel : <strong>{demande.number}</strong> </p>
                </div>
                <div className="demande-col-2">
                    <p>Email : <strong>{demande.email}</strong></p>
                </div>
                <div className="demande-col-3">
                    <p>CLose at : <strong>{demande.closeAt}</strong> </p>
                </div>
                <div className="demande-col-4">
                    <p>Url : <strong>{demande.webSiteUrl}</strong></p>
                </div>
            </div>
            <div className="list-dmd-btn-container">
                <button id="reject-dmd-btn" className="list-dmd-btn" onClick={reject}>Reject</button>
                <button id="accept-dmd-btn" className="list-dmd-btn" onClick={accept}>Accept</button>
            </div>

        </div>
    )
}
