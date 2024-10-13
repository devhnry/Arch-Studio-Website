import {FooterMobile} from "./FooterMobile.tsx";
import {links} from "../libs/constants.ts";
import {FooterDesktop} from "./FooterDesktop.tsx";

export const Footer = () => {
	return (
		<footer className="relative max-w-[570px] text-dark-blue md:max-w-[1110px] mx-auto font-spartan mt-[140px]">
			<FooterMobile links={links}/>
			<FooterDesktop links={links}/>
		</footer>
	);
};
