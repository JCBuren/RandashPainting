import React from "react"
import Residential from "../components/Residential"
import Commercial from "../components/Commercial"

export default function Gallery({ heading, message }) {
	return (
		<div>
			<Hero
				heading="Painting & Staining"
				message="Servicing Fargo ND & Surrounding Area"
			/>
			<Navbar />
			<Residential />
			<Commercial />
		</div>
	)
}
