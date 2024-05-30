import React from "react"
import Navbar from "../components/Navbar"
import Link from "next/link"
import Footer from "../components/Footer"
import ReviewSlider from "./ReviewSlider"

export default function Review() {
	const reviews = [
		{
			author: "Melanie Rheault Noonan",
			content:
				"Hands down best painters. Meticulous and clean up so well you hardly know they were there. Great guys with great work ethic - can't find that too often anymore. I wouldn't hire anyone else!",
		},
		{
			author: "Jeremy Leichtenberg",
			content: "Was happy with the work they did for me! Great job!",
		},
		{
			author: "Janelle Brian",
			content: "Great Work and Customer Service!!!",
		},
		{
			author: "Trevor Raymond",
			content:
				"Randash painting has always provided us with great painting and staining. They are always dependable and provide great attention to detail.",
		},
		{
			author: "Lindsay Parsley Olson",
			content:
				"Thank you Adam and crew for doing a wonderful job on our house!! I know it was a big project, your efficiency is impressive!",
		},
	]

	return (
		<>
			<div
				className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-[url('../app/assets/Paint4.jpg')]"
				style={{ height: "calc(80vh)" }}
			>
				<Navbar />
				<div className="container mx-auto mt-12 py-8">
					<ReviewSlider reviews={reviews} />
				</div>
			</div>
			<Footer />
		</>
	)
}
