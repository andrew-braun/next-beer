// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
	let query = ""
	if (req.query) {
		for (const [key, value] of Object.entries(req.query)) {
			query += `${key}=${value}&`
		}
	}
	console.log(query)
	const response = await fetch(
		`https://next-beer-cms.herokuapp.com/api/locations?${query}`
	)
	const data = await response.json()

	res.status(200).json(data)
}
