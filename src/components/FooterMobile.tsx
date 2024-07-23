import { Button } from "./Button";

const links = ["portfolio", "about us", "contact"];

export const FooterMobile = () => {
  return (
    <div className="grid place-items-center items-end bg-thin-grey py-12 h-[380px] relative">
      <img
        className="bg-dark-blue p-4 size-24 absolute top-[-48px]"
        src="src/assets/icons/Arch-white.svg"
        alt=""
      />
      <div className="grid gap-8 capitalize text-dark-grey font-bold text-body text-[1.125rem]">
        {links.map((link) => (
          <a key={link} href="">
            {link}
          </a>
        ))}
      </div>
      <Button text="See Our Portfolio" />
    </div>
  );
};
