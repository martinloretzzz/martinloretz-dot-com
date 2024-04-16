import { AboutSection } from "./components/abount";
import { ReadingListSection } from "./components/reading-list";
import readingList from "./content/reading-list.json";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
				<div className="flex flex-col space-y-8">
					<AboutSection />
					<ReadingListSection list={readingList} />
				</div>
			</div>
		</main>
	);
}
