import React from "react"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"

export default function PageBar() {
    return (
        <div
            id="page-bar-container"
            className="absolute z-10 mx-auto my-auto hidden h-auto w-screen -translate-y-10 align-middle lg:flex"
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
                    className="z-[1000] ml-auto flex flex-col text-right"
                    id="page-bar-links"
                >
                    <a
                        className="hover:text-shadow-lg text-5xl uppercase text-gray-200 hover:mr-2 hover:text-6xl hover:text-white hover:[text-shadow:_0_0px_15px_rgb(0_0_0_/_30%)] dark:text-slate-700 dark:hover:text-slate-300"
                        href="#about"
                    >
                        ABOUT
                    </a>
                    <a
                        className="hover:text-shadow-lg text-5xl uppercase text-gray-200 hover:mr-2 hover:text-6xl hover:text-white hover:opacity-100 hover:[text-shadow:_0_0px_15px_rgb(0_0_0_/_30%)] dark:text-slate-700 dark:hover:text-slate-300"
                        href="#skills"
                    >
                        SKILLS
                    </a>
                    <a
                        className="hover:text-shadow-lg text-5xl uppercase text-gray-200 hover:mr-2 hover:text-6xl hover:text-white hover:opacity-100 hover:[text-shadow:_0_0px_15px_rgb(0_0_0_/_30%)] dark:text-slate-700 dark:hover:text-slate-300"
                        href="#timeline"
                    >
                        TIMELINE
                    </a>
                    <a
                        className="hover:text-shadow-lg z-[100000000000] text-5xl uppercase text-gray-200 hover:mr-2 hover:text-6xl hover:text-white hover:opacity-100 hover:[text-shadow:_0_0px_15px_rgb(0_0_0_/_30%)] dark:text-slate-700 dark:hover:text-slate-300"
                        href="#education"
                        style={{ zIndex: 100000000000 }}
                    >
                        EDUCATION
                    </a>
                    {/* <a
                        className="hover:text-shadow-lg text-5xl uppercase text-gray-200 hover:mr-2 hover:text-6xl hover:text-zinc-300 hover:opacity-100 dark:text-slate-700 dark:hover:text-slate-300"
                        href="#"
                    >
                        EXPERIENCE
                    </a> */}
                    <a
                        className="hover:text-shadow-lg text-5xl uppercase text-gray-200 hover:mr-2 hover:text-6xl hover:text-white hover:opacity-100 hover:[text-shadow:_0_0px_15px_rgb(0_0_0_/_30%)] dark:text-slate-700 dark:hover:text-slate-300"
                        href="#projects"
                    >
                        PROJECTS
                    </a>
                    <a
                        className="hover:text-shadow-lg text-5xl uppercase text-gray-200 hover:mr-2 hover:text-6xl hover:text-white hover:opacity-100 hover:[text-shadow:_0_0px_15px_rgb(0_0_0_/_30%)] dark:text-slate-700 dark:hover:text-slate-300"
                        href="#contact"
                    >
                        CONTACT
                    </a>
                    {/* <a
                        className="hover:text-shadow-lg text-5xl uppercase text-gray-200 hover:mr-2 hover:text-6xl hover:text-zinc-300 hover:opacity-100 dark:text-slate-700 dark:hover:text-slate-300"
                        href="#"
                    >
                        Blog
                    </a> */}
                    {/* <a
                        className="hover:text-shadow-lg text-5xl uppercase text-gray-200 hover:mr-2 hover:text-6xl hover:text-zinc-300 hover:opacity-100 dark:text-slate-700 dark:hover:text-slate-300"
                        href="#"
                    >
                        ART
                    </a> */}
                </motion.div>
            </header>
        </div>
    )
}
