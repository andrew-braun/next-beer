import Card from "./Card"

const CardGrid = ({ cards }) => {
	const gridContent = cards.map((card) => {
		const { id, attributes } = card
		return (
			<Card
				name={attributes.name}
				link={`/location/${attributes.slug}`}
				key={id}
			/>
		)
	})
	return (
		<div className="card-container">
			<h1>Cards</h1>
			{gridContent}
		</div>
	)
}

export default CardGrid
