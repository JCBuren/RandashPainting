"use client"

import React, { useState } from "react"
import { BsFillCircleFill, BsCircle } from "react-icons/bs"
import Review from "./Review"

const ReviewsSlider = ({ reviews }) => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
		)
	}

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
		)
	}

	return (
		<div className="relative">
			<div className="flex overflow-hidden">
				{reviews.map((review, index) => (
					<div
						key={index}
						className={`transform transition-transform duration-300 ${
							index === currentIndex
								? "translate-x-0"
								: "translate-x-full"
						}`}
					>
						<Review review={review} />
					</div>
				))}
			</div>
			<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
				{reviews.map((_, index) => (
					<div
						key={index}
						className={`cursor-pointer ${
							index === currentIndex ? "text-blue-500" : "text-gray-400"
						}`}
						onClick={() => setCurrentIndex(index)}
					>
						{index === currentIndex ? <BsFillCircleFill /> : <BsCircle />}
					</div>
				))}
			</div>
			<button
				className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md"
				onClick={handlePrev}
			>
				&lt;
			</button>
			<button
				className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md"
				onClick={handleNext}
			>
				&gt;
			</button>
		</div>
	)
}

export default ReviewsSlider
