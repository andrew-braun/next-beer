import Card from "./Card"
import styles from "./CardGrid.module.css"

const CardGrid = ({ data }) => {
	const gridContent = data.map((venue) => {
		const { fsq_id, name, link, location } = venue

		let imageUrl =
			venue.photos && venue.photos[0]
				? `${venue.photos[0].prefix}500x500${venue.photos[0].suffix}`
				: null

		return (
			<Card
				name={name}
				link={`/location/${fsq_id}`}
				image={imageUrl ?? "/static/images/beer-photo.jpg"}
				key={fsq_id}
			/>
		)
	})
	return <div className={styles.cardGrid}>{gridContent}</div>
}

export default CardGrid
