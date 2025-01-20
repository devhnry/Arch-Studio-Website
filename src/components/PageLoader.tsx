import {motion as m} from "framer-motion";
import {useNavigate} from "react-router-dom";

const PageLoader = () => {

	const navigate = useNavigate()

	return (
		<main className={`absolute inset-0 grid items-center justify-items-center z-50`}>
			<m.div className="bg-black absolute inset-0" onAnimationComplete={() => navigate('/home') } initial={{height: "100%"}} animate={{
				borderRadius: "0 0 50vw 50vw",
				height: 0,
				transition: {
					delay: 2.5, ease: [0.43, 0.23, 0.23, 0.96],
					duration: 0.7,
				},
			}}>
			</m.div>
			<div className={`relative text-white text-heading-m font-black tracking-tighter font-spartan flex-row flex gap-6 items-center rounded-sm`}>
				<div>
					<m.div
						className={`triangle`}
						initial={{x: 0, scale: 0.8}}
						animate={{
							x: -35,
							scale: 1.5,
							transition: {
								x: {duration: 2.5, delay: 0.1, ease: [0.43, 0.23, 0.23, 0.96]},
								scale: {duration: 2.5, ease: [0.43, 0.23, 0.23, 0.96]},
							},
						}}
					/>
				</div>
				{"Arch".split("").map((letter, index) => (
					<m.p key={`${index}-${letter}`} className={`-ml-[24px]`} initial={{x: -40, scale: 1.3, opacity: 0}} animate=
						{{
							scale: 1,
							x: 0,
							opacity: 1,
							transition: {delay: (index + 1) * 0.2, ease: [0.43, 0.23, 0.23, 0.96], duration: 0.5}
						}}>{letter}</m.p>
				))}
			</div>
		</main>)
};

export default PageLoader;
