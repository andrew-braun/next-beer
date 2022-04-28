export async function fetchLocations(queryParams) {
	let query = queryParams ? queryParams.join("&") : []

	const response = await fetch(
		`https://next-beer-cms.herokuapp.com/api/locations?${query}`
	)
	const data = await response.json()

	return data
}
