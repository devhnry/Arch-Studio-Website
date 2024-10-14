import { useEffect, useState } from "react";
import { Container } from "../components/Container";
import { CardComponent } from "../components/CardComponent";
import { Button } from "../components/Button";
import NavBar from "../components/Navbar.tsx";
import {links, screenDetailsArray} from "../libs/constants.ts";
import {Link} from "react-router-dom";
import {Footer} from "../components/Footer.tsx";
import useDisableScrollRestoration from "../hooks/useScrollRestoration.ts";

import arrow from "../assets/icons/icon-arrow-white.svg"

import projectDelSol from "../assets/home/image-2.webp";
import towerB from "../assets/home/image-3.webp"
import lePrototype from "../assets/home/image-4.webp"

import image9 from "../assets/home/image-9.webp"
import image1 from "../assets/home/image-1.webp"


export const HomePage = () => {
  const screens = [0, 1, 2, 3];``
  const [page, setPage] = useState(0);

  const welcomeText = [
    "We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.",
    "Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.",
    "We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.",
  ];

  const featured = [
    { title: "Project Del Sol", image: projectDelSol },
    { title: "228B Tower", image: towerB },
    { title: "Le Prototype", image: lePrototype},
  ];

  useDisableScrollRestoration()
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (window.innerWidth > 1024) {
      interval = setInterval(() => {
        setPage((prevIndex) => (prevIndex + 1) % screens.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [screens.length]);

  return (
      <>
        <Container>
          <NavBar links={links}/>

          {/* <===== Hero Area =====> */}
          <section className="relative max-w-[570px] md:max-w-[1110px] mx-auto font-spartan">
            <div style={{backgroundImage: `url(${screenDetailsArray[page].image})`}}
                className={`bg-slate-600 bg-img bg-img-${
                    page + 1
                } min-h-[564px] w-full mx-auto h-[calc(100vh-136px)] max-h-[734px] text-white text-body md:text-[1.125rem] relative`}
            >
              <div className="absolute bg-black opacity-[0.42] inset-0"></div>
              <div className="absolute left-[25%] -translate-x-[25%] p-6 grid gap-14 top-[50%] -translate-y-[47%]">
                <div className="grid gap-2">
                  <h1 className="leading-[clamp(3rem,9.14vw+1rem,5rem)] text-[clamp(3.2rem,9.14vw+1rem,6rem)] font-bold tracking-[0.075rem] whitespace-nowrap">
                    {screenDetailsArray[page].upperTitle}
                    <br/> {screenDetailsArray[page].lowerTitle}
                  </h1>
                  <p className="max-w-[450px] min-w-[300px] pr-8">
                    {screenDetailsArray[page].details}
                  </p>
                </div>
                <Button linkTo={"/portfolio"} text="See our Portfolio"/>
              </div>
              <div className="absolute left-[-49.64px] bottom-0 hidden xl:flex">
                {screens.map((screen) => (
                    <p
                        onClick={() => setPage(screen)}
                        className={`px-4 py-6 block items-center leading-[0] cursor-pointer hover:bg-dark-grey hover:text-white border-none ${
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
          <section
              className="relative max-w-[570px] md:max-w-[1110px] mx-auto font-sparta my-[76px] md:my-[120px] lg:my-[145px] xl:my-[190px] px-6 text-dark-grey text-body sm:px-1 grid lg:grid-cols-[1fr_350px] lg:gap-28 xl:gap-32">
            <div className="lg:ml-auto">
              <p className="absolute font-bold tracking-[-0.125rem] leading-[-8.5rem] text-[clamp(8.5rem,15.5vw+1rem,14.625rem)] text-light-grey opacity-50 hidden md:block -top-[1.8rem] lg:-top-[2.4rem] xl:-top-[3.4rem] left-0">
                Welcome
              </p>
              <div
                  className="border-[0.5px] border-dark-grey opacity-70 w-[65px] absolute left-[1.5rem] md:hidden"></div>
              <h2 className="text-[clamp(3rem,9.14vw+1rem,4.2rem)] text-dark-blue leading-[clamp(3.25rem,10.3vw+1.2rem,4.3rem)] font-[800] tracking-[0.075rem] whitespace-nowrap pb-8 pt-[4.125rem]">
                Welcome to <br/> Arch Studio
              </h2>
              <div className="grid gap-6 min-w-[310px] max-w-[572px] lg:max-w-[445px] md:text-[1.125rem]">
                {welcomeText.map((text, i) => (
                    <p key={i}>{text}</p>
                ))}
              </div>
            </div>
            <div style={{backgroundImage: `url(${image9})`}} className="h-full max-w-[350px] w-full ml-auto bg-img mr-[-0.35rem]"></div>
          </section>

          {/* <======== More Info ==========> */}
          <section
              className="relative max-w-[570px] text-white md:max-w-[1110px] mx-auto font-spartan mb-[72px] md:mb-[120px] lg:mb-[145px] xl:mb-[190px">
            <div className="absolute bg-black opacity-[0.42] inset-0"></div>
            <div style={{backgroundImage: `url(${image1})`}} className="h-[520px] bg-black bg-img">
              <div className="absolute left-[25%] -translate-x-[25%] p-6 grid gap-7 top-[50%] -translate-y-[47%]">
                <h3 className="text-[clamp(3rem,9.14vw+1rem,4.2rem)] leading-[clamp(3.25rem,10.3vw+1.2rem,4.3rem)] font-bold tracking-[0.075rem] whitespace-nowrap">
                  Small team,
                  <br/> big ideas
                </h3>
                <Button linkTo={"/about-us"} text="About Us"/>
              </div>
            </div>
          </section>

          {/* <========= Featured Section =======>  */}
          <section
              className="relative max-w-[570px] text-white md:max-w-[1110px] mx-auto font-spartan mb-[72px] md:mb-[120px] lg:mb-[145px] xl:mb-[190px] px-5 s:px-0">
            <div className="flex justify-between pb-10 md:pb-14">
              <h4 className="text-dark-blue text-heading-m">Featured</h4>
              <div className="hidden md:block">
                <Button linkTo={"/portfolio"} text="See All"/>
              </div>
            </div>

            <div className="grid ls:grid-cols-3 gap-5 pb-6">
              {featured.map((card, index) => (
                  <CardComponent
                      key={index}
                      title={card.title}
                      number={index + 1}
                      image={card.image}
                  />
              ))}
            </div>

            <Link to="/portfolio"
                className="flex gap-6 items-center md:hidden bg-dark-blue w-full place-content-center text-white px-7 py-5 cursor-pointer">
              <p>See All</p>
              <img loading="lazy" src={arrow} alt=""/>
            </Link>
          </section>

        </Container>
        <Footer />
      </>
  );
};
