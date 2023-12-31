"use client"
import React, { useEffect } from "react"
import { useState } from "react"
import Link from "next/link"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

const Navbar = () => {
	const [nav, setNav] = useState(false)
	const [color, setColor] = useState("transparent")
	const [textColor, setTextColor] = useState("white")

	const handleNav = () => {
		setNav(!nav)
	}

	useEffect(() => {
		const changeColor = () => {
			if (window.scrollY >= 90) {
				setColor("#ffffff")
				setTextColor("#000000")
			} else {
				setColor("transparent")
				setTextColor("#ffffff")
			}
		}
		window.addEventListener("scroll", changeColor)
	}, [])

	return (
		<div
			style={{ backgroundColor: `${color}` }}
			className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
		>
			<div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
				<Link href="/">
					<h1
						style={{ color: `${textColor}` }}
						className="font-bold text-4xl"
					>
						Randash Painting
					</h1>
				</Link>
				<ul style={{ color: `${textColor}` }} className="hidden sm:flex">
					<li className="p-4">
						<Link href="/">Home </Link>
					</li>
					<li className="p-4">
						<Link href="/service">Services</Link>
					</li>
					<li className="p-4">
						<Link href="/contact">Contact Us</Link>
					</li>
					<li className="p-4">
						<Link href="/#gallery">Gallery</Link>
					</li>
					<li className="p-4">
						<Link href="/review">Reviews</Link>
					</li>
					<li className="p-4">
						<Link href="/team">Team Members</Link>
					</li>
				</ul>

				{/* Mobile menu button */}

				<div onClick={handleNav} className="sm:hidden block z-10">
					{nav ? (
						<AiOutlineClose size={20} style={{ color: `${textColor}` }} />
					) : (
						<AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
					)}
				</div>
				<div
					className={
						nav
							? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
							: "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
					}
				>
					<ul>
						<ul>
							<li
								onClick={handleNav}
								className="p-4 text-4xl hover:text-gray-500"
							>
								<Link href="/">Home </Link>
							</li>
							<li
								onClick={handleNav}
								className="p-4 text-4xl hover:text-gray-500"
							>
								<Link href="/services">Services</Link>
							</li>
							<li
								onClick={handleNav}
								className="p-4 text-4xl hover:text-gray-500"
							>
								<Link href="/contact">Contact Us</Link>
							</li>
							<li
								onClick={handleNav}
								className="p-4 text-4xl hover:text-gray-500"
							>
								<Link href="/#gallery">Gallery</Link>
							</li>
							<li
								onClick={handleNav}
								className="p-4 text-4xl hover:text-gray-500"
							>
								<Link href="/reviews">Reviews</Link>
							</li>
							<li
								onClick={handleNav}
								className="p-4 text-4xl hover:text-gray-500"
							>
								<Link href="/team">Team Members</Link>
							</li>
						</ul>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Navbar
