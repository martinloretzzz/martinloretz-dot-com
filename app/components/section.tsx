import { FC, ReactNode } from "react";

interface SectionProps {
	name: string;
	children: ReactNode;
	bigHeading?: boolean;
}

export const Section: FC<SectionProps> = ({ name, children, bigHeading = false }) => {
	return (
		<div>
			<h2 className={`${bigHeading ? "text-3xl" : "text-xl"} head font-bold pb-2`}>{name}</h2>
			{children}
		</div>
	);
};
