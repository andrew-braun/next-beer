import { useState } from "react"

const useLocation = () => {
	const [locationErrorMsg, setLocationErrorMsg] = useState("")
	const [latLon, setLatLon] = useState({})
	const [isLoading, setIsLoading] = useState(false)

	const success = (position) => {
		const lat = position.coords.latitude
		const lon = position.coords.longitude
		setLatLon({ lat, lon })
		setLocationErrorMsg("")
		setIsLoading(false)
	}
	const error = () => {
		setLocationErrorMsg("Unable to retrieve location")
		setIsLoading(false)
	}

	const handleFindLocation = () => {
		setIsLoading(true)

		if (!navigator.geolocation) {
			setLocationErrorMsg("Your browser doesn't support geolocation")
			return locationErrorMsg
		}
		navigator.geolocation.getCurrentPosition(success, error)
	}

	return { latLon, handleFindLocation, locationErrorMsg, isLoading }
}

export default useLocation
