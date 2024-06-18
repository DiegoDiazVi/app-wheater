import { useEffect, useState } from 'react'
import { getLocation } from '../utils/getLocation';

export const useGetLocation = () => {
    const [infoLocation, setInfoLocation] = useState({});
    useEffect(() => {
        const fetchLocation = async () => {
        try {
            const location = await getLocation()
            setInfoLocation(location)
        } catch (error) {
            console.warn(error)
        }
        }
        fetchLocation()
    }, []);
    return { infoLocation }
}