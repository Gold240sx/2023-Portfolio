import.meta.hot
import { Routes, Route, Navigate, BrowserRouter, Link } from "react-router-dom"
import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { useTheme } from "../hooks/useThemeContext"
import { FaHotTub } from "react-icons/fa"
import siteLogo from "../assets/Images/header.png"
import siteLogoDark from "../assets/Images/headerDark.png"
import { MdOutlineWorkHistory } from "react-icons/md"
import { TbInfoSquare, TbSchool, TbCode } from "react-icons/tb"
import { RiUser3Fill } from "react-icons/ri"
import { GrPaint } from "react-icons/gr"
import { HiOutlineHome } from "react-icons/hi"

const smoothScroll = (target, setOpen) => {
    setOpen(false)
    const targetElement = document.getElementById(target)
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" })
    }
}

const smoothClose = (setOpen) => {
    setOpen(false)
}

export default function MobileMenu({ open, setOpen }) {
    const { mode, changeMode } = useTheme()
    const currentPath = window.location.pathname

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-[99999999999999999999999] lg:hidden"
                onClose={setOpen}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="backdrop:blur-black fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 h-screen overflow-hidden text-slate-700 dark:text-white">
                    <div className="inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className=" ml-auto flex h-full w-fit flex-col overflow-y-scroll bg-white py-6 pr-2 shadow-xl dark:bg-zinc-900">
                                        <div className="">
                                            <div className="flex items-start justify-between">
                                                <Link
                                                    to="/home"
                                                    className="outline-none hover:cursor-pointer focus:outline-none "
                                                    onClick={() =>
                                                        smoothClose(setOpen)
                                                    }
                                                >
                                                    <div className="ml-4">
                                                        {/* <h1 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">
                                Logo
                            </h1> */}
                                                        {mode === "light" && (
                                                            <img
                                                                src={siteLogo}
                                                                alt="logo"
                                                                className="h-16 w-auto active:scale-[0.95]"
                                                            />
                                                        )}
                                                        {mode === "dark" && (
                                                            <img
                                                                src={
                                                                    siteLogoDark
                                                                }
                                                                alt="logo"
                                                                className="h-16 w-auto active:scale-[0.95]"
                                                            />
                                                        )}
                                                    </div>
                                                </Link>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="rounded-md hover:cursor-pointer hover:bg-slate-50 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:hover:bg-zinc-800 dark:hover:text-sky-400"
                                                        onClick={() =>
                                                            setOpen(false)
                                                        }
                                                    >
                                                        <span className="sr-only">
                                                            Close panel
                                                        </span>
                                                        <XMarkIcon
                                                            className="h-10 w-10"
                                                            aria-hidden="true"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative mt-6 h-auto flex-1">
                                            {/* Your content */}
                                            <div className="flex h-full w-auto">
                                                <ul className="relative flex h-fit w-full flex-col pl-8 pb-5 text-xl">
                                                    {/* add mt-auto to position menu to the bottom */}
                                                    {!currentPath.endsWith(
                                                        "/signIn"
                                                    ) && (
                                                        <>
                                                            <li
                                                                className="flex  h-fit items-center rounded-md py-4 pl-2 hover:cursor-pointer hover:bg-gray-100 hover:text-sky-600 active:text-gray-500 dark:hover:bg-zinc-800 dark:hover:text-sky-400"
                                                                onClick={() =>
                                                                    smoothScroll(
                                                                        "aboutMe",
                                                                        setOpen
                                                                    )
                                                                }
                                                            >
                                                                <span className="mr-5 ">
                                                                    <TbInfoSquare className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                                                                </span>{" "}
                                                                About
                                                            </li>
                                                            {/* <li className="text-md  flex h-fit items-center rounded-md py-4 pl-2 hover:cursor-pointer hover:bg-gray-100 active:text-gray-500 dark:hover:bg-zinc-800 dark:hover:text-sky-400 hover:text-sky-600">
                                                        <span className="mr-5">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 576 512"
                                                                className="h-6 w-6 fill-slate-700 dark:fill-white"
                                                            >
                                                                <path d="M135.4 231.4c11.58-4.133 24.37-7.318 38.67-8.527l10.38-10.3L162.9 191l60.13-60.13L244.8 152.7L278.9 118.8L178.8 18.75C166.3 6.25 149.9 0 133.6 0C117.2 0 100.8 6.252 88.3 18.75L50.79 56.26c-12.52 12.52-18.79 28.91-18.79 45.3C31.1 134.8 45.25 141.2 135.4 231.4zM498.9 338.9l-43.18-43.17l-34.07 33.81l43.29 43.3c2.146 2.148 3.631 4.844 4.297 7.803l16.55 73.58c-80.67-17.48-76.18-16.48-79.1-20.3l-44.48-44.48l-11.22 11.14c-1.281 12.71-4.541 24.94-8.67 36.84l30.44 30.44c8.379 8.381 18.72 14.19 30.26 16.9c38.14 8.982 122.7 26.93 122.7 26.93C525.1 511.9 527 512 528.1 512c8.742 0 15.95-7.205 15.95-15.95c0-1.046-.1036-2.116-.3193-3.197l-27.6-122.8C513.4 358.3 507.5 347.5 498.9 338.9zM498.8 0c-20.64 0-40.02 7.963-54.59 22.42L194.2 270.5c-2.251-.132-4.463-.1953-6.633-.1953c-74.17 0-111.5 65.43-111.5 113c0 6.853 .5476 9.941 .5476 12.44c0 14.57-11.97 24.25-30.42 24.25C20.74 419.1 0 440.6 0 465.1C0 491.4 20.74 512 46.22 512h50.73c141.8 0 205.1-49.78 205.1-127.7c0-1.488-.028-2.98-.0842-4.476l250.5-248.7C567.1 116.7 576 97.35 576 76.79C576 34.23 541.5 0 498.8 0zM254.6 384.7C254.6 431.5 214.4 464 96.96 464H73.32c30.81-9.621 51.33-36.13 51.33-68.21c0-5.719-.5476-7.206-.5476-12.45c0-34.79 27.93-64.87 63.68-64.87c7.504 0 13.92 1.139 18.49 1.743l47.29 47.29C254.2 373.3 254.6 379.1 254.6 384.7zM519.5 97.09l-197.3 195.9L281.1 251.9l196.8-195.4C483.5 51.01 490.9 48 498.8 48C515.1 48 528 60.94 528 76.79C528 84.46 524.1 91.68 519.5 97.09z"></path>
                                                            </svg>
                                                        </span>{" "}
                                                        Art
                                                    </li> */}
                                                            <li
                                                                className="text-md  flex h-fit items-center rounded-md py-4 pl-2 hover:cursor-pointer hover:bg-gray-100 hover:text-sky-600 active:text-gray-500 dark:hover:bg-zinc-800 dark:hover:text-sky-400"
                                                                onClick={() =>
                                                                    smoothScroll(
                                                                        "contact",
                                                                        setOpen
                                                                    )
                                                                }
                                                            >
                                                                <span className="mr-5">
                                                                    <svg
                                                                        className="h-6 w-6 text-sky-600 dark:text-sky-400"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            stroke-linecap="round"
                                                                            strokelinejoin="round"
                                                                            strokeWidth="2"
                                                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                                                        ></path>
                                                                    </svg>
                                                                </span>{" "}
                                                                Contact
                                                            </li>
                                                            <li
                                                                className="text-md  flex h-fit items-center rounded-md py-4 pl-2 hover:cursor-pointer hover:bg-gray-100 hover:text-sky-600 active:text-gray-500 dark:hover:bg-zinc-800 dark:hover:text-sky-400"
                                                                onClick={() =>
                                                                    smoothScroll(
                                                                        "education",
                                                                        setOpen
                                                                    )
                                                                }
                                                            >
                                                                <span className="mr-5">
                                                                    <TbSchool className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                                                                </span>{" "}
                                                                Education
                                                            </li>
                                                            {/* <li className="text-md  items-centesr flex h-fit rounded-md py-4 pl-2 hover:cursor-pointer hover:bg-gray-100 active:text-gray-500 dark:hover:bg-zinc-800 dark:hover:text-sky-400 hover:text-sky-600">
                                                        <span className="mr-5 ">
                                                            <MdOutlineWorkHistory className="h-6 w-6" />
                                                        </span>{" "}
                                                        Experience
                                                    </li> */}
                                                            <li
                                                                className="text-md  flex h-fit items-center rounded-md py-4 pl-2 hover:cursor-pointer hover:bg-gray-100 hover:text-sky-600 active:text-gray-500 dark:hover:bg-zinc-800 dark:hover:text-sky-400"
                                                                onClick={() =>
                                                                    smoothScroll(
                                                                        "projects",
                                                                        setOpen
                                                                    )
                                                                }
                                                            >
                                                                <span className="mr-5 ">
                                                                    <svg
                                                                        className="h-6 w-6 text-sky-600 dark:text-sky-400"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        viewBox="0 0 24 24"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            stroke-linecap="round"
                                                                            strokelinejoin="round"
                                                                            strokeWidth="2"
                                                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                                        ></path>
                                                                    </svg>
                                                                </span>
                                                                Projects
                                                            </li>
                                                            <li
                                                                className="text-md  flex h-fit items-center rounded-md py-4 pl-2 hover:cursor-pointer hover:bg-gray-100 hover:text-sky-600 active:text-gray-500 dark:hover:bg-zinc-800 dark:hover:text-sky-400"
                                                                onClick={() =>
                                                                    smoothScroll(
                                                                        "skills",
                                                                        setOpen
                                                                    )
                                                                }
                                                            >
                                                                <span className="mr-5">
                                                                    <svg
                                                                        className="h-6 w-6 text-sky-600 dark:text-sky-400"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        viewBox="0 0 24 24"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            stroke-linecap="round"
                                                                            strokelinejoin="round"
                                                                            strokeWidth="2"
                                                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                                                        ></path>
                                                                    </svg>
                                                                </span>{" "}
                                                                Skills
                                                            </li>
                                                            <li
                                                                className="text-md  flex h-fit items-center rounded-md py-4 pl-2 hover:cursor-pointer hover:bg-gray-100 hover:text-sky-600 active:text-gray-500 dark:hover:bg-zinc-800 dark:hover:text-sky-400"
                                                                onClick={() =>
                                                                    smoothScroll(
                                                                        "timeline",
                                                                        setOpen
                                                                    )
                                                                }
                                                            >
                                                                <span className="mr-5 ">
                                                                    <MdOutlineWorkHistory className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                                                                </span>{" "}
                                                                Timeline
                                                            </li>
                                                            <li
                                                                className="text-md flex items-center rounded-md py-4 pl-2 hover:cursor-pointer hover:bg-gray-100 hover:text-sky-600 active:text-gray-500 dark:hover:bg-zinc-800 dark:hover:text-sky-400"
                                                                // dowload resume
                                                                onClick={() => {
                                                                    window.open(
                                                                        "https://drive.google.com/file/d/15mEgxP-OCoMcaeh6aUcgDtwfNzRdelYV/view?usp=sharing"
                                                                    )
                                                                }}
                                                            >
                                                                <span className="mr-5 ">
                                                                    <svg
                                                                        className="h-6 w-6 text-sky-600 dark:text-sky-400"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        viewBox="0 0 24 24"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            stroke-linecap="round"
                                                                            strokelinejoin="round"
                                                                            strokeWidth="2"
                                                                            d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                                        ></path>
                                                                    </svg>
                                                                </span>{" "}
                                                                My Resume
                                                            </li>
                                                            <br className="w-auto border-gray-500 bg-gray-500 text-gray-500" />
                                                            <div
                                                                className="absolute left-0 h-14 w-1 bg-indigo-600"
                                                                style={{
                                                                    bottom: "8.235rem",
                                                                }}
                                                            ></div>
                                                            <Link
                                                                to="/signIn"
                                                                onClick={() =>
                                                                    smoothClose()
                                                                }
                                                                className="text-md flex items-center rounded-md py-4 pl-2 hover:cursor-pointer hover:bg-gray-100 hover:text-sky-600 active:text-gray-500 dark:hover:bg-zinc-800 dark:hover:text-sky-400"
                                                            >
                                                                <>
                                                                    <span className="mr-5 ">
                                                                        <RiUser3Fill className="h-6 w-6 text-gray-500" />
                                                                    </span>{" "}
                                                                    <p>
                                                                        Client
                                                                        Sign In
                                                                    </p>
                                                                </>
                                                            </Link>
                                                            <Link
                                                                to="/signIn"
                                                                onClick={() =>
                                                                    smoothClose()
                                                                }
                                                                className="text-md flex items-center rounded-md py-4 pl-2 hover:cursor-pointer hover:bg-gray-100 hover:text-sky-600 active:text-gray-500 dark:hover:bg-zinc-800 dark:hover:text-sky-400"
                                                            >
                                                                <>
                                                                    <span className="mr-5 ">
                                                                        <TbCode className="h-6 w-6 text-gray-500" />
                                                                    </span>{" "}
                                                                    <p>
                                                                        Dev Sign
                                                                        In
                                                                    </p>
                                                                </>
                                                            </Link>
                                                            {/* <span className="absolute right-5 bottom-5 text-gray-400">
                                                    <svg
                                                        className="h-8 w-8"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            strokelinejoin="round"
                                                            stroke-width="2"
                                                            d="M6 18L18 6M6 6l12 12"
                                                        ></path>
                                                    </svg>
                                                </span> */}
                                                        </>
                                                    )}
                                                    {currentPath.endsWith(
                                                        "/signIn"
                                                    ) && (
                                                        <>
                                                            <a
                                                                className="text-md  flex h-fit items-center rounded-md py-4 pl-2 hover:cursor-pointer hover:bg-gray-100 hover:text-sky-600 active:text-gray-500 dark:hover:bg-zinc-800 dark:hover:text-sky-400"
                                                                href="/"
                                                            >
                                                                <span className="mr-5">
                                                                    <HiOutlineHome className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                                                                </span>{" "}
                                                                Home
                                                            </a>
                                                        </>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
