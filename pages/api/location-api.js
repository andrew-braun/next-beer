import { fetchNearbyVenues } from "../../lib/foursquare/nearby-venues"

export default function handler(req, res) {
	// Expects string, number, coordinate, coordinate, boolean
	const { term, limit, latitude, longitude, photos } = req.body
	const response = fetchNearbyVenues(term, limit, latitude, longitude, false)
	res.status(200).json(response)
	/*
	console.log(req.body)
	const fetchData = async () => {
		try {
			const response = await fetchNearbyVenues(
				term,
				limit,
				lat.toFixed(4),
				lon.toFixed(4),
				photos
			)
			return response
		} catch (error) {
			console.log(error)
		}
	}
	try {
		const data = fetchNearbyVenues()
		res.status(200).json(data)
	} catch (error) {
		res.status(500).json(error)
	}
    */
}
