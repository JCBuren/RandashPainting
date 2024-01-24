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
			<div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img3">
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
			<div class="grid grid-rows-1 grid-cols-2 gap-4 justify-center align-middle w-4/5 p-8 m-auto">
				<div class="font-bold text-2xl border-2 border-black rounded-xl p-8">
					Interior Services:
				</div>
				<div class="border-2 border-black rounded-xl p-8 grid grid-cols-2">
					<div class="font-bold text-2xl">Interior Painting:</div>
					<ul>
						<li class="text-xl mx-4 py-1 flex">
							<FaCircleDot size={10} class="mt-2 mx-2" />
							Walls and Ceilings
						</li>
						<li class="text-xl mx-4 py-1 flex">
							<FaCircleDot size={10} class="mt-2 mx-2" />
							Custom Wood Projects
						</li>
					</ul>
					<div class="font-bold text-2xl">Interior Wood Work:</div>
					<ul>
						<li class="text-xl mx-4 py-1 flex">
							<FaCircleDot size={10} class="mt-2 mx-2" />
							Trim & Baseboards
						</li>
						<li class="text-xl mx-4 py-1 flex">
							<FaCircleDot size={10} class="mt-2 mx-2" />
							Ceiling Wood
						</li>
						<li class="text-xl mx-4 py-1 flex">
							<FaCircleDot size={10} class="mt-2 mx-2" />
							Doors
						</li>
					</ul>
				</div>
			</div>
			<Residential />
			<div class="grid grid-rows-1 grid-cols-2 gap-4 justify-center align-middle w-4/5 p-8 m-auto">
				<div class="font-bold text-2xl border-2 border-black rounded-xl p-8">
					Exterior Services:
				</div>
				<div class="border-2 border-black rounded-xl p-8">
					<div class="font-bold text-2xl">Exterior Painting:</div>
					<ul>
						<li class="text-xl mx-4 py-1 flex">
							<FaCircleDot size={10} class="mt-2 mx-2" />
							Stained siding
						</li>
						<li class="text-xl mx-4 py-1 flex">
							<FaCircleDot size={10} class="mt-2 mx-2" />
							Steel siding
						</li>
						<li class="text-xl mx-4 py-1 flex">
							<FaCircleDot size={10} class="mt-2 mx-2" />
							Gutter painting
						</li>
						<li class="text-xl mx-4 py-1 flex">
							<FaCircleDot size={10} class="mt-2 mx-2" />
							Deck / fence staining
						</li>
						<li class="text-xl mx-4 py-1 flex">
							<FaCircleDot size={10} class="mt-2 mx-2" />
							Lake homes
						</li>
						<li class="text-xl mx-4 py-1 flex">
							<FaCircleDot size={10} class="mt-2 mx-2" />
							Pergolas / Columns{" "}
						</li>
					</ul>
				</div>
			</div>
			<Commercial />
		</div>
	)
}
