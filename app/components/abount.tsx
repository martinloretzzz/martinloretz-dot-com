import Image from "next/image";
import { SocialCard } from "./social-card";

export const AboutSection = () => {
	return (
		<div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
			<div className="flex justify-center">
				<div className="w-48 h-48">
					<Image className="rounded-full" src="/martin.jpg" width={640} height={640} alt="Martin Loretz" />
				</div>
			</div>
			<div>
				<h1 className="text-6xl font-bold pb-4">Martin Loretz</h1>
				<p>
					Hey, I&apos;m just a human trying to figure out how this universe works. I love engineering and building
					stuff, like a computer out of logic gates, a screaming plant or a motorized bobbycar. I&apos;m interested in
					physics, rockets, artificial intelligence and molecular biology.
				</p>
				<br />
				<SocialCard />
			</div>
		</div>
	);
};
