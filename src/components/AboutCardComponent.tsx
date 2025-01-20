import React from "react";
import { AboutCardDetails } from "../types/types.ts";

import { motion as m } from "framer-motion";

interface AboutCardDetailsExtended extends AboutCardDetails {
	specialStyle: boolean;
	index: number;
}

export const AboutCardComponent: React.FC<AboutCardDetailsExtended> = ({name, title, url, specialStyle, index }) => {
	return (
		<m.div initial={{x: (index + 2) % 2 == 0 ? -30 : 30, opacity: 0}} whileInView={{x: 0, opacity: 1, transition: {
				duration: 0.5,
				delay: 0.1
			}}} viewport={{once : true}} className={specialStyle ? `ml-auto` : ``}>
			<m.img className={`pb-1 max-h-[350px] max-w-[310px] w-full`} src={`${url}`} alt={``}/>
			<h3 className={`text-[28px] ls:text-[22px] lg:text-[28px] transition-all duration-300 xl:text-[30px] font-[700] leading-tight ls:pb-[0.5px]`}>{name}</h3>
			<p className={`text-body leading-tight`}>{title}</p>
		</m.div>
	);
};
