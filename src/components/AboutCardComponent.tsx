import React from "react";
import { AboutCardDetails } from "../types/types.ts";

interface AboutCardDetailsExtended extends AboutCardDetails {
	specialStyle: boolean;
}

export const AboutCardComponent: React.FC<AboutCardDetailsExtended> = ({name, title, url, specialStyle}) => {
	return (
		<div className={specialStyle ? `ml-auto` : ``}>
			<img className={`pb-1 max-h-[350px] max-w-[310px] w-full`} src={`${url}`} alt={``}/>
			<h3 className={`text-[28px] ls:text-[22px] lg:text-[28px] transition-all duration-300 xl:text-[30px] font-[700] leading-tight ls:pb-[0.5px]`}>{name}</h3>
			<p className={`text-body leading-tight`}>{title}</p>
		</div>
	);
};
