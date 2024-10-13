import { FC } from "react";
import {Link} from "react-router-dom";

import arrow from "../assets/icons/icon-arrow-white.svg"

interface ButtonProps{
  text: string;
  linkTo: string
}

export const Button: FC<ButtonProps> = ({text, linkTo}) => {
  return (
    <Link to={linkTo} className="flex group gap-6 items-center bg-dark-blue w-fit text-white px-7 py-5 cursor-pointer">
      <p>{text}</p>
      <img className={`group-hover:-rotate-[30deg] transition-all duration-500`} src={arrow} alt="" />
    </Link>
  );
}
