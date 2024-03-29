"use client"

import React from "react"
import Navbar from "../components/Navbar"
import Slider from "./Slider"
import { SliderData } from "./SliderData"
import Link from "next/link"
import Footer from "../components/Footer"

export default function Gallery({ heading, message }) {
	return (
		<div className="bg-[#F2F3F1]">
			<div
				className="relative mb-12 bg-fixed bg-center bg-cover bg-[url('../app/assets/Paint1.jpg')]"
				style={{ height: "calc(80vh)" }}
			>
				<div className="absolute inset-0 bg-black/60 z-[1]" />
				<div className="absolute inset-0 flex items-center justify-center z-[2]">
					<div className="p-5 text-white">
						<h2 className="text-5xl mt-20 font-bold">Project Gallery</h2>
						<p className="py-5 text-2xl">
							Here are a Few of Our Recent Projects for Inspiration
						</p>
						<p className="pb-6 text-2xl">Contact Us for an Estimate</p>
						<Link href="/contact">
							<button className="px-8 py-2 border-2 rounded-xl font-bold">
								Request an Estimate!
							</button>
						</Link>{" "}
					</div>
				</div>
			</div>
			<Navbar />
			<div className="bg-[#F2F3F1]">
				<Slider slides={SliderData} />
			</div>
			<Footer />
		</div>
	)
}
