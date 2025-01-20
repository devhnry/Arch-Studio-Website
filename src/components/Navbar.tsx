import React, {useState} from "react";
import { useLocation } from "react-router-dom"

import { motion as m } from 'framer-motion';

import logoBlack from "../assets/icons/Arch-black.svg"
import hamburger from "../assets/icons/icon-hamburger.svg"
import PageTransition from "./PageTransition.tsx";

interface NavBarProps {
	links: string[];
}

const NavBar: React.FC<NavBarProps> = ({ links }) => {
	const location = useLocation()
	let pageLink: string;

	const [changePage, setChangePage] = useState(false);
	const [pageHeaded, setPageHeaded] = useState("");

	const { pathname } = useLocation();

	const container = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2
			}
		}
	};

	const item = {
		hidden: { y: 4, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: 0.3
		}
	};

	switch (pathname) {
		case "/":
			pageLink = "home"
			break;
		case "/about-us":
			pageLink = "about us"
			break;
		default:
			pageLink = location.pathname.split("/")[1];
	}

	const handleLinkClick = (link: string) => {
		// If the current page is already the destination, set changePage to true and reset scroll
		if (pageLink === link) {
			setPageHeaded(link);
			setChangePage(true);
		} else {
			setPageHeaded(link);
			setChangePage(true);
		}
	};

	return (
		<>
			{changePage && <PageTransition pageHeaded={pageHeaded} changePage={changePage} setChangePage={setChangePage} /> }


			<nav className="p-6 md:py-12 flex justify-between md:justify-normal
          gap-20 items-center max-w-[calc(570px+46px)] md:max-w-[1110px] md:px-0 mx-auto relative">

				<div
					className={`hidden absolute -top-[12px] -left-[50px] md:grid grid-rows-[minmax(104px,104px)_auto] items-start gap-y-8 opacity-50`}>
					<div className={`w-[0.6px] bg-black h-[104px]`}></div>
					<m.div variants={container} initial="hidden" animate="visible" className={`grid gap-[2.5px] items-center`}>
						{pageLink.split("").map((letter, index) => (
							<m.p variants={item} initial={{opacity: 0, scale: 0, rotate: 90}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.5}} key={index + `${letter}`} className={`inline-block rotate-[90deg] uppercase text-[14px] pt-2`}>{letter}</m.p>
						))}
					</m.div>
				</div>
				<p onClick={() => handleLinkClick("home")} >
					<m.img
						initial={{scale: 0.75}}
						animate={{scale: 1, transition: {duration: 1.4}}}
							className="block cursor-pointer"
							src={logoBlack}
							alt="logo"
						/>
					</p>
					<>
						<m.div variants={container} initial="hidden" animate="visible" className="hidden md:flex gap-14 capitalize text-medium-grey text-body xl:text-[1.235rem] font-bold">
							{links.map((link) => (
								<m.div key={link} variants={item}>
									<p onClick={() => handleLinkClick(link)} className="hover:text-dark-blue cursor-pointer transition-colors" key={link}>
										{link}
									</p>
								</m.div>
							))}
						</m.div>
						<img
							className="md:hidden"
							src={hamburger}
							alt="menu"
						/>
					</>
				</nav>
			</>
			);
			};

			export default NavBar;
