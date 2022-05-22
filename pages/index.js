import Head from "next/head"
import { Fragment, useRef } from "react"
import useLocation from "../hooks/use-location"

import { fetchNearbyVenues } from "../lib/foursquare/nearby-venues"

import Banner from "../components/content/Banner"
import CardGrid from "../components/content/CardGrid"
import LocationButton from "../components/ui/LocationButton"

import styles from "./Home.module.css"

export default function Home({ nearbyVenues }) {
	const { handleFindLocation, latLon, locationErrorMsg, isLoading } =
		useLocation()
	console.log({ latLon, locationErrorMsg })

	const cardGridRef = useRef()
	return (
		<Fragment>
			<Head>
				<title>Next Beer</title>
				<meta name="description" content="Discover good beer near you!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Banner cardGridRef={cardGridRef} />
				{Object.entries(nearbyVenues).length && (
					<div
						className={`${styles.cardGridContainer} page-section}`}
						id="card-grid"
						ref={cardGridRef}
					>
						<LocationButton
							text="Find Beer Near You"
							onClick={handleFindLocation}
							isLoading={isLoading}
						/>
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
