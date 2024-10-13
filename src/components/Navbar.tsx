import React from "react";
import {Link, useLocation} from "react-router-dom"

interface NavBarProps {
	links: string[];
}

const NavBar: React.FC<NavBarProps> = ({ links }) => {
	const location = useLocation()
	let pageLink: string;

	switch (location.pathname) {
		case "/":
			pageLink = "home"
			break;
		case "/about-us":
			pageLink = "about us"
			break;
		default:
			pageLink = location.pathname.split("/")[1];
	}

	return (
		<nav className="p-6 md:py-12 flex justify-between md:justify-normal
          gap-20 items-center max-w-[calc(570px+46px)] md:max-w-[1110px] md:px-0 mx-auto relative">

			<div
				className={`hidden absolute -top-[12px] -left-[50px] md:grid grid-rows-[minmax(104px,104px)_auto] items-start gap-y-8 opacity-50`}>
				<div className={`w-[0.6px] bg-black h-[104px]`}></div>
				<div className={`grid gap-[2.5px] items-center`}>
					{pageLink.split("").map((letter, index) => (
						<p key={index} className={`inline-block rotate-[90deg] uppercase text-[14px] pt-2`}>{letter}</p>
					))}
				</div>
			</div>
			<Link to={"/"}>
				<img
					className="block"
					src="src/assets/icons/Arch-black.svg"
					alt="logo"
				/>
			</Link>
			<>
				<div className="hidden md:flex gap-14 capitalize text-medium-grey text-body xl:text-[1.235rem] font-bold">
					{links.map((link) => (
						<Link className="hover:text-dark-blue cursor-pointer transition-colors"
							key={link}
							to={`/${link == "about us" ? "about-us" : link}`} >
							{link}
						</Link>
					))}
				</div>
				<img
					className="md:hidden"
					src="src/assets/icons/icon-hamburger.svg"
					alt="menu"
				/>
			</>
		</nav>
	);
};

export default NavBar;
