import Link from "next/link"
import Image from "next/image"
import styles from "./Card.module.css"

const Card = ({ name, link, image }) => {
	return (
		<article className={`${styles.card} glass`}>
			<Link href={link}>
				<a className={styles.cardLink}>
					<div className={styles.imageWrapper}>
						<Image
							src={`${image ?? "/static/images/beer-photo.jpg"}`}
							width="300"
							height="300"
							layout="responsive"
						/>
					</div>

					<h3 className={styles.cardTitle}>{name}</h3>
				</a>
			</Link>
		</article>
	)
}

export default Card
