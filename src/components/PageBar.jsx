import React from "react"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"

const smoothScroll = (target, setOpen) => {
    const targetElement = document.getElementById(target)
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" })
    }
}

export default function PageBar() {
    return (
        <div
            id="page-bar-container"
            className="absolute z-20 mx-auto my-auto hidden h-auto w-screen -translate-y-10 align-middle lg:flex"
        >
            <header className="relative right-20 z-[100000000000] my-auto ml-auto flex h-screen w-screen select-none items-center justify-between p-1 text-slate-300 opacity-50 hover:opacity-100 dark:text-slate-800">
                <motion.div
                    initial={{
                        x: -200,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.5,
                    }}
                    className="z-[1000] ml-auto flex flex-col text-right "
                    id="page-bar-links"
                >
                    <a
                        className="hover:text-shadow-lg -skew-y-6 hover:text-outline dark:hover:text-stroke cursor-pointer border-black stroke-black stroke-2 p-1 pt-2 text-5xl uppercase  text-white hover:mr-2 hover:scale-x-[120%] hover:bg-black/80 hover:font-bebas-neue hover:text-6xl hover:tracking-wide hover:text-white hover:[text-shadow:_0_0px_15px_rgb(0_0_0_/_40%)] dark:text-slate-700 dark:hover:bg-black/40 dark:hover:text-white  dark:hover:shadow-black dark:hover:[text-shadow:_0_0px_15px_rgb(0_0_0_/_30%)]"
                        onClick={() => smoothScroll("aboutMe")}
                    >
                        ABOUT
                    </a>
                    <a
                        className="hover:text-shadow-lg -skew-y-3 hover:text-outline dark:hover:text-stroke cursor-pointer stroke-black stroke-2 p-1 pt-2 text-5xl uppercase text-white  hover:mr-2  hover:scale-x-[120%] hover:bg-black/80 hover:font-bebas-neue hover:text-6xl hover:tracking-wide hover:text-white hover:opacity-100 hover:[text-shadow:_0_0px_15px_rgb(0_0_0_/_40%)] dark:text-slate-700 dark:hover:bg-black/40 dark:hover:text-white  dark:hover:shadow-black"
                        onClick={() => smoothScroll("skills")}
                    >
                        SKILLS
                    </a>
                    <a
                        className="hover:text-shadow-lg hover:text-outline dark:hover:text-stroke cursor-pointer stroke-black stroke-2 p-1 pt-2 text-5xl  uppercase text-white hover:mr-2  hover:scale-x-[120%] hover:bg-black/80 hover:font-bebas-neue hover:text-6xl hover:tracking-wide hover:text-white hover:opacity-100 hover:[text-shadow:_0_0px_15px_rgb(0_0_0_/_40%)] dark:text-slate-700 dark:hover:bg-black/40 dark:hover:text-white  dark:hover:shadow-black"
                        onClick={() => smoothScroll("timeline")}
                    >
                        TIMELINE
                    </a>
                    <a
                        className="hover:text-shadow-lg skew-y-3 hover:text-outline dark:hover:text-stroke z-[100000000000] cursor-pointer stroke-black stroke-2 p-1  pt-2 text-5xl uppercase text-white hover:mr-2  hover:scale-x-[120%] hover:bg-black/80 hover:font-bebas-neue hover:text-6xl hover:tracking-wide hover:text-white hover:opacity-100 hover:[text-shadow:_0_0px_15px_rgb(0_0_0_/_40%)] dark:text-slate-700 dark:hover:bg-black/40 dark:hover:text-white  dark:hover:shadow-black"
                        // href="#education"
                        onClick={() => smoothScroll("education")}
                        style={{ zIndex: 100000000000 }}
                    >
                        EDUCATION
                    </a>
                    {/* <a
                        className="hover:text-shadow-lg text-5xl uppercase text-gray-200 hover:mr-2 hover:text-6xl hover:text-zinc-300 hover:opacity-100 dark:text-slate-700 dark:hover:text-white  hover:text-outline"
                        href="#"
                    >
                        EXPERIENCE
                    </a> */}
                    <a
                        className="hover:text-shadow-lg skew-y-6 hover:text-outline dark:hover:text-stroke pt-2 hover:font-bebas-neue t cursor-pointer stroke-black stroke-2 p-1 text-5xl uppercase text-white  hover:mr-2 hover:scale-x-[120%] hover:bg-black/80 hover:text-6xl hover:tracking-wide hover:text-white hover:opacity-100 hover:[text-shadow:_0_0px_15px_rgb(0_0_0_/_40%)] dark:text-slate-700 dark:hover:bg-black/40 dark:hover:text-white  dark:hover:shadow-black"
                        // href="#projects"
                        onClick={() => smoothScroll("projects")}
                    >
                        PROJECTS
                    </a>
                    <a
                        className="hover:text-shadow-lg hover:text-outline skew-y-12 dark:hover:text-stroke pt-2 hover:font-bebas-neue cursor-pointer stroke-black stroke-2 p-1 text-5xl uppercase text-white  hover:mr-2 hover:scale-x-[120%] hover:bg-black/80 hover:text-6xl hover:tracking-wide hover:text-white hover:opacity-100 hover:[text-shadow:_0_0px_15px_rgb(0_0_0_/_40%)] dark:text-slate-700 dark:hover:bg-black/40 dark:hover:text-white  dark:hover:shadow-black"
                        // href="#contact"
                        onClick={() => smoothScroll("contact")}
                    >
                        CONTACT
                    </a>
                    {/* <a
                        className="hover:text-shadow-lg text-5xl uppercase text-gray-200 hover:mr-2 hover:text-6xl hover:text-zinc-300 hover:opacity-100 dark:text-slate-700 dark:hover:text-white  hover:text-outline"
                        href="#"
                    >
                        Blog
                    </a> */}
                    {/* <a
                        className="hover:text-shadow-lg text-5xl uppercase text-gray-200 hover:mr-2 hover:text-6xl hover:text-zinc-300 hover:opacity-100 dark:text-slate-700 dark:hover:text-white  hover:text-outline"
                        href="#"
                    >
                        ART
                    </a> */}
                </motion.div>
            </header>
        </div>
    )
}
