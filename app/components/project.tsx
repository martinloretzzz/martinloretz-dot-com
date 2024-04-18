import Image from "next/image";
import { FC } from "react";
import { LinkIcon } from "./icons";

interface ProjectProps {
	name: string;
	description: string;
	link?: string;
	image: string;
}

export const Project: FC<ProjectProps> = ({ name, description, link, image }) => {
	return (
		<div className="max-w-sm rounded overflow-hidden bg-zinc-900 shadow-zinc-700 shadow-md">
			<Image className="w-full object-cover" src={image} width={1024} height={576} alt={name} />
			<div className="px-6 py-4">
				<div className="flex flex-row">
					<div className="font-bold text-xl mb-2">{name}</div>
					{link && (
						<a href={link} target="_blank" className="pl-2">
							<LinkIcon size={20} />
						</a>
					)}
				</div>
				<div className="text-sm text-gray-400 ">{description}</div>
			</div>
		</div>
	);
};
