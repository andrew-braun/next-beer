import Link from "next/link"
import Image from "next/image"
import styles from "./Card.module.css"

const Card = ({ title, link, image }) => {
	const featuredImage = image.data.attributes.formats.small
		? image.data.attributes.formats.small.url
		: image.data.attributes.url
	console.log(featuredImage)
	return (
		<article className={styles.card}>
			<Link href={link}>
				<a>
					<div className={styles.imageWrapper}>
						{featuredImage && (
							<Image
								src={featuredImage}
								width="300"
								height="300"
								layout="responsive"
							/>
						)}
					</div>

					<h3 className={styles.cardTitle}>{title}</h3>
				</a>
			</Link>
		</article>
	)
}

export default Card
