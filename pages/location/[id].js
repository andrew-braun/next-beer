import { useRouter } from "next/router"
import Image from "next/image"
import Map from "../../components/maps/Map"

import { fetchNearbyVenues } from "../../lib/foursquare/nearby-venues"

import styles from "./id.module.css"

export default function Venue({ venue }) {
	const { name, geocodes, location, photos } = venue
	const { latitude, longitude } = geocodes.main
	let imageUrl = `${photos[0].prefix}1000x1000${photos[0].suffix}`

	const router = useRouter()
	if (router.isFallback) {
		return <div>Loading...</div>
	}
	console.log(venue)
	return (
		<div className={styles.pageContainer}>
			<div className={styles.contentContainer}>
				<aside className={styles.sidebar}>
					<h1 className={styles.name}>{name}</h1>

					<div className={styles.imageContainer}>
						<Image
							src={imageUrl ?? "/static/images/beer-photo.jpg"}
							layout="responsive"
							width="100%"
							height="100%"
						/>
					</div>
				</aside>
				<div className={styles.mainContent}>
					<div className={styles.contentText}>
						<div className={styles.address}>
							<p>
								{location.address} - {location.locality}, {location.postcode}
							</p>
							<p>{location.neighborhood ?? ""}</p>
						</div>
					</div>
					<Map
						lat={latitude}
						lng={longitude}
						zoomLevel={12}
						address={`${location.address}, ${location.locality}, ${location.postcode}`}
					/>
				</div>
			</div>
		</div>
	)
}

export async function getStaticPaths() {
	const nearbyVenues = await fetchNearbyVenues(
		"beer",
		8,
		"40.6864",
		"-73.9791",
		false
	)

	const pathParams = await nearbyVenues.map((venue) => {
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
	const venue = await nearbyVenues.find((venue) => venue.fsq_id === id)

	return {
		props: {
			venue,
		},
	}
}
