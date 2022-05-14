import Head from "next/head"
import Image from "next/image"
import { Fragment } from "react"
import styles from "../styles/Home.module.css"
import { fetchNearbyVenues } from "../lib/foursquare/nearby-venues"
import { fetchVenue } from "../lib/foursquare/venue"
import Banner from "../components/content/Banner"
import CardGrid from "../components/content/CardGrid"

export default function Home({ venue, nearbyVenues }) {
	console.log(venue)
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
				{Object.entries(nearbyVenues).length && (
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
	const nearbyVenues = await fetchNearbyVenues("beer", 8, "41.7072", "44.7748")
	const venue = await fetchVenue("5a187743ccad6b307315e6fe")
	return {
		props: {
			nearbyVenues,
			venue,
		},
	}
}
