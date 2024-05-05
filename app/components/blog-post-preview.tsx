import { FC } from "react";

export interface PostMetadata {
	slug: string;
	date: string;
	author: string;
	title: string;
	description: string;
}

export const BlogPostPreview: FC<PostMetadata> = ({ slug, date, author, title, description }) => {
	return (
		<a className="pl-1 group" href={`/blog/${slug}`}>
			<h3 className="text-lg head font-bold pb-2 group-hover:text-cyan-500">{title}</h3>
			<p className="text-sm text-gray-400 group-hover:text-gray-500">
				{date} - {description}
			</p>
		</a>
	);
};
