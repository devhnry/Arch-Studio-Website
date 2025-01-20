import {Container} from "../components/Container.tsx";
import Navbar from "../components/Navbar.tsx";
import { leaderInfo, links} from "../libs/constants.ts";
import {HeaderArea} from "../components/HeaderArea.tsx";
import {AboutCardComponent} from "../components/AboutCardComponent.tsx";
import {Footer} from "../components/Footer.tsx";
import useDisableScrollRestoration from "../hooks/useScrollRestoration.ts";
import heroPic from "../assets/about/image-header.webp"
import bodyPic from "../assets/about/image-body.webp"
import {motion as m} from "framer-motion";

export const AboutUsPage = () => {
	useDisableScrollRestoration()

	const aboutText = ["Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.",  "Specialising in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs.", "Our small team of world-class professionals provides input on every project."]

	return (
		<>
			<Container>
				<Navbar links={links} />

				{/*======== HERO AREA ========== */}
				<HeaderArea title={`Your team of professionals`} description={`Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.`} url={heroPic} page={`About`} />


				{/*========== OUR HERITAGE ========== */}
				<section className={`relative max-w-[570px] mt-20 md:mt-40 md:max-w-[1110px] mx-auto font-spartan`}>
					<div className={`w-[104px] bg-black h-[0.8px] ml-[25px] md:ml-0`}></div>
					<div className={`grid md:grid-cols-2 gap-20 mb-[4.125rem]`}>
						<div className={`px-6 md:px-0`}>
							<m.h2 initial={{opacity: 0, scale: 0.8 }} viewport={{ once: true }} whileInView={{opacity: 1, y:0, scale:1,  transition: {
								duration: 0.5,
									delay: 0.1
							}}} className={`text-[clamp(3rem,9.14vw+1rem,4.2rem)] text-dark-blue leading-[1.05] font-[800] tracking-[0.075rem] pb-4 whitespace-nowrap mt-[4.125rem]`}>Our <br/> Heritage
							</m.h2>
							<div className={`grid gap-5`}>
								{aboutText.map((text, i) => (
									<m.p className={`text-body`} initial={{opacity: 0, y:8 }} viewport={{ once: true }} whileInView={{opacity: 1, y:0,  transition: {
										duration: 0.5,
											delay: (i + 0.5) * 0.2
									}}} key={i}>{text}</m.p>
								))}
							</div>
						</div>
						<m.div initial={{opacity: 0, x:10 }} viewport={{ once: true }} whileInView={{opacity: 1, x:0, z:0,  transition: {
							duration: 0.7,
								delay: 0.4
						}}}  style={{backgroundImage: `url(${bodyPic})`}} className="max-w-[500px] ml-auto h-full w-full bg-img hidden md:block"></m.div>
					</div>
				</section>

				{/*========== THE LEADERS ====== */}
				<section className={`relative max-w-[570px] mx-auto font-spartan md:max-w-[1110px] my-[120px] mb-[200px]`}>
					<div className={`px-6 md:px-0 grid ls:grid-cols-[327px_1fr] ls:pt-[3.125rem]`}>
						<m.h2 initial={{opacity: 0, x:-25 }} viewport={{ once: true }} whileInView={{opacity: 1, x:0, transition: {
								duration: 0.5,
								delay: 0.1
							}}} className={`text-[clamp(3rem,9.14vw+1rem,4.2rem)] text-dark-blue leading-[1] font-[800] tracking-[0.075rem] pb-6 whitespace-nowrap pt-[3.125rem] ls:pt-0`}>The<br/> Leaders</m.h2>
						<div className={`grid gap-y-10 xl:gap-y-14 gap-x-8 sm:grid-cols-2 max-w-[640px] w-full ml-auto`}>
							{leaderInfo.map((info, index) => (
								<AboutCardComponent
									name={info.name}
									title={info.title}
									specialStyle={index === 1 || index === 3}
									url={info.url}
									index={index}
									key={index} />
							))}
						</div>
					</div>
				</section>
			</Container>
			<Footer/>
		</>
	);
};