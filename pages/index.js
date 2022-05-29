import Head from "next/head"
import { Fragment, useEffect, useRef, useState, useContext } from "react"
import useLocation from "../hooks/use-location"
import { ACTION_TYPES, VenueContext } from "./_app"

import { fetchNearbyVenues } from "../lib/foursquare/nearby-venues"

import Banner from "../components/content/Banner"
import CardGrid from "../components/content/CardGrid"
import LocationButton from "../components/ui/LocationButton"

import styles from "./Home.module.css"

export default function Home({ defaultVenues }) {
	const { handleFindLocation, latLon, locationErrorMsg, isLoading } =
		useLocation()
	const [isDataLoading, setIsDataLoading] = useState(false)
	const [currentVenues, setCurrentVenues] = useState(defaultVenues)
	const [fetchError, setFetchError] = useState("")

	const { dispatch, state } = useContext(VenueContext)
	const { venues } = state

	// Update coffee store list when location changes
	useEffect(() => {
		const fetchData = async () => {
			try {
				setFetchError("")
				const response = await fetchNearbyVenues(
					"beer",
					8,
					latLon.lat.toFixed(4),
					latLon.lon.toFixed(4),
					true
				)

				dispatch({
					type: ACTION_TYPES.SET_VENUES,
					payload: {
						venues: response,
					},
				})

				// setCurrentVenues(response)
				setIsDataLoading(false)
			} catch (error) {
				setFetchError(error.message)
			}
		}
		// Check that latLon isn't empty
		if (latLon.hasOwnProperty("lat")) {
			setIsDataLoading(true)
			fetchData()
		}
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
				{fetchError && <p>{fetchError}</p>}
				{!fetchError && currentVenues && (
					<div
						className={`${styles.cardGridContainer} page-section}`}
						id="card-grid"
						ref={cardGridRef}
					>
						<LocationButton
							text="Find Beer Near You"
							onClick={handleFindLocation}
							isLocationLoading={isLoading}
							isDataLoading={isDataLoading}
							error={locationErrorMsg}
						/>

						<CardGrid data={venues} />
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
