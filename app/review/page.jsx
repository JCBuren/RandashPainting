import React from "react"
import Navbar from "../components/Navbar"
import Link from "next/link"
import Footer from "../components/Footer"

export default function Review() {
	return (
		<div>
			<Navbar />
			<div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-[url('../app/assets/Paint4.jpg')]">
				<div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]" />
				<div className="grid grid-cols-1 grid-rows-4 justify-between p-4 text-white z-[2] w-full mt-[250px]">
					<h2 className="text-4xl font-bold text-center">
						Check Out our Recent Reviews!
					</h2>
					<div className="grid grid-rows-1 grid-cols-3 gap-20">
						<div className="py-12 px-12 border-4 border-black rounded-xl bg-white text-black opacity-60 font-bold text-xl">Hellow World</div>
						<div className="py-12 px-12 border-4 border-black rounded-xl bg-white text-black opacity-60 font-bold text-xl">Hellow World</div>
						<div className="py-12 px-12 border-4 border-black rounded-xl bg-white text-black opacity-60 font-bold text-xl" >Hellow World</div>
					</div>
					<p className="py-20 text-3xl">
						Have a great experience, click below to leave a review
					</p>
					<Link href="/contact">
						<button className="font-bold text-xl px-10 py-6 border rounded-xl">
							Leave a Review!
						</button>
					</Link>{" "}
				</div>
			</div>
			<Footer />
		</div>
	)
}
