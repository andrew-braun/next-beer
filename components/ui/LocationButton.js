import { useState, useEffect } from "react"
import styles from "./LocationButton.module.css"

export default function LocationButton({ text, onClick, isLoading }) {
	const [buttonText, setButtonText] = useState()
	let classes = isLoading
		? `button ${styles.locationButton} loadingButton`
		: `button ${styles.locationButton}`

	useEffect(() => {
		console.log(isLoading)
		isLoading ? setButtonText("Locating...") : setButtonText(text)
	}, [isLoading, buttonText])

	return (
		<button className={classes} onClick={onClick}>
			{buttonText}
		</button>
	)
}
