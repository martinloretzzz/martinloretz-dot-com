import type { MDXComponents } from "mdx/types";
import { DetailedHTMLProps, ImgHTMLAttributes, ReactNode } from "react";

const RoundedBorderImage = (
  props: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
) => {
  return <img {...props} style={{ borderRadius: "8px", ...props.style }} />;
};

const CompactPre = ({ children }: { children?: ReactNode }) => {
  return <pre style={{ padding: 0, margin: 0 }}>{children}</pre>;
};

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return { ...components, img: RoundedBorderImage, pre: CompactPre };
};
