import { FC } from "react";

interface Props {
  number?: number;
  title: string;
  date?: string;
  customClass: string;
}

export const CardComponent: FC<Props> = ({ number, title, date, customClass }) => {
  return (
    <div className={`bg-img h-[240px] ls:h-[560px] ${customClass} w-full object-center relative font-sparta ls:max-w-[350px]`}>

      <div className="absolute bg-black bg-gradient-to-b from-transparent to-black opacity-[0.42] inset-0"></div>
      {number ? <p className="absolute z-[2] right-4 top-[50%] -translate-y-[50%] ls:top-8 ls:translate-y-0 text-heading-xl opacity-35 hidden sm:block">{number}</p> : null}
      <div className="font-semibold absolute bottom-5 left-4 grid gap-[1.125rem]">
        <h4 className="text-heading-s leading-[0]">{title}</h4>
        {date == null ? (
          <a className="text-body text-[1.125rem] block cursor-pointer hover:underline transition-all" href="">
            View All Projects
          </a>
        ) : (
          <p className="">{date}</p>
        )}
      </div>
    </div>
  );
};
