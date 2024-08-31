"use client"

import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Image from "next/image"

export default function Team() {
	return (
		<>
			<div
				className="relative mb-12 bg-fixed bg-center bg-cover bg-[url('../app/assets/Van.jpg')]"
				style={{ height: "calc(80vh)" }}
			>
				<div className="absolute inset-0 bg-black/60 z-[1]" />
				<div className="absolute inset-0 flex items-center justify-center z-[2]">
					<div className="p-5 text-white">
						<h2 className="text-5xl mt-20 font-bold">
							About Randash Painting
						</h2>
						<p className="py-5 text-2xl">Three Generations of Painting</p>
					</div>
				</div>
			</div>
			<div className="grid grid-flow-row justify-items-center gap-12 bg-[#F2F3F1]">
				<Image
					src="https://i.imgur.com/LZRhqlr.png"
					alt="/"
					width={980}
					height={620}
					className="rounded-xl flex"
				/>
				<div className="grid grid-cols-1 max-w-[50%] gap-6">
					<h1 className="text-xl">
						My name is Adam Randash. I am the owner of Randash Painting,
						LLC. My crew and I service the Fargo/Moorhead and surrounding
						area, with further travel upon request.{" "}
					</h1>
					<h1 className="text-xl">
						My passion as a painting contractor is to make your home or
						business spectacular! I love to work with families and
						contractors on anything from remodels, to new construction, to
						commercial projects. Our crew is thorough and has high
						attention to detail. Our work ethic and communication skills
						will help get your projects done to perfection! Contact me
						with your ideas and we will help create stunning results in
						your home or business. I will arrive on site to review the
						project and give you my honest thoughts and ideas. My business
						is licensed and insured. We would be happy to hear from you to
						line up an estimate on your next project.
					</h1>
				</div>
				<Image
					src="https://i.imgur.com/EC2hZbp.png"
					alt="/"
					width={1480}
					height={720}
					className="ml-12"
				/>
			</div>
			<Navbar />
			<Footer />
		</>
	)
}
