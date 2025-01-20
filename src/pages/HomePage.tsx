import { useEffect, useState } from "react";
import { Container } from "../components/Container";
import { CardComponent } from "../components/CardComponent";
import { Button } from "../components/Button";
import NavBar from "../components/Navbar.tsx";
import { links, screenDetailsArray } from "../libs/constants.ts";
import {Footer} from "../components/Footer.tsx";
import useDisableScrollRestoration from "../hooks/useScrollRestoration.ts";

import { AnimatePresence, motion as m} from "framer-motion";

import projectDelSol from "../assets/home/image-2.webp";
import towerB from "../assets/home/image-3.webp"
import lePrototype from "../assets/home/image-4.webp"

import image9 from "../assets/home/image-9.webp"
import image1 from "../assets/home/image-1.webp"
import HeaderTitleAnimation from "../components/HeaderTitleAnimation.tsx";
import PageTransition from "../components/PageTransition.tsx";


export const HomePage = () => {

  const screens = [0, 1, 2, 3];``
  const [page, setPage] = useState(0);
  const [changePage, setChangePage] = useState(false);
  const [pageHeaded, setPageHeaded] = useState("");

  const handlePageChange = (link: string) => {
    setPageHeaded(link);
    setChangePage(true);
  };

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

  const container = {
    hidden: { opacity: 1, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.4
      }
    }
  };

  const item = {
    hidden: { x: -15, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    },
    transition: {
      delay: 0.2,
      duration: 0.7
    }
  };

  useDisableScrollRestoration()
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (window.innerWidth < 1024) {
      interval = setInterval(() => {
        setPage((prevIndex) => (prevIndex + 1) % screens.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [screens.length]);

  // Preload images when the component mounts
  useEffect(() => {
    const images = screenDetailsArray.map(screen => screen.image);
    images.forEach(image => {
      const img = new Image();
      img.src = image;
    });
  }, []);


  return (
      <>
        <Container>
          {changePage && <PageTransition pageHeaded={pageHeaded} changePage={changePage} setChangePage={setChangePage} /> }
          <NavBar links={links}/>

          {/* <===== Hero Area =====> */}
          <m.section initial={{opacity:0}} animate={{opacity:1, transition: {
              delay: 0.5, ease: [0.6, 0.05, 0.01, 0.9],
              duration: 0.5,
            },}} className="relative max-w-[570px] md:max-w-[1110px] mx-auto font-spartan">
            <m.div
                initial={{opacity:0}}
                animate={{opacity:1, transition: {
                delay: 0.5, ease: [0.6, 0.05, 0.01, 0.9],
                duration: 0.7,
              },}}
                exit={{opacity: 0}}
                style={{backgroundImage: `url(${screenDetailsArray[page].image})`}}
                className={`bg-slate-600 bg-img bg-img-${
                    page + 1
                } min-h-[564px] w-full mx-auto h-[calc(100vh-136px)] max-h-[740px] text-white text-body md:text-[1.125rem] relative`}
            >
              <div className="absolute bg-black opacity-[0.42] inset-0"></div>
              <div className="absolute left-[25%] -translate-x-[25%] p-6 grid gap-14 top-[50%] -translate-y-[47%] h-[460px] items-start">
                <AnimatePresence>
                <div className="grid gap-2">
                  <div className={`flex flex-col gap-1 lg:gap-2 leading-[clamp(3rem,7.14vw+1rem,5rem)] text-[clamp(3.2rem,9.14vw+1rem,6rem)] font-bold tracking-[0.075rem] whitespace-nowrap`}>
                    <m.div className={`flex flex-row`}>
                      <HeaderTitleAnimation text={screenDetailsArray[page].upperTitle} page={page} />
                    </m.div>
                    <m.div className={`flex flex-row overflow-hidden`}>
                      <HeaderTitleAnimation text={screenDetailsArray[page].lowerTitle} page={page} />
                    </m.div>
                  </div>
                <AnimatePresence>
                  <m.p key={`description-${page}`} initial={{opacity: 0, y:8 }}
                       animate={{opacity: 1, y:0,  transition: {
                          duration: 0.5,
                          delay: 0.5
                       }}}
                       exit={{opacity:0, y:-8}} className="max-w-[450px] min-w-[300px] pr-8">
                    {screenDetailsArray[page].details}
                  </m.p>
                </AnimatePresence>
                </div>
                </AnimatePresence>
                <div onClick={() => handlePageChange('portfolio') }>
                  <Button page={page} setChangePage={setChangePage} setPageHeaded={setPageHeaded} linkTo={"portfolio"} text="See Our Portfolio"/>
                </div>
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
            </m.div>
          </m.section>

          {/*<===== Welcome Area =====>  */}
          <section
              className="relative max-w-[570px] md:max-w-[1110px] mx-auto font-sparta my-[76px] md:my-[120px] lg:my-[145px] xl:my-[190px] px-6 text-dark-grey text-body sm:px-1 grid lg:grid-cols-[1fr_350px] lg:gap-28 xl:gap-32">
            <div className="lg:ml-auto">
              <m.p whileInView={{x:0, opacity: 0.5, transition: {
                delay: 0.1, duration: 0.5
                } }} viewport={{ once: true }} initial={{x:-20, opacity: 0, zIndex: 20}} className="absolute font-bold tracking-[-0.125rem] leading-[-8.5rem] text-[clamp(8.5rem,15.5vw+1rem,14.625rem)] text-light-grey opacity-50 hidden md:block -top-[1.8rem] lg:-top-[2.4rem] xl:-top-[3.4rem] left-0">
                Welcome
              </m.p>
              <div
                  className="border-[0.5px] border-dark-grey opacity-70 w-[65px] absolute left-[1.5rem] md:hidden"></div>
              <m.h2 initial={{opacity: 0, scale: 0.8 }}
                    viewport={{ once: true }}
                           whileInView={{opacity: 1, y:0, scale:1,  transition: {
                               duration: 0.5,
                               delay: 0.1
                             }}} className="text-[clamp(3rem,9.14vw+1rem,4.2rem)] text-dark-blue leading-[clamp(3.25rem,10.3vw+1.2rem,4.3rem)] font-[800] tracking-[0.075rem] whitespace-nowrap pb-8 pt-[4.125rem]">
                Welcome to <br/> Arch Studio
              </m.h2>
              <div className="grid gap-6 min-w-[310px] max-w-[572px] lg:max-w-[445px] md:text-[1.125rem]">
                {welcomeText.map((text, i) => (
                    <m.p initial={{opacity: 0, y:8 }}
                         viewport={{ once: true }}
                       whileInView={{opacity: 1, y:0,  transition: {
                           duration: 0.5,
                           delay: (i + 0.5) * 0.2
                         }}} key={i}>{text}</m.p>
                ))}
              </div>
            </div>
            <m.div initial={{opacity: 0, x:10 }}
                   viewport={{ once: true }}
                 whileInView={{opacity: 1, x:0, z:0,  transition: {
                     duration: 0.7,
                     delay: 0.4
                   }}} style={{backgroundImage: `url(${image9})`}} className="h-full max-w-[350px] w-full ml-auto bg-img mr-[-0.35rem]"></m.div>
          </section>

          {/* <======== More Info ==========> */}
          <section
              className="relative max-w-[570px] text-white md:max-w-[1110px] mx-auto font-spartan mb-[72px] md:mb-[120px] lg:mb-[145px] xl:mb-[190px">
            <div className="absolute bg-black opacity-[0.42] inset-0"></div>
            <div style={{backgroundImage: `url(${image1})`}} className="h-[520px] bg-black bg-img">
              <div className="absolute left-[25%] -translate-x-[25%] p-6 grid gap-7 top-[50%] -translate-y-[47%]">
                <m.h3
                    className="text-[clamp(3rem,9.14vw+1rem,4.2rem)] leading-[clamp(3.25rem,10.3vw+1.2rem,4.3rem)] font-bold tracking-[0.075rem] whitespace-nowrap">
                  <m.span className={`inline-block`} initial={{scale: 1.5, opacity: 0.5}} viewport={{once: true}}
                          whileInView={{
                            scale: 0.93, opacity: 1, transition: {
                              duration: 0.7,
                              delay: 0.1
                            }
                          }}>Small
                  </m.span>{' '}
                  team,
                  <br/>
                  <m.span className={`inline-block`} initial={{scale: 0.5, opacity: 0.5}} viewport={{once: true}}
                          whileInView={{
                            scale: 1.05, opacity: 1, transition: {
                              duration: 0.7,
                              delay: 0.1
                            }
                          }}>Big
                  </m.span>{' '}ideas
                </m.h3>
                <div onClick={() => handlePageChange('about us')}>
                  <Button page={page} setChangePage={setChangePage} setPageHeaded={setPageHeaded} linkTo={"about us"}
                          text="About Us"/>
                </div>
              </div>
            </div>
          </section>

          {/* <========= Featured Section =======>  */}
          <section
              className="relative max-w-[570px] text-white md:max-w-[1110px] mx-auto font-spartan mb-[72px] md:mb-[120px] lg:mb-[145px] xl:mb-[190px] px-5 s:px-0">
            <div className="flex justify-between pb-10 md:pb-14">
              <m.h4 initial={{opacity: 0, scale: 0.8}}
                    viewport={{once: true}}
                    whileInView={{
                      opacity: 1, y: 0, scale: 1, transition: {
                        duration: 0.5,
                        delay: 0.5
                      }
                    }} className="text-dark-blue text-heading-m">Featured
              </m.h4>
              <m.div initial={{opacity: 0, x: -10,}}
                     viewport={{once: true}}
                     whileInView={{
                       opacity: 1, x: 0, transition: {
                         duration: 0.5,
                         delay: 0.5
                       }
                     }} className="hidden md:block">
                <div onClick={() => handlePageChange('portfolio')}>
                  <Button page={page} setChangePage={setChangePage} setPageHeaded={setPageHeaded} linkTo={"portfolio"}
                          text="See All"/>
                </div>
              </m.div>
            </div>

            <m.div viewport={{once: true}} variants={container} initial="hidden" whileInView="visible"
                   className="grid ls:grid-cols-3 gap-5 pb-6">
              {featured.map((card, index) => (
                  <m.div key={index} variants={item}>
                    <CardComponent
                        key={index}
                        title={card.title}
                        number={index + 1}
                        image={card.image}
                    />
                  </m.div>
              ))}
            </m.div>
            <div className={'md:hidden'} onClick={() => handlePageChange('portfolio')}>
              <Button page={page} specialStyle={true} setChangePage={setChangePage} setPageHeaded={setPageHeaded} linkTo={"portfolio"}
                      text="See Our Portfolio"/>
            </div>
          </section>

          <Footer/>
        </Container>
      </>
  );
};
