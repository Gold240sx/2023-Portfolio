import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const AboutMe = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <div
            className="relative mx-auto flex w-full flex-col items-center  justify-center px-10 text-center lg:px-8"
            style={{ minHeight: "fit-content" }}
        >
            <h3 className=" mt-10 text-2xl uppercase  tracking-[20px] text-gray-500">
                About Me
            </h3>
            <div className="mx-auto mb-16 flex h-fit  w-[300px] max-w-2xl">
                <AnimatePresence>
                    {isVisible && (
                        <motion.div
                            initial={{
                                x: -200,
                                opacity: 0,
                            }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.2 }}
                            className="relative h-0"
                            style={{ paddingBottom: "100%" }}
                        >
                            {/* <img
                        src="https://i.ibb.co/C979rFf/AboutMe.jpg"
                        alt="About"
                        className="absolute w-full object-cover"
                    /> */}
                            <img
                                class="mask mask-hexagon-2 -translate-x-7"
                                src="https://i.ibb.co/C979rFf/AboutMe.jpg"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <h1 className=" mb-4 text-4xl font-bold tracking-[5px] text-gray-700 dark:text-gray-400">
                Hi, I'm{" "}
                <span className="text-zinc-500 dark:text-white">Michael</span>!
            </h1>
            <p className="prose mx-6 mt-6 mb-10 ml-10 w-full text-left text-base leading-8 text-gray-600 dark:text-gray-400 lg:ml-[unset]">
                {"\u00A0\u00A0\u00A0"} Thanks for checking out my portfolio! I
                am a former arts and design student in Frisco, TX. I began my
                web developement journey in November of 2020. My first formal
                web Developement Job began in 2022.
                <br />
                <br />
                {"\u00A0\u00A0\u00A0"} I'm a proud doggy dad. My Corgi is 2yo
                and her name is Silvia. In my freetime, I enjoy making things,
                cars, music, mountain biking and Jiu Jitsu. I enjoy religious
                studies and philosophy. I'm a big fan of the outdoors and
                nature.
            </p>
        </div>
    )
}

export default AboutMe
