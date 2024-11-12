import { FC } from "react";
import { LinkIcon } from "./icons";

interface ToolProps {
	name: string;
	url: string;
}

export const Tool: FC<ToolProps> = ({ name, url }) => {
	return (
		<div>
			<LinkIcon size={16} />
			<a className="pl-1 hover:text-cyan-500" href={url} target="_blank">
				{name}
			</a>
			<br />
		</div>
	);
};
