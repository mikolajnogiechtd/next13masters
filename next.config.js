/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
	},
	images: {
		domains: ["media.graphassets.com"],
	},
	redirects: async () => {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: false,
			},
			{
				source: "/categories",
				destination: "/categories/t-shirts/1",
				permanent: false,
			},
			{
				source: "/collections",
				destination: "/collections/summer-vibes",
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;
