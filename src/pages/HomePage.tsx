import { useEffect, useState } from "react";
import { Container } from "../components/Container";

export const HomePage = () => {
  const links = ["portfolio", "about us", "contact"];
  const screens = [0, 1, 2, 3];
  const [page, setPage] = useState(0);

  const screenDetails = [
    {
      upperTitle: "Project",
      lowerTitle: "Paramour",
      details:
        "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
    },
    {
      upperTitle: "Seraph",
      lowerTitle: "Station",
      details:
        "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
    },
    {
      upperTitle: "Federal II",
      lowerTitle: "Tower",
      details:
        "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
    },
    {
      upperTitle: "Trinity Bank",
      lowerTitle: "Tower",
      details:
        "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
    },
  ];

  const welcomeText = [
    "We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.",
    "Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.",
    "We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.",
  ];

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (window.innerWidth > 768) {
      interval = setInterval(() => {
        setPage((prevIndex) => (prevIndex + 1) % screens.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [screens.length]);

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

      {/* <===== Hero Area =====> */}
      <section className="relative max-w-[570px] md:max-w-[1110px] mx-auto font-spartan">
        <div
          className={`bg-slate-600 bg-img bg-img-${
            page + 1
          } min-h-[564px] w-full mx-auto h-[calc(100vh-136px)] max-h-[734px] text-white text-body md:text-[1.125rem] font-medium relative`}
        >
          <div className="absolute bg-black opacity-[0.42] inset-0"></div>
          <div className="absolute left-[25%] -translate-x-[25%] p-6 grid gap-14 top-[46%] -translate-y-[46%]">
            <div className="grid gap-2">
              <h1 className="leading-[clamp(3rem,3rem+3vw,5.1rem)] text-[clamp(3.2rem,3.2rem+6vw,6.1rem)] font-bold tracking-[0.075rem] whitespace-nowrap">
                {screenDetails[page].upperTitle}
                <br /> {screenDetails[page].lowerTitle}
              </h1>
              <p className="max-w-[450px] min-w-[300px] pr-8">
                {screenDetails[page].details}
              </p>
            </div>
            <div className="flex gap-6 items-center bg-dark-blue w-fit px-7 py-5 cursor-pointer">
              <a href="">See our portfolio</a>
              <img src="src/assets/icons/icon-arrow-white.svg" alt="" />
            </div>
          </div>
          <div className="absolute left-[-49.24px] bottom-0 hidden xl:flex">
            {screens.map((screen) => (
              <p
                onClick={() => setPage(screen)}
                className={`px-4 py-6 block items-center leading-[0] cursor-pointer hover:bg-dark-grey hover:text-white ${
                  screen === page
                    ? "bg-dark-blue text-white"
                    : "text-dark-grey bg-white"
                }`}
                key={screen}
              >
                0{screen + 1}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/*<===== Welcome Area =====>  */}
      <section className="relative border-red border max-w-[570px] md:max-w-[1110px] mx-auto font-sparta my-[72px] md:my-[120px] px-6 text-dark-grey text-body sm:px-1">
        <p className="absolute text-heading-l text-[8rem] text-light-grey opacity-50 hidden md:block -top-[1.8rem]">Welcome</p>
        <div className="border-[0.5px] border-dark-grey opacity-70 w-[65px] absolute left-[1.5rem] md:hidden"></div>
        <h2 className="text-[clamp(3rem,2.3rem+3vw,4.9rem)] text-dark-blue leading-[clamp(3.25rem,2.5rem+2vw,4.3rem)] font-[800] tracking-[0.075rem] whitespace-nowrap pb-8 pt-[4.125rem]">
          Welcome to <br /> Arch Studio
        </h2>
        <div className="grid gap-6 min-w-[310px] max-w-[572px] md:text-[1.125rem]">
          {welcomeText.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </section>
    </Container>
  );
};