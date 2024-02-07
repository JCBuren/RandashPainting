"use client"
import React, { useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { RxDotFilled } from "react-icons/rx"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"

function Footer() {
	const slides = [
		{
            title:"Hellow1",
			desc: "Hellow1",
		},
		{
			title:"Hellow2",
			desc: "Hellow2",
		},
		{
			title:"Hellow3",
			desc: "Hellow3",
		},

		{
			title:"Hellow4",
			desc: "Hellow4",
		},
		{
			title:"Hellow5",
			desc: "Hellow5",
		},
	]

	const [currentIndex, setCurrentIndex] = useState(0)

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex)
	}
	return (
		<>
			<div className="bg-gray-200 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
					<ul>
						<p className="text-gray-800 font-bold text-3xl pb-6">
							Randash<span className="text-blue-950">Painting</span>
						</p>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
						</div>
					</ul>
				</div>
				
					<div className="max-w-[980px] h-[360px] w-full m-auto px-4 relative group">
						<div
							className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
						>{slides[currentIndex].desc}</div>
						{/* Left Arrow */}
						<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
							<BsChevronCompactLeft onClick={prevSlide} size={30} />
						</div>
						{/* Right Arrow */}
						<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
							<BsChevronCompactRight onClick={nextSlide} size={30} />
						</div>
						<div className="flex top-4 justify-center py-2">
							{slides.map((slide, slideIndex) => (
								<div
									key={slideIndex}
									onClick={() => goToSlide(slideIndex)}
									className="text-2xl cursor-pointer"
								>
									<RxDotFilled />
								</div>
							))}
						</div>
					</div>
				
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">
							Shortcuts
						</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Home
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Services
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Contact Us
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Reviews
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							About Us{" "}
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
				<h1 className=" text-gray-800 font-semibold">
					© 2024-2025 All rights reserved | Built by{" "}
					<span className="hover:text-blue-600 font-semibold cursor-pointer">
						JB Creations{" "}
					</span>
				</h1>
			</div>
		</>
	)
}

export default Footer
