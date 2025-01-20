import React from 'react';
import {motion as m} from "framer-motion";

interface Props {
	text: string;
	page?: number;
}

const HeaderTitleAnimation: React.FC<Props> = ({text, page}) => {
	return (
		<>
			{text.split("").map((l, index) => (
				(
					<m.h1 key={`upper-${page}-${index}`} viewport={{once: true}} initial={{y: 35, opacity: 0, scale: 0.9}} whileInView={{
						y:0, opacity: 1, scale: 1, transition: {
							duration: 0.8,
							delay: index * 0.15
						}
					}}
					>{l === " " ? '\u00A0' : l}</m.h1>
				)
			))}
		</>
	);
};

export default HeaderTitleAnimation;
