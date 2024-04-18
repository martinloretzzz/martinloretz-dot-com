import Image from "next/image";
import { FC } from "react";
import { LikeIcon } from "./icons";

interface TweetProps {
	id: string;
	text: string;
	date: string;
}

export const Tweet: FC<TweetProps> = ({ id, text, date }) => {
	return (
		<div key={id} className="flex flex-row justify-start space-x-2 font-sans">
			<div className="w-[32px] shrink-0">
				<Image className="rounded-full" src="/martin.jpg" width={32} height={32} alt="@martinloretzzz" />
			</div>
			<div className="grow">
				<a href="https://twitter.com/martinloretzzz" target="_blank">
					<span className="font-bold">Martin Loretz</span>
					<span className="text-gray-400 font-light"> @martinloretzzz · {date}</span>
				</a>
				<br />
				<a href={`https://twitter.com/martinloretzzz/status/${id}`} target="_blank">
					{text}
				</a>
			</div>
			<a className="self-center" href={`https://twitter.com/intent/like?tweet_id=${id}`} target="_blank">
				<LikeIcon size={16} style={{ fill: "rgb(249, 24, 128)" }} />
			</a>
		</div>
	);
};
