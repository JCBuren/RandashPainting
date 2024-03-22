import React, { useState } from "react"
import Image from "next/image"
import ImageModal from "./ImageModal"

const Commercial = () => {
	const [selectedImage, setSelectedImage] = useState(null)

	const openModal = (imageUrl) => {
		setSelectedImage(imageUrl)
	}

	const closeModal = () => {
		setSelectedImage(null)
	}
	return (
		<div className="max-w-[1240px] mx-auto py-4 text-center">
			<h1 className="font-bold text-3xl p-4">Recent Exterior Projects</h1>
			<div className="grid grid-cols-1 md:grid-cols-5 p-4 gap-4">
				<div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
					<Image
						src="https://i.imgur.com/ROiAI0E.jpg"
						alt="/"
						width={677}
						height={451}
						onClick={() => openModal("https://i.imgur.com/ROiAI0E.jpg")}
						className="cursor-pointer"
					/>
				</div>
				<Image
					src="https://i.imgur.com/0Ujli8z.jpg"
					alt="/"
					width={677}
					height={451}
					onClick={() => openModal("https://i.imgur.com/0Ujli8z.jpg")}
					className="cursor-pointer"
				/>
				<Image
					src="https://i.imgur.com/CST8u2L.jpg"
					alt="/"
					width={677}
					height={451}
					onClick={() => openModal("https://i.imgur.com/CST8u2L.jpg")}
					className="cursor-pointer"
				/>
				<Image
					src="https://i.imgur.com/Ci3RlWh.jpg"
					alt="/"
					width={677}
					height={451}
					onClick={() => openModal("https://i.imgur.com/Ci3RlWh.jpg")}
					className="cursor-pointer"
				/>
				<Image
					src="https://i.imgur.com/94YC3B8.jpg"
					alt="/"
					width={677}
					height={451}
					onClick={() => openModal("https://i.imgur.com/94YC3B8.jpg")}
					className="cursor-pointer"
				/>
			</div>
			{selectedImage && (
				<ImageModal imageUrl={selectedImage} onClose={closeModal} />
			)}
		</div>
	)
}

export default Commercial
