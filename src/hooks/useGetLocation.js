import { useEffect, useState } from 'react'
import { getLocation } from '../utils/getLocation';

/**
 * Custom hook to get the user's location information.
 * @returns {Object} The location information.
 */
export const useGetLocation = () => {
    const [infoLocation, setInfoLocation] = useState({});

    useEffect(() => {
        /**
         * Fetches the user's location information.
         * @returns {Promise<Object>} The location information.
         */
        const fetchLocation = async () => {
            try {
                const location = await getLocation();
                setInfoLocation(location);
            } catch (error) {
                console.warn(error);
            }
        };

        fetchLocation();
    }, []);

    return { infoLocation };
};
