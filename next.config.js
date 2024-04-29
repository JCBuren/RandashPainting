/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: `export`,
	distDir: "dist",
	trailingSlash: true,
	assetPrefix: ".",
}

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
				hostname: "i.imgur.com",
			},
		],
	},
}
