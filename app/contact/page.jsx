"use client"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useRef } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {
	const Quote = () => {}

	const form = useRef()

	const sendEmail = (e) => {
		e.preventDefault()

		emailjs
			.sendForm("service_nruae3p", "template_3zpq6yc", form.current, {
				publicKey: "Kb80hC31MdhmqjNVa",
			})
			.then(
				() => {
					alert("Your message has been sent successfully!") // Success alert
				},
				(error) => {
					alert("Failed to send the message. Please try again later.") // Error alert
					console.log("FAILED...", error.text)
				}
			)
	}
	return (
		<div>
			<div
				className="relative mb-12 bg-fixed bg-center bg-cover bg-[url('../app/assets/Paint3.jpg')]"
				style={{ height: "calc(80vh)" }}
			>
				<div className="absolute inset-0 bg-black/60 z-[1]" />
				<div className="absolute inset-0 flex items-center justify-center z-[2]">
					<div className="p-5 text-white text-center max-w-lg mx-auto mt-32 md:mt- sm:mt-64">
						<h2 className="text-3xl md:text-5xl font-bold whitespace-nowrap">
							Request an Estimate!
						</h2>
						<p className="py-5 text-xl md:text-2xl">
							Submit a request for an Estimate in less than 30 seconds by
							filling out the form below!
						</p>
						<p className="text-xl md:text-2xl">
							One of our team members will reach out to you within 24 -
							48 hours!
						</p>
						<p className="py-5 text-xl md:text-2xl">
							Or Give Us a Call at 701-388-8624
						</p>
					</div>
				</div>
			</div>
			<Navbar />

			<div className="flex justify-center px-4">
				<div className="w-full max-w-2xl lg:p-4">
					<h1 className="text-3xl w-full text-center lg:text-left">
						Request an Estimate
					</h1>
					<div className="p-4">
						<form ref={form} onSubmit={sendEmail}>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full py-2">
								<div className="flex flex-col">
									<label className="uppercase text-sm py-2 font-bold">
										Name
									</label>
									<input
										className="border-2 rounded-lg p-3 flex border-gray-300"
										type="text"
										name="user_name"
									/>
								</div>
								<div className="flex flex-col">
									<label className="uppercase text-sm py-2 font-bold">
										Email
									</label>
									<input
										className="border-2 rounded-lg p-3 flex border-gray-300"
										type="email"
										name="user_email"
									/>
								</div>
							</div>
							<div className="grid grid-cols-1 gap-4 w-full py-2">
								<div className="flex flex-col">
									<label className="uppercase text-sm py-2 font-bold">
										Phone Number
									</label>
									<input
										className="border-2 rounded-lg p-3 flex border-gray-300"
										type="text"
										name="user_phone"
									/>
								</div>
							</div>
							<div className="flex flex-col py-2 w-full">
								<label className="uppercase text-sm py-2 font-bold">
									Project Details
								</label>
								<textarea
									className="border-2 rounded-lg p-3 border-gray-300"
									rows="10"
									name="message"
								></textarea>
							</div>
							<button
								className="w-full p-4 text-white mb-12 mt-4 font-bold rounded-xl bg-black"
								type="submit"
								value="send"
							>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
