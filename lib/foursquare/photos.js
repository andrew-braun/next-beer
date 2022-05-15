export const fetchVenuePhotos = async (id) => {
	const options = {
		method: "GET",
		headers: {
			Accept: "application/json",
			Authorization: process.env.FOURSQUARE_API_KEY,
		},
	}

	try {
		const response = await fetch(
			`https://api.foursquare.com/v3/places/${id}/photos`,
			options
		)
		const data = await response.json()

		return data
	} catch (error) {
		console.log(error)
	}
}
