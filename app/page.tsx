import blogPosts from "@/app/content/blog.json";
import { AboutSection } from "./components/abount";
import { BlogPostPreview } from "./components/blog-post-preview";
import { Project } from "./components/project";
import { ReadingListItem } from "./components/reading-list";
import { Tweet } from "./components/tweet";
import projects from "./content/projects.json";
import readingList from "./content/reading-list.json";
import tweets from "./content/tweets.json";

export default function Home() {
	return (
		<div className="flex flex-col space-y-16">
			<AboutSection />
			<div>
				<h2 className="text-2xl head font-bold pb-2">Blog</h2>
				<div className="flex flex-col space-y-4">
					{blogPosts.map((post) => (
						<BlogPostPreview key={post.slug} {...post} />
					))}
				</div>
			</div>
			<div>
				<h2 className="text-lg head font-bold pb-2">Random thoughts:</h2>
				<div className="flex flex-col space-y-4">
					{tweets.map(({ id, text, date }) => (
						<Tweet key={id} id={id} text={text} date={date} />
					))}
				</div>
			</div>
			<div>
				<h2 className="text-lg head font-bold pb-1">Stuff worth checking out:</h2>
				{readingList.map((item) => (
					<ReadingListItem key={item.url} {...item} />
				))}
			</div>
			<div>
				<h2 className="text-lg head font-bold pb-2">Cool stuff I&apos;ve built:</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-8">
					{projects.map((project) => (
						<Project key={project.name} {...project} />
					))}
				</div>
			</div>
		</div>
	);
}
