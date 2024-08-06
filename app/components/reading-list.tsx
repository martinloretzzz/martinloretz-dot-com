import { FC } from "react";
import { LinkIcon } from "./icons";

interface ReadingListItem {
	name: string;
	author: string;
	url: string;
}

export const ReadingListItem: FC<ReadingListItem> = ({ name, author, url }) => {
	return (
		<div>
			<LinkIcon size={16} />
			<a className="pl-1 hover:text-cyan-500" href={url} target="_blank">
				{name} {author && `- ${author}`}
			</a>
			<br />
		</div>
	);
};
