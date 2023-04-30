import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MeLogo from "../../assets/images/Hero Image.png"

const AboutMe = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div
            className="relative z-10 mx-auto flex w-fit flex-col items-center justify-center text-center lg:px-8 bg-white/60 dark:bg-transparent"
            style={{ minHeight: "fit-content" }}
        >
            <h3 className="z-10 mt-24 ml-8 text-center  text-2xl uppercase tracking-[20px] text-gray-500">
                About Me
            </h3>
            <div className="mx-auto mt-16 flex h-fit max-w-2xl z-10">
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
                            transition={{ duration: 1.2 }}
                            className="relative h-0 z-10"
                            style={{ paddingBottom: "100%" }}
                        >
                            {/* <img
                        src="https://i.ibb.co/C979rFf/AboutMe.jpg"
                        alt="About"
                        className="absolute w-full object-cover"
                    /> */}
                            <img
                                className="z-10 mask mx-auto flex max-w-[80%]"
                                // src="https://i.ibb.co/C979rFf/AboutMe.jpg"
                                src={MeLogo}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <h1 className=" -mt-6 mb-4 text-4xl font-bold tracking-[5px] text-zinc-500 dark:text-gray-400">
                Hi, I'm{" "}
                <span className="text-black dark:text-white font-permanent-marker text-4xl">Michael</span>!
            </h1>
            <p className=" prose  mt-6 mb-10 w-[80%] text-left text-base leading-8 text-gray-400 dark:text-gray-400 lg:ml-[unset]">
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
    );
};

export default AboutMe;
