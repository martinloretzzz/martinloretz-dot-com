import Script from "next/script";
import { FC } from "react";

export const SimpleAnalytics: FC = () => {
	return (
		<>
			<Script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></Script>
			<noscript>
				<img
					src="https://queue.simpleanalyticscdn.com/noscript.gif"
					alt=""
					referrerPolicy="no-referrer-when-downgrade"
				/>
			</noscript>
		</>
	);
};
