import React from "react"

const Review = ({ review }) => {
	return (
		<div className="flex flex-col items-center justify-center p-4">
			<img
				src={review.image}
				alt={review.author}
				className="w-16 h-16 rounded-full mb-2"
			/>
			<p className="text-lg font-bold">{review.author}</p>
			<p>{review.content}</p>
		</div>
	)
}

export default Review
