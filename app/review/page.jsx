import React from "react"
import Navbar from "../components/Navbar"
import Link from "next/link"
import Footer from "../components/Footer"
import ReviewSlider from "./ReviewSlider"
import { ReviewData } from "./ReviewData"

export default function Review() {
	return (
		<>
			<Navbar />
			<div
				className="flex items-center justify-center bg-fixed bg-center bg-cover bg-[url('../app/assets/Paint4.jpg')]"
				style={{ height: "calc(90vh)", paddingTop: "7rem" }}
			>
				<div className="mt-16">
					<ReviewSlider slides={ReviewData} />
				</div>
			</div>
			<Footer />
		</>
	)
}
