import { FC } from "react";

export const Foother: FC = () => {
	return (
		<div className="text-sm text-gray-500">
			© {new Date().getFullYear()} Martin Loretz{" - "}
			<a href="https://bytetool.web.app/en/imprint/" target="_blank">
				Imprint
			</a>
			{" - "}
			<a href="https://bytetool.web.app/en/privacy/" target="_blank">
				Privacy
			</a>
		</div>
	);
};
