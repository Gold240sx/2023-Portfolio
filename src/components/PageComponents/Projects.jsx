import { active } from "d3"
import React from "react"
import { useState } from "react"
import { HiFilter } from "react-icons/hi"
import { BsRulers, BsFillCalendarMonthFill } from "react-icons/bs"
import { FaDatabase } from "react-icons/fa"

function getYearArray() {
    const currentYear = new Date().getFullYear()
    const yearArray = []
    for (let year = 2020; year <= currentYear; year++) {
        yearArray.push(year)
    }
    return yearArray
}

const Technologies = [
    {
        name: "Vanilla",
        id: 1,
        logo: "https://img.icons8.com/color/48/000000/javascript.png",
        type: "framework",
    },
    {
        name: "Typescript",
        id: 2,
        logo: "https://i.ibb.co/hyG9DhN/typescript.png",
        type: "framework",
    },
    {
        name: "React",
        id: 3,
        logo: "https://img.icons8.com/color/48/000000/react-native.png",
        type: "framework",
    },
    {
        name: "Next.js",
        id: 4,
        logo: "https://img.icons8.com/color/48/000000/nextjs.png",
        type: "framework",
        invert: true,
    },
    {
        name: "T3",
        id: 5,
        logo: "https://i.ibb.co/CPTK4xm/t3.png",
        type: "framework",
    },
    {
        name: "Tailwind",
        id: 6,
        logo: "https://img.icons8.com/color/48/000000/tailwindcss.png",
        type: "css",
    },
    {
        name: "Firebase",
        id: 7,
        logo: "https://img.icons8.com/color/48/000000/firebase.png",
        type: "database",
    },
    {
        name: "Supabase",
        id: 8,
        logo: "https://i.ibb.co/Yjn0Nbx/supabase.png",
        type: "database",
    },
    {
        name: "SendGrid",
        id: 9,
        logo: "https://i.ibb.co/y4ZP2qG/sendgrid.png",
        type: "other",
    },
]

const ProjectItems = [
    {
        id: 1,
        name: "Project 1",
        image: "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg",
        description:
            "This website is a portfolio of my work. It is built with Next.js and Tailwind CSS. It is hosted on Vercel.",
        year: 2021,
        technologies: ["Next.js", "Tailwind", "Firebase", "Typescript"],
        repository: "#",
        link: "#",
        tags: ["Next.js", "Tailwind"],
    },
    {
        id: 2,
        name: "Project 2",
        image: "https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png",
        description:
            "This website is a portfolio of my work. It is built with Next.js and Tailwind CSS. It is hosted on Vercel.",
        year: 2021,
        technologies: ["Next.js", "Tailwind"],
        repository: "#",
        link: "#",
        tags: ["Next.js", "Tailwind"],
    },
]

const ProjectCard = ({ project }) => {
    const { name, image, description, year, technologies, repository, link } =
        project

    const matchedTechnologies = Technologies.filter((technology) =>
        technologies.includes(technology.name)
    )

    const [activeFilters, setActiveFilters] = useState([
        "Vanilla",
        "Typescript",
        "React",
        "Next.js",
        "T3",
        "Tailwind",
        "Firebase",
        "Supabase",
        "SendGrid",
    ])

    const toggleFilter = (filterName) => {
        if (activeFilters.includes(filterName)) {
            // If filter is already active, remove it
            setActiveFilters(
                activeFilters.filter((name) => name !== filterName)
            )
        } else {
            // If filter is inactive, add it
            setActiveFilters([...activeFilters, filterName])
        }
    }

    return (
        <div className="">
            {/* main content */}
            <div className="h-full w-full items-center justify-center rounded-lg p-4">
                <div className="flex w-auto flex-col  gap-4 md:flex-row">
                    {/* Left */}
                    <div className="flex flex-col items-start justify-start md:max-w-[50%]">
                        {/* image */}
                        <img
                            src={image}
                            alt={name}
                            className="rounded-md  lg:rounded-lg"
                        />
                        {/* tags */}
                        <div className=" mt-2 mr-auto hidden flex-col justify-start align-baseline md:flex md:flex-row">
                            <h4 className=" mx-2 justify-start text-lg font-medium line-clamp-1 md:mt-1 md:text-xl ">
                                TAGS:
                            </h4>
                            <div className=" flex flex-wrap justify-start overflow-ellipsis line-clamp-1">
                                {ProjectItems.map((project) => {
                                    return project.tags.map((tag) => {
                                        return (
                                            <div
                                                key={tag}
                                                className="xlg:text-base mb-2 mr-2 inline-flex h-fit items-center rounded-full border-2 bg-gray-100 px-1.5 py-1 text-xs leading-none text-gray-500 md:border-gray-300 md:bg-transparent md:px-2 md:text-gray-400 lg:px-3 lg:text-sm"
                                            >
                                                {tag}
                                            </div>
                                        )
                                    })
                                })}
                            </div>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="flex w-full flex-col items-start justify-start">
                        {/* Name */}
                        <h2 className="text-2xl font-bold">{name}</h2>
                        {/* Project Info */}
                        <div className="my-4 flex w-auto justify-start gap-2">
                            <h2 className="cursor-pointer text-left ">
                                <a
                                    href={link}
                                    className="rounded-full border-2 border-sky-400 px-5 py-1 text-sky-600 hover:border-sky-300 hover:bg-sky-50/20 hover:text-sky-500"
                                >
                                    Demo
                                </a>
                            </h2>
                            <h2 className="cursor-pointer text-left">
                                <a
                                    href={repository}
                                    className="rounded-full bg-sky-400 px-5 py-1 text-white hover:bg-sky-500 "
                                >
                                    Repository
                                </a>
                            </h2>
                        </div>
                        {/* Description Dropdown*/}
                        <div className="w-full">
                            <div class=" w-auto rounded-xl  border border-neutral-200 dark:border-neutral-600 dark:bg-neutral-800">
                                <h2 class="mb-0 w-auto" id="headingOne">
                                    <button
                                        class="dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 font-base group relative flex w-full items-center border-0 py-2 px-5 text-left text-base text-neutral-400 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white  [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                        type="button"
                                        data-te-collapse-init
                                        data-te-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        Description
                                        <span class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="h-6 w-6"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    class="!visible"
                                    data-te-collapse-item
                                    data-te-collapse-show
                                    aria-labelledby="headingOne"
                                    data-te-parent="#accordionExample"
                                >
                                    <div class="py-4 px-5">
                                        <p className="mb-2">{description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Techs */}
                        <div className="flex overflow-ellipsis">
                            <h4 className="align-center text-md mt-3 flex h-8 justify-center p-[2px] text-center font-medium md:mt-2 md:text-xl">
                                TECH:
                            </h4>
                            {/* output logos of each techology used in each project */}
                            {matchedTechnologies.map((tech) => (
                                <img
                                    key={tech.id}
                                    className={`${
                                        tech.invert ? "invert" : ""
                                    } mx-2 my-2 h-8`}
                                    src={tech.logo}
                                    alt={tech.name}
                                />
                            ))}
                        </div>
                        {/* tags */}
                        <div className=" mr-auto flex flex-col justify-start align-baseline sm:flex-row md:hidden">
                            <h4 className=" text-md justify-start text-left font-medium line-clamp-1 sm:mt-1.5 md:mt-2 md:text-xl">
                                TAGS:
                            </h4>
                            <div className=" mt-1 ml-3 flex flex-wrap justify-start overflow-ellipsis line-clamp-1">
                                {ProjectItems.map((project) => {
                                    return project.tags.map((tag) => {
                                        return (
                                            <div
                                                key={tag}
                                                className="xlg:text-base mb-2 mr-2 inline-flex h-fit items-center rounded-full border-2 bg-gray-100 px-1.5 py-1 text-xs leading-none text-gray-500 md:border-gray-300 md:bg-transparent md:px-2 md:text-gray-400 lg:px-3 lg:text-sm"
                                            >
                                                {tag}
                                            </div>
                                        )
                                    })
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
    const [activeFilters, setActiveFilters] = useState([
        "Vanilla",
        "Typescript",
        "React",
        "Next.js",
        "T3",
        "Tailwind",
        "Firebase",
        "Supabase",
        "SendGrid",
    ])

    const toggleFilter = (filterName) => {
        if (activeFilters.includes(filterName)) {
            // If filter is already active, remove it
            setActiveFilters(
                activeFilters.filter((name) => name !== filterName)
            )
        } else {
            // If filter is inactive, add it
            setActiveFilters([...activeFilters, filterName])
        }
    }

    return (
        <div className="relative mx-auto flex flex-col items-center justify-evenly text-center md:text-left lg:px-10">
            <h3 className="relative top-24 z-50 w-[541.98px] text-center text-2xl uppercase tracking-[20px] text-gray-500 dark:text-white">
                Projects
            </h3>
            {/* Subheader */}
            <div
                id="lineup-container"
                className="relative mt-4 w-full rounded-2xl p-2"
            >
                <p className="mt-24 text-center dark:text-gray-400">
                    Currenly being currated for upload. The template for this is
                    currently being created.
                </p>
            </div>
            <div className="flex bg-white">
                {/* mobile filter menu */}
                <div className="mt-20 flex h-full w-fit flex-col items-center justify-center md:hidden">
                    <div className="relative my-4 h-fit w-full rounded-t-2xl bg-opacity-10 bg-gradient-to-b from-white to-white dark:bg-black">
                        <div className="flex w-fit flex-col items-center justify-around gap-2 rounded-2xl border-2 p-1.5">
                            {/* left */}
                            <HiFilter className=" w-22 h-22 my-auto flex text-center align-middle text-4xl capitalize tracking-widest text-black" />
                            {/* left middle*/}
                            <div className="flex h-full flex-col items-center justify-center rounded-lg border-2 p-1.5">
                                <BsRulers className=" w-22 h-22 my-auto flex pb-1.5 text-center align-middle text-4xl capitalize tracking-widest" />
                                <div className=" flex flex-col items-center border-t-2 py-5">
                                    {Technologies.map((tech) => {
                                        if (tech.type === "framework") {
                                            const isActive =
                                                activeFilters.includes(
                                                    tech.name
                                                )
                                            return (
                                                <div
                                                    className="align-center flex cursor-pointer rounded-lg hover:bg-white dark:hover:bg-gray-600"
                                                    key={tech.id}
                                                    onClick={() =>
                                                        toggleFilter(tech.name)
                                                    }
                                                >
                                                    <img
                                                        src={tech.logo}
                                                        className={` ${
                                                            isActive
                                                                ? "opacity-100"
                                                                : "grayscale"
                                                        } filter- max-h-[40px] opacity-50 hover:grayscale-[50%] ${
                                                            tech.invert
                                                                ? "opacity-50 dark:invert"
                                                                : ""
                                                        } ${
                                                            tech.invert &&
                                                            isActive
                                                                ? "opacity-100 dark:opacity-100"
                                                                : "opacity-50 "
                                                        }`}
                                                        alt={tech.name}
                                                    ></img>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                            {/* right middle */}
                            <div className="flex h-full flex-col items-center justify-center rounded-lg border-2 p-1.5">
                                <FaDatabase className=" w-22 h-22 my-auto flex pb-1.5 text-center align-middle text-4xl capitalize tracking-widest" />
                                <div className="flex flex-col items-center border-t-2 py-5">
                                    {Technologies.map((tech) => {
                                        if (tech.type === "database") {
                                            const isActive =
                                                activeFilters.includes(
                                                    tech.name
                                                )
                                            return (
                                                <div
                                                    key={tech.id}
                                                    className="align-center flex cursor-pointer rounded-lg hover:bg-white dark:hover:bg-gray-600"
                                                    onClick={() =>
                                                        toggleFilter(tech.name)
                                                    }
                                                >
                                                    <img
                                                        src={tech.logo}
                                                        className={` ${
                                                            isActive
                                                                ? "opacity-100"
                                                                : "grayscale"
                                                        } filter- max-h-[40px] opacity-50 hover:grayscale-[50%] ${
                                                            tech.invert
                                                                ? "opacity-50 dark:invert"
                                                                : ""
                                                        } ${
                                                            tech.invert &&
                                                            isActive
                                                                ? "opacity-100 dark:opacity-100"
                                                                : "opacity-50 "
                                                        }`}
                                                        alt={tech.name}
                                                    ></img>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                            {/* right*/}
                            <div className="flex h-full flex-col items-center justify-center rounded-lg border-2 p-1.5">
                                <BsFillCalendarMonthFill className=" w-22 h-22 my-auto flex pb-1.5 text-center align-middle text-4xl capitalize tracking-widest" />
                                <div className="flex h-full flex-col gap-2 border-t-2 py-5">
                                    {getYearArray().map((year) => {
                                        const isActive = activeFilters.includes(
                                            year.toString()
                                        )
                                        return (
                                            <div
                                                key={year}
                                                className="align-center cursor-pointerrounded-lg flex h-full cursor-pointer hover:border-white"
                                                onClick={() =>
                                                    toggleFilter(
                                                        year.toString()
                                                    )
                                                }
                                            >
                                                <h3
                                                    className={`mx-[.15rem] mt-auto rounded-md bg-sky-400 px-1 text-sm text-white hover:bg-sky-300 ${
                                                        isActive
                                                            ? ""
                                                            : "bg-gray-300 text-gray-500"
                                                    }`}
                                                >
                                                    {year}
                                                </h3>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main Content */}
                <div className="w-full rounded-lg bg-white dark:bg-gray-800 md:p-4">
                    {/* large filter box */}
                    <div className="relative my-4 hidden h-fit w-full rounded-t-2xl bg-opacity-10 bg-gradient-to-b from-white to-white dark:bg-black md:block">
                        <div className="flex h-full items-center justify-around">
                            {/* left */}
                            <h2 className=" my-auto flex text-center align-middle text-xl capitalize tracking-widest">
                                FILTER
                            </h2>
                            {/* left middle*/}
                            <div className="flex h-full flex-col items-center justify-center p-1.5 ">
                                <h3 className="mb-auto tracking-wide underline">
                                    Frameworks
                                </h3>
                                <div className="flex">
                                    {Technologies.map((tech) => {
                                        if (tech.type === "framework") {
                                            const isActive =
                                                activeFilters.includes(
                                                    tech.name
                                                )
                                            return (
                                                <div
                                                    className="align-center flex cursor-pointer rounded-lg hover:bg-white dark:hover:bg-gray-600"
                                                    key={tech.id}
                                                    onClick={() =>
                                                        toggleFilter(tech.name)
                                                    }
                                                >
                                                    <img
                                                        src={tech.logo}
                                                        className={` ${
                                                            isActive
                                                                ? "opacity-100"
                                                                : "grayscale"
                                                        } filter- max-h-[40px] opacity-50 hover:grayscale-[50%] ${
                                                            tech.invert
                                                                ? "opacity-50 dark:invert"
                                                                : ""
                                                        } ${
                                                            tech.invert &&
                                                            isActive
                                                                ? "opacity-100 dark:opacity-100"
                                                                : "opacity-50 "
                                                        }`}
                                                        alt={tech.name}
                                                    ></img>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                            {/* right middle */}
                            <div className="flex h-full flex-col items-center justify-center p-1.5 ">
                                <h3 className="mb-auto tracking-wide underline">
                                    Databases
                                </h3>
                                <div className="flex">
                                    {Technologies.map((tech) => {
                                        if (tech.type === "database") {
                                            const isActive =
                                                activeFilters.includes(
                                                    tech.name
                                                )
                                            return (
                                                <div
                                                    key={tech.id}
                                                    className="align-center flex cursor-pointer rounded-lg hover:bg-white dark:hover:bg-gray-600"
                                                    onClick={() =>
                                                        toggleFilter(tech.name)
                                                    }
                                                >
                                                    <img
                                                        src={tech.logo}
                                                        className={` ${
                                                            isActive
                                                                ? "opacity-100"
                                                                : "grayscale"
                                                        } filter- max-h-[40px] opacity-50 hover:grayscale-[50%] ${
                                                            tech.invert
                                                                ? "opacity-50 dark:invert"
                                                                : ""
                                                        } ${
                                                            tech.invert &&
                                                            isActive
                                                                ? "opacity-100 dark:opacity-100"
                                                                : "opacity-50 "
                                                        }`}
                                                        alt={tech.name}
                                                    ></img>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                            {/* right*/}
                            <div className="flex h-full flex-col items-center justify-center p-1.5 ">
                                <h3 className="mb-auto tracking-wide underline">
                                    Year
                                </h3>
                                <div className="flex h-full">
                                    {getYearArray().map((year) => {
                                        const isActive = activeFilters.includes(
                                            year.toString()
                                        )
                                        return (
                                            <div
                                                key={year}
                                                className="align-center cursor-pointerrounded-lg flex h-full cursor-pointer hover:border-white"
                                                onClick={() =>
                                                    toggleFilter(
                                                        year.toString()
                                                    )
                                                }
                                            >
                                                <h3
                                                    className={`mx-[.15rem] mt-auto rounded-md bg-sky-400 px-1 text-sm text-white hover:bg-sky-300 ${
                                                        isActive
                                                            ? ""
                                                            : "bg-gray-300 text-gray-500"
                                                    }`}
                                                >
                                                    {year}
                                                </h3>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="relative mx-4 -mt-4  hidden h-2 w-auto rounded border-0 bg-gradient-radial from-sky-400 via-cyan-600 to-teal-600 fill-black md:block" />
                    {/* Project Cards */}
                    <div className=" mt-10 w-full rounded-b-2xl bg-white dark:bg-black">
                        {ProjectItems.map((project) => {
                            const id = project.id
                            return <ProjectCard key={id} project={project} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
