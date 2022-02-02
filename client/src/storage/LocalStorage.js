export function getLocalObject(objectName) {
    if (typeof objectName === 'string' || objectName instanceof String) {
        const ObjectString = localStorage.getItem(objectName);
        const Object = JSON.parse(ObjectString);
        return Object;
    }
    return null;
}

export function setLocalObject(objectName, object) {
    if (typeof objectName === 'string' || objectName instanceof String) {
        localStorage.setItem(objectName, JSON.stringify(object));
    }
}

export function deleteLocalObject(objectName) {
    if (typeof objectName === 'string' || objectName instanceof String) {
        localStorage.removeItem(objectName)
    }
}