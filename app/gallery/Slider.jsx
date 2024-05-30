"use client"
import { useState } from 'react';
import Image from 'next/image';
import { FaArrowCircleLeft, FaArrowCircleRight, FaTimes } from 'react-icons/fa';

const Slider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	const openModal = (index) => {
		setCurrent(index);
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<div id="gallery" className="max-w-[1700px] mx-auto p-6">
			<div className="relative flex justify-center p-4">
				{slides.map((slide, index) => (
					<div
						key={index}
						className={index === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}
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
								width={1440}
								height={720}
								objectFit="cover"
								onClick={() => openModal(index)} // Open modal on click
								className="cursor-pointer"
							/>
						)}
						<FaArrowCircleRight
							onClick={nextSlide}
							className="absolute top-[50%] right-[20px] text-gray-700 cursor-pointer select-none z-[2]"
							size={50}
						/>
					</div>
				))}
			</div>

			{/* Modal for larger image view */}
			{isOpen && (
				<div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
					<div className="relative p-4">
						<FaTimes
							onClick={closeModal}
							className="absolute top-2 right-2 text-white text-3xl cursor-pointer z-50"
						/>
						<Image
							src={slides[current].src}
							alt="/"
							width={1024}
							height={768}
							objectFit="contain"
							className="rounded-lg"
						/>
						<FaArrowCircleLeft
							onClick={prevSlide}
							className="absolute top-[50%] left-[10px] text-white cursor-pointer select-none z-[2]"
							size={50}
						/>
						<FaArrowCircleRight
							onClick={nextSlide}
							className="absolute top-[50%] right-[10px] text-white cursor-pointer select-none z-[2]"
							size={50}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default Slider;
