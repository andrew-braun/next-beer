import { fetchVenuePhotos } from "./photos"

export const fetchNearbyVenues = async (
	query,
	limit,
	latitude,
	longitude,
	photos = true
) => {
	const options = {
		method: "GET",
		headers: {
			Accept: "application/json",
			Authorization:
				process.env.FOURSQUARE_API_KEY ??
				"fsq3sbkKphQ9vKtggR3qDfNgTxzxVON4rjkwJSa4j3q8OK8=",
		},
	}

	/* Function that takes in result of completed venues call,
		loops through, fetches photos, and returns array with updated results*/
	const getVenuePhotos = async (venues) => {
		let venuesWithPhotos = []
		for (let venue of venues) {
			try {
				const photos = await fetchVenuePhotos(venue.fsq_id)
				venue.photos = await photos
				venuesWithPhotos.push(venue)
			} catch (error) {
				venuesWithPhotos.push({ error: "No photo available" })
			}
		}

		return venuesWithPhotos
	}

	try {
		/* Get initial venue data */
		const response = await fetch(
			`https://api.foursquare.com/v3/places/nearby?ll=${latitude},${longitude}&query=${query}&v=20220501&limit=${limit}`,
			options
		)
		const data = await response.json()

		let nearbyVenues

		/* If photos param is true, make a call to the photo API using the abstracted function. 
		If it is false, simply return the basic results
		*/
		photos
			? (nearbyVenues = await getVenuePhotos(data.results))
			: (nearbyVenues = await data.results)
		// console.log(nearbyVenues)
		return nearbyVenues
	} catch (error) {
		console.log(error)
	}
}
