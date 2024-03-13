"use client"

import React from "react"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Slider from "./Slider"
import { SliderData } from "./SliderData"
import Link from "next/link"
import Footer from "../components/Footer"

export default function Gallery({ heading, message }) {
	return (
		<div className="bg-[#F2F3F1]">
			<div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-[url('../app/assets/Paint1.jpg')]">
				<div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]" />
				<div className="p-5 text-white z-[2] mt-[-10rem] ">
					<h2 className="text-5xl mt-20 font-bold">Project Gallery</h2>
					<p className="py-5 text-2xl">
						Here are a Few of Our Recent Projects for Inspiration
					</p>
					<p className="pb-6 text-2xl">Contact Us for a Quote</p>
					<Link href="/contact">
						<button className="px-8 py-2 border-2 rounded-xl font-bold">
							Request a Quote!
						</button>
					</Link>{" "}
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
