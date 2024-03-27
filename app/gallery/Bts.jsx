"use client"
import Image from "next/legacy/image"
import React, { useState } from "react"
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"
import { SliderData } from "./SliderData"
import { BtsData } from "./BtsData"

const Bts = ({ slides }) => {
	const [current, setCurrent] = useState(0)
	const length = slides.length

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null
	}

	return (
		<div id="gallery" className="max-w-[1700px] mx-auto p-6 ">
			<div className="relative flex justify-center p-4">
				{BtsData.map((slide, index) => {
					return (
						<div
							key={index}
							className={
								index === current
									? "opacity-[1] ease-in duration-1000"
									: "opacity-0"
							}
						>
							<FaArrowCircleLeft
								onClick={prevSlide}
								className="absolute top-[50%] left-[20px] text-gray-700 cursor-pointer select-none z-[2]"
								size={50}
							/>
							{index === current && (
								<Image
									src={slide.src}
									alt="/"
									width="1440"
									height="820"
									objectFit="cover"
								/>
							)}
							<FaArrowCircleRight
								onClick={nextSlide}
								className="absolute top-[50%] right-[20px] text-gray-700 cursor-pointer select-none z-[2]"
								size={50}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Bts
