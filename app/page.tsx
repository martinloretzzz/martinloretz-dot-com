import { AboutSection } from "./components/abount";
import { ReadingListSection } from "./components/reading-list";
import { Tweet } from "./components/tweet";
import readingList from "./content/reading-list.json";
import tweets from "./content/tweets.json";

export default function Home() {
	return (
		<div className="flex flex-col space-y-8">
			<AboutSection />
			<ReadingListSection list={readingList} />
			<div>
				<h2 className="text-lg head font-bold pb-1">Some random thoughts:</h2>
				<div className="flex flex-col space-y-4">
					{tweets.map(({ id, text, date }) => (
						<Tweet key={id} id={id} text={text} date={date} />
					))}
				</div>
			</div>
		</div>
	);
}
