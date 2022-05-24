import Head from "next/head"
import { Fragment, useEffect, useRef, useState } from "react"
import useLocation from "../hooks/use-location"

import { fetchNearbyVenues } from "../lib/foursquare/nearby-venues"

import Banner from "../components/content/Banner"
import CardGrid from "../components/content/CardGrid"
import LocationButton from "../components/ui/LocationButton"

import styles from "./Home.module.css"

export default function Home({ defaultVenues }) {
	const { handleFindLocation, latLon, locationErrorMsg, isLoading } =
		useLocation()
	const [currentVenues, setCurrentVenues] = useState({})

	// Update coffee store list when location changes
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetchNearbyVenues(
					"beer",
					8,
					latLon.lat.toFixed(4),
					latLon.lon.toFixed(4),
					true
				)
				setCurrentVenues(response)
			} catch (error) {
				console.log(error)
			}
		}
		// Check that latLon isn't empty
		if (latLon.hasOwnProperty("lat")) {
			fetchData()
		}
		console.log(currentVenues)
	}, [latLon])

	// Establish a reference to the card grid section so the banner button can scroll to it
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
				{Object.entries(defaultVenues).length && (
					<div
						className={`${styles.cardGridContainer} page-section}`}
						id="card-grid"
						ref={cardGridRef}
					>
						<LocationButton
							text="Find Beer Near You"
							onClick={handleFindLocation}
							isLoading={isLoading}
							error={locationErrorMsg}
						/>
						<CardGrid
							data={currentVenues.length ? currentVenues : defaultVenues}
						/>
					</div>
				)}
			</main>
		</Fragment>
	)
}

export async function getStaticProps({ params }) {
	// Get list of nearby venues
	// Set initial display to New York
	const defaultVenues = await fetchNearbyVenues(
		"beer",
		8,
		"40.6864",
		"-73.9791"
	)

	return {
		props: {
			defaultVenues,
		},
	}
}
