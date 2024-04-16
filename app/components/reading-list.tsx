import { FC } from "react";
import { LinkIcon } from "./icons";

interface ReadingListItem {
	name: string;
	author: string;
	url: string;
}

interface ReadingListProps {
	list: ReadingListItem[];
}

export const ReadingListSection: FC<ReadingListProps> = ({ list }) => {
	return (
		<div>
			<h2 className="text-lg head font-bold pb-1">Cool stuff to check out:</h2>
			{list.map(({ name, author, url }) => (
				<div key={url}>
					<LinkIcon size={16} />
					<a className="pl-1" href={url} target="_blank">
						{name} - {author}
					</a>
					<br />
				</div>
			))}
		</div>
	);
};
