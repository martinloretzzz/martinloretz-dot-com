import Script from "next/script";
import { FC } from "react";

interface NoCookieGoogleAnalyticsProps {
	gaId: string;
}

export const NoCookieGoogleAnalytics: FC<NoCookieGoogleAnalyticsProps> = ({ gaId }) => {
	return (
		<>
			<Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
			<Script id="google-analytics" strategy="afterInteractive">
				{`window.dataLayer = window.dataLayer || [];
					function gtag(){window.dataLayer.push(arguments);}
					gtag('js', new Date());
                    // gtag('set', {'allow_google_signals', false});
                    // gtag('set', {'allow_ad_personalization_signals', false});
                    gtag('set', {'restricted_data_processing': true});
                    gtag('consent', 'default', {
                        'ad_storage': 'denied',
                        'ad_user_data': 'denied',
                        'ad_personalization': 'denied',
                        'analytics_storage': 'denied'
                    });
					gtag('config', '${gaId}', { client_storage: 'none' });`}
			</Script>
		</>
	);
};
