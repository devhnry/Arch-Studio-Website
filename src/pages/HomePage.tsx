import { Container } from "../components/Container";

export const HomePage = () => {
  const links = ["portfolio", "about us", "contact"];
  const screens = [1, 2, 3, 4];

  return (
    <Container>
      <nav className="p-6 md:py-12 flex justify-between md:justify-normal gap-20 items-center max-w-[calc(570px+46px)] md:max-w-[1110px] md:px-0 mx-auto">
        <img
          className="block"
          src="src/assets/icons/Arch-black.svg"
          alt="logo"
        />
        <>
          <div className="hidden md:flex gap-14 capitalize text-medium-grey text-body font-bold">
            {links.map((link) => (
              <a
                className="hover:text-dark-blue cursor-pointer transition-colors"
                key={link}
                href={`/${link}`}
              >
                {link}
              </a>
            ))}
          </div>
          <img
            className="md:hidden"
            src="src/assets/icons/icon-hamburger.svg"
            alt="menu"
          />
        </>
      </nav>

      <section className="relative max-w-[570px] md:max-w-[1110px] mx-auto font-spartan">
        <div className="bg-slate-600 bg-img min-h-[564px] w-full mx-auto h-[calc(100vh-136px)] max-h-[734px] text-white text-body md:text-[1.125rem] font-medium relative">
          <div className="absolute bg-black opacity-[0.35] inset-0"></div>
          <div className="absolute left-[25%] -translate-x-[25%] p-6 grid gap-14 top-[46%] -translate-y-[46%]">
            <div className="grid gap-2">
              <h1 className="leading-[clamp(3rem,3rem+3vw,5.1rem)] text-[clamp(3.2rem,3.2rem+6vw,6.1rem)] font-bold tracking-[0.075rem]">
                Project <br /> Paramour
              </h1>
              <p className="max-w-[440px] min-w-[300px] pr-8">
                Project made for an art museum near Southwest London. Project
                Paramour is a statement of bold, modern architecture.
              </p>
            </div>
            <div className="flex gap-6 items-center bg-dark-blue w-fit px-7 py-5 cursor-pointer">
              <a href="">See our portfolio</a>
              <img src="src/assets/icons/icon-arrow-white.svg" alt="" />
            </div>
          </div>
          <div className="absolute left-[-49.24px] bottom-0 hidden xl:flex">
            {screens.map((screen, index) => (
              <p
                className={`px-4 py-6 block items-center leading-[0] cursor-pointer hover:bg-dark-grey hover:text-white ${
                  index === 0
                    ? "bg-dark-blue text-white"
                    : "text-dark-grey bg-white"
                }`}
                key={screen}
              >
                0{screen}
              </p>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};
