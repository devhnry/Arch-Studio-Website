import { FC } from "react";
import {motion as m} from "framer-motion";

interface CardComponentProps {
  number?: number;
  title: string;
  date?: string;
  image: string;
}

export const PortfolioCardComponent: FC<CardComponentProps> = ({ number, title, date, image }) => {

    const item = {
        hidden: { y: 10, opacity: 0, scale: 0.95 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1
        },
        transition: {
            delay: 0.3,
            duration: 1
        }
    };

  return (
      <m.div variants={item} className={`overflow-hidden`}>
        <m.div
            style={{backgroundImage: `url(${image})`}}
            className={`bg-img h-[240px] ls:h-[560px] w-full object-center relative font-sparta ls:max-w-[350px] cursor-pointer`}>
          <div className="absolute bg-black bg-gradient-to-b from-transparent to-black opacity-[0.30] inset-0"></div>
          {number ? <p className="absolute z-[2] right-4 top-[50%] -translate-y-[50%] ls:top-8 ls:translate-y-0 text-heading-xl opacity-35 hidden sm:block">{number}</p> : null}
          <div className="font-semibold leading-tight absolute bottom-5 left-4 grid gap-[0.3rem] text-white">
            <h4 className="text-heading-s leading-tight">{title}</h4>
            <p className="">{date}</p>
          </div>
        </m.div>
      </m.div>
  );
};
