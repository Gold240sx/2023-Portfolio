import { active } from "d3"
import React from "react"
import { useState, useEffect } from "react"
import { HiFilter } from "react-icons/hi"
import { BsRulers, BsFillCalendarMonthFill } from "react-icons/bs"
import {
    ArrowLongLeftIcon,
    ArrowLongRightIcon,
} from "@heroicons/react/20/solid"
import { IoIosHelpCircle } from "react-icons/io"
import { IoCloseCircleOutline } from "react-icons/io5"
import { FaDatabase } from "react-icons/fa"
import { Tooltip } from "react-tooltip"
import { SiStylelint } from "react-icons/si"
import { MdOutlineSearch } from "react-icons/md"
import { useTheme } from "../../hooks/useThemeContext"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import MobileMenu from "../mobileMenu"
import Carousel from "../Carousel"

const ProjectCard = ({
    project,
    ProjectItems,
    searchTerm,
    renderMatchedInfo,
    activeDescription,
    setShowCarousel,
    activeGalleryImages,
    setActiveGalleryImages,
    Technologies,
}) => {
    const {
        name,
        image,
        tagline,
        description,
        year,
        technologies,
        repository,
        galleryImages,
        link,
        month,
        tags,
        id,
    } = project

    const { mode } = useTheme()

    const [minimizeGallery, setMinimizeGallery] = useState(true)
    const [isMobile, setIsMobile] = useState(false)
    const [isLarge, setIsLarge] = useState(false)

    const handleGalleryClick = (clickedImage) => {
        const images = [image, ...galleryImages.map((item) => item.image)]
        const filteredImages = images.filter((item) => item !== clickedImage)
        setActiveGalleryImages([clickedImage, ...filteredImages])
        console.log(activeGalleryImages)
        setShowCarousel(true)
    }

    const matchedTechnologies = Technologies.filter((technology) =>
        technologies.includes(technology.name)
    )

    const gall4 = galleryImages.slice(0, 4)

    const createValidId = (str) => str.replace(/\s+/g, "_")

    const windowCheck = () => {
        const handleResize = () => {
            if (window.innerWidth > 768 && window.innerWidth < 1024) {
                setMinimizeGallery(false)
                setIsMobile(false)
                setIsLarge(false)
            } else if (window.innerWidth > 1024) {
                setMinimizeGallery(true)
                setIsMobile(false)
                setIsLarge(true)
            } else {
                setMinimizeGallery(true)
                setIsMobile(true)
                setIsLarge(false)
            }
        }

        // Set the initial values on load
        handleResize()

        // Add the event listener
        window.addEventListener("resize", handleResize)
    }

    useEffect(() => {
        windowCheck()
    }, [])

    return (
        <div className="w-auto">
            {/* main content */}
            <div className="h-full w-auto items-center justify-center rounded-lg p-1">
                <div className="flex w-auto flex-col justify-between  overflow-hidden md:flex-row lg:gap-4">
                    {/* Left */}
                    <div
                        className={`relative flex w-auto flex-col items-start justify-start ${
                            minimizeGallery ? "md:w-[65%]" : "md:w-[65%]"
                        } `}
                    >
                        {/* image */}
                        {/* <img
                            src={image}
                            alt={name}
                            className="rounded-md  lg:rounded-lg"
                            style={{ minHeight: "180px" }}
                        /> */}
                        <div
                            className={` ${
                                minimizeGallery == true ? "" : ""
                            } flex w-auto flex-col md:h-[222px] md:flex-row`}
                        >
                            {/* Main Image */}
                            <div
                                onClick={() => handleGalleryClick(image)}
                                className={`main-image h-auto cursor-pointer overflow-hidden rounded-lg  opacity-90 transition-all duration-300 ease-in-out hover:opacity-100 md:rounded-r-none lg:rounded-lg ${
                                    minimizeGallery
                                        ? "w-auto"
                                        : "w-auto md:w-4/5"
                                }`}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <img
                                    src={image}
                                    alt={name}
                                    className="cursor-pointer object-cover"
                                    style={{ minHeight: "220px" }}
                                />
                            </div>

                            {/* Additional Images */}
                            <div
                                className={` ${
                                    minimizeGallery == true
                                        ? "h-[99%] w-full  min-w-[80px]  p-1 md:w-1/5 md:max-w-[75px]"
                                        : "w-0"
                                } z-20 flex bg-transparent transition-all duration-300 ease-in-out md:flex-col lg:mx-2 lg:w-auto lg:max-w-[75px] lg:bg-transparent`}
                                style={
                                    isMobile === false && isLarge === false
                                        ? mode !== "dark"
                                            ? {
                                                  backgroundColor: "#d5d5d5",
                                                  opacity: "0.8",
                                                  backgroundImage:
                                                      "radial-gradient(#484848 0.8px, #d5d5d5 0.8px)",
                                                  backgroundSize: "16px 16px",
                                              }
                                            : {
                                                  backgroundColor: "#1c1c1c",
                                                  opacity: "0.8",
                                                  backgroundImage:
                                                      "radial-gradient(#727272 0.8px, #1c1c1c 0.8px)",
                                                  backgroundSize: "16px 16px",
                                              }
                                        : { backgroundColor: "transparent" }
                                }
                            >
                                <ul className="flex h-fit w-full gap-2 md:h-full md:flex-col md:p-0">
                                    {/* Map over the first 4 images of the gallry and display them in a column */}

                                    {gall4.map((gallery4) => {
                                        return (
                                            <li
                                                key={image.id}
                                                className="h-[10vw] w-1/4 cursor-pointer overflow-hidden rounded-lg bg-zinc-200 object-fill object-center opacity-80 shadow-md shadow-black/[15%] hover:opacity-100 dark:bg-gray-700 dark:shadow-black/30 md:h-1/4 md:w-full"
                                                onClick={() =>
                                                    handleGalleryClick(
                                                        gallery4.image
                                                    )
                                                }
                                            >
                                                <img
                                                    src={gallery4.image}
                                                    className="mx-auto h-full w-auto object-cover"
                                                />
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>

                            {/* Show / hide Gallery Button */}
                            <div
                                onClick={() =>
                                    setMinimizeGallery(!minimizeGallery)
                                }
                                className={` ${
                                    minimizeGallery == false ? "" : ""
                                } hidden h-auto w-fit  cursor-pointer items-center justify-center rounded rounded-r-lg bg-zinc-200 p-0 text-zinc-600 hover:bg-slate-200 active:bg-zinc-300 dark:bg-zinc-700 dark:text-white md:flex md:rounded-r-lg lg:hidden`}
                            >
                                {minimizeGallery == false && (
                                    <p className="mx-1 mt-[4.8rem] flex w-6 -rotate-90 whitespace-nowrap text-center align-middle tracking-wider transition-all duration-300 ease-in">
                                        Show Gallery
                                    </p>
                                )}
                                {minimizeGallery == true && (
                                    <p className="mx-1 mt-[4.4rem] flex w-6 -rotate-90 whitespace-nowrap text-center align-middle tracking-wider transition-all duration-300 ease-in">
                                        Hide Gallery
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Search Term Filter Data Match */}
                        {searchTerm.length ? renderMatchedInfo() : null}
                        {/* tags */}
                        <div className="no-scrollbar mt-4 hidden w-[195%] overflow-scroll md:flex lg:max-w-[100%] xl:max-w-[195%]">
                            <h4 className=" mx-2 w-fit text-sm font-medium dark:text-gray-300 md:text-base">
                                TAGS:
                            </h4>
                            {tags.map((tag) => {
                                return (
                                    <div
                                        key={tag}
                                        className="mb-2 mr-2 inline-flex h-fit items-center rounded-full border-2 bg-gray-100 px-1 py-[2px] text-xs leading-none text-gray-500 dark:bg-transparent dark:bg-gray-600 md:border-gray-300 md:bg-transparent md:px-2 md:text-gray-400 md:dark:border-white/10 lg:px-3 lg:text-xs xl:text-xs"
                                    >
                                        {tag}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {/* Right */}
                    <div
                        className={`flex w-auto  flex-col items-start justify-start pl-4 md:pl-0 ${
                            minimizeGallery
                                ? " md:w-[30%]"
                                : "-translate-x-4 md:w-[40%]"
                        } `}
                    >
                        {/* Name */}
                        <h2 className="max-w-[90%] text-left text-2xl font-bold lg:mb-2 lg:max-w-[unset] lg:text-4xl">
                            {name}
                        </h2>
                        {/* Date */}
                        <h2 className="text-base dark:text-gray-500">
                            {month}, {year}
                        </h2>
                        {/* Techs */}
                        <div className="flex w-auto flex-wrap overflow-ellipsis lg:mb-1">
                            <h4 className="align-center text-md mt-3 flex h-8 justify-center p-[2px] text-center font-medium dark:text-gray-400 md:mt-2 md:text-xl">
                                TECH:
                            </h4>
                            {/* output logos of each techology used in each project */}
                            <div className="ml-2 flex">
                                {matchedTechnologies.map((tech) => (
                                    <img
                                        key={tech.id}
                                        className={`${
                                            tech.invert ? "dark:invert" : ""
                                        } my-2 h-8 pr-1`}
                                        src={tech.logo}
                                        alt={tech.name}
                                    />
                                ))}
                            </div>
                        </div>
                        {/* Project Info */}
                        <div className="mb-4 mt-2 flex w-auto flex-wrap justify-start gap-4 md:gap-2">
                            <h2 className="cursor-pointer text-left ">
                                <a
                                    href={link}
                                    className="rounded-full border-2 border-sky-500 px-5 py-1 text-sky-500 hover:border-sky-700 hover:bg-sky-50/20 hover:text-sky-700 dark:border-sky-400 dark:text-white dark:hover:border-sky-300 dark:hover:bg-white/5  dark:hover:text-white"
                                >
                                    Demo
                                </a>
                            </h2>
                            <h2 className="cursor-pointer text-left">
                                <a
                                    href={repository}
                                    className="rounded-full bg-sky-400 px-5 py-1 text-white hover:bg-sky-500 dark:bg-sky-600 dark:hover:bg-sky-500"
                                >
                                    Repository
                                </a>
                            </h2>
                        </div>
                        {/* Description Dropdown*/}
                        <div
                            id="accordionExample"
                            className="z-20 mb-4 w-full bg-white dark:bg-transparent"
                        >
                            <div className="w-auto rounded-t-lg rounded-b-lg border border-neutral-200 dark:border-neutral-600">
                                <h2 className="mb-0" id="headingOne">
                                    <button
                                        className=" group relative flex w-full items-center rounded-t-lg rounded-b-lg border-0 py-2 px-3 text-left text-base text-gray-500 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-[#1E1E1D] dark:text-white [&:not([data-te-collapse-collapsed])]:rounded-b-none [&:not([data-te-collapse-collapsed])]:border-b-0 [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-sky-500 [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-[#1E1E1D] dark:[&:not([data-te-collapse-collapsed])]:text-sky-300 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                        type="button"
                                        data-te-collapse-init
                                        data-te-collapse-collapsed
                                        data-te-target={`#collapseOne-${createValidId(
                                            name
                                        )}`}
                                        aria-expanded="false"
                                        aria-controls={`collapseOne-${createValidId(
                                            name
                                        )}`}
                                    >
                                        Description
                                        <span classname="ml-auto h-5 w-5 shrink-0 rotate-180 fill-[#212529] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:translate-y-0.5 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#336dec] motion-reduce:transition-none dark:fill-white dark:group-[[data-te-collapse-collapsed]]:fill-blue-300">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                classname="h-6 w-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                </h2>
                                <div
                                    // id="collapseOne"
                                    id={`collapseOne-${createValidId(name)}`}
                                    className={`!visible ${
                                        activeDescription === name
                                            ? ""
                                            : "hidden"
                                    }`}
                                    data-te-collapse-item
                                    // aria-labelledby="headingOne"
                                    aria-labelledby={`headingOne-${createValidId(
                                        name
                                    )}`}
                                    data-te-parent="#accordionExample"
                                >
                                    <div className="rounded-b-lg border-[#525252] bg-white py-4 px-5 dark:bg-[#1E1E1D] dark:text-gray-300 dark:[&:not([data-te-collapse-collapsed])]:border-t-[1px]">
                                        <p className="mb-2 text-left">
                                            <strong className="dark:text-white">
                                                {tagline}
                                            </strong>{" "}
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        {/* tags */}
                        <div className=" mr-auto mb-4 hidden  flex-col justify-start align-baseline xs:flex md:hidden">
                            <h4 className=" text-md justify-start text-left font-medium line-clamp-1 dark:text-gray-300 sm:mt-1.5 md:mt-2 md:text-xl">
                                TAGS:
                            </h4>
                            <div className=" mt-1 mr-auto block  justify-start overflow-ellipsis line-clamp-1">
                                {ProjectItems.map((project) => {
                                    return project.tags.map((tag) => {
                                        return (
                                            <div
                                                key={tag}
                                                className="xlg:text-base mb-2 mr-2 inline-flex h-fit items-center rounded-full border-2 bg-gray-100 px-1.5 py-1 text-xs leading-none text-gray-500 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400 md:border-gray-300 md:bg-transparent md:px-2 md:text-gray-400 lg:px-3 lg:text-sm"
                                            >
                                                {tag}
                                            </div>
                                        )
                                    })
                                })}
                            </div>
                        </div>
                        <hr className="mx-auto w-full -translate-x-2 border border-gray-200 dark:border-gray-700 md:hidden" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
