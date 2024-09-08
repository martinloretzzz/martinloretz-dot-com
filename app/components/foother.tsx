import { FC } from "react";

export const Foother: FC = () => {
	return (
		<div className="text-sm text-gray-500">
			© {new Date().getFullYear()} Martin Loretz{" - "}
			<a href="/impressum-privacy">Imprint</a>
			{" - "}
			<a href="/impressum-privacy">Privacy</a>
		</div>
	);
};
