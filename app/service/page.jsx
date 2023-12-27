"use client"
import React from "react"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

export default function Service({ heading, message }) {
	return (
		<div>
			<Hero
				heading="Painting & Staining"
				message="Fargo ND & Surrounding Area"
			/>
			<Navbar />
		</div>
	)
}
