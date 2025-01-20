import { FC } from "react";
// import {Link} from "react-router-dom";
import arrow from "../assets/icons/icon-arrow-white.svg"

import {AnimatePresence, motion as m} from "framer-motion"

interface ButtonProps{
  text: string;
  linkTo: string;
  page?: number;
  setChangePage: (changePage: boolean) => void;
  setPageHeaded: (pageHeaded: string) => void;
  specialStyle? : boolean;
}

export const Button: FC<ButtonProps> = ({text, linkTo, page, setChangePage, setPageHeaded, specialStyle }) => {

    const handleClick = () => {
        setPageHeaded(linkTo == "about us" ? "about-us" : linkTo); // Set the target page
        setChangePage(true);   // Trigger page transition
    };

  return (
      <AnimatePresence>
          <m.div key={page} initial={{opacity: 0, y: 0, x:0 }}
                 animate={{opacity: 1, y:0,  transition: {
                         duration: 0.5,
                         delay: 0.5,
                     }}}
                 onClick={handleClick}>
            <div className={`flex group gap-6 items-center bg-dark-blue ${specialStyle ? "w-full place-content-center" : "w-fit"} text-white px-7 py-5 cursor-pointer`}>
              <p>{text}</p>
              <img className={`group-hover:-rotate-[30deg] transition-all duration-500`} src={arrow} alt="" />
            </div>
          </m.div>
      </AnimatePresence>
  );
}
