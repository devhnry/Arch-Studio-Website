import {Button} from "./Button.tsx";
import React from "react";
import {Link} from "react-router-dom";
import {FooterProps} from "../types/types.ts";
import logoWhite from "../assets/icons/Arch-white.svg"

export const FooterDesktop: React.FC<FooterProps> = ({links}) => {
	return <div className="relative hidden md:grid bg-thin-grey w-[calc(100%-110px)] md:max-w-[1110px] h-[120px]">
		<div className={`flex flex-row gap-10 items-center`}>
			<Link to={'/'}>
				<img
					className="bg-dark-blue p-4 size-[120px]"
					src={logoWhite}
					alt=""
				/>
			</Link>
			<ul className="flex gap-[52px] capitalize text-dark-grey font-bold text-[1.235rem]">
				{links.map((link) => (
					<li key={link}>
						<Link to={`/${link == "about us" ? "about-us" : link}`} className={`inline-block`}>
							{link}
						</Link>
					</li>
				))}
			</ul>
		</div>
		<div className={`absolute right-[-110px] top-[50%] -translate-y-[50%]`}>
			<Button linkTo={"/portfolio"} text="See Our Portfolio"/>
		</div>
	</div>;
};