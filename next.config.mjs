import createMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
};

const withMDX = createMDX({
	options: {
		remarkPlugins: [remarkGfm, remarkMath],
		rehypePlugins: [rehypeHighlight, rehypeKatex],
	},
});

export default withMDX(nextConfig);
