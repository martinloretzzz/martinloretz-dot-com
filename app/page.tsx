import blogPosts from "@/app/content/blog.json";
import { AboutSection } from "./components/abount";
import { BlogPostPreview } from "./components/blog-post-preview";
import { Project } from "./components/project";
import { ReadingListItem } from "./components/reading-list";
import { Section } from "./components/section";
import { Talk } from "./components/talks";
import { Tweet } from "./components/tweet";
import projects from "./content/projects.json";
import readingList from "./content/reading-list.json";
import talks from "./content/talks.json";
import tweets from "./content/tweets.json";

export default function Home() {
	return (
		<div className="flex flex-col space-y-16">
			<AboutSection />
			<Section name="Blog" bigHeading>
				<div className="flex flex-col space-y-4">
					{blogPosts.map((post) => (
						<BlogPostPreview key={post.slug} {...post} />
					))}
				</div>
			</Section>
			<Section name="Random thoughts:">
				<div className="flex flex-col space-y-4">
					{tweets.map(({ id, text, date }) => (
						<Tweet key={id} id={id} text={text} date={date} />
					))}
				</div>
			</Section>
			<Section name="Stuff worth checking out:">
				{readingList.map((item) => (
					<ReadingListItem key={item.url} {...item} />
				))}
			</Section>
			<Section name="Talks:">
				<div className="grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-8">
					{talks.map((talk) => (
						<Talk key={talk.name} {...talk} />
					))}
				</div>
			</Section>
			<Section name="Cool stuff I've built:">
				<div className="grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-8">
					{projects.map((project) => (
						<Project key={project.name} {...project} />
					))}
				</div>
			</Section>
		</div>
	);
}
