import React from "react"
import Link from "next/link"

const Hero = ({ heading, message }) => {
	return (
		<div
			className="relative mb-12 bg-fixed bg-center bg-cover bg-[url('../app/assets/Main1.jpg')]"
			style={{ height: "calc(80vh)" }}
		>
			<div className="absolute inset-0 bg-black/60 z-[1]" />
			<div className="absolute inset-0 flex items-center justify-center z-[2]">
				<div className="p-5 text-white text-center max-w-lg mx-auto mt-20 md:mt-32">
					<h2 className="text-3xl md:text-5xl font-bold whitespace-nowrap">
						{heading}
					</h2>
					<p className="py-5 text-lg md:text-xl">{message}</p>
					<Link href="/contact">
						<button className="px-8 py-2 border-2 rounded-xl font-bold">
							Request an Estimate
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Hero
