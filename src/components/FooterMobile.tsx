import { Button } from "./Button";
import React from "react";

export interface FooterProps {
    links: string[]; // links is an array of strings
}

export const FooterMobile: React.FC<FooterProps> = ({ links }) => {
  return (
    <div className="grid md:hidden place-items-center items-end bg-thin-grey py-12 h-[380px] relative md:px-24">
      <img
        className="bg-dark-blue p-4 size-24 absolute top-[-48px]"
        src="src/assets/icons/Arch-white.svg"
        alt=""
      />
      <div className="grid gap-8 capitalize text-dark-grey font-bold text-body text-[1.125rem]">
        {links.map((link: string) => (
          <a key={link} href="">
            {link}
          </a>
        ))}
      </div>
      <Button text="See Our Portfolio" />
    </div>
  );
};
