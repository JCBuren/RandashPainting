/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "photos.google.com",
			},
			{
				protocol: "https",
				hostname: "lh3.google.com",
			},
			{
				protocol: "https",
				hostname: "photos.app.goo.gl",
			},
			
			
		],
	},
}
