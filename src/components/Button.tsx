import { FC } from "react";

interface Props{
  text: string;
  linkTo?: string
}


export const Button: FC<Props> = ({text, linkTo}) => {
  return (
    <div className="flex gap-6 items-center bg-dark-blue w-fit text-white px-7 py-5 cursor-pointer">
      <a href={linkTo}>{text}</a>
      <img src="src/assets/icons/icon-arrow-white.svg" alt="" />
    </div>
  );
}
