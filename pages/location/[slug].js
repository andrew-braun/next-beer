import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"
import { fetchLocation } from "../../lib/strapi/location"
import { fetchLocations } from "../../lib/strapi/locations"
import styles from "./slug.module.css"

export default function Location({ location }) {
	const { name, description, featured_image } = location.data[0].attributes
	const featuredImage = featured_image.data.attributes.formats.small
		? featured_image.data.attributes.formats.small.url
		: featured_image.data.attributes.url

	const router = useRouter()
	if (router.isFallback) {
		return <div>Loading...</div>
	}
	return (
		<div className={styles.pageContainer}>
			<div class={styles.contentContainer}>
				<aside className={styles.sidebar}>
					<h1 className={styles.name}>{name}</h1>
					<div class={styles.imageContainer}>
						<Image
							src={featuredImage}
							layout="responsive"
							width="100%"
							height="100%"
						/>
					</div>
				</aside>
				<div class={styles.mainContent}>
					<div className={styles.contentText}>
						<p>{description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export async function getStaticPaths() {
	const locations = await fetchLocations([`fields[1]=slug`])

	const pathParams = await locations.data.map((location) => {
		return { params: { slug: location.attributes.slug } }
	})

	return {
		paths: pathParams,
		fallback: true,
	}
}

export async function getStaticProps({ params }) {
	const { slug } = params

	const location = await fetchLocation([`filters[slug][$eq]=${slug}`])

	return {
		props: {
			location,
		},
	}
}
