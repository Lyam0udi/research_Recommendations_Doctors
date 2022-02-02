import { useState } from 'react';
import { getSessionObject, setSessionObject, deleteSessionObject } from '../storage/SessionStorage'

export default function useAdminToken() {
    const tokenName = 'adminToken'

    const getToken = () => {
        return getSessionObject(tokenName)
    };

    const [token, setToken] = useState(getToken());

    const saveToken = AdminToken => {
        setSessionObject(tokenName, AdminToken)
        setToken(AdminToken);
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
