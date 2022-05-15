import Head from "next/head"
import Image from "next/image"
import { Fragment } from "react"
import styles from "../styles/Home.module.css"
import { fetchNearbyVenues } from "../lib/foursquare/nearby-venues"
import { fetchVenue } from "../lib/foursquare/venue"
import Banner from "../components/content/Banner"
import CardGrid from "../components/content/CardGrid"
import { fetchVenuePhotos } from "../lib/foursquare/photos"

export default function Home({ nearbyVenues }) {
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
						<CardGrid data={nearbyVenues} />
					</div>
				)}
			</main>
		</Fragment>
	)
}

export async function getStaticProps({ params }) {
	// Get list of nearby venues
	const nearbyVenues = await fetchNearbyVenues("beer", 8, "40.6864", "-73.9791")

	return {
		props: {
			nearbyVenues,
		},
	}
}
