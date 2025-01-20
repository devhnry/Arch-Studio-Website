import {Container} from "../components/Container.tsx";
import Navbar from "../components/Navbar.tsx";
import {links} from "../libs/constants.ts";
import {HeaderArea} from "../components/HeaderArea.tsx";
import useDisableScrollRestoration from "../hooks/useScrollRestoration.ts";
import {Footer} from "../components/Footer.tsx";
import {ContactInfo} from "../components/ContactInfo.tsx";
import {ContactForm} from "../components/ContactForm.tsx";
import heroPic from "../assets/contact/image-header.webp"
import map from "../assets/contact/image-map.webp"

import {motion as m} from "framer-motion"
import HeaderTitleAnimation from "../components/HeaderTitleAnimation.tsx";

export const ContactUsPage = () => {

	useDisableScrollRestoration()

	const contactInfoOfficeDetails = {
		"main-Office": {
			mail: 'archone@mail.com',
			address: '1892 Chenoweth Drive TN',
			phone: '123-456-3451',
		},
		"office-II": {
			mail: 'archtwo@mail.com',
			address: '3399  Wines Lane TX',
			phone: '832-123-4321',
		}
	}

	return <>
		<Container>
			<Navbar links={links}/>
			<HeaderArea page={`Contact`} url={heroPic}
						title={`Tell us about your project`}
						description={`We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!`}/>

			{/*===== Contact Info ===== */}
			<section className={`relative max-w-[570px] md:max-w-[1110px] mx-auto font-spartan px-5 my-20`}>
				<div className={`w-[104px] bg-dark-grey opacity-50 h-[0.8px] ml-0`}></div>
				<div className={`grid gap-10 ld:gap-14 ld:grid-cols-[300px_1fr] items-start`}>
						<m.h2 initial={{y: 20, opacity: 0, scale: 0.9}} viewport={{once: true}} whileInView={{
							x: 0, opacity: 1, scale: 1, transition: {
								duration: 0.8,
								delay: 0.1
							}
						}} className={`capitalize w-fit text-[clamp(3rem,9.14vw+1rem,4.2rem)] text-dark-blue leading-[1.05] font-[800] tracking-[0.075rem] pb-4 whitespace-nowrap mt-[4.125rem] inline-block`}>contact <br/> details
						</m.h2>
						<div className={`grid gap-8 ls:grid-cols-2 ls:w-fit ls:ml-auto ls:gap-20 ld:mt-[4.125rem]`}>
							{Object.entries(contactInfoOfficeDetails).map(([key, info], index) =>
								<m.div key={index} initial={{x: -30, opacity: 0}} viewport={{once: true}} whileInView={{
									x: 0, opacity: 1, scale: 1, transition: {
										duration: 0.8,
										delay: (index + 0.1) * 0.3
									}
								}}>
									<ContactInfo key={index} info={info} name={key}/>
								</m.div>
							)
							}
						</div>
				</div>
			</section>

			{/*======== MAP ======= */}
			<section
				className="relative max-w-[570px] md:max-w-[1110px] mx-auto font-spartan my-[72px] md:my-[120px] lg:my-[145px] xl:my-[190px">
				<m.div initial={{y: 30, opacity: 0, scale: 0.85}} viewport={{once: true}} whileInView={{
					y: 0, opacity: 1, scale: 1, transition: {
						duration: 0.8,
					}
				}} id={`bg-map`} style={{backgroundImage: `url(${map})`}} className="bg-black bg-img h-[370px] transition-all duration-300 relative">
				</m.div>
			</section>

			{/*=========== FORM ======== */}
			<section
				className={`relative max-w-[570px] md:max-w-[1110px] mx-auto font-spartan px-5 my-20 lg:grid lg:grid-cols-[300px_1fr] lg:gap-20`}>
				<m.div
					className={`capitalize w-fit text-[clamp(3rem,9.14vw+1rem,4.2rem)] text-dark-blue leading-[1.05] font-[800] tracking-[0.075rem] pb-4 whitespace-nowrap mt-[4.125rem]`}>
					<m.div className={`flex flex-row`}>
						<HeaderTitleAnimation text={`connect`}/>
					</m.div>
					<m.div className={`flex flex-row overflow-hidden`}>
						<HeaderTitleAnimation text={`with us`}/>
					</m.div>
				</m.div>
				<ContactForm/>
			</section>
			<Footer/>
		</Container>
	</>;
};
