import { EmailIcon, GithubIcon, TwitterIcon } from "./icons";

export const SocialCard = () => {
	const emailDecodeScript =
		'const email = atob("YmxvZ0BtYXJ0aW5sb3JldHouY29t"); const emailLink = document.getElementById("contact-email"); emailLink.innerText = email; emailLink.href = `mailto:${email}`;';
	return (
		<p>
			<TwitterIcon size={16} />{" "}
			<a target="_blank" rel="noreferrer" href="https://twitter.com/martinloretzzz">
				@martinloretzzz
			</a>
			<br />
			<GithubIcon size={16} />{" "}
			<a target="_blank" rel="noreferrer" href="https://github.com/martinloretzzz">
				@martinloretzzz
			</a>
			<br />
			<EmailIcon size={16} />{" "}
			<a id="contact-email" href="mailto:null" suppressHydrationWarning>
				xxxx@xxxxxxxxxxxx.com
			</a>
			<script dangerouslySetInnerHTML={{ __html: emailDecodeScript }}></script>
		</p>
	);
};
