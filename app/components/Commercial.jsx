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
			<h1 className="font-bold text-3xl p-4">Recent Residential Projects</h1>
			<div className="grid grid-cols-1 md:grid-cols-5 p-4 gap-4">
				<div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
					<Image
						src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
						alt="/"
						width={677}
						height={451}
						onClick={() =>
							openModal(
								"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
							)
						}
						className="cursor-pointer"
					/>
				</div>
				<Image
					src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
					alt="/"
					width={677}
					height={451}
					onClick={() =>
						openModal(
							"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
						)
					}
					className="cursor-pointer"
				/>
				<Image
					src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
					alt="/"
					width={677}
					height={451}
					onClick={() =>
						openModal(
							"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
						)
					}
					className="cursor-pointer"
				/>
				<Image
					src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
					alt="/"
					width={677}
					height={451}
					onClick={() =>
						openModal(
							"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
						)
					}
					className="cursor-pointer"
				/>
				<Image
					src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
					alt="/"
					width={677}
					height={451}
					onClick={() =>
						openModal(
							"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
						)
					}
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
