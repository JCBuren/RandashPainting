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
			title: "Hannah Avelsgard",
			desc: "They came in and painted our cabinets and our island and did an outstanding job! Super flexible and reasonably priced! Would recommend to anyone needing a painting job done!",
		},
		{
			title: "Randi Gottenborg",
			desc: "It looks AWESOME! Thank you guys! Such great guys to work with! Very Professional and attention to detail. I love it! I highly recommend these guys!",
		},
		{
			title: "Angie Lee",
			desc: "Can’t say enough about the great job these guys did with painting and texturing on ourremodel! They were polite, courteous, punctual, worked hard throughout the day, kept me updated on what they were doing, and asked questions about what we wanted as a customer. So thankful for their services! Highly recommend to anyone looking for painting services! And he is located in Casselton which is great for the community, although I know they go all over too.",
		},

		{
			title: "Randy Theis",
			desc: "You won’t be disappointed if you have Adam and his guys do your work. I tell everyone to call him",
		},
		{
			title: "Kathy Bauer Laney",
			desc: "I highly recommend Adam. He is easy to work with, respectful of your home, and his work isimpeccable.",
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
							Randash<span className="text-blue-800">Painting</span>
						</p>
						<img
							src="https://i.imgur.com/4QnLsCx.png"
							className="w-60 h-60"
						/>
						<div className="flex gap-6 p-8">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
						</div>
					</ul>
				</div>

				<div className="max-w-[980px] h-[360px] w-full m-auto px-4 relative group">
					<div className="w-full h-full rounded-2xl duration-500">
						<div className="bold text-2xl p-8">
							{slides[currentIndex].desc}
						</div>
						<div className="italic text-xl p-8">
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

				<div className="lg:p-8">
					<ul>
						<p className="text-gray-800 font-bold text-2xl p-4">
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
