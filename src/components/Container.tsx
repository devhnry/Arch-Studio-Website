import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode; 
}

export const Container: FC<Props> = ({ children }) => {
  return <main className="max-w-[1440px] w-full mx-auto md:px-24">{children}</main>;
};