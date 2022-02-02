import React, { useState } from 'react'
import ListAdmins from './ListAdmins'
import ListMedcins from './ListMedcins'
import ListDemandes from './ListDemandes'
import ModifyAdminProfil from './ModifyAdminProfil'


export default function OptionResults({ option, logout, setToken, token }) {
    const [error, setError] = useState('')

    return (
        <div>
            {error !== '' &&
                <div id="admin-error">
                    <p>{error}</p>
                </div>
            }
            {option &&
                <div>
                    {option === 'listAdmins' &&
                        <div>
                            <ListAdmins
                                setError={setError}
                                logout={logout}
                            />
                        </div>
                    }
                    {option === 'listMedcins' &&
                        <div>
                            <ListMedcins
                                setError={setError}
                            />
                        </div>
                    }
                    {option === 'listDemandes' &&
                        <div>
                            <ListDemandes
                                setError={setError}
                            />
                        </div>
                    }
                    {option === 'ModiyProfile' &&
                        <div>
                            <ModifyAdminProfil
                                logout={logout}
                                setError={setError}
                                setToken={setToken}
                                token={token}
                            />
                        </div>
                    }
                </div>
            }

        </div >
    )
}
