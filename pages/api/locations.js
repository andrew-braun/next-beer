// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
	const response = await fetch(
		"https://next-beer-cms.herokuapp.com/api/locations"
	)
	const data = await response.json()

	res.status(200).json(data)
}
