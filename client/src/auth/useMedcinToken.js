import { useState } from 'react';
import { getSessionObject, setSessionObject, deleteSessionObject } from '../storage/SessionStorage'

export default function useMedcinToken() {
    const tokenName = 'medcinToken'

    const getToken = () => {
        return getSessionObject(tokenName)
    };

    const [token, setToken] = useState(getToken());

    const saveToken = MedcinToken => {
        setSessionObject(tokenName, MedcinToken)
        setToken(MedcinToken);
    };

    const logout = () => {
        deleteSessionObject(tokenName)
        setToken(null);
    }

    return {
        setToken: saveToken,
        logout,
        token
    }
}
