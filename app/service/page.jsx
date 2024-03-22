"use client"
import React from "react"
import Navbar from "../components/Navbar"
import Residential from "../components/Residential"
import Commercial from "../components/Commercial"
import Link from "next/link"
import { FaCircleDot } from "react-icons/fa6"
import Footer from "../components/Footer"

export default function Service() {
	return (
		<div>
			<div
				className="relative mb-12 bg-fixed bg-center bg-cover bg-[url('../app/assets/Fitness.jpg')]"
				style={{ height: "calc(80vh)" }}
			>
				<div className="absolute inset-0 bg-black/60 z-[1]" />
				<div className="absolute inset-0 flex items-center justify-center z-[2]">
					<div className="p-5 text-white">
						<h2 className="text-5xl mt-20 font-bold">Services Offered</h2>
						<p className="py-5 text-2xl">
							All Services are Available for Residential & Commercial
						</p>
						<Link href="/contact">
							<button className="px-8 py-2 border-2 rounded-xl font-bold">
								Request an Estimate
							</button>
						</Link>{" "}
					</div>
				</div>
			</div>
			<Navbar />
			<div className="bg-[#F2F3F1]">
				<div className="grid grid-rows-1 md:grid-cols-2 gap-4 justify-center align-middle w-4/5 p-8 m-auto sm:grid-cols-1 ">
					<div className=" p-8 lg:grid grid-cols-2 ">
						<div className="font-bold lg:text-2xl sm:text-sm">
							Interior Painting:
						</div>
						<ul>
							<li className="lg:text-xl mx-2 py-1 flex">
								<FaCircleDot size={10} className="mt-2 mx-2" />
								Walls and Ceilings
							</li>
							<li className="lg:text-xl mx-2 py-1 flex">
								<FaCircleDot size={10} className="mt-2 mx-2" />
								Drywall Repair
							</li>
							<li className="lg:text-xl mx-2 py-1 flex">
								<FaCircleDot size={10} className="mt-2 mx-2" />
								Custom Wood Projects
							</li>
						</ul>
						<div className="font-bold lg:text-2xl py-4">
							Interior Wood Work:
						</div>
						<ul>
							<li className="lg:text-xl mx-2 py-1 flex">
								<FaCircleDot size={10} className="mt-2 mx-2" />
								Trim & Baseboards
							</li>
							<li className="lg:text-xl mx-2 py-1 flex">
								<FaCircleDot size={10} className="mt-2 mx-2" />
								Ceiling Wood
							</li>
							<li className="lg:text-xl mx-2 py-1 flex">
								<FaCircleDot size={10} className="mt-2 mx-2" />
								Doors
							</li>
						</ul>
					</div>
					<div className=" p-8 lg:grid grid-cols-2">
						<div className="font-bold lg:text-2xl sm:text-sm">
							Cabinet Services:
						</div>
						<ul>
							<li className="lg:text-xl mx-2 py-1 flex">
								<FaCircleDot size={10} className="mt-2 mx-2" />
								Sanding and Re-Finishing
							</li>
							<li className="lg:text-xl mx-2 py-1 flex">
								<FaCircleDot size={10} className="mt-2 mx-2" />
								Cabinet Frame Painting
							</li>
						</ul>
						<div className="font-bold lg:text-2xl">
							Concrete Painting:
						</div>
						<ul>
							<li className="lg:text-xl mx-2 py-1 flex">
								<FaCircleDot size={10} className="mt-2 mx-2" />
								Concrete Walls
							</li>
							<li className="lg:text-xl mx-2 py-1 flex">
								<FaCircleDot size={10} className="mt-2 mx-2" />
								Concrete Floors
							</li>
							<li className="lg:text-xl mx-2 py-1 flex">
								<FaCircleDot size={10} className="mt-2 mx-2" />
								Concrete Ceilings
							</li>
						</ul>
					</div>
				</div>
				<Residential />
				<div className="w-4/5 p-8 m-auto justify-items-center">
					<div className=" p-4 ">
						<div className="font-bold text-2xl text-center py-4">
							Exterior Painting:
						</div>
						<ul className="grid lg:grid-cols-3 mx-4 ">
							<li className="lg:text-xl mx-2 py-1 flex ">
								<FaCircleDot size={10} className="mt-2 mx-2" />
								Stained Siding
							</li>
							<li className="lg:text-xl mx-2 py-1 flex">
								<FaCircleDot size={10} className="mt-2 mx-2" />
								Steel Siding
							</li>
							<li className="lg:text-xl mx-2 py-1 flex">
								<FaCircleDot size={10} className="mt-2 mx-2" />
								Gutter Painting
							</li>
							<li className="lg:text-xl mx-2 py-1 flex">
								<FaCircleDot size={10} className="mt-2 mx-2" />
								Deck / Fence Staining
							</li>
							<li className="lg:text-xl mx-2 py-1 flex">
								<FaCircleDot size={10} className="mt-2 mx-2" />
								Lake Homes
							</li>
							<li className="lg:text-xl mx-2 py-1 flex">
								<FaCircleDot size={10} className="mt-2 mx-2" />
								Pergolas / Columns
							</li>
						</ul>
					</div>
				</div>
				<Commercial />
			</div>
			<Footer />
		</div>
	)
}
