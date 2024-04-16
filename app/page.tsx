import Image from "next/image";
import { EmailIcon, GithubIcon, TwitterIcon } from "./components/icons";

const AboutSection = () => {
	return (
		<div className="flex space-x-4 space-y-4 flex-col md:flex-row">
			<div className="flex justify-center">
				<div className="w-48 h-48">
					<Image className="rounded-full" src="/martin.jpg" width={640} height={640} alt="Martin Loretz" />
				</div>
			</div>
			<div>
				<h1 className="text-xl font-bold">Martin Loretz</h1>
				<p>
					Hey, I&apos;m an engineer, software developer and AI enthusiast. I also like to build things, like an 8 bit
					computer out of logic gates, self balancing robots and motorised bobbycars. This is the home of the place for
					cool things I&apos;ve built, for poorly researched ideas and random thoughts.
				</p>
				<br />
				<SocialCard />
			</div>
		</div>
	);
};

const SocialCard = () => {
	return (
		<p>
			<TwitterIcon size={16} />{" "}
			<a target="_blank" rel="noreferrer" href="https://twitter.com/martinloretzzz">
				@martinloretzzz
			</a>
			<br />
			<GithubIcon size={16} />{" "}
			<a target="_blank" rel="noreferrer" href="https://github.com/martinloretzzz">
				@martinloretzzz
			</a>
			<br />
			<EmailIcon size={16} /> <a href="mailto:web@martinloretz.com">blog@martinloretz.com</a>
		</p>
	);
};

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
				<AboutSection />
			</div>
		</main>
	);
}