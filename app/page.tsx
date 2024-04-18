import { AboutSection } from "./components/abount";
import { Project } from "./components/project";
import { ReadingListSection } from "./components/reading-list";
import { Tweet } from "./components/tweet";
import projects from "./content/projects.json";
import readingList from "./content/reading-list.json";
import tweets from "./content/tweets.json";

export default function Home() {
	return (
		<div className="flex flex-col space-y-16">
			<AboutSection />
			<ReadingListSection list={readingList} />
			<div>
				<h2 className="text-lg head font-bold pb-2">Some random thoughts:</h2>
				<div className="flex flex-col space-y-4">
					{tweets.map(({ id, text, date }) => (
						<Tweet key={id} id={id} text={text} date={date} />
					))}
				</div>
			</div>
			<div>
				<h2 className="text-lg head font-bold pb-2">Cool stuff I've built:</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-8">
					{projects.map((project) => (
						<Project key={project.name} {...project} />
					))}
				</div>
			</div>
		</div>
	);
}
