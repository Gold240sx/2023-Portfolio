import React, { useState } from "react"
import ReactDOM from "react-dom"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import { extend, Canvas } from "@react-three/fiber"
import { Text } from "@react-three/drei"
// import { Text as TroikaText } from "troika-three-text"
// import fonts from "../../fonts"

const smoothScroll = (target, setOpen) => {
    const targetElement = document.getElementById(target)
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" })
    }
}

const links = [
    {
        name: "About",
        target: "/about",
    },
    {
        name: "Skills",
        target: "/skills",
    },
    {
        name: "Education",
        target: "/education",
    },
    {
        name: "Projects",
        target: "/projects",
    },
    {
        name: "Contact",
        target: "/contact",
    },
]

export default function PageBar() {
    return (
        <div
            id="page-bar-container"
            className="absolute z-20 mx-auto my-auto hidden h-auto w-screen align-middle lg:flex"
        >
            <header className="relative  z-[100000000000] ml-auto flex h-screen w-screen select-none  justify-between text-slate-300 dark:text-slate-800">
                <Canvas
                    style={{
                        display: "none",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                    }}
                    pixelRatio={window.devicePixelRatio}
                    // onMouseMove={onMouseMove}
                    // className="overflow-scroll"
                >
                    {/* {links.map((link, index) => (
                        <Text
                            key={index}
                            position={[8.5, -index * 1.2, 0]} // Adjust Y position for spacing
                            fontSize={1} // Adjust font size
                            color="black" // Set text color
                            anchorX="right" // Align text to the right
                            // rotation={[0, 0, Math.PI / 4]} // Rotate text (45 degrees)
                        >
                            {link.name}
                        </Text>
                    ))} */}
                    {/* <TroikaText
                        position-z={-180}
                        rotation={rotation}
                        {...opts}
                        text={text}
                        anchorX="center"
                        anchorY="middle"
                    > */}
                    {/* {opts.materialType === "MeshPhongMaterial" ? (
                            <meshPhongMaterial
                                attach="material"
                                color={opts.color}
                            />
                        ) : null} */}
                    {/* </TroikaText> */}

                    <pointLight position={[-100, 0, -160]} />
                    <pointLight position={[0, 0, -170]} />
                    <pointLight position={[100, 0, -160]} />
                </Canvas>
            </header>
        </div>
    )
}

{
    /* <motion.div
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
                    {/* <a
                        className="hover:text-shadow-lg hover:text-outline dark:hover:text-stroke -skew-y-6 cursor-pointer border-black stroke-black stroke-2 p-1 pt-2 text-5xl uppercase  text-white hover:mr-2 hover:scale-x-[120%] hover:bg-black/80 hover:font-bebas-neue hover:text-6xl hover:tracking-wide hover:text-white hover:[text-shadow:_0_0px_15px_rgb(0_0_0_/_40%)] dark:text-slate-700 dark:hover:bg-black/40 dark:hover:text-white  dark:hover:shadow-black dark:hover:[text-shadow:_0_0px_15px_rgb(0_0_0_/_30%)]"
                        onClick={() => smoothScroll("aboutMe")}
                    >
                        ABOUT
                    </a>
                    <a
                        className="hover:text-shadow-lg hover:text-outline dark:hover:text-stroke -skew-y-3 cursor-pointer stroke-black stroke-2 p-1 pt-2 text-5xl uppercase text-white  hover:mr-2  hover:scale-x-[120%] hover:bg-black/80 hover:font-bebas-neue hover:text-6xl hover:tracking-wide hover:text-white hover:opacity-100 hover:[text-shadow:_0_0px_15px_rgb(0_0_0_/_40%)] dark:text-slate-700 dark:hover:bg-black/40 dark:hover:text-white  dark:hover:shadow-black"
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
                        className="hover:text-shadow-lg hover:text-outline dark:hover:text-stroke z-[100000000000] skew-y-3 cursor-pointer stroke-black stroke-2 p-1  pt-2 text-5xl uppercase text-white hover:mr-2  hover:scale-x-[120%] hover:bg-black/80 hover:font-bebas-neue hover:text-6xl hover:tracking-wide hover:text-white hover:opacity-100 hover:[text-shadow:_0_0px_15px_rgb(0_0_0_/_40%)] dark:text-slate-700 dark:hover:bg-black/40 dark:hover:text-white  dark:hover:shadow-black"
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
                    </a> */
}
{
    /* <a
                        className="hover:text-shadow-lg hover:text-outline dark:hover:text-stroke t skew-y-6 cursor-pointer stroke-black stroke-2 p-1 pt-2 text-5xl uppercase text-white hover:mr-2  hover:scale-x-[120%] hover:bg-black/80 hover:font-bebas-neue hover:text-6xl hover:tracking-wide hover:text-white hover:opacity-100 hover:[text-shadow:_0_0px_15px_rgb(0_0_0_/_40%)] dark:text-slate-700 dark:hover:bg-black/40 dark:hover:text-white  dark:hover:shadow-black"
                        // href="#projects"
                        onClick={() => smoothScroll("projects")}
                    >
                        PROJECTS
                    </a>
                    <a
                        className="hover:text-shadow-lg hover:text-outline dark:hover:text-stroke skew-y-12 cursor-pointer stroke-black stroke-2 p-1 pt-2 text-5xl uppercase text-white hover:mr-2  hover:scale-x-[120%] hover:bg-black/80 hover:font-bebas-neue hover:text-6xl hover:tracking-wide hover:text-white hover:opacity-100 hover:[text-shadow:_0_0px_15px_rgb(0_0_0_/_40%)] dark:text-slate-700 dark:hover:bg-black/40 dark:hover:text-white  dark:hover:shadow-black"
                        // href="#contact"
                        onClick={() => smoothScroll("contact")}
                    >
                        CONTACT
                    </a> */
}
{
    /* <a
                        className="hover:text-shadow-lg text-5xl uppercase text-gray-200 hover:mr-2 hover:text-6xl hover:text-zinc-300 hover:opacity-100 dark:text-slate-700 dark:hover:text-white  hover:text-outline"
                        href="#"
                    >
                        Blog
                    </a> */
}
{
    /* <a
                        className="hover:text-shadow-lg text-5xl uppercase text-gray-200 hover:mr-2 hover:text-6xl hover:text-zinc-300 hover:opacity-100 dark:text-slate-700 dark:hover:text-white  hover:text-outline"
                        href="#"
                    >
                        ART
                    </a> 
                </motion.div> */
}
