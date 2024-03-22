import React, { useState } from "react"
import Image from "next/image"
import ImageModal from "./ImageModal"

export default function Residential() {
	const [selectedImage, setSelectedImage] = useState(null)

	const openModal = (imageUrl) => {
		setSelectedImage(imageUrl)
	}

	const closeModal = () => {
		setSelectedImage(null)
	}
	return (
		<div className="max-w-[1240px] mx-auto py-4 text-center">
			<h1 className="font-bold text-3xl p-4">Recent Interior Projects</h1>
			<div className="grid grid-cols-1 md:grid-cols-5 p-4 gap-4">
				<div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
					<Image
						src="https://i.imgur.com/8qNRPXU.jpg"
						alt="/"
						width={677}
						height={451}
						onClick={() => openModal("https://i.imgur.com/8qNRPXU.jpg")}
						className="cursor-pointer"
					/>
				</div>
				<Image
					src="https://i.imgur.com/KLQgU5P.jpg"
					alt="/"
					width={677}
					height={451}
					onClick={() => openModal("https://i.imgur.com/KLQgU5P.jpg")}
					className="cursor-pointer"
				/>
				<Image
					src="https://i.imgur.com/606Bpxi.jpg"
					alt="/"
					width={677}
					height={451}
					onClick={() => openModal("https://i.imgur.com/606Bpxi.jpg")}
					className="cursor-pointer"
				/>
				<Image
					src="https://i.imgur.com/DNpNrnZ.jpg"
					alt="/"
					width={677}
					height={451}
					onClick={() => openModal("https://i.imgur.com/DNpNrnZ.jpg")}
					className="cursor-pointer"
				/>
				<Image
					src="https://i.imgur.com/NarW6KR.jpg"
					alt="/"
					width={677}
					height={451}
					onClick={() => openModal("https://i.imgur.com/NarW6KR.jpg")}
					className="cursor-pointer"
				/>
			</div>
			{selectedImage && (
				<ImageModal imageUrl={selectedImage} onClose={closeModal} />
			)}
		</div>
	)
}
