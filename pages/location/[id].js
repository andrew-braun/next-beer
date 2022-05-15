import { useRouter } from "next/router"
import Image from "next/image"

import { fetchNearbyVenues } from "../../lib/foursquare/nearby-venues"

import styles from "./id.module.css"

export default function Venue({ venue }) {
	const { name, geocodes, location } = venue
	console.log(venue)
	const router = useRouter()
	if (router.isFallback) {
		return <div>Loading...</div>
	}
	return (
		<div className={styles.pageContainer}>
			<div className={styles.contentContainer}>
				<aside className={styles.sidebar}>
					<h1 className={styles.name}>{name}</h1>
					{/*
					<div class={styles.imageContainer}>
						<Image
							src={featuredImage}
							layout="responsive"
							width="100%"
							height="100%"
						/>
					</div>
					*/}
				</aside>
				<div className={styles.mainContent}>
					<div className={styles.contentText}>
						<div className={styles.address}>
							<p>
								{location.address} - {location.locality}, {location.postcode}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export async function getStaticPaths() {
	const nearbyVenues = await fetchNearbyVenues("beer", 8, "40.6864", "-73.9791")

	const pathParams = await nearbyVenues.results.map((venue) => {
		return { params: { id: venue.fsq_id.toString() } }
	})

	return {
		paths: pathParams,
		fallback: true,
	}
}

export async function getStaticProps({ params }) {
	const id = params.id

	const nearbyVenues = await fetchNearbyVenues("beer", 8, "40.6864", "-73.9791")
	const venue = await nearbyVenues.results.find((venue) => venue.fsq_id === id)

	return {
		props: {
			venue,
		},
	}
}
