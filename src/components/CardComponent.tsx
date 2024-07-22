import { FC } from "react";

interface Props {
  number?: number;
  title: string;
  date?: string;
}

export const CardComponent: FC<Props> = ({ number, title, date }) => {
  return (
    <div className="bg-img h-[240px] w-full bg-img-7 object-center relative font-spartan">
      <div className="absolute bg-black bg-gradient-to-b from-transparent to-black opacity-[0.42] inset-0"></div>
      {number ? <p className="absolute z-[2] right-4 top-4 text-heading-xl opacity-35 hidden sm:block">{number}</p> : null}
      <div className="font-semibold absolute bottom-6 left-6 grid gap-5">
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
