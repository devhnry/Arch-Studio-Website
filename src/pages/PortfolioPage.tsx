import {Container} from "../components/Container.tsx";
import {links, portfolioArray} from "../libs/constants.ts";
import Navbar from "../components/Navbar.tsx";
import {Footer} from "../components/Footer.tsx";
import {PortfolioCardComponent} from "../components/PortfolioCardComponent.tsx";
import useDisableScrollRestoration from "../hooks/useScrollRestoration.ts";


const PortfolioPage = () => {
	useDisableScrollRestoration()

	return (
		<>
			<Container>
				<Navbar links={links} />
				<section className={`grid gap-y-5 px-24 md:px-0 ls:grid-cols-3 ls:gap-3 xl:gap-3 mx-auto max-w-[1110px]`}>
					{portfolioArray.map(portfolio => (
						<PortfolioCardComponent
							title={portfolio.title}
							date={portfolio.date}
							image={portfolio.url}
						/>
					))
					}
				</section>
			</Container>
			<Footer />
		</>
	);
};

export default PortfolioPage;
