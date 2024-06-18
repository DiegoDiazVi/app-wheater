/**
 * Checks if an object is empty.
 *
 * @param {Object} objectName - The object to be checked.
 * @returns {boolean} - Returns true if the object is empty, false otherwise.
 */
export const isObjectEmpty = (objectName) => {
    const isEmpty = Object.keys(objectName).length === 0
    return isEmpty
}