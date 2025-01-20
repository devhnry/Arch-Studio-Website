import {Button} from "./Button.tsx";
import React, {useState} from "react";
import {FooterProps} from "../types/types.ts";
import logoWhite from "../assets/icons/Arch-white.svg"
import PageTransition from "./PageTransition.tsx";

export const FooterDesktop: React.FC<FooterProps> = ({links}) => {

	const [changePage, setChangePage] = useState(false);
	const [pageHeaded, setPageHeaded] = useState("");

	const handlePageChange = (link: string) => {
		setPageHeaded(link);
		setChangePage(true);
	};

	return <>
		{changePage && <PageTransition pageHeaded={pageHeaded} changePage={changePage} setChangePage={setChangePage} /> }

		<div className="relative hidden md:grid bg-thin-grey w-[calc(100%-110px)] md:max-w-[1110px] h-[120px]">
		<div className={`flex flex-row gap-10 items-center`}>
			<div onClick={() => handlePageChange("home")} >
				<p className={`sr-only`}>Home</p>
				<img
					className="bg-dark-blue p-4 size-[120px] cursor-pointer"
					src={logoWhite}
					alt=""
				/>
			</div>
			<ul className="flex gap-[52px] capitalize text-dark-grey font-bold text-[1.235rem]">
				{links.map((link) => (
					<li key={link}>
						<p onClick={() => handlePageChange(link)} className={`inline-block cursor-pointer`}>
							{link}
						</p>
					</li>
				))}
			</ul>
		</div>
		<div className={`absolute right-[-110px] top-[50%] -translate-y-[50%]`}>
			<Button setChangePage={setChangePage} setPageHeaded={setPageHeaded}  linkTo={"portfolio"} text="See Our Portfolio"/>
		</div>
	</div>
		</>;
};