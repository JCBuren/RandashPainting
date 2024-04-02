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
					console.log("SUCCESS!")
				},
				(error) => {
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
					<div className="p-5 text-white">
						<h2 className="text-5xl font-bold py-5">
							Request an Estimate Below!
						</h2>
						<p className="py-2 text-xl">
							Submit a request for an Estimate in less than 30 seconds by
							filling out the form below!
						</p>
						<p className="text-xl">
							{" "}
							One of our team members will reach out to you within 24 -
							48 hours!
						</p>
					</div>
				</div>
			</div>
			<Navbar />

			<div className="flex max-h-full justify-center">
				<div className="col-span-3 w-1/2 h-auto lg:p-4 ">
					<h1 className="text-3xl w-full">Request an Estimate</h1>
					<div className="p-4">
						<form ref={form} onSubmit={sendEmail}>
							<div className="grid md:grid-cols-2 gap-4 w-full py-2 ">
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
										Email{" "}
									</label>
									<input
										className="border-2 rounded-lg p-3 flex border-gray-300"
										type="email"
										name="user_email"
									/>
								</div>
							</div>
							<div className="gap-4 w-full py-2">
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
								className="w-[100%] p-4 text-white mb-12 mt-4 font-bold rounded-xl bg-black"
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
