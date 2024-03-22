"use client"

import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Image from "next/image"

export default function Team() {
	return (
		<>
			<div
				className="relative mb-12 bg-fixed bg-center bg-cover bg-[url('../app/assets/Fitness.jpg')]"
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
					src="https://i.imgur.com/DPvQ2ZA.png"
					alt="/"
					width={980}
					height={620}
					className="rounded-xl flex"
				/>
				<div className="grid grid-cols-1 max-w-[50%] gap-6">
					<h1 className="text-xl">
						My name is Adam Randash. I am a painting contractor and owner
						of Randash Painting, LLC. I service the Fargo/Moorhead and
						surrounding area, with further travel upon request.{" "}
					</h1>
					<h1 className="text-xl">
						My passion as a painting contractor is to make a home
						beautiful! With all the different quality touches I can
						provide, I am thorough and pay high attention to detail. My
						work ethic and communication skills will help get your
						projects done to perfection. Over the years I have worked with
						many high end contractors in the area on new homes. I also
						love to work with families on projects in their current homes
						or businesses. Contact me with your ideas and I will help
						create stunning results in your home or business. I am
						licensed, insured and would be happy to hear from you to line
						up a quote on your next project.
					</h1>
				</div>
				<Image
					src="https://i.imgur.com/EC2hZbp.png"
					alt="/"
					width={1720}
					height={980}
					className="ml-12"
				/>
			</div>
			<Navbar />
			<Footer />
		</>
	)
}
