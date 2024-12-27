import { PostMetadata } from "@/app/components/blog-post-preview";
import blogPosts from "@/app/content/blog.json";
import LinearTokenizerPost from "@/app/content/blog/linear-tokenizer.mdx";
import MlpActivationRatioBlogPost from "@/app/content/blog/mlp-activation-ratio.mdx";
import PolynomialMLPBlogPost from "@/app/content/blog/polynomial-mlp.mdx";
import SpaceTokenizerPost from "@/app/content/blog/space-tokenizer.mdx";
import GPTVectorIndexPost from "@/app/content/blog/vector-index.mdx";
import type { Metadata } from "next";

// TODO dynamically load the posts and remove this map
const postMap: Record<string, any> = {
	"polynomial-mlp": <PolynomialMLPBlogPost />,
	"mlp-activation-ratio": <MlpActivationRatioBlogPost />,
	"space-tokenizer": <SpaceTokenizerPost />,
	"linear-tokenizer": <LinearTokenizerPost />,
	"vector-index": <GPTVectorIndexPost />,
};

const getBlogPost = (slug: string): PostMetadata | undefined => {
	return blogPosts.find((post) => post.slug === slug);
};

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const metadata = getBlogPost(params.slug);
	if (metadata === undefined) return {};
	const { title, description } = metadata;

	return { title, description };
}

export async function generateStaticParams() {
	return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
	const metadata = getBlogPost(params.slug);
	if (metadata === undefined) {
		return <p>No Blog post for {params.slug} found!</p>;
	}
	const Post = postMap[metadata.slug];
	if (Post === undefined) throw Error("BlogPost missing in import map");

	return (
		<div className="flex flex-col">
			<a className="hover:text-cyan-500 block pb-4" href="/">
				{"<-"} Back to main page
			</a>
			{metadata.date}
			<div className="prose prose-invert prose-zinc max-w-[100ch]">{Post}</div>
		</div>
	);
}
