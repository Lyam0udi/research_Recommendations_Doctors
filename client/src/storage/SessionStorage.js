export function getSessionObject(objectName) {
    if (typeof objectName === 'string' || objectName instanceof String) {
        const ObjectString = sessionStorage.getItem(objectName);
        const Object = JSON.parse(ObjectString);
        return Object;
    }
    return null;
}

export function setSessionObject(objectName, object) {
    if (typeof objectName === 'string' || objectName instanceof String) {
        sessionStorage.setItem(objectName, JSON.stringify(object));
    }
}

export function deleteSessionObject(objectName) {
    if (typeof objectName === 'string' || objectName instanceof String) {
        sessionStorage.removeItem(objectName)
    }
}
