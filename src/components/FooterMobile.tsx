import { Button } from "./Button";
import React, {useState} from "react";
import {FooterProps} from "../types/types.ts";
import logoWhite from "../assets/icons/Arch-white.svg"
import PageTransition from "./PageTransition.tsx";

export const FooterMobile: React.FC<FooterProps> = ({ links }) => {

    const [changePage, setChangePage] = useState(false);
    const [pageHeaded, setPageHeaded] = useState("");

    const handlePageChange = (link: string) => {
        setPageHeaded(link);
        setChangePage(true);
    };

  return (
    <>
        {changePage && <PageTransition pageHeaded={pageHeaded} changePage={changePage} setChangePage={setChangePage} /> }
        <div className="grid md:hidden place-items-center items-end bg-thin-grey py-12 h-[380px] relative md:px-24">
            <div onClick={() => handlePageChange("home")}>
                <p className={`sr-only`}>Home</p>
                <img
                    className="bg-dark-blue p-4 size-24 absolute top-[-48px] left-[50%] -translate-x-[50%]"
                    src={logoWhite}
                    alt=""
                />
            </div>
            <div className="grid gap-8 capitalize text-dark-grey font-bold text-body text-[1.125rem]">
                {links.map((link: string) => (
                    <p className={'cursor-pointer'} onClick={() => handlePageChange(link)}
                        key={link}>
                {link}
              </p>
            ))}
          </div>
            <Button setChangePage={setChangePage} setPageHeaded={setPageHeaded}  linkTo={"portfolio"} text="See Our Portfolio"/>
        </div>
    </>
  );
};
