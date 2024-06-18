export const getLocation = () => {
    return new Promise((resolve, reject) => {
        const succesLocation = (location) => {
            const { coords } = location;
            resolve({ latitude: coords.latitude , longitude: coords.longitude})
        }

        const error = (err) => {
            console.warn(`ERROR(${err.code}): ${err.message}`);
            reject(err)
        }

        navigator.geolocation.getCurrentPosition(succesLocation, error);
    })
}