import Card from "./Card"
import styles from "./CardGrid.module.css"

const CardGrid = ({ cards }) => {
	const gridContent = cards.map((card) => {
		const { id, attributes } = card
		const { name, slug, featured_image } = attributes
		return (
			<Card
				title={name}
				link={`/location/${slug}`}
				image={featured_image}
				key={id}
			/>
		)
	})
	return <div className={styles.cardGrid}>{gridContent}</div>
}

export default CardGrid
