import Head from "next/head"
import Image from "next/image"
import { Fragment } from "react"
import styles from "../styles/Home.module.css"
import { fetchLocations } from "../lib/strapi/locations"
import { fetchNearbyVenues } from "../lib/foursquare/nearby-venues"
import Banner from "../components/content/Banner"
import CardGrid from "../components/content/CardGrid"

export default function Home({ locations, nearbyVenues }) {
	console.log(nearbyVenues)
	return (
		<Fragment>
			<Head>
				<title>Next Beer</title>
				<meta name="description" content="Discover good beer near you!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Banner />
				{Object.entries(locations).length && (
					<div className={`${styles.cardGridContainer} page-section`}>
						<h2 className={`sectionHeading`}>Beer Locations</h2>
						<CardGrid data={nearbyVenues.results} />
					</div>
				)}
			</main>
		</Fragment>
	)
}

export async function getStaticProps({ params }) {
	const locations = await fetchLocations()

	const nearbyVenues = await fetchNearbyVenues("beer", "41.7072", "44.7748")

	return {
		props: {
			locations,
			nearbyVenues,
		},
	}
}
