import React from "react"

const ImageModal = ({ imageUrl, onClose }) => {
	return (
		<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
			<div className="max-w-4xl max-h-screen overflow-auto relative">
				<button
					className="absolute top-4 right-4 text-white"
					onClick={onClose}
				>
					Close
				</button>
				<img src={imageUrl} alt="Full Screen" className="w-full" />
			</div>
		</div>
	)
}

export default ImageModal
