"use client"
import React from "react"
import Navbar from "../components/Navbar"
import Residential from "../components/Residential"
import Commercial from "../components/Commercial"
import Link from "next/link"
import { FaCircleDot } from "react-icons/fa6"

export default function Service() {
	return (
		<div>
			<div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-[url('../app/assets/Fitness.jpg')]">
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
			<div className="grid grid-rows-1 grid-cols-2 gap-4 justify-center align-middle w-4/5 p-8 m-auto">
				<div className="border-2 border-black rounded-xl p-8 grid grid-cols-2">
					<div className="font-bold text-2xl">Interior Painting:</div>
					<ul>
						<li className="text-xl mx-4 py-1 flex">
							<FaCircleDot size={10} className="mt-2 mx-2" />
							Walls and Ceilings
						</li>
						<li className="text-xl mx-4 py-1 flex">
							<FaCircleDot size={10} className="mt-2 mx-2" />
							Drywall Repair
						</li>
						<li className="text-xl mx-4 py-1 flex">
							<FaCircleDot size={10} className="mt-2 mx-2" />
							Custom Wood Projects
						</li>
					</ul>
					<div className="font-bold text-2xl ">Interior Wood Work:</div>
					<ul>
						<li className="text-xl mx-4 py-1 flex">
							<FaCircleDot size={10} className="mt-2 mx-2" />
							Trim & Baseboards
						</li>
						<li className="text-xl mx-4 py-1 flex">
							<FaCircleDot size={10} className="mt-2 mx-2" />
							Ceiling Wood
						</li>
						<li className="text-xl mx-4 py-1 flex">
							<FaCircleDot size={10} className="mt-2 mx-2" />
							Doors
						</li>
					</ul>
				</div>
				<div className="border-2 border-black rounded-xl p-8 grid grid-cols-2">
					<div className="font-bold text-2xl">Cabinet Services:</div>
					<ul>
						<li className="text-xl mx-4 py-1 flex">
							<FaCircleDot size={10} className="mt-2 mx-2" />
							Sanding and Re-painting
						</li>
						<li className="text-xl mx-4 py-1 flex">
							<FaCircleDot size={10} className="mt-2 mx-2" />
							Cabinet Framing
						</li>
					</ul>
					<div className="font-bold text-2xl">Concrete Painting:</div>
					<ul>
						<li className="text-xl mx-4 py-1 flex">
							<FaCircleDot size={10} className="mt-2 mx-2" />
							Concrete Walls
						</li>
						<li className="text-xl mx-4 py-1 flex">
							<FaCircleDot size={10} className="mt-2 mx-2" />
							Concrete Floors
						</li>
						<li className="text-xl mx-4 py-1 flex">
							<FaCircleDot size={10} className="mt-2 mx-2" />
							Concrete Ceilings
						</li>
					</ul>
				</div>
			</div>
			<Residential />
			<div className="w-4/5 p-8 m-auto justify-items-center">
				<div className="border-2 border-black rounded-xl p-4">
					<div className="font-bold text-2xl text-center py-4">
						Exterior Painting:
					</div>
					<ul className="grid grid-cols-3 mx-4 ">
						<li className="text-xl mx-4 py-1 flex ">
							<FaCircleDot size={10} className="mt-2 mx-2" />
							Stained siding
						</li>
						<li className="text-xl mx-4 py-1 flex">
							<FaCircleDot size={10} className="mt-2 mx-2" />
							Steel siding
						</li>
						<li className="text-xl mx-4 py-1 flex">
							<FaCircleDot size={10} className="mt-2 mx-2" />
							Gutter painting
						</li>
						<li className="text-xl mx-4 py-1 flex">
							<FaCircleDot size={10} className="mt-2 mx-2" />
							Deck / fence staining
						</li>
						<li className="text-xl mx-4 py-1 flex">
							<FaCircleDot size={10} className="mt-2 mx-2" />
							Lake homes
						</li>
						<li className="text-xl mx-4 py-1 flex">
							<FaCircleDot size={10} className="mt-2 mx-2" />
							Pergolas / Columns
						</li>
					</ul>
				</div>
			</div>
			<Commercial />
		</div>
	)
}
