"use client"
import React, { useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { RxDotFilled } from "react-icons/rx"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

function Footer() {
	const slides = [
		{
			title: "Hannah Avelsgard",
			desc: "They came in and painted our cabinets and our island and did an outstanding job! Super flexible and reasonably priced! Would recommend to anyone needing a painting job done!",
		},
		{
			title: "Randi Gottenborg",
			desc: "It looks AWESOME! Thank you guys! Such great guys to work with! Very Professional and attention to detail. I love it! I highly recommend these guys!",
		},
		{
			title: "Derek Neu",
			desc: "Great customer service and great craftsmanship. Would recommend to anyone looking for a reputable painting company",
		},

		{
			title: "Randy Theis",
			desc: "You won’t be disappointed if you have Adam and his guys do your work. I tell everyone to call him",
		},
		{
			title: "Kathy Bauer Laney",
			desc: "I highly recommend Adam. He is easy to work with, respectful of your home, and his work is impeccable.",
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
			<div className="bg-gray-200 h-1/2 w-full flex md:flex-row flex-col mt-10 items-center">
				<div className="p-8">
					<ul>
						<img
							src="https://i.imgur.com/hxhlOoT.jpg"
							className="w-90 h-60"
						/>
						<div className="flex gap-6 p-8">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
							<FcGoogle className="text-2xl cursor-pointer" />
							<FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
						</div>
					</ul>
				</div>

				<div className="max-w-[980px] h-[360px] w-full m-auto p-4 relative group">
					<div className="w-full h-full duration-500 ">
						<div className="text-xl bold p-10 lg:text-3xl text-center">
							"{slides[currentIndex].desc}"
						</div>
						<div className="italic text-2xl p-8">
							{" "}
							- {slides[currentIndex].title}
						</div>
					</div>
					{/* Left Arrow */}
					<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
						<BsChevronCompactLeft onClick={prevSlide} size={30} />
					</div>
					{/* Right Arrow */}
					<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
						<BsChevronCompactRight onClick={nextSlide} size={30} />
					</div>
					<div className="flex top-4 justify-center py-2">
						{slides.map((slide, slideIndex) => (
							<div
								key={slideIndex}
								onClick={() => goToSlide(slideIndex)}
								className="text-2xl cursor-pointer"
							></div>
						))}
					</div>
				</div>
				<div className="bold text-2xl p-10 items-center">
					Leave us a Review on Google!
					<FcGoogle size={80} className="flex" />
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center p-5 bg-gray-50">
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
