import React from 'react';
import {ContactInfoDetails} from "../types/types.ts";
import arrow from "../assets/icons/icon-arrow.svg"

interface ContactInfoProps {
	name: string;
	info: ContactInfoDetails
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ name, info}) => {
	return (
		<div className={`text-dark-grey w-full xsm:grid grid-cols-2 ls:grid-cols-1`}>
			<div>
				<h3 className={`font-bold text-[1.125rem] pb-4 capitalize`}>{name.split("-").map(n => (n + " "))}</h3>
				{Object.entries(info).map(([key, value]) => (
					<div key={key}>
						<p className={`capitalize whitespace-nowrap`}>{key} :{`\t\t`} <span className={key === "address" ? `capitalize` : `lowercase`}>{value}</span></p>
					</div>
				))}
			</div>
				<a className={`flex flex-row ml-auto w-fit gap-2 items-center font-bold text-dark-blue pt-10 pl-1 leading-tight ls:ml-1 group cursor-pointer`}>
					Link to Map
					<img className={`group-hover:rotate-[30deg] transition-all duration-300`} src={arrow} alt=""/>
				</a>
		</div>
	);
};
