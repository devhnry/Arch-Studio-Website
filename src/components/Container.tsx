import { FC, ReactNode } from "react";
import {AnimatePresence, motion as m} from "framer-motion";

interface Props {
  children: ReactNode;
}

export const Container: FC<Props> = ({ children }) => {
  return (
      <AnimatePresence mode={`wait`}>
        <m.main exit={{ opacity: 0 }} className="max-w-[1440px] w-full mx-auto md:px-24 relative">{children}</m.main>
      </AnimatePresence>
  );
};
