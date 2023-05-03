import React from "react"
import { Cursor, useTypewriter } from "react-simple-typewriter"
// import heroImage from "../../assets/Images/Hero Image.png"
import heroImage from "../../assets/Images/HeaderLogo.png"
// import heroRing from "../../assets/Images/Hero Ring.png"
import { motion } from "framer-motion"

export default function Hero() {
    const [text, count] = useTypewriter({
        words: [
            "I'm a solution-first, front-end web developer",
            "committed to building dynamic and engaging web applications",
            "to support small businesses in competing growing and thriveing",
            "to automate processes and improve efficiency",
            "and to make our life on the the internet just a bit more fun!",
        ],
        delaySpeed: 2000,
        loop: true,
        deleteSpeed: 50,
    })

    return (
        <div className="z-10 w-fit space-y-8 text-center" id="hero-section">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="min-h-4 relative flex h-auto w-[90vw] flex-col items-center justify-center sm:min-h-6 md:w-[80vw] lg:w-[70vw]"
            >
                <img
                    src={heroImage}
                    alt="hero-image"
                    id="hero-image"
                    className="max-w-screen z-10 h-auto md:max-w-[850px]"
                    style={{ maxHeight: "100vh" }} // set max height if needed
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="relative z-10 flex h-auto w-full flex-col items-center justify-center"
            >
                {/* <h1 className="bottom-10 z-20 mx-auto hidden h-fit overflow-y-visible lg:absolute">
                    <span className="z-10 text-start text-sm text-gray-400 sm:ml-[4.5rem] md:mx-4 md:text-xl lg:text-2xl ">
                        {text}
                    </span>
                    <Cursor cursorColor="orange" cursorStyle="|" />
                </h1> */}
            </motion.div>
        </div>
    )
}
