import { useRouter } from "next/router"
import Link from "next/link"
import { fetchLocation } from "../../lib/strapi/location"
import { fetchLocations } from "../../lib/strapi/locations"
import styles from "./slug.module.css"

export default function Location({ location }) {
	const router = useRouter()

	const data = location.data[0].attributes
	return (
		<div className={styles.locationContainer}>
			<Link href="/">Back to home</Link>
			<h1>{data.name}</h1>
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
