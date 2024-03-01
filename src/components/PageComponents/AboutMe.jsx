import React, { useState, useEffect, useLayoutEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { InView } from "react-intersection-observer"
import MeLogo from "../../assets/images/Hero Image.png"

const AboutMe = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isWordsVisible, setIsWordsVisible] = useState(false)

    useLayoutEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <div
            className="relative z-10 mx-auto flex w-fit flex-col items-center justify-center bg-white/60 text-center dark:bg-transparent lg:px-8"
            style={{ minHeight: "fit-content" }}
        >
            <h3 className="z-10 mt-24 ml-8 text-center  text-2xl uppercase tracking-[20px] text-gray-500">
                About Me
            </h3>
            <div className="z-10 mx-auto mt-16 flex h-fit max-w-2xl">
                <AnimatePresence>
                    {isVisible && (
                        //     <motion.div
                        //         initial={{
                        //             x: -200,
                        //             opacity: 0,
                        //         }}
                        //         whileInView={{ x: 0, opacity: 1 }}
                        //         transition={{ duration: 1.2 }}
                        //         className="relative h-0 z-10"
                        //         style={{ paddingBottom: "100%" }}
                        //     >
                        //         {/* <img
                        //     src="https://i.ibb.co/C979rFf/AboutMe.jpg"
                        //     alt="About"
                        //     className="absolute w-full object-cover"
                        // /> */}
                        //         <img
                        //             className="z-10 mask mask-hexagon-2 mx-auto flex max-w-[80%]"
                        //             src="https://i.ibb.co/C979rFf/AboutMe.jpg"

                        //         />
                        //     </motion.div>
                        <motion.div
                            initial={{
                                x: -200,
                                opacity: 0,
                            }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="relative z-10 h-0"
                            style={{ paddingBottom: "100%" }}
                        >
                            {/* <img
                        src="https://i.ibb.co/C979rFf/AboutMe.jpg"
                        alt="About"
                        className="absolute w-full object-cover"
                    /> */}
                            <img
                                className="mask z-10 mx-auto flex max-w-[80%]"
                                // src="https://i.ibb.co/C979rFf/AboutMe.jpg"
                                src={MeLogo}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <InView
                as="div"
                onChange={(inView, entry) => {
                    if (inView) {
                        setIsWordsVisible(true)
                    }
                }}
                threshold={0.1}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isWordsVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className={` ${
                        isWordsVisible ? "flex" : "hidden"
                    } min-h-4 relative h-auto w-[90vw] flex-col items-center justify-center sm:min-h-6 md:w-[80vw] lg:w-[70vw]`}
                >
                    <h1 className=" -mt-6 mb-4 text-4xl font-bold tracking-[5px] text-zinc-500 dark:text-gray-400">
                        Hi, I'm{" "}
                        <span className="font-permanent-marker text-4xl text-black dark:text-white">
                            Michael
                        </span>
                        !
                    </h1>
                    <p className=" prose  mt-6 mb-10 w-[80%] text-left text-base leading-8 text-gray-400 dark:text-gray-400 lg:ml-[unset]">
                        {"\u00A0\u00A0\u00A0"} Thanks for checking out my
                        portfolio! I am a former arts and design student in
                        Frisco, TX. I began my web developement journey in 2020.
                        My first formal web Developement Job began in 2022.
                        <br />
                        <br />
                        {"\u00A0\u00A0\u00A0"} I'm a proud doggy dad. My Corgi
                        is 2yo and her name is Silvia. In my freetime, I enjoy
                        making things, cars, music, mountain biking and Jiu
                        Jitsu. I enjoy religious studies and philosophy. I'm a
                        big fan of the outdoors and nature.
                    </p>
                </motion.div>
            </InView>
        </div>
    )
}

export default AboutMe
