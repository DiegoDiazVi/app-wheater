/**
 * Retrieves the current location coordinates using the browser's geolocation API.
 * @returns {Promise<{latitude: number, longitude: number}>} A promise that resolves to an object containing the latitude and longitude of the current location.
 */
export const getLocation = () => {
    return new Promise((resolve, reject) => {
        const successLocation = (location) => {
            const { coords } = location;
            resolve({ latitude: coords.latitude , longitude: coords.longitude})
        }

        const error = (err) => {
            console.warn(`ERROR(${err.code}): ${err.message}`);
            reject(err)
        }

        navigator.geolocation.getCurrentPosition(successLocation, error);
    })
}