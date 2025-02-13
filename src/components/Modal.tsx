import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { uuidGen } from "../utils";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import axios from "axios";

const Modal = ({ openModal, setOpenModal, currentProject }: any) => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: targetRef, })
//   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-105%"]);

    const [alive, setAlive] = useState("");

    if("something" === alive){
        setAlive('somesome');
    }

    async function checkSiteStatus(url: any) {
        try {
          const response = await axios.get(url);
          if (response.status === 200) {
            console.log(`The site ${url} is up! Status code: ${response.status}`);
          } else {
            console.log(`The site ${url} responded with status: ${response.status}`);
          }
        } catch (error: any) {
          if (error.response) {
            console.log(`The site ${url} is down. Status code: ${error.response.status}`);
          } else if (error.request) {
            console.log(`The site ${url} is unreachable. No response received.`);
          } else {
            console.log(`An error occurred: ${error.message}`);
          }
        }
    }

    useEffect(() => {
        checkSiteStatus('/studybud');
    }, [])

  return (
    <AnimatePresence>
        {openModal && (
            <motion.div key={'animateItem'} initial={{height: 0, opacity: 0}} animate={{ height: "100vh", opacity: 1 }} exit={{height: 0, opacity: 0}} transition={{ type: "spring", duration: 1, ease: "easeOut" }} className={`fixed top-0 bottom-0 left-0 right-0 z-50 bg-gray-600 w-screen overflow-y-scroll`}>
                <div className="relative bg-gradient-to-b from-neutral-700 to-neutral-900 w-full" style={{ height: '800nvh', minHeight: '800nvh' }}>
                    <div className={`sticky top-0 w-full h-auto lg:h-svh flex flex-col justify-start items-stretch overflow-x-hidden`}>
                        <div className='w-full lg:w-5/6 mx-auto flex flex-row justify-between items-center font_regular py-5 px-5 lg:py-10 lg:px-0'>
                            <div className={`w-full ${currentProject?.github ? 'lg:w-3/4' : 'lg:w-1/2'} flex flex-col lg:flex-row justify-between items-start lg:items-center gap-y-3`}>
                                <p className='text-base lg:text-xl font-semibold text-white'>{currentProject.title}</p>

                                {currentProject.projectType === "static" || (currentProject.projectType === "dynamic" && alive === "alive") ? (
                                    <a href={currentProject.liveLink} target="_blank" className="flex flex-row items-center justify-center gap-x-2 border-b-2 pb-1 px-2">
                                        <FaCheck className="text-green-600" size={25} />
                                        <p className='text-base lg:text-xl font-semibold text-white'>Visit live link</p>
                                    </a>
                                ) : currentProject.projectType === "dynamic" && alive === "dead" ? (
                                    <div className="flex flex-row items-center justify-center gap-x-2 cursor-not-allowed">
                                        <FaXmark className="text-red-600" size={25} />
                                        <p className='text-base lg:text-xl font-semibold text-white/60'>Site unavailable</p>
                                    </div>
                                ) : (
                                    <div className="flex flex-row items-center justify-center gap-x-2">
                                        <LazyLoadImage src="img/loader.svg" className="size-10" alt="loader" placeholderSrc="img/preload2.jpg" effect="blur" />
                                        <p className='text-base lg:text-xl font-semibold text-white'>Checking site availability...</p>
                                    </div>
                                )}

                                {currentProject?.github && (
                                    <a href={currentProject?.github} target="_blank" className='text-base lg:text-xl font-semibold text-white border-b-2 pb-1 px-2'>Github link</a>
                                )}
                            </div>

                            <p className='hidden lg:block text-base lg:text-xl font-semibold text-[#D3E97A] hover:text-[#dae99c] uppercase cursor-pointer' onClick={() => setOpenModal(false)}>close</p>

                            <p className='lg:hidden text-base lg:text-xl font-semibold w-fit h-fit bg-black rounded-full p-2' onClick={() => setOpenModal(false)}>
                                <FaXmark className="text-white" size={20} />
                            </p>
                        </div>

                        <div className='grow w-screen h-full flex flex-col lg:flex-row items-center justify-start gap-x-10 gap-y-10'>
                            <div className='shrink-0 h-auto lg:h-5/6 w-full lg:w-1/2 text-white font_regular px-5 lg:px-14 my-auto flex flex-col justify-between gap-y-8 lg:gap-y-0'>
                                <div className='w-full lg:w-4/5'>
                                    <p className='font-semibold text-xl'>{currentProject.description}</p>
                                </div>
                                
                                <div className='w-full lg:w-4/5 font-medium text-lg lg:text-2xl'>
                                    <div className='w-full py-5 border-b-[1px] border-white/50'>
                                        <p>PROJECT INFO</p>
                                    </div>

                                    <div className='w-full flex flex-row justify-between py-5 border-b-[1px] border-white/50'>
                                        <p>Role</p>
                                        <p>{currentProject.role}</p>
                                    </div>
                                    
                                    <div className='w-full flex flex-row justify-between py-5 border-b-[1px] border-white/50'>
                                        <p>Year</p>
                                        <p>{currentProject.year}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='relative w-full lg:w-1/2 h-auto lg:h-5/6 px-2 py-10 lg:p-0'>
                                <motion.div className='lg:absolute lg:top-0 w-full lg:w-auto h-full flex flex-col lg:flex-row items-center justify-start gap-x-10 gap-y-10'>
                                    {currentProject.images.map((img: any) => (
                                    <div key={uuidGen()} className='h-auto lg:h-5/6 w-full lg:w-[40vw] overflow-hidden'>
                                        <LazyLoadImage src={img} className='h-full w-full object-cover object-center' placeholderSrc="img/preload2.jpg" alt="projectImg" effect="blur" />
                                    </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        )}
    </AnimatePresence>

  )
}

export default Modal