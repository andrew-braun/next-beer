export async function fetchLocation(queryParams) {
	let query = queryParams.join("&")
	const response = await fetch(
		`https://next-beer-cms.herokuapp.com/api/locations?${query}&populate=*`
	)
	const data = await response.json()

	return data
}
