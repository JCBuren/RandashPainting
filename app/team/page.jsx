"use client"

import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Team() {
	return (
		<>
			<div className="flex items-center justify-center mb-12 bg-fixed bg-center bg-cover bg-cyan-900/50 ">
				<div className="p-5 text-white">
					<h1 className="text-4xl mt-40 pb-10">About Randash Painting</h1>
					<div className="grid grid-cols-2 gap-8">
						<div className="lg:text-xl"> 
							Randash Painting LLC is owned and operated by Adam Randash.
							Adam is a third generation painting contractor. He has been
							working with the family business since 2005. Randash
							Painting has a reputation for unmatched quality throughout
							the Fargo/ Moorhead area and beyond. Adam has excellent
							attention to detail and has perfected his painting skills
							over the years. He is thrilled to take on complex and
							challenging projects. Randash Painting has a small talented
							work crew that will be tedious, courteous, and thorough
							while completing your project.
						</div>
						<img
							src="https://i.imgur.com/qwr6q9j.jpg"
							className="max-w-[75%] max-h-[75%] ml-10"
						/>
					</div>
					<div className="grid lg:grid-cols-3 auto-cols-[300px] gap-6 items-center ">
						<div className="font-bold border-2 rounded-xl p-4">How we started:
							The Randash Painting business was originated by Adam’s
							grandfather, Elmer Randash in 1950. Elmer was part of the
							SEABEES in the Navy. While enlisted during WW2 he served as
							an aircraft painter in California. He brought his painting
							skills home after the war concluded to start the business
							in the FM area.
						</div>

						<div className="font-bold border-2 rounded-xl p-4"> Through the years:
							In 1985 Dave Randash, Elmer’s son took over the business.
							Dave Randash built up a reputation of superior
							craftsmanship for Randash Painting throughout the FM area
							with years of service. He worked with many big builders
							throughout the area over the years.
						</div>
						<div className="font-bold border-2 rounded-xl p-4">
							Dave has now retired, and Adam is proud to be the third
							generation to operate the family business. Adam is honored
							to have learned his skills from his dad and to have a
							business with the highest reputation for quality. Adam
							started his own business after Dave retired in 2021. He has
							been painting in the FM area since 2005 full time.
						</div>
					</div>
				</div>
			</div>
			<Navbar />
			<Footer />
		</>
	)
}
