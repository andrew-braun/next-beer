export const fetchVenue = async (id) => {
	const options = {
		method: "GET",
		headers: {
			Accept: "application/json",
			Authorization: process.env.FOURSQUARE_API_KEY,
		},
	}

	try {
		const response = await fetch(
			`https://api.foursquare.com/v3/places/${id}`,
			options
		)
		const data = await response.json()
		console.log(data)
		return data
	} catch (error) {
		console.log(error)
	}
}
