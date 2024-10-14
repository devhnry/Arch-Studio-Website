import { Button } from "./Button";
import React from "react";
import {Link} from "react-router-dom";
import {FooterProps} from "../types/types.ts";
import logoWhite from "../assets/icons/Arch-white.svg"

export const FooterMobile: React.FC<FooterProps> = ({ links }) => {
  return (
    <div className="grid md:hidden place-items-center items-end bg-thin-grey py-12 h-[380px] relative md:px-24">
        <Link to={"/"}>
            <p className={`sr-only`}>Home</p>
            <img
                className="bg-dark-blue p-4 size-24 absolute top-[-48px] left-[50%] -translate-x-[50%]"
                src={logoWhite}
                alt=""
            />
        </Link>
        <div className="grid gap-8 capitalize text-dark-grey font-bold text-body text-[1.125rem]">
            {links.map((link: string) => (
                <Link to={`/${link == "about us" ? "about-us" : link}`} key={link}>
            {link}
          </Link>
        ))}
      </div>
      <Button linkTo={"/portfolio"} text="See Our Portfolio" />
    </div>
  );
};
