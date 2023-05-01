import React, { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { useSignOut } from "../hooks/useSignOut"
import siteLogo from "../assets/Images/header.png"
import siteLogoDark from "../assets/Images/headerDark.png"
import newSiteLogo from "../assets/Images/portfolio-logo-large.png"
import newSiteLogoDark from "../assets/Images/portfolio-logo-dark-large.png"
import LoResLogo from "../assets/Icons/logoLoRes.png"
import SocialBar from "../components/SocialBar"
import PageBar from "./PageBar"
import { useTheme } from "../hooks/useThemeContext"
import { useState } from "react"
import { motion, useScroll, useAnimation } from "framer-motion"
import MobileMenu from "./mobileMenu"
import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { Tooltip } from "react-tooltip"
import Astronaut from "../assets/Images/astronaut.png"
import debounce from "lodash.debounce"
import {
    ChevronDownIcon,
    PhoneIcon,
    PlayCircleIcon,
} from "@heroicons/react/20/solid"
import {
    ArrowPathIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
} from "@heroicons/react/24/outline"

const Projects = [
    {
        name: "Analytics",
        description: "Get a better understanding of your traffic",
        href: "#",
        icon: ChartPieIcon,
    },
    {
        name: "Engagement",
        description: "Speak directly to your customers",
        href: "#",
        icon: CursorArrowRaysIcon,
    },
    {
        name: "Security",
        description: "Your customers' data will be safe and secure",
        href: "#",
        icon: FingerPrintIcon,
    },
    {
        name: "Integrations",
        description: "Connect with third-party tools",
        href: "#",
        icon: SquaresPlusIcon,
    },
    {
        name: "Automations",
        description: "Build strategic funnels that will convert",
        href: "#",
        icon: ArrowPathIcon,
    },
]
const callsToAction = [
    { name: "Watch demo", href: "#", icon: PlayCircleIcon },
    { name: "Contact sales", href: "#", icon: PhoneIcon },
]

export const ScrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop
    if (c > 0) {
        window.requestAnimationFrame(ScrollToTop)
        window.scrollTo(0, c - c / 12)
    }
}

export const navbar = () => {
    const { user } = useAuthContext()
    const { logout } = useSignOut()
    const location = useLocation()
    const { mode, changeMode } = useTheme()
    const [open, setOpen] = useState(false)
    const currentPath = window.location.pathname
    const [showAstronaut, setShowAstronaut] = useState(false)
    const { scrollYProgress } = useScroll()
    const [showSpeachBubble, setShowSpeachBubble] = useState(false)
    const [astronautHanging, setAstronautHanging] = useState(false)
    const [astronautIsFlying, setAstronautIsFlying] = useState(false)
    const astronautAnimation = useAnimation()
    const [isSwinging, setIsSwinging] = useState(false)

    const speachBubbleHandler = () => {
        if (scrollYProgress > 0.1) {
            setShowSpeachBubble(false)
        } else {
            setShowSpeachBubble(true)
        }
        // setTimeout to 1.5s then set to false
        setTimeout(() => {
            setShowSpeachBubble(false)
        }, 1000)
    }

    const handleClick = (e) => {
        setAstronautIsFlying(true)
        ScrollToTop()
        speachBubbleHandler()

        setIsSwinging(true)
        setTimeout(() => {
            setIsSwinging(false)
        }, 1500)
        setAstronautIsFlying(false)
    }

    const Bubble = ({ children }) => {
        return (
            <div className="thought ">
                {children}
                <div className="absolute left-2 bottom-2 h-0 w-0 "></div>
            </div>
        )
    }

    const setShowAstronautDebounced = debounce((value) => {
        setShowAstronaut(value)
    }, 150)

    const astronautHandler = () => {
        if (window.scrollY > 1000) {
            setShowAstronautDebounced(true)
            setIsSwinging(true)
        } else {
            setShowAstronautDebounced(false)
            setIsSwinging(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", astronautHandler)

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", astronautHandler)
        }
    }, [])

    useEffect(() => {
        if (showAstronaut) {
            astronautAnimation.start({
                y: 0,
                transition: {
                    y: { type: "spring", stiffness: 100, damping: 10 },
                },
            })
        } else {
            astronautAnimation.start({ y: "100%" })
        }
    }, [showAstronaut, astronautAnimation])

    return (
        <div>
            <div className="absolute z-[91] -mt-[80px] h-20 w-full   bg-slate-50 from-[#0D1B2E] to-[#0D243C] dark:bg-gradient-to-r dark:text-white">
                <div className="mx-auto flex h-fit max-w-[1500px] items-center justify-between">
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
                        className="flex flex-row items-center "
                    >
                        <div className="flex items-center">
                            <Link to="/home">
                                <div className="mt-12 ml-4 opacity-90  hover:opacity-100">
                                    {/* <h1 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">
                                Logo
                            </h1> */}
                                    {/* {mode === "light" && (
                                        <img
                                            src={newSiteLogo}
                                            alt="logo"
                                            className="h-14 w-auto  active:scale-[0.95]"
                                        />
                                    )}
                                    {mode === "dark" && (
                                        <img
                                            src={newSiteLogoDark}
                                            alt="logo"
                                            className="h-14 w-auto  active:scale-[0.95]"
                                        />
                                    )} */}
                                    <img
                                        src={LoResLogo}
                                        alt="logo"
                                        className="h-24 w-auto  active:scale-[0.95]"
                                    />
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                    {/* Projects */}
                    {/* 
                    <motion.div
                        initial={{
                            x: 200,
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
                        className="ml-auto mr-3 -mt-3 dark:text-white"
                    >
                        <div
                            id="navbar-top-popovers"
                            className="hidden md:flex"
                        >
                            <Popover className="relative text-slate-700 dark:text-white">
                                <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6">
                                    <span> Projects</span>
                                    <ChevronDownIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                </Popover.Button>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                                        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-800">
                                            <div className="p-4">
                                                {Projects.map((item) => (
                                                    <div
                                                        key={item.name}
                                                        className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 hover:dark:bg-gray-700"
                                                    >
                                                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-slate-800 dark:group-hover:bg-slate-800">
                                                            <item.icon
                                                                className="h-6 w-6  group-hover:text-[#EC2A8C] dark:group-hover:text-[#91CD26]"
                                                                aria-hidden="true"
                                                            />
                                                        </div>
                                                        <div>
                                                            <a
                                                                href={item.href}
                                                                className="font-semibold "
                                                            >
                                                                {item.name}
                                                                <span className="absolute inset-0" />
                                                            </a>
                                                            <p className="mt-1 text-gray-600 dark:text-white/70">
                                                                {
                                                                    item.description
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 dark:bg-gray-700">
                                                {callsToAction.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="flex items-center justify-center gap-x-2.5 p-3 font-semibold  hover:bg-gray-100 dark:hover:bg-gray-900"
                                                    >
                                                        <item.icon
                                                            className="h-5 w-5 flex-none text-gray-400"
                                                            aria-hidden="true"
                                                        />
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </Popover>
                        </div>
                    </motion.div> */}

                    {/* End Projects */}
                    <motion.div
                        initial={{
                            x: 200,
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
                        className="ml-auto mr-3 -mt-3 dark:text-white"
                    >
                        <div className="z-[99999] flex items-center">
                            {/* {!user && (
                                <div className="mr-4 hidden lg:flex">
                                    <Link to="/signIn">
                                        <h1 className="py-.75 text-semibold sticky z-50 cursor-pointer select-none rounded-full bg-[#DDDFDE] px-3 text-lg text-white hover:bg-[#C2C3C3] hover:opacity-80 dark:bg-slate-600 dark:text-slate-800 dark:hover:bg-slate-400 dark:active:bg-slate-700">
                                            Sign In
                                        </h1>
                                    </Link>
                                </div>
                            )}
                            <div className="mr-4">
                                {user && (
                                    <Link to="/dashboard">
                                        <h1 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                                            Account
                                        </h1>
                                    </Link>
                                )}
                            </div>
                            <div className="mr-4 hidden" disabled>
                                {!user && (
                                    <Link to="/signUp">
                                        <h1 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                                            Sign Up
                                        </h1>
                                    </Link>
                                )}
                            </div>
                            <div className="">
                                {user && (
                                    <h1
                                        className="cursor-pointer text-lg font-semibold text-slate-800 dark:text-slate-200"
                                        onClick={logout}
                                    >
                                        Logout
                                    </h1>
                                )}
                            </div> */}
                            <div
                                id="hamburger-menu"
                                className="z-[55] mt-14 cursor-pointer space-y-1.5 rounded-lg border-2 border-transparent p-2 opacity-70 hover:bg-white/20 hover:opacity-100 hover:shadow-lg active:bg-black/5 sm:space-y-2 lg:hidden"
                                onClick={() => setOpen(!open)}
                            >
                                <span className=" block h-1 w-6 cursor-pointer  rounded-full bg-gray-400 sm:w-8"></span>
                                <span className=" block h-1 w-6 cursor-pointer rounded-full bg-gray-400 sm:w-8"></span>
                                <span className=" block h-1 w-6 cursor-pointer rounded-full bg-gray-400 sm:w-8"></span>
                            </div>
                            <MobileMenu open={open} setOpen={setOpen} />
                        </div>
                    </motion.div>
                    {/* Display astronaut that takes the user to the top of the page on click */}
                    {/* position to be at the bottom right of the screen and appear only after the first section of the page */}

                    <div
                        className={`${
                            astronautIsFlying ? "translate-y-[-500px]" : ""
                        } absolute z-[9999999999999999999999999999999999999999999999] h-full select-none items-end`}
                    >
                        <div className="fixed bottom-0 right-2 mt-auto mr-4 mb-4 flex h-auto opacity-100 duration-200 ease-in-out md:bottom-0 lg:opacity-70 lg:hover:opacity-100 landscape:bottom-1 landscape:-right-6 landscape:-mb-4 landscape:scale-[70%] xl:landscape:scale-100">
                            <motion.div
                                animate={astronautAnimation}
                                className="z-50 duration-500 ease-in "
                            >
                                <motion.div
                                    className="astronaut"
                                    animate={{
                                        rotate: isSwinging ? [2, -2, 2] : 0,
                                        originX: isSwinging ? "100%" : "50%",
                                        originY: isSwinging ? "0%" : "50%",
                                        transition: {
                                            repeat: Infinity,
                                            repeatType: "mirror",
                                            duration: 0.8,
                                        },
                                    }}
                                >
                                    <div
                                        className="hidden cursor-pointer flex-col items-end sm:flex"
                                        onClick={handleClick}
                                    >
                                        {showSpeachBubble &&
                                            mode === "dark" && (
                                                <Bubble className=" hidden opacity-0 dark:block dark:text-black dark:opacity-100">
                                                    To the moon!!!
                                                </Bubble>
                                            )}
                                        {showSpeachBubble &&
                                            mode !== "dark" && (
                                                <Bubble className=" dark:hidden dark:text-black dark:opacity-0">
                                                    To the skies!!!
                                                </Bubble>
                                            )}
                                        <div className="relative">
                                            <img
                                                src={Astronaut}
                                                alt="Astronaut"
                                                className={` h-22 w-15 z-50 ml-auto duration-300 ease-in `}
                                                height={150}
                                                width={100}
                                            />
                                            {astronautIsFlying && (
                                                <div className="absolute bottom-0 flex h-10 w-full justify-between">
                                                    <div className="mx-auto h-full w-1 translate-y-12 rounded-full bg-black/10 dark:bg-white/20"></div>
                                                    <div className="mx-auto h-full w-1 translate-y-12 rounded-full bg-black/10 dark:bg-white/20"></div>
                                                    <div className="mx-auto h-full w-1 -translate-y-6 rounded-full bg-black/10 dark:bg-white/20"></div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                    {/*  */}
                </div>
                {!currentPath.endsWith("/sginIn") && <SocialBar />}
            </div>
            {(currentPath.endsWith("/home") || currentPath.endsWith("/")) && (
                <PageBar />
            )}
        </div>
    )
}
