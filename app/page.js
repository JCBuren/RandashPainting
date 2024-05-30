import Head from "next/head"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Slider from "./gallery/Slider"
import { SliderData } from "./gallery/SliderData"
import Contact from "./contact/page"
import Service from "./service/page"
import Footer from "./components/Footer"

export default function Home() {
	return (
		<div>
			<Head>
				<title>Randash Painting LLC</title>
			</Head>
			<Navbar />
			<Hero
				heading="Randash Painting LLC"
				message="Performing quality painting services throughout the Fargo/Moorhead and surrounding area for over 70 years.  
				"
			/>
			
			<Footer/>
		</div>
	)
}
