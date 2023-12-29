"use client"
import React from "react"
import Navbar from "../components/Navbar"
import Residential from "../components/Residential"
import Commercial from "../components/Commercial"
import Link from "next/link"

export default function Service() {
	return (
		<div>
			<div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img3">
				<div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]" />
				<div className="p-5 text-white z-[2] mt-[-10rem]">
					<h2 className="text-6xl font-bold">Residential & Commercial</h2>
					<p className="py-5 text-2xl">Services Available</p>
					<Link href="/contact">
						<button className="px-8 py-2 border">Request a Quote</button>
					</Link>{" "}
				</div>
			</div>
			<Navbar />
			<div>Hello World</div>
			<Residential />
			<div>Hello World Again</div>
			<Commercial />
		</div>
	)
}
