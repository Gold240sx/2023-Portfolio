import { active } from "d3"
import React from "react"
import { useState, useLayoutEffect } from "react"
import { HiFilter } from "react-icons/hi"
import { BsRulers, BsFillCalendarMonthFill } from "react-icons/bs"
import {
    ArrowLongLeftIcon,
    ArrowLongRightIcon,
} from "@heroicons/react/20/solid"
import { IoIosHelpCircle } from "react-icons/io"
import { IoCloseCircleOutline } from "react-icons/io5"
import debounce from "lodash/debounce"
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
import Github from "../../assets/images/githubLogo.png"

const windowCheck = (setMinimizeGallery, setIsMobile, setIsLarge) => {
    const handleResize = debounce(() => {
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
    }, 500) // 500ms debounce time

    // Set the initial values on load
    handleResize()

    // Add the event listener
    window.addEventListener("resize", handleResize)
}

const ProjectCard = ({
    project,
    ProjectItems,
    searchTerm,
    matchedInfo,
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
        uiDesign,
        link,
        month,
        tags,
        id,
        key,
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

    useLayoutEffect(() => {
        // Call windowCheck function only once
        windowCheck(setMinimizeGallery, setIsMobile, setIsLarge)
    }, [])

    const renderMatchedInfo = () => {
        if (!matchedInfo?.matchType || !matchedInfo?.matchText) {
            return null
        }

        const searchTermIndex = matchedInfo.matchText
            .toLowerCase()
            .indexOf(searchTerm.toLowerCase())
        const beforeMatch = matchedInfo.matchText.slice(0, searchTermIndex)
        const matchedText = matchedInfo.matchText.slice(
            searchTermIndex,
            searchTermIndex + searchTerm.length
        )
        const afterMatch = matchedInfo.matchText.slice(
            searchTermIndex + searchTerm.length
        )

        return (
            <div className="mt-2 hidden rounded border-2 border-gray-400 bg-zinc-200 p-2 text-black dark:border-0 dark:bg-zinc-800 dark:text-white md:block">
                <h3 className="text-center text-lg font-bold dark:text-gray-200">
                    Search Term Match:
                </h3>
                <p className="font-bold text-gray-700 dark:text-gray-200">
                    Matching:
                    <span className="font-normal text-gray-600 dark:text-gray-300">
                        {matchedInfo.matchType}
                    </span>
                </p>
                <p className="overflow-hidden font-bold text-gray-500 dark:text-gray-400">
                    Matched Text:
                    <span className="px-2 py-0.5  font-normal text-gray-700 dark:text-gray-400">
                        {beforeMatch}
                        <span className="mx-0.5 bg-yellow-200 px-0.5 pl-0.5 text-black">
                            {matchedText}
                        </span>
                        {afterMatch}
                    </span>
                </p>
            </div>
        )
    }

    // console.log(isLarge, isMobile)

    return (
        <div className="w-auto pb-2">
            {/* main content */}
            <div className="h-full w-auto items-center justify-center rounded-lg p-1  transition-all duration-300 ease-in-out ">
                <div
                    className={` ${
                        minimizeGallery ? "md:pb-7 lg:pb-2" : "pb-2"
                    } relative flex h-fit w-auto flex-col justify-between overflow-hidden md:flex-row md:gap-0 lg:gap-4`}
                >
                    {/* Left */}
                    <div
                        className={` flex w-auto flex-col items-start justify-start overflow-visible transition-all  duration-300 ease-in-out ${
                            minimizeGallery
                                ? "md:w-[65%] lg:w-fit"
                                : "md:w-[65%] lg:w-fit"
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
                            } flex w-auto  translate-y-1 flex-col transition-all  duration-300 ease-in-out md:h-[242px] md:flex-row`}
                        >
                            {/* Main Image */}
                            <div
                                onClick={() => handleGalleryClick(image)}
                                className={` main-image mb-2 h-[242px] cursor-pointer  overflow-hidden rounded-lg opacity-90 transition-all duration-300 ease-in-out hover:opacity-100  md:rounded-r-none lg:max-w-[450px] lg:rounded-lg ${
                                    minimizeGallery
                                        ? "w-auto md:w-3/5 lg:w-4/5"
                                        : "w-auto md:w-4/5 "
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
                                    className="cursor-pointer object-cover "
                                    style={{ minHeight: "242px" }}
                                />
                            </div>
                            {/* <p>{isLarge ? "true" : "false"}</p> */}
                            {/* Additional Images */}
                            <div
                                className={` ${
                                    minimizeGallery == true
                                        ? "h-[99%] w-full  min-w-[80px]  p-1 md:w-1/5 md:max-w-[75px] "
                                        : "w-0"
                                }  xl:duration-0 gallery-background z-20  flex bg-transparent transition-all  transition-all duration-300 duration-300 ease-in-out md:flex-col lg:mx-2 lg:w-auto  lg:max-w-[75px] lg:bg-transparent xl:transition-none `}
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
                                <ul className="flex h-fit w-full gap-2 transition-all duration-300 ease-in-out  md:h-full md:flex-col md:p-0 ">
                                    {/* Map over the first 4 images of the gallry and display them in a column */}

                                    {gall4.map((gallery4) => {
                                        return (
                                            <li
                                                key={image.id}
                                                className="h-[10vw] w-1/4 cursor-pointer overflow-hidden rounded-lg bg-zinc-200 object-fill object-center opacity-80 shadow-md shadow-black/[15%] hover:opacity-100 dark:bg-zinc-700  dark:shadow-black/30 md:h-1/4 md:w-full"
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
                                } hidden h-auto w-fit  cursor-pointer items-center justify-center rounded-l-none rounded-r-lg bg-zinc-200 p-0 text-zinc-600 hover:bg-slate-200 active:bg-zinc-300 dark:bg-zinc-700 dark:text-white md:flex md:rounded-r-lg lg:hidden`}
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
                        {/* Mobile */}
                        {/* <div className="no-scrollbar flex flex-col absolute bottom-1 mb-auto mt-4 hidden w-[195%] translate-y-3 overflow-scroll md:hidden  xl:max-w-[195%]">
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
                        </div> */}
                        {/* desktop */}
                        <div className=" mt-6 mr-auto ml-2 hidden w-[150%] flex-col gap-1 align-baseline sm:flex-row md:flex lg:flex">
                            <h4 className=" text-md mt-[0.15rem] w-fit   text-left font-medium dark:text-gray-400 md:text-xl lg:mt-[0.3rem] xl:mt-[0.35rem]">
                                TAGS:
                            </h4>
                            <div className=" mt-1 ml-3 flex flex-wrap  overflow-ellipsis line-clamp-1">
                                {project.tags.map((tag) => {
                                    return (
                                        <div
                                            key={` ${project.id}-${tag}`}
                                            className="xlg:text-base mb-2 mr-2 inline-flex h-6 h-fit items-center rounded-full border-2 bg-gray-100 px-1.5 py-1 text-xs leading-none text-gray-500 dark:border-gray-700 dark:text-gray-400 md:border-gray-300 md:bg-transparent md:px-2 md:text-gray-400 lg:px-3 lg:text-sm"
                                        >
                                            {tag}
                                        </div>
                                    )
                                })}

                                {/* {project.id} */}
                            </div>
                        </div>
                    </div>
                    {/* Right */}
                    <div
                        className={`mt-4 flex  w-auto flex-col items-start justify-start pl-4 transition-all duration-300 ease-in-out md:mt-0 md:pl-0 ${
                            minimizeGallery
                                ? " mr-2 md:w-[45%] lg:w-[70%] xl:w-full"
                                : "-translate-x-4 md:w-[40%]  lg:w-[60%] xl:w-full"
                        } `}
                    >
                        {/* Name */}
                        <h2 className=" text-left text-2xl font-bold lg:mb-2 lg:max-w-[unset] lg:text-3xl">
                            {name}
                        </h2>
                        {/* Date */}
                        <h2 className="mt-2 text-base dark:text-gray-500">
                            {month}, {year}
                        </h2>
                        {/* Techs */}
                        <div className="flex w-auto flex-wrap overflow-ellipsis lg:mb-1">
                            <h4 className="align-center text-md mt-3 flex h-8 justify-center p-[2px] text-center font-medium dark:text-gray-400 md:mt-2 md:text-xl">
                                TECH:
                            </h4>
                            {/* output logos of each techology used in each project */}
                            <div className="ml-2 flex object-fill">
                                {matchedTechnologies.map((tech) => (
                                    <div key={tech.name}>
                                        <img
                                            key={tech.id}
                                            className={`${
                                                tech.invert ? "dark:invert" : ""
                                            } my-2 mr-1 h-8 cursor-pointer rounded-md object-fill`}
                                            src={tech.imgSrc}
                                            alt={tech.name}
                                            data-tooltip-id={`${tech.tooltipRef}-${key}`}
                                            data-tooltip-content={tech.name}
                                            data-tooltip-delay-show={300}
                                        />
                                        <Tooltip
                                            id={`${tech.tooltipRef}-${key}`}
                                            place="top"
                                            className="z-100 bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Project Info */}
                        <div className="mb-4 mt-2 flex w-auto flex-wrap justify-start gap-2 md:gap-2">
                            <h2 className="group relative ml-2  text-left">
                                <a
                                    href={uiDesign}
                                    className={` ${
                                        uiDesign !== "#"
                                            ? " opacity-100 group-hover:border-white dark:hover:text-white dark:group-hover:border-white  dark:group-hover:bg-zinc-900"
                                            : "pointer-events-none cursor-default border-transparent bg-zinc-100 text-zinc-500 grayscale dark:group-hover:border-transparent dark:group-hover:bg-zinc-800 md:absolute md:opacity-0 lg:relative lg:opacity-100"
                                    } w-fit rounded-full rounded-r-full border-2 px-5 py-1 dark:border-zinc-800  dark:bg-zinc-800 dark:hover:bg-white/5   lg:border-l-0 lg:pl-10  lg:pr-5  `}
                                >
                                    <img
                                        src="https://i.ibb.co/QnLZMv7/SCR-20230822-qpdp.png"
                                        alt="figma project"
                                        className={` ${
                                            uiDesign !== "#"
                                                ? "group-hover:border-white group-hover:border-r-transparent"
                                                : " hidden invert dark:invert-0 lg:flex"
                                        } absolute -left-1 -top-1 inline-block h-8 w-8 rounded border-2 border-zinc-800`}
                                    />
                                    Design
                                </a>
                            </h2>
                            <h2 className="text-left ">
                                <a
                                    href={link}
                                    className={` ${
                                        link !== "#"
                                            ? "opacity-100"
                                            : "cursor-defaultpointer-events-none pointer-events-none cursor-not-allowed opacity-30 grayscale"
                                    } rounded-full border-2 border-sky-500 px-5 py-1 text-sky-500 hover:border-sky-700 hover:bg-sky-50/20 hover:text-sky-700 dark:border-sky-400 dark:text-white dark:hover:border-sky-300 dark:hover:bg-white/5  dark:hover:text-white `}
                                >
                                    Demo
                                </a>
                            </h2>
                            <h2 className="group relative  text-left">
                                <a
                                    href={repository}
                                    className={` ${
                                        repository !== "#"
                                            ? "border-transparent  bg-sky-500 px-5  text-white opacity-100 group-hover:bg-sky-400 lg:pr-10  lg:pl-5"
                                            : "pointer-events-none cursor-default bg-zinc-300 px-5 text-zinc-100 dark:bg-zinc-800 dark:text-zinc-500 dark:grayscale"
                                    } w-fit rounded-full  py-1 `}
                                >
                                    Repo
                                    <img
                                        src={Github}
                                        alt="figma project"
                                        className={` ${
                                            repository !== "#"
                                                ? " hidden group-hover:bg-sky-400 group-hover:opacity-100 lg:flex "
                                                : "hidden"
                                        } absolute -right-1 -top-1 inline-block h-8 w-8 rounded-full bg-sky-600 p-0.5`}
                                    />
                                </a>
                            </h2>
                        </div>
                        {/* Description Dropdown*/}
                        <div
                            id="accordionExample"
                            className="z-20 mb-4 w-full bg-white/70 dark:bg-transparent"
                        >
                            <div className="w-auto rounded-t-lg rounded-b-lg border border-neutral-200 dark:border-neutral-600">
                                <h2 className="mb-0" id="headingOne">
                                    <button
                                        className=" group relative flex w-full items-center rounded-t-lg rounded-b-lg border-0 py-2 px-3 text-left text-base text-gray-500 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-[#1E1E1D] dark:text-white [&:not([data-te-collapse-collapsed])]:rounded-b-none [&:not([data-te-collapse-collapsed])]:border-b-0 [&:not([data-te-collapse-collapsed])]:bg-white/40 [&:not([data-te-collapse-collapsed])]:text-sky-500 [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-[#1E1E1D] dark:[&:not([data-te-collapse-collapsed])]:text-sky-300 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
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
                                        <span className="ml-auto h-5 w-5 shrink-0 rotate-180 fill-[#212529] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:translate-y-0.5 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#336dec] motion-reduce:transition-none dark:fill-white  dark:group-[[data-te-collapse-collapsed]]:fill-blue-300">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-6 w-6 text-current"
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
                            <h4 className=" text-md ml-0 mr-auto justify-start text-left align-baseline font-medium line-clamp-1 dark:text-gray-300 sm:mt-1.5 md:mt-2 md:text-xl">
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

                        <hr className="mx-auto mt-2 mb-4 w-full  -translate-x-2 border border-gray-200 dark:border-gray-700 md:mt-0 md:hidden" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
