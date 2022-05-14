import Card from "./Card"
import styles from "./CardGrid.module.css"

const CardGrid = ({ data }) => {
	const gridContent = data.map((card) => {
		const { fsq_id, name, link, location } = card
		let featuredImage
		return (
			<Card
				name={name}
				link={`/location/${fsq_id}`}
				image={featuredImage ?? "/static/images/beer-photo.jpg"}
				key={fsq_id}
			/>
		)
	})
	return <div className={styles.cardGrid}>{gridContent}</div>
}

export default CardGrid
