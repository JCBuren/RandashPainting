"use client"

import React from "react"
import Navbar from "../components/Navbar"

export default function Team() {
	return (
		<>
			<div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-[url('../app/assets/Paint3.jpg')]">
				<div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]" />
				<div className="p-5 text-white z-[2] mt-[-10rem]"></div>
			</div>
			<Navbar />
		</>
	)
}
