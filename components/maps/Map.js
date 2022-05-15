import GoogleMapReact from "google-map-react"
import Marker from "./Marker"
import styles from "./Map.module.css"

const Map = ({ lat, lng, address, zoomLevel }) => {
	const handleApiLoaded = (map, maps) => {
		// use map and maps objects
	}
	return (
		<div className={styles.mapContainer}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
				defaultCenter={{ lat: lat, lng: lng }}
				defaultZoom={zoomLevel}
				yesIWantToUseGoogleMapApiInternals
				onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
			>
				<Marker lat={lat} lng={lng} text={address} />
			</GoogleMapReact>
		</div>
	)
}

export default Map
