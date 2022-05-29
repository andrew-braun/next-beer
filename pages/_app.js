import { Fragment, createContext, useReducer } from "react"
import "../styles/globals.css"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"

export const VenueContext = createContext()

export const ACTION_TYPES = {
	SET_LAT_LON: "SET_LAT_LON",
	SET_VENUES: "SET_COFFEE_STORES",
}

const venueReducer = (state, action) => {
	switch (action.type) {
		case ACTION_TYPES.SET_LAT_LON: {
			return { ...state, lat: action.payload.lat, lon: action.payload.lon }
		}
		case ACTION_TYPES.SET_VENUES: {
			return { ...state, venues: action.payload.venues }
		}
		default:
			throw new Error(`Unhandled action type: ${action.type}`)
	}
}

const VenueProvider = ({ children }) => {
	const initialState = {
		lat: "",
		lon: "",
		venues: [],
	}
	const [state, dispatch] = useReducer(venueReducer, initialState)

	return (
		<VenueContext.Provider value={{ state, dispatch }}>
			{children}
		</VenueContext.Provider>
	)
}
function MyApp({ Component, pageProps }) {
	return (
		<VenueProvider>
			<Fragment>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</Fragment>
		</VenueProvider>
	)
}

export default MyApp
