import { Icon } from "@iconify/react"
import styles from "./Marker.module.css"

const Marker = ({ lat, lng, text }) => {
	return (
		<div className={styles.markerContainer}>
			<Icon icon="jam:map-marker" width="48" height="48" />
		</div>
	)
}
export default Marker
