import Navbar from "../components/Navbar";
import { FaGithub } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import { projects, uuidGen } from "../utils";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProjectsPage = () => {
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
    <div className="w-full h-full bg-black">
      <Navbar />

      <div className="w-11/12 mx-auto py-20">
        <div className="w-full my-10">
          <p className="text-3xl lg:text-5xl font-bold font_bold text-secondary">
            All Projects
          </p>
        </div>

        <div className="w-full">
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 justify-between items-stretch">
            {projects.map((item) => (
              <div
                key={uuidGen()}
                className="flex flex-col justify-start items-stretch w-full max-w-2xl border border-[#D3E97A]/30 rounded-2xl cursor-pointer hover:shadow-[0_0_60px_5px_rgba(211,233,122,0.4)] hover:scale-105 duration-500"
                onClick={() => {
                  setOpenModal(true);
                  setCurrentProject(item);
                }}
              >
                <div className="w-full h-48 overflow-hidden">
                  <LazyLoadImage
                    src={item.images[0]}
                    className="w-full h-auto object-cover object-top rounded-t-2xl"
                    placeholderSrc="img/preload2.jpg"
                    alt=""
                    effect="blur"
                  />
                </div>
                <div className="grow flex flex-col justify-between items-stretch p-4 space-y-4">
                  <div className="w-full h-fit">
                    <p className="text-secondary text-2xl font-semibold">
                      {item.title}
                    </p>

                    <p className="text-secondary">{item.excerpt}</p>
                  </div>

                  <div className="w-full my-2 self-end flex flex-row items-center justify-start gap-x-3">
                    {item?.github && (
                      <span className="inline w-fit h-fit p-3 rounded-full icon-outer duration-500">
                        <FaGithub
                          size={20}
                          className="icon-inner duration-500"
                        />
                      </span>
                    )}
                    {item?.liveLink && (
                      <span className="inline w-fit h-fit p-3 rounded-full icon-outer duration-500">
                        <SlGlobe
                          size={20}
                          className="icon-inner duration-500"
                        />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        currentProject={currentProject}
      />
    </div>
  );
};

export default ProjectsPage;
