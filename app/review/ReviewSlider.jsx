"use client"
import { useState } from "react"

const ReviewSlider = ({ reviews }) => {
	const [currentReviewIndex, setCurrentReviewIndex] = useState(0)

	const nextReview = () => {
		setCurrentReviewIndex((prevIndex) =>
			prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
		)
	}

	const prevReview = () => {
		setCurrentReviewIndex((prevIndex) =>
			prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
		)
	}

	return (
		<div className="relative w-full mx-auto" style={{ width: "calc(75vw)" }}>
			<div className="relative">
				<button
					className="absolute top-1/2 -left-8 transform -translate-y-1/2 px-3 py-2 bg-gray-800 text-white rounded-xl"
					onClick={prevReview}
				>
					&larr;
				</button>
				<button
					className="absolute top-1/2 -right-8 transform -translate-y-1/2 px-3 py-2 bg-gray-800 text-white rounded-xl"
					onClick={nextReview}
				>
					&rarr;
				</button>
				<div className="p-8 bg-gray-100 rounded-md">
					<p className="text-2xl font-bold py-8">
						{reviews[currentReviewIndex].author}
					</p>
					<p className="text-gray-800 text-xl font-semibold">
						{reviews[currentReviewIndex].content}
					</p>
				</div>
			</div>
		</div>
	)
}

export default ReviewSlider
