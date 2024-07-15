import { Container } from "../components/Container"

export const HomePage = () => {
  const links = ["portfolio", "about us", "contact"]


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

      <section className="relative border-red border-[2px] max-w-[570px] md:max-w-[1110px] mx-auto">
        <div className="bg-black min-h-[560px] w-full mx-auto"></div>
      </section>
    </Container>
  );
}
