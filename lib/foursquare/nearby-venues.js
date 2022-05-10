export const fetchNearbyVenues = async (query, latitude, longitude) => {
	const options = {
		method: "GET",
		headers: {
			Accept: "application/json",
			Authorization: process.env.FOURSQUARE_API_KEY,
		},
	}

	try {
		const response = await fetch(
			`https://api.foursquare.com/v3/places/nearby?ll=${latitude},${longitude}&query=${query}&v=20220501&limit=8`,
			options
		)
		console.log(response)
		const data = await response.json()
		console.log(data)
		return data
	} catch (error) {
		console.log(error)
	}
}
