"use client"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Contact() {
	const Quote = () => {}
	return (
		<div>
			<div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-[url('../app/assets/Paint3.jpg')]">
				<div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]" />
				<div className="p-5 text-white z-[2] mt-[-10rem]">
					<h2 className="text-5xl font-bold py-5">
						Request a Quote Below!
					</h2>
					<p className="py-2 text-xl">
						Submit a quote in less than 30 seconds by filling out the form
						below!
					</p>
					<p className="text-xl">
						{" "}
						One of our team members will reach out to you within 24 - 48
						hours!
					</p>
				</div>
			</div>
			<Navbar />
			
			<div className="flex max-h-full">
				<div className="col-span-3 w-4/5 h-auto lg:p-4 ">
					<h1 className="text-3xl w-full">Request a Quote</h1>
					<div className="p-4">
						<form>
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
										type="text"
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
									Message
								</label>
								<textarea
									className="border-2 rounded-lg p-3 border-gray-300"
									rows="10"
									name="message"
								></textarea>
							</div>
							<button className="w-[100%] p-4 text-white mb-12 mt-4 font-bold rounded-xl bg-black">
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
