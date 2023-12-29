import Head from "next/head"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Slider from "./components/Slider"
import { SliderData } from "./components/SliderData"
import Contact from "./contact/page"
import Service from "./service/page"

export default function Home() {
	return (
		<div>
			<Head>
				<title>Randash Painting</title>
			</Head>
			<Navbar />
			<Hero
				heading="Painting & Staining"
				message="Fargo ND & Surrounding Area"
			/>
			<Slider slides={SliderData} />
		</div>
	)
}
