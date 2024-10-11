import {Button} from "./Button.tsx";
import {FooterProps} from "./FooterMobile.tsx";
import React from "react";

export const FooterDesktop: React.FC<FooterProps> = ({links}) => {
	return <div className="relative hidden md:grid bg-thin-grey w-[calc(100%-110px)] md:max-w-[1110px] h-[120px]">
		<div className={`flex flex-row gap-10 items-center`}>
			<img
				className="bg-dark-blue p-4 size-[120px]"
				src="src/assets/icons/Arch-white.svg"
				alt=""
			/>
			<ul className="flex gap-[52px] capitalize text-dark-grey font-bold text-body text-[1.125rem]">
				{links.map((link) => (
					<li>
						<a className={`inline-block`} key={link} href="">
							{link}
						</a>
					</li>
				))}
			</ul>
		</div>
		<div className={`absolute right-[-110px] top-[50%] -translate-y-[50%]`}>
			<Button text="See Our Portfolio"/>
		</div>
	</div>;
};