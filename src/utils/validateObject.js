export const isObjectEmpty = (objectName) => {
    const isEmpty = Object.keys(objectName).length === 0
    return isEmpty
}