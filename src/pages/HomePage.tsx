import { FiArrowUpRight } from "react-icons/fi";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import { certifications, projects, uuidGen } from "../utils";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ContactModal from "@/components/ContactModal";

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentProject, setCurrentProject] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openModal]);

  return (
    <React.Fragment>
      <div className="w-full bg-black">
        <Navbar />

        <div className="w-full h-fit min-h-svh flex flex-row items-center justify-center border-b border-[#c7c7c735] border-solid pt-24 lg:pt-0 pb-10 lg:pb-0">
          <div className="h-full w-full lg:w-5/6 flex flex-col lg:flex-row items-center justify-center gap-x-10 gap-y-12">
            <div className="w-11/12 lg:w-1/2 h-full flex flex-col items-start justify-center gap-y-4">
              <p className="text-white text-3xl lg:text-6xl font_bold font-medium tracking-tighter">
                HI, I’M <br />
                CHINONSO UDONNE.
              </p>
              <p className="text-secondary font_regular text-base">
                Software Engineer <span className="text-special">|</span> AWS
                Architect <span className="text-special">|</span> Gen AI
                Integration
                <br />I build production systems that leverage modern Java,
                Typescript, AWS infrastructure, and machine learning
                capabilities to solve complex engineering challenges.
              </p>

              <div className="flex flex-row items-center justify-start gap-x-5">
                <ContactModal>
                  <button className="flex flex-row items-center justify-center gap-x-2 lg:gap-x-5 bg-black text-sm font-semibold font_regular text-[#D3E97A] rounded-full p-3 hover:bg-[#D3E97A] border-2 border-[#D3E97A] hover:text-black duration-500 hover:pr-6">
                    <span>CONTACT ME</span> <FiArrowUpRight size={20} />
                  </button>
                </ContactModal>

                <Link
                  to={"https://github.com/nonsoTS"}
                  target="_blank"
                  className="inline w-fit h-fit p-3 rounded-full icon-outer duration-500"
                >
                  <FaGithub size={25} className="icon-inner duration-500" />
                </Link>

                <Link
                  to={"https://www.linkedin.com/in/nonso-uj/"}
                  target="_blank"
                  className="w-fit h-fit p-3 rounded-full icon-outer duration-500"
                >
                  <FaLinkedinIn size={25} className="icon-inner duration-300" />
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center">
              <div className="w-11/12 lg:w-3/4 h-5/6">
                <LazyLoadImage
                  src="/img/hero.png"
                  className="w-full h-full object-cover object-center rounded-xl"
                  placeholderSrc="/img/preload.jpg"
                  alt=""
                  effect="blur"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full min-h-[70vh] flex flex-row items-stretch justify-center border-b border-[#c7c7c735] border-solid bg-black">
            <div className="w-11/12 lg:w-4/5 h-full flex flex-col lg:flex-row justify-center items-start gap-x-10 gap-y-10 py-20">
              <div className="w-full lg:w-1/2 h-full">
                <p className="text-center lg:text-left text-white text-3xl lg:text-7xl font_bold font-semibold">
                  ABOUT ME
                </p>
              </div>
              <div className="w-full lg:w-1/2 h-full">
                <p className="text-white text-base lg:text-2xl font-semibold lg:font-normal font_regular">
                  I'm a Software engineer specializing in cloud-native
                  architectures and AI-powered applications.
                </p>

                <p className="text-secondary text-base font_regular my-4 lg:my-8">
                  I build production systems using modern Java, Typescript, AWS
                  infrastructure, and machine learning capabilities to deliver
                  scalable, performant solutions that solve real business
                  problems.
                </p>

                <Link to={"/about"} className="mt-5">
                  <p className="text-center lg:text-left font-semibold text-special font_regular underline decoration-dotted hover:decoration-solid decoration-[#D3E97A] underline-offset-[6px]">
                    MORE ABOUT ME
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-11/12 h-full flex flex-col justify-center items-start gap-y-5 py-20 mx-auto">
            <div className="w-full h-full">
              <p className="text-center text-white text-3xl lg:text-5xl font_bold font-semibold">
                Certifications
              </p>
            </div>
            <div className="slider w-full lg:w-4/5 !flex flex-row !items-center justify-stretch">
              <div className="slide-track !flex flex-row !items-center justify-between gap-x-10">
                {certifications?.map((cert) => (
                  <div className="slide">
                    <a href={cert?.link} target="_blank" rel="noopener">
                      <img
                        src={cert?.img}
                        className="min-w-60 h-auto "
                        alt="Certification image"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-b border-[#c7c7c735] border-solid">
          <div className="w-11/12 lg:w-4/5 mx-auto">
            <div className="w-full pt-16 pb-8 lg:pb-24 space-y-5">
              <p className="text-3xl lg:text-5xl font_bold font-semibold uppercase text-white">
                Featured Projects
              </p>
              <p className="text-base lg:text-lg font_regular text-secondary w-full lg:w-1/2">
                Explore some of my projects that highlight my expertise in
                building impactful, user-focused applications.
              </p>
            </div>

            <div className="w-full space-y-20 lg:space-y-24">
              {projects.slice(0, 3).map((item) => (
                <Link
                  key={uuidGen()}
                  to={"/"}
                  className="block cursor-pointer"
                  onClick={() => {
                    setOpenModal(true);
                    setCurrentProject(item);
                  }}
                >
                  <div className="relative h-fit lg:h-[80vh] w-full flex flex-col lg:flex-row items-start justify-between gap-y-5 gap-x-5 lg:py-10">
                    <div className="order-2 lg:order-1 h-full w-full lg:w-1/2">
                      <div className="lg:sticky lg:top-20 w-full h-fit space-y-3 lg:space-y-10">
                        <p className="text-3xl lg:text-4xl font-semibold leading-[0.85] text-white uppercase">
                          {item.title}
                        </p>
                        <p className="text-sm lg:text-base text-secondary">
                          {item.excerpt}
                        </p>
                      </div>
                    </div>
                    <div className="order-1 lg:order-2 h-full w-full lg:w-1/2 rounded-lg bg-[#1A1A1A] flex flex-col items-center justify-center p-5 lg:p-14 duration-500">
                      <LazyLoadImage
                        src={item.images[0]}
                        className="w-full h-auto object-cover object-center rounded-lg hover:scale-110 duration-500"
                        placeholderSrc="img/preload2.jpg"
                        alt=""
                        effect="blur"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="w-full p-10 flex flex-row items-center justify-center">
              <Link to={"/projects"} className="inline">
                <button className="flex flex-row items-center justify-center gap-x-5 bg-black text-sm font-semibold font_regular text-[#D3E97A] rounded-full p-3 hover:bg-[#D3E97A] border-2 border-[#D3E97A] hover:text-black duration-300 cursor-pointer">
                  SEE MORE PROJECTS <FiArrowUpRight size={20} />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full h-fit min-h-[50vh] lg:min-h-[80vh] px-2 lg:px-20">
          <div className="w-11/12 lg:w-4/5 mx-auto py-16">
            <p className="text-lg font_regular mb-10 text-secondary">
              Let's connect
            </p>

            <div className="w-full overflow-hidden">
              <ContactModal>
                <p className="text-[1.8rem] lg:text-[6rem] font-semibold tracking-tighter text-white font_bold underline decoration-dotted hover:decoration-solid underline-offset-4 lg:underline-offset-[1rem] decoration-2 lg:decoration-8 leading-[1.3] duration-700">
                  NONSO.
                  <br />
                  UDONNE@GMAIL.COM
                </p>
              </ContactModal>
            </div>

            <div className="w-full py-10 flex flex-row items-center justify-center gap-x-5">
              <Link
                to={"https://www.linkedin.com/in/nonso-uj/"}
                target="_blank"
                className="inline w-fit h-fit p-3 rounded-full icon-outer duration-500"
              >
                <FaLinkedinIn size={25} className="icon-inner duration-500" />
              </Link>
              <Link
                to={"https://github.com/nonsoTS"}
                target="_blank"
                className="inline w-fit h-fit p-3 rounded-full icon-outer duration-500"
              >
                <FaGithub size={25} className="icon-inner duration-500" />
              </Link>
              <Link
                to={"https://x.com/nonso_uj"}
                target="_blank"
                className="inline w-fit h-fit p-3 rounded-full icon-outer duration-500"
              >
                <FaXTwitter size={25} className="icon-inner duration-500" />
              </Link>
              <Link
                to={"https://www.instagram.com/nonso_uj/"}
                target="_blank"
                className="inline w-fit h-fit p-3 rounded-full icon-outer duration-500"
              >
                <FaInstagram size={25} className="icon-inner duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        currentProject={currentProject}
      />
    </React.Fragment>
  );
};

export default HomePage;
