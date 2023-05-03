import React, { useEffect, useRef } from "react"
import { SocialIcon } from "react-social-icons"
import ResumeIcon from "../assets/Icons/ResumeDL.svg"
import resumeFile from "../assets/files/MichaelMartell2023ResumeV1.3.pdf"
import { Link } from "react-router-dom"

import { motion } from "framer-motion"
import { Tooltip } from "react-tooltip"
import qs from "query-string"

type Props = {}

function handleEmailClick() {
    const params = qs.stringify({
        subject: "RE:Portfolio Reference - Hey Michael!",
        body: "Hi Michael, I saw your portfolio and wanted to reach out!",
    })
    window.location.href = `mailto:240designworks@gmail.com?${params}`
}

export default function SocialBar({}: Props) {
    const tooltipRefs = useRef({})

    const handleBlur = () => {
        for (const tooltipRef in tooltipRefs.current) {
            if (tooltipRefs.current[tooltipRef]) {
                tooltipRefs.current[tooltipRef].hideTooltip()
            }
        }
    }

    const initializeTooltipRefs = (id) => (ref) => {
        tooltipRefs.current[id] = ref
    }

    useEffect(() => {
        window.addEventListener("blur", handleBlur)
        return () => {
            window.removeEventListener("blur", handleBlur)
        }
    }, [])

    return (
        <header className="fixed bottom-0 z-20 mx-auto flex max-w-7xl items-center justify-between p-1 sm:left-0 landscape:sm:left-5">
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
                className="mb-4 flex flex-col items-center"
            >
                {" "}
                {/* above bg-orange-500 rounded-full */}
                {/* social icons */}
                {/* LinkedIn */}
                <SocialIcon
                    url="https://www.linkedin.com/in/martell01"
                    fgColor="transparent"
                    bgColor="#737373"
                    className=" hover: cursor-pointer opacity-80 brightness-200 hover:opacity-100 dark:opacity-60 hover:dark:opacity-100"
                    data-tooltip-id="linkedin"
                    data-tooltip-content="Link: My Linkedin Profile"
                    data-tooltip-delay-show={1000}
                    style={{
                        height: "26px",
                        width: "26px",
                        marginBlock: "0.5rem 0.4rem",
                    }}
                />
                <Tooltip
                    ref={initializeTooltipRefs("linkedin")}
                    id="linkedin"
                    place="right"
                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                />
                {/* Github */}
                <SocialIcon
                    url="https://github.com/gold240sx"
                    fgColor="#737373"
                    className="cursor-pointer opacity-80 brightness-200 hover:opacity-100 dark:opacity-50 hover:dark:opacity-100"
                    data-tooltip-id="github"
                    data-tooltip-content="Link: My Github"
                    data-tooltip-delay-show={1000}
                    bgColor="transparent"
                />
                <Tooltip
                    ref={initializeTooltipRefs("github")}
                    id="github"
                    place="right"
                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                />
                {/* StackOverflow */}
                <SocialIcon
                    url="https://stackoverflow.com/users/16441693/michael-martell"
                    fgColor="transparent"
                    bgColor="#737373"
                    className=" cursor-pointer opacity-80 brightness-200 hover:opacity-100 dark:opacity-60 hover:dark:opacity-100"
                    data-tooltip-id="stack"
                    data-tooltip-content="Link: My StackOverflow Profile"
                    data-tooltip-delay-show={1000}
                    style={{
                        height: "26px",
                        width: "26px",
                        marginBlock: "0.5rem 0.4rem",
                    }}
                />
                <Tooltip
                    ref={initializeTooltipRefs("stack")}
                    id="stack"
                    place="right"
                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                />
                {/* <SocialIcon
                    url="https://michael-martell.com"
                    fgColor="#737373"
                    bgColor="transparent"
                    className="opacity-30 hover:opacity-100 dark:opacity-50 hover:dark:opacity-100"
                    data-tooltip-id="web"
                    data-tooltip-content="Link: My Website"
                    data-tooltip-delay-show={1000}
                />
                <Tooltip
                    id="web"
                    place="right"
                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                /> */}
                <SocialIcon
                    url="mailto:240designworks@gmail.com"
                    onClick={handleEmailClick}
                    className=" mb-1  translate-x-0.5 scale-105 cursor-pointer opacity-80 brightness-200 hover:opacity-100 dark:opacity-50 hover:dark:opacity-100"
                    data-tooltip-id="email"
                    data-tooltip-content="Link: Email Me (Direct)"
                    network="email"
                    fgColor="#737373"
                    bgColor="transparent"
                    data-tooltip-delay-show={150}
                />
                <Tooltip
                    ref={initializeTooltipRefs("email")}
                    id="email"
                    place="right"
                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                />
                {/* Resume */}
                <Link
                    to={resumeFile}
                    target="_blank"
                    download
                    className="scale-90 hover:scale-100"
                    data-tooltip-id="resume-dl"
                    data-tooltip-content="Download: My Resume"
                    data-tooltip-delay-show={150}
                >
                    <img
                        src={ResumeIcon}
                        className="mb-2 h-8 w-auto translate-x-1 cursor-pointer  opacity-80 invert transition-all duration-500 ease-in-out hover:scale-100 hover:opacity-100 dark:fill-white dark:opacity-20  hover:dark:opacity-40 lg:dark:opacity-60 lg:dark:invert"
                    />
                </Link>
                <Tooltip
                    ref={initializeTooltipRefs("resume")}
                    id="resume-dl"
                    place="right"
                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                />
            </motion.div>
        </header>
    )
}
