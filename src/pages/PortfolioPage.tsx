import {Container} from "../components/Container.tsx";
import {links, portfolioArray} from "../libs/constants.ts";
import Navbar from "../components/Navbar.tsx";
import {Footer} from "../components/Footer.tsx";
import {PortfolioCardComponent} from "../components/PortfolioCardComponent.tsx";
import useDisableScrollRestoration from "../hooks/useScrollRestoration.ts";

import {motion as m} from "framer-motion";

const PortfolioPage = () => {
	useDisableScrollRestoration()


	const container = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.2,
				staggerChildren: 0.45
			}
		}
	};

	return (
		<>
			<Container>
				<Navbar links={links}/>
				<m.section  variants={container} initial="hidden" whileInView="visible"
					className={`grid gap-y-5 px-6 sm:px-20 md:px-0 ls:grid-cols-3 ls:gap-3 xl:gap-3 mx-auto max-w-[1110px]`}>
					{portfolioArray.map((portfolio, index) => (
						<PortfolioCardComponent
							key={index}
							title={portfolio.title}
							date={portfolio.date}
							image={portfolio.url}
						/>
					))
					}
				</m.section>
			</Container>
			<Footer/>
		</>
	);
};

export default PortfolioPage;
