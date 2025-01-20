
import {motion as m} from "framer-motion"
import {useLocation, useNavigate} from "react-router-dom";
import React, {useEffect} from "react";

interface Props{
	pageHeaded: string;
	changePage: boolean;
	setChangePage: (changePage: boolean) => void;
}

const PageTransition: React.FC<Props> = ({pageHeaded, changePage, setChangePage}) => {
	const navigate = useNavigate()
	const {pathname} = useLocation()

	useEffect(() => {
		const pageHeadingTo = pageHeaded === "about us" ? "about-us" : pageHeaded
		// Smooth scrolling if the current page is the destination
		if (pathname === `/${pageHeadingTo}`) {
			window.scrollTo({ top: 0, behavior: "smooth" });
			setChangePage(false);
		}
	}, [pageHeaded, pathname, setChangePage]);


	return (
		<> {changePage && <div className={` `}>
			<m.div initial={{width: 0}} animate={{
				width: "100%",
				transition: {
					duration: 1.2,
					ease: [0.43, 0.13, 0.23, 0.96]
				}
			}} className={`fixed z-[100] inset-0 bg-black text-white text-heading-m uppercase tracking-wider font-black font-spartan grid gap-6 items-center justify-items-center`}>
				<m.p className={``} initial={{y: 40, scale: 1.3, opacity: 0}} animate=
					{{
						scale: 1,
						y: 0,
						opacity: [0, 1, 1, 0],
						transition: {ease: [0.43, 0.23, 0.23, 0.96], duration: 2, delay: 1.2}
					}}>{pageHeaded == "home" ? "ARCH STUDIO" : pageHeaded}</m.p>
				<m.div initial={{width: "0"}} animate={{
					width: "100%",
					opacity: 1,
					transition: {
						delay: 3.2,
						duration: 1.2,
						ease: [0.43, 0.13, 0.23, 0.96]
					}
				}} onAnimationComplete={() => {
					setChangePage(!changePage)
					navigate(`/${pageHeaded == "about us" ? "about-us" : pageHeaded}`)
				}} className={`fixed z-[100] inset-0 bg-white`}>
				</m.div>
			</m.div>
		</div>
		}
		</>
	);
};

export default PageTransition;
