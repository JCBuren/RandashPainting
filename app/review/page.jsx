import React from "react"
import Navbar from "../components/Navbar"
import Link from "next/link"

export default function Review() {
	return (
		<div>
			<Navbar />
			<div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img3">
				<div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]" />
				<div className="p-5 text-white z-[2] mt-[-10rem]">
					<h2 className="text-6xl font-bold">Leave us a Review below!</h2>
					<p className="py-5 text-3xl">Check Out our Recent Reviews!</p>
					<Link href="/contact">
						<button className="px-8 py-2 border">Request a Quote</button>
					</Link>{" "}
				</div>
			</div>
		</div>
	)
}
