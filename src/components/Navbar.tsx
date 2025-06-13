import { Link, useLocation } from "react-router-dom";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { FiArrowUpRight } from "react-icons/fi";
import ContactModal from "./ContactModal";

const Navbar = () => {
  const currentLocaton = useLocation();

  return (
    <div className="fixed top-0 left-0 right-0 w-full h-fit z-50">
      {/* DESKTOP */}
      <div className="hidden w-full h-fit px-14 py-5 lg:flex flex-row items-center justify-between font-semibold text-xl duration-500">
        <Link to={"/"}>
          <p className="uppercase font_bold navbar text-secondary">
            Chinonso Udonne
          </p>
        </Link>

        <div className="flex flex-row items-center justify-end gap-x-5 font_regular">
          <Link to={"/about"}>
            <p className="navbar text-secondary">About</p>
          </Link>
          <Link to={"/projects"}>
            <p className="navbar text-secondary">Projects</p>
          </Link>
          <ContactModal>
            <p className="navbar text-secondary flex flex-row items-center justify-center">
              <span>Contact</span> <FiArrowUpRight size={30} />
            </p>
          </ContactModal>
        </div>
      </div>

      {/* MOBILE */}
      <div className="lg:hidden w-full h-fit px-10 py-5 flex flex-row items-center justify-between backdrop-blur-sm bg-secondary-blur bg-white/10">
        <Link to={"/"}>
          <p className="text-3xl font-bold font_bold navbar text-white">
            C &middot; U
          </p>
        </Link>

        <div className="fixed top-4 right-5 w-fit h-fit block lg:hidden z-50">
          <Popover className="relative">
            {({ open }) => (
              <>
                <div
                  className={`bg-white flex flex-col items-center justify-center w-12 h-12 rounded-full duration-300 ease-in-out ${
                    open && "scale-125"
                  }`}
                >
                  <PopoverButton
                    id="nav-icon3"
                    className={`relative w-2/5 h-2/5 p-0 rounded-full ${
                      open && "open"
                    }`}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </PopoverButton>
                </div>

                <PopoverPanel
                  anchor="bottom"
                  className={`flex flex-col items-center justify-start w-full h-full p-3 pt-10  z-50`}
                >
                  <div
                    className={`w-full h-full flex flex-col items-start justify-start gap-y-4 pl-5 pt-10 bg-black text-white border-2 border-white border-solid text-4xl text-bold font_bold rounded-3xl`}
                  >
                    <Link to={"/"}>
                      <p
                        className={`${
                          currentLocaton.pathname === "/" && "text-[#D3E97A]"
                        }`}
                      >
                        Home
                      </p>
                    </Link>

                    <hr className="border border-white w-full" />

                    <Link to={"/about"}>
                      <p
                        className={`${
                          currentLocaton.pathname === "/about" &&
                          "text-[#D3E97A]"
                        }`}
                      >
                        About
                      </p>
                    </Link>

                    <hr className="border border-white w-full" />

                    <Link to={"/projects"}>
                      <p
                        className={`${
                          currentLocaton.pathname === "/projects" &&
                          "text-[#D3E97A]"
                        }`}
                      >
                        Projects
                      </p>
                    </Link>

                    <hr className="border border-white w-full" />

                    <ContactModal>
                      <p
                        className={`flex flex-row items-center justify-center ${
                          currentLocaton.pathname === "/contact" &&
                          "text-[#D3E97A]"
                        }`}
                      >
                        <span>Contact</span> <FiArrowUpRight size={30} />
                      </p>
                    </ContactModal>
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
