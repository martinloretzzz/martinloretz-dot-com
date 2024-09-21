import type { MDXComponents } from "mdx/types";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

const RoundedBorderImage = (props: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
	return <img {...props} style={{ borderRadius: "8px", ...props.style }} />;
};

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
	return { ...components, img: RoundedBorderImage };
};
