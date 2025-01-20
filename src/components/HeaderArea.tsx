import React from 'react';
import {motion as m} from 'framer-motion';


interface HeaderAreaProps {
	page: string;
	title: string;
	description: string;
	url: string;
}

export const HeaderArea: React.FC<HeaderAreaProps> = ({page, title, description, url}) => {
	return (
		<>
			<m.section className={`relative max-w-[570px] md:max-w-[1110px] mx-auto font-spartan md:hidden`}>
				<m.div
					initial={{opacity:0, scale: 0.85}} animate={{ opacity:1, scale: 1, transition: {
						delay: 0.2, ease: [0.6, 0.05, 0.01, 0.9],
						duration: 0.5,
					},}}
					className={`max-h-[300px] h-[250px] sm:h-[320px] transition-all duration-300 w-full bg-img relative`}
					style={{backgroundImage: `url(${url})`}}>
					<div className="absolute bg-black opacity-[0.42] inset-0"></div>
					<div className={`absolute z-10 bg-white h-[35px] w-full bottom-[-1px] right-[8%]`}></div>
				</m.div>
				<div className={`mt-[20px] px-[clamp(1.125rem,3.14vw+0.2rem,2rem)] pb-[10px]`}>
					<m.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity:1, x: 0, transition: {
							delay: 0.35, ease: [0.6, 0.05, 0.01, 0.9],
							duration: 1,
						},}} className={`text-[clamp(2.8rem,9.14vw+0.7rem,4.2rem)] text-dark-blue leading-[1] font-[800] tracking-[0.075rem]`}>{title}</m.h1>
					<m.p initial={{ opacity: 0, scale: 0.75 }} animate={{ opacity:1, scale: 1, transition: {
							delay: 0.5, ease: [0.6, 0.05, 0.01, 0.9],
							duration: 1,
						},}} className={`text-body max-w-[470px] pt-5 pr-6`}>{description}</m.p>
				</div>
			</m.section>

			<m.section
				className="hidden md:block relative h-[calc(100vh-130px)] max-h-[720px] max-w-[570px] md:max-w-[1110px] mx-auto font-spartan overflow-y-hidden">
				<m.div initial={{opacity:0, scale: 0.85}} animate={{ opacity:1, scale: 1, transition: {
						delay: 0.2, ease: [0.6, 0.05, 0.01, 0.9],
						duration: 0.5,
					},}} style={{backgroundImage: `url(${url})`}} className={`bg-slate-600 bg-img min-h-[564px] w-full h-[calc(100vh-136px)] max-h-[740px] text-white text-body max-w-[635px] md:text-[1.125rem] relative`}>
					<div className="absolute bg-black opacity-[0.42] inset-0"></div>
				</m.div>
				<div className={`bg-white absolute z-20 ml-auto bottom-0 right-0 xl:max-w-[628px] ls:max-w-[550px] max-w-[474px] max-h-[431px] transition-all duration-300 xl:max-h-[503px] ls:max-h-[460px] w-full h-full pl-[59px] pt-[158px] ls:pt-[195px] xl:pt-[225px]`}>

					<m.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity:1, x: 0, transition: {
							delay: 0.35, ease: [0.6, 0.05, 0.01, 0.9],
							duration: 1,
						},}}  className={`absolute -top-[20%] ls:-top-[25%] right-0 font-bold tracking-[-0.125rem] leading-[-8.5rem] text-[clamp(8.5rem,15.5vw+1.3rem,12.635rem)] text-light-grey opacity-75`}>{page}</m.h2>
					<div className={`absolute top-[25%] ls:top-[32%] w-[104px] bg-black opacity-70 h-[0.6px]`}></div>

					<m.div initial={{ opacity: 0, scale: 0.75 }} animate={{ opacity:1, scale: 1, transition: {
							delay: 0.5, ease: [0.6, 0.05, 0.01, 0.9],
							duration: 1,
						},}} className={`ml-auto w-fit relative bottom-0`}>
						<h1 className={`text-[clamp(2.8rem,9.14vw+0.7rem,4.2rem)] text-dark-blue leading-[1] font-[800] tracking-[0.075rem] max-w-[446px]`}>
							{title}
						</h1>
						<p className={`text-body max-w-[470px] pt-5 pr-6`}>{description}</p>
					</m.div>
				</div>
			</m.section>
		</>
	);
};
