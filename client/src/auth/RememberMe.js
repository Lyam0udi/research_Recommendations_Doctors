import { getLocalObject, setLocalObject, deleteLocalObject } from '../storage/LocalStorage'

export function getLocalToken(tokenName) {
    return getLocalObject(tokenName)
}

export function setLocalToken(tokenName, userToken) {
    setLocalObject(tokenName, userToken)
}

export function deleteLocalToken(tokenName) {
    deleteLocalObject(tokenName)
}