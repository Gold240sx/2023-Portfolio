import { active } from "d3"
import React from "react"
import { useState } from "react"
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
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

function getYearArray() {
    const currentYear = new Date().getFullYear()
    const yearArray = []
    for (let year = 2022; year <= currentYear; year++) {
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
        name: "Sass",
        id: 6,
        logo: "https://img.icons8.com/color/48/000000/sass.png",
        type: "css",
    },
    {
        name: "Tailwind",
        id: 7,
        logo: "https://img.icons8.com/color/48/000000/tailwindcss.png",
        type: "css",
    },
    {
        name: "Firebase",
        id: 8,
        logo: "https://img.icons8.com/color/48/000000/firebase.png",
        type: "database",
    },
    {
        name: "Supabase",
        id: 9,
        logo: "https://i.ibb.co/Yjn0Nbx/supabase.png",
        type: "database",
    },
    {
        name: "PlanetScale",
        id: 10,
        logo: "https://i.ibb.co/DQH9WnY/planetscale.png",
        type: "database",
    },
    {
        name: "SendGrid",
        id: 11,
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
        month: "January",
        year: 2022,
        technologies: ["Next.js", "Tailwind", "Firebase", "Typescript"],
        repository: "#",
        link: "#",
        tags: [
            "dashboard",
            "authentication",
            "auth",
            "scrollbar",
            "nextjs",
            "tailwind",
            "firebase",
            "typescript",
        ],
    },
    {
        id: 2,
        name: "Project 2",
        image: "https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png",
        description:
            "This website is a portfolio of my work. It is built with Next.js and Tailwind CSS. It is hosted on Vercel.",
        month: "February",
        year: 2023,
        technologies: ["Next.js", "Tailwind"],
        repository: "#",
        link: "#",
        tags: ["Next.js", "Tailwind"],
    },
    {
        id: 3,
        name: "Project 3",
        image: "https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png",
        description:
            "This website is a portfolio of my work. It is built with Next.js and Tailwind CSS. It is hosted on Vercel.",
        month: "February",
        year: 2023,
        technologies: ["Next.js", "Tailwind"],
        repository: "#",
        link: "#",
        tags: ["Next.js", "Tailwind"],
    },
    {
        id: 4,
        name: "Project 4",
        image: "https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png",
        description:
            "This website is a portfolio of my work. It is built with Next.js and Tailwind CSS. It is hosted on Vercel.",
        month: "February",
        year: 2023,
        technologies: ["Next.js", "Tailwind"],
        repository: "#",
        link: "#",
        tags: ["Next.js", "Tailwind"],
    },
    {
        id: 5,
        name: "Project 5",
        image: "https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png",
        description:
            "This website is a portfolio of my work. It is built with Next.js and Tailwind CSS. It is hosted on Vercel.",
        month: "February",
        year: 2023,
        technologies: ["Next.js", "Tailwind"],
        repository: "#",
        link: "#",
        tags: ["Next.js", "Tailwind"],
    },
]

const ProjectCard = ({ project }) => {
    const {
        name,
        image,
        description,
        year,
        technologies,
        repository,
        link,
        month,
        tags,
    } = project

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

    const createValidId = (str) => str.replace(/\s+/g, "_")

    return (
        <div className="">
            {/* main content */}
            <div className="h-full w-full items-center justify-center rounded-lg p-4">
                <div className="flex w-auto flex-col  gap-4 overflow-hidden md:flex-row">
                    {/* Left */}
                    <div className="relative flex w-auto flex-col items-start justify-start md:max-w-[50%]">
                        {/* image */}
                        <img
                            src={image}
                            alt={name}
                            className="rounded-md  lg:rounded-lg"
                        />
                        {/* tags */}
                        <div className="mt-4 hidden w-fit max-w-full md:flex">
                            <h4 className=" mx-2 w-fit text-sm font-medium md:text-base">
                                TAGS:
                            </h4>
                            {tags.map((tag) => {
                                return (
                                    <div
                                        key={tag}
                                        className="mb-2 mr-2 inline-flex h-fit items-center rounded-full border-2 bg-gray-100 px-1 py-[2px] text-xs leading-none text-gray-500 md:border-gray-300 md:bg-transparent md:px-2 md:text-gray-400 lg:px-3 lg:text-xs xl:text-xs"
                                    >
                                        {tag}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {/* Right */}
                    <div className="flex w-full flex-col items-start justify-start">
                        {/* Name */}
                        <h2 className="text-2xl font-bold lg:mb-2 lg:text-4xl">
                            {name}
                        </h2>
                        {/* Date */}
                        <h2 className="text-base">
                            {month}, {year}
                        </h2>
                        {/* Techs */}
                        <div className="flex overflow-ellipsis lg:mb-1">
                            <h4 className="align-center text-md mt-3 flex h-8 justify-center p-[2px] text-center font-medium md:mt-2 md:text-xl">
                                TECH:
                            </h4>
                            {/* output logos of each techology used in each project */}
                            <div className="ml-2 flex">
                                {matchedTechnologies.map((tech) => (
                                    <img
                                        key={tech.id}
                                        className={`${
                                            tech.invert ? "dark:invert" : ""
                                        } my-2 h-8`}
                                        src={tech.logo}
                                        alt={tech.name}
                                    />
                                ))}
                            </div>
                        </div>
                        {/* Project Info */}
                        <div className="mb-4 flex w-auto justify-start gap-2">
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
                        {/* <div className="z-10 w-full bg-white">
                            <div class=" w-auto rounded-xl  border border-neutral-200 dark:border-neutral-600 dark:bg-neutral-800">
                                <h2
                                    class="mb-0 w-auto"
                                    id={`headingOne-${createValidId(name)}`}
                                >
                                    <button
                                        class="font-base group relative flex w-full items-center border-0 py-2 px-5 text-left text-neutral-400 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:text-sky-500  [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-sky-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
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
                                    id={`collapseOne-${createValidId(name)}`}
                                    class="!visible hidden"
                                    data-te-collapse-item
                                    data-te-collapse-show
                                    aria-labelledby={`headingOne-${createValidId(
                                        name
                                    )}`}
                                    data-te-parent="#accordionExample"
                                >
                                    <div class="py-4 px-5">
                                        <p className="mb-2">{description}</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/*  */}
                        <div
                            id="accordionExample"
                            className="z-20 w-full bg-white"
                        >
                            <div className="w-auto rounded-t-lg rounded-b-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                <h2 className="mb-0" id="headingOne">
                                    <button
                                        className="dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 group relative flex w-full items-center rounded-t-lg border-0 py-2 px-3 text-left text-base text-gray-500 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-sky-500 [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                        type="button"
                                        data-te-collapse-init
                                        data-te-collapse-collapsed
                                        // data-te-target="#collapseOne"
                                        // aria-expanded="false"
                                        // aria-controls="collapseOne"
                                        data-te-target={`#collapseOne-${createValidId(
                                            name
                                        )}`}
                                        aria-expanded="false"
                                        aria-controls={`collapseOne-${createValidId(
                                            name
                                        )}`}
                                    >
                                        Description
                                        <span class="ml-auto h-5 w-5 shrink-0 rotate-180 fill-[#212529] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:translate-y-0.5 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#336dec] motion-reduce:transition-none dark:fill-white dark:group-[[data-te-collapse-collapsed]]:fill-blue-300">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                class="h-6 w-6"
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
                                    class="!visible hidden"
                                    data-te-collapse-item
                                    // aria-labelledby="headingOne"
                                    aria-labelledby={`headingOne-${createValidId(
                                        name
                                    )}`}
                                    data-te-parent="#accordionExample"
                                >
                                    <div className="py-4 px-5">
                                        <p className="mb-2 text-left">
                                            <strong>
                                                This is the first item's
                                                accordion body.
                                            </strong>
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        {/* tags */}
                        {/* <div className=" mr-auto justify-start align-baseline ">
                            <h4 className=" text-md justify-start text-left font-medium line-clamp-1 sm:mt-1.5 md:mt-2 md:text-xl">
                                TAGS:
                            </h4>
                            <div className=" mt-1 mr-auto block  justify-start overflow-ellipsis line-clamp-1">
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
                        </div> */}
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
        "Sass",
        "Tailwind",
        "Firebase",
        "Supabase",
        "SendGrid",
        "PlanetScale",
        "2023",
    ])
    const [showMobileFilters, setShowMobileFilters] = useState(true)
    const [hoveredFilter, setHoveredFilter] = useState({ filter: "", count: 0 })
    const [currentPage, setCurrentPage] = useState(1)
    const [showHelpInfo, setShowHelpInfo] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const itemsPerPage = 4

    const updateCurrentPage = (newPage) => {
        // Ensure the new page number is within the valid range
        const maxPage = Math.ceil(filteredProjects.length / itemsPerPage)
        if (newPage >= 1 && newPage <= maxPage) {
            setCurrentPage(newPage)
        }
    }

    // const toggleFilter = (filterName) => {
    //     if (activeFilters.includes(filterName)) {
    //         // If filter is already active, remove it
    //         setActiveFilters(
    //             activeFilters.filter((name) => name !== filterName)
    //         )
    //     } else {
    //         // If filter is inactive, add it
    //         setActiveFilters([...activeFilters, filterName])
    //     }
    // }
    const toggleFilter = (filterName) => {
        const yearFilters = getYearArray().map((year) => year.toString())

        if (activeFilters.includes(filterName)) {
            // If filter is already active, remove it only if it's not the last year filter
            if (
                !yearFilters.includes(filterName) ||
                yearFilters.some(
                    (year) =>
                        activeFilters.includes(year) && year !== filterName
                )
            ) {
                setActiveFilters(
                    activeFilters.filter((name) => name !== filterName)
                )
            }

            // If the user deselects the last active year, select the most recent year
            const remainingYearFilters = activeFilters.filter(
                (name) => yearFilters.includes(name) && name !== filterName
            )
            if (
                yearFilters.includes(filterName) &&
                remainingYearFilters.length === 0
            ) {
                const mostRecentYear = Math.max(...yearFilters)
                setActiveFilters([
                    ...activeFilters.filter((name) => name !== filterName),
                    mostRecentYear.toString(),
                ])
            }
        } else {
            // If filter is inactive, add it
            setActiveFilters([...activeFilters, filterName])
        }
    }

    const handleMobileFilterClose = () => {
        // Close mobile filter menu
        showMobileFilters
            ? setShowMobileFilters(false)
            : setShowMobileFilters(true)
    }

    const countMatchingProjects = (filter) => {
        return ProjectItems.filter(
            (project) =>
                project.technologies.includes(filter) ||
                project.year.toString() === filter
        ).length
    }

    const filteredProjects = ProjectItems.filter((project) => {
        // return (
        //     project.technologies.some((tech) => activeFilters.includes(tech)) &&
        //     activeFilters.includes(project.year.toString())
        // )
        const hasTechnology = project.technologies.some((tech) =>
            activeFilters.includes(tech)
        )
        const hasYear = activeFilters.includes(project.year.toString())

        return hasTechnology && hasYear
    })

    const areAllFiltersActive = () => {
        // Get all technology names
        const allTechnologyFilters = Technologies.map((tech) => tech.name)

        // Get all years from year array
        const allYearFilters = getYearArray().map((year) => year.toString())

        // Combine both arrays
        const allFilters = [...allTechnologyFilters, ...allYearFilters]

        // Check if every filter in allFilters is present in activeFilters
        return allFilters.every((filter) => activeFilters.includes(filter))
    }

    const projectsToDisplay = filteredProjects.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)

    const searchProjects = (searchTerm) => {
        setSearchTerm(searchTerm)

        const filteredProjects = ProjectItems.filter((project) => {
            const hasTechnology = project.technologies.some((tech) =>
                tech.toLowerCase().includes(searchTerm.toLowerCase())
            )
            const hasYear = project.year.toString().includes(searchTerm)
            const hasTitle = project.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            const hasDescription = project.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase())

            // filter the projects and display only the ones that match the search term

            // return hasTechnology || hasYear || hasTitle || hasDescription
        })

        return filteredProjects
    }

    return (
        <div className="relative mx-auto flex flex-col items-center justify-evenly bg-white text-center md:text-left lg:px-10">
            <h3 className="relative top-24 z-50 w-[541.98px] text-center text-2xl uppercase tracking-[20px] text-gray-500 dark:text-white">
                Projects
            </h3>
            {/* Subheader */}
            <div
                id="lineup-container"
                className="relative mt-4 w-full rounded-2xl p-2"
            >
                <p className="mt-24 px-10 text-center dark:text-gray-400">
                    Currenly being currated for upload. The template for this is
                    currently being created.
                </p>
            </div>
            <div className="flex w-full bg-white">
                {/* mobile filter menu */}
                <div className=" z-20 flex h-full w-fit flex-col items-center justify-center md:hidden">
                    <div className="relative my-4 h-fit w-full rounded-t-2xl bg-opacity-10 bg-gradient-to-b from-white to-white dark:bg-black">
                        <div
                            className={`${
                                showMobileFilters
                                    ? ""
                                    : "absolute translate-x-[.7rem] shadow-lg hover:bg-gray-50"
                            } ml-1 flex w-fit flex-col items-center justify-around gap-2 rounded-2xl border-2 border-gray-200 bg-white p-1.5 outline-none dark:border-gray-700 dark:bg-black`}
                        >
                            {/* left */}
                            <HiFilter
                                className={`${
                                    showMobileFilters ? "" : ""
                                } w-22 h-22 my-auto flex cursor-pointer text-center align-middle text-4xl capitalize tracking-widest text-black hover:text-gray-700`}
                                onClick={handleMobileFilterClose}
                                data-tooltip-id="projectMobileFilter"
                                data-tooltip-content="Filter Projects (Click to minimize)."
                                data-tooltip-delay-show={300}
                            />
                            <Tooltip
                                id="projectMobileFilter"
                                place="right"
                                className="z-[1000] flex  h-fit bg-gray-200 text-base font-semibold text-slate-700 dark:bg-black dark:text-white md:text-xl"
                            />
                            {/* Select All / Deselect All Button */}
                            <div
                                className="txt-xs cursor-pointer rounded-md border-2 border-sky-200 text-gray-500 dark:text-gray-400"
                                onClick={() => {
                                    if (areAllFiltersActive()) {
                                        setActiveFilters(["2023"])
                                        updateCurrentPage(1)
                                    } else {
                                        const allTechnologyFilters =
                                            Technologies.map(
                                                (tech) => tech.name
                                            )
                                        const allYearFilters =
                                            getYearArray().map((year) =>
                                                year.toString()
                                            )

                                        setActiveFilters([
                                            ...allTechnologyFilters,
                                            ...allYearFilters,
                                        ])

                                        updateCurrentPage(1)
                                    }
                                }}
                            >
                                <p className="cursor-pointer rounded p-[2px] text-xs hover:bg-sky-400 hover:text-white">
                                    {areAllFiltersActive()
                                        ? "Select none"
                                        : "Select all"}
                                </p>
                            </div>
                            <div
                                className={`${
                                    showMobileFilters
                                        ? "flex flex-col"
                                        : "hidden"
                                }
                                        gap-2
                                `}
                            >
                                {/* left middle*/}
                                <div className="flex h-full flex-col items-center justify-center rounded-lg border-2 p-1.5">
                                    <BsRulers
                                        className=" w-22 h-22 my-auto flex pb-1.5 text-center align-middle text-4xl capitalize tracking-widest"
                                        data-tooltip-id="projectMobileFrameworks"
                                        data-tooltip-content="Filter Projects by Framework..."
                                        data-tooltip-delay-show={300}
                                    />
                                    <Tooltip
                                        id="projectMobileFrameworks"
                                        place="right"
                                        className="z-[1000] bg-gray-200 text-xl font-semibold text-slate-700 dark:bg-black dark:text-white"
                                    />
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
                                                            toggleFilter(
                                                                tech.name
                                                            )
                                                        }
                                                        onMouseEnter={() => {
                                                            const count =
                                                                countMatchingProjects(
                                                                    tech.name
                                                                )
                                                            setHoveredFilter({
                                                                filter: tech.name,
                                                                count,
                                                            })
                                                        }}
                                                        onMouseLeave={() =>
                                                            setHoveredFilter({
                                                                filter: "",
                                                                count: 0,
                                                            })
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
                                {/* middle */}
                                <div className="flex h-full flex-col items-center justify-center rounded-lg border-2 p-1.5">
                                    <SiStylelint
                                        className=" w-22 h-22 my-auto flex pb-1.5 text-center align-middle text-4xl capitalize tracking-widest"
                                        data-tooltip-id="projectMobileCSS"
                                        data-tooltip-content="Filter Projects by Css..."
                                        data-tooltip-delay-show={300}
                                    />
                                    <Tooltip
                                        id="projectMobileCSS"
                                        place="right"
                                        className="z-[1000] bg-gray-200 text-xl font-semibold text-slate-700 dark:bg-black dark:text-white"
                                    />
                                    <div className=" flex flex-col items-center border-t-2 py-5">
                                        {Technologies.map((tech) => {
                                            if (tech.type === "css") {
                                                const isActive =
                                                    activeFilters.includes(
                                                        tech.name
                                                    )
                                                return (
                                                    <div
                                                        className="align-center flex cursor-pointer rounded-lg hover:bg-white dark:hover:bg-gray-600"
                                                        key={tech.id}
                                                        onClick={() =>
                                                            toggleFilter(
                                                                tech.name
                                                            )
                                                        }
                                                        onMouseEnter={() => {
                                                            const count =
                                                                countMatchingProjects(
                                                                    tech.name
                                                                )
                                                            setHoveredFilter({
                                                                filter: tech.name,
                                                                count,
                                                            })
                                                        }}
                                                        onMouseLeave={() =>
                                                            setHoveredFilter({
                                                                filter: "",
                                                                count: 0,
                                                            })
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
                                    <FaDatabase
                                        className=" w-22 h-22 my-auto flex pb-1.5 text-center align-middle text-4xl capitalize tracking-widest"
                                        data-tooltip-id="projectMobileDatabases"
                                        data-tooltip-content="Filter Projects by Database..."
                                        data-tooltip-delay-show={300}
                                    />
                                    <Tooltip
                                        id="projectMobileDatabases"
                                        place="right"
                                        className="z-[1000] bg-gray-200 text-xl font-semibold text-slate-700 dark:bg-black dark:text-white"
                                    />
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
                                                            toggleFilter(
                                                                tech.name
                                                            )
                                                        }
                                                        onMouseEnter={() => {
                                                            const count =
                                                                countMatchingProjects(
                                                                    tech.name
                                                                )
                                                            setHoveredFilter({
                                                                filter: tech.name,
                                                                count,
                                                            })
                                                        }}
                                                        onMouseLeave={() =>
                                                            setHoveredFilter({
                                                                filter: "",
                                                                count: 0,
                                                            })
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
                                    <BsFillCalendarMonthFill
                                        className=" w-22 h-22 my-auto flex pb-1.5 text-center align-middle text-4xl capitalize tracking-widest"
                                        data-tooltip-id="projectMobileYear"
                                        data-tooltip-content="Filter Projects by Year..."
                                        data-tooltip-delay-show={300}
                                    />
                                    <Tooltip
                                        id="projectMobileYear"
                                        place="right"
                                        className="z-[1000] bg-gray-200 text-xl font-semibold text-slate-700 dark:bg-black dark:text-white"
                                    />
                                    <div className="flex h-full flex-col gap-2 border-t-2 py-5">
                                        {getYearArray().map((year) => {
                                            const isActive =
                                                activeFilters.includes(
                                                    year.toString()
                                                )
                                            return (
                                                <div
                                                    key={year}
                                                    className="align-center flex h-full cursor-pointer flex-col rounded-lg hover:border-white"
                                                    onClick={() =>
                                                        toggleFilter(
                                                            year.toString()
                                                        )
                                                    }
                                                    onMouseEnter={() => {
                                                        const count =
                                                            countMatchingProjects(
                                                                tech.name
                                                            )
                                                        setHoveredFilter({
                                                            filter: tech.name,
                                                            count,
                                                        })
                                                    }}
                                                    onMouseLeave={() =>
                                                        setHoveredFilter({
                                                            filter: "",
                                                            count: 0,
                                                        })
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
                </div>
                {/* Main Content */}
                <div className=" w-full rounded-lg bg-white dark:bg-gray-800 md:p-4">
                    {/* large filter box */}
                    <div className="relative my-4 hidden h-fit w-full rounded-2xl border-2 border-gray-200 bg-opacity-10 bg-gradient-to-b from-white to-white p-2 dark:bg-black md:block">
                        <div className="flex gap-4">
                            {" "}
                            <h2 className=" m-auto ml-5 flex text-center align-middle text-4xl capitalize tracking-widest">
                                FILTER
                            </h2>
                            <vr className="border-gray/10 mx-1 mr-auto w-0.5 max-w-[2px] flex-1 border" />
                            {/* Search Bar */}
                            <div className="hidden w-full flex-col md:flex">
                                <div className="relative flex w-full flex-row items-center justify-center">
                                    <input
                                        type="text"
                                        className="focus:shadow-outline h-10 w-full rounded-lg border-2 border-gray-200 px-5 pr-10 text-base placeholder-gray-500 outline-none transition-all duration-300 ease-in-out  focus:border-transparent focus:placeholder-opacity-0 focus:outline-none focus:ring-2 focus:ring-sky-400"
                                        placeholder="Search..."
                                        value={searchTerm}
                                        onChange={(e) =>
                                            searchProjects(e.target.value)
                                        }
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-0 top-0 mt-2 mr-4"
                                    >
                                        <svg
                                            className="h-6 w-6 fill-current text-gray-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 52 52"
                                        >
                                            <path d="M51.3 47.3l-14-14c1.8-2.1 2.9-4.9 2.9-7.9C46.2 11.4 37 .8 23.1.8S.8 11.4.8 25.3s9.6 24.5 23.5 24.5c3 0 5.8-.8 8.3-2.2l14 14c.6.6 1.5.6 2.1 0l2.1-2.1c.6-.6.6-1.5 0-2.1zM3.9 25.3c0-12.1 9.9-22 22-22s22 9.9 22 22-9.9 22-22 22-22-9.9-22-22z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            {/* Select All / Deselect All Button */}
                            <div
                                className="txt-xs my-auto mx-auto cursor-pointer text-gray-500 dark:text-gray-400"
                                onClick={() => {
                                    if (areAllFiltersActive()) {
                                        setActiveFilters(["2023"])
                                        updateCurrentPage(1)
                                    } else {
                                        const allTechnologyFilters =
                                            Technologies.map(
                                                (tech) => tech.name
                                            )
                                        const allYearFilters =
                                            getYearArray().map((year) =>
                                                year.toString()
                                            )

                                        setActiveFilters([
                                            ...allTechnologyFilters,
                                            ...allYearFilters,
                                        ])
                                        updateCurrentPage(1)
                                    }
                                }}
                            >
                                <p className="h-fit w-fit cursor-pointer  whitespace-nowrap rounded-lg bg-sky-300 p-1 px-3  text-base text-white hover:border-2 hover:bg-sky-300 hover:text-white/80">
                                    {areAllFiltersActive()
                                        ? "Select none"
                                        : "Select all"}
                                </p>
                            </div>
                        </div>
                        <div className="mt-2 flex h-full items-center justify-around">
                            {/* left middle*/}
                            <div className="group flex h-full flex-col items-center justify-center rounded-lg p-1.5 hover:bg-gray-50">
                                <h3 className="mb-1 text-2xl  tracking-wide text-gray-700  opacity-50 transition-all duration-300 ease-in-out group-hover:opacity-100">
                                    Frameworks
                                </h3>
                                <div className="flex max-h-16 lg:gap-2">
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
                                                    onMouseEnter={() => {
                                                        const count =
                                                            countMatchingProjects(
                                                                tech.name
                                                            )
                                                        setHoveredFilter({
                                                            filter: tech.name,
                                                            count,
                                                        })
                                                    }}
                                                    onMouseLeave={() =>
                                                        setHoveredFilter({
                                                            filter: "",
                                                            count: 0,
                                                        })
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
                                                        data-tooltip-id={`projectMobile${tech}`}
                                                        data-tooltip-content={`
                                                            ${hoveredFilter.filter}:
                                                            ${hoveredFilter.count}
                                                        projects`}
                                                        data-tooltip-delay-show={
                                                            50
                                                        }
                                                    ></img>
                                                    <Tooltip
                                                        id={`projectMobile${tech}`}
                                                        place="bottom"
                                                        className="z-[1000] bg-gray-200 text-xl font-semibold text-slate-700 dark:bg-black dark:text-white"
                                                    />
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                            {/*middle */}
                            <div className="group flex h-full flex-col items-center justify-center p-1.5">
                                <h3 className="mb-1 text-2xl tracking-wide text-gray-700 opacity-50 transition-all duration-300 ease-in-out group-hover:opacity-100">
                                    CSS
                                </h3>
                                <div className="flex lg:gap-2">
                                    {Technologies.map((tech) => {
                                        if (tech.type === "css") {
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
                                                    onMouseEnter={() => {
                                                        const count =
                                                            countMatchingProjects(
                                                                tech.name
                                                            )
                                                        setHoveredFilter({
                                                            filter: tech.name,
                                                            count,
                                                        })
                                                    }}
                                                    onMouseLeave={() =>
                                                        setHoveredFilter({
                                                            filter: "",
                                                            count: 0,
                                                        })
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
                                                        data-tooltip-id={`projectMobile${tech}`}
                                                        data-tooltip-content={`
                                                            ${hoveredFilter.filter}:
                                                            ${hoveredFilter.count}
                                                        projects`}
                                                        data-tooltip-delay-show={
                                                            50
                                                        }
                                                    ></img>
                                                    <Tooltip
                                                        id={`projectMobile${tech}`}
                                                        place="bottom"
                                                        className="z-[1000] bg-gray-200 text-xl font-semibold text-slate-700 dark:bg-black dark:text-white"
                                                    />
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                            {/* right middle */}
                            <div className="group flex h-full flex-col items-center justify-center p-1.5">
                                <h3 className=" mb-1 text-2xl tracking-wide text-gray-700 opacity-50 transition-all duration-300 ease-in-out group-hover:opacity-100">
                                    Databases
                                </h3>
                                <div className="flex lg:gap-2">
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
                                                    onMouseEnter={() => {
                                                        const count =
                                                            countMatchingProjects(
                                                                tech.name
                                                            )
                                                        setHoveredFilter({
                                                            filter: tech.name,
                                                            count,
                                                        })
                                                    }}
                                                    onMouseLeave={() =>
                                                        setHoveredFilter({
                                                            filter: "",
                                                            count: 0,
                                                        })
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
                                                        data-tooltip-id={`projectMobile${tech}`}
                                                        data-tooltip-content={`
                                                            ${hoveredFilter.filter}:
                                                            ${hoveredFilter.count}
                                                        projects`}
                                                        data-tooltip-delay-show={
                                                            50
                                                        }
                                                    ></img>
                                                    <Tooltip
                                                        id={`projectMobile${tech}`}
                                                        place="bottom"
                                                        className="z-[1000] bg-gray-200 text-xl font-semibold text-slate-700 dark:bg-black dark:text-white"
                                                    />
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                            {/* right*/}
                            <div className="group flex h-full flex-col items-center justify-center p-1.5 ">
                                <h3 className=" mb-1 text-2xl tracking-wide text-gray-700 opacity-50 transition-all duration-300 ease-in-out group-hover:opacity-100">
                                    Year
                                </h3>
                                <div className="flex h-full flex-col flex-wrap gap-[2px] lg:flex-row">
                                    {getYearArray().map((year) => {
                                        const isActive = activeFilters.includes(
                                            year.toString()
                                        )
                                        return (
                                            <div
                                                key={year}
                                                className="align-center flex h-full cursor-pointer flex-col rounded-lg hover:border-white"
                                                onClick={() =>
                                                    toggleFilter(
                                                        year.toString()
                                                    )
                                                }
                                                onMouseEnter={() => {
                                                    const count =
                                                        countMatchingProjects(
                                                            year.toString()
                                                        )
                                                    setHoveredFilter({
                                                        filter: year.toString(),
                                                        count,
                                                    })
                                                }}
                                                onMouseLeave={() =>
                                                    setHoveredFilter({
                                                        filter: "",
                                                        count: 0,
                                                    })
                                                }
                                            >
                                                <h3
                                                    className={`mx-[.15rem] mt-auto rounded-md bg-sky-400 px-1 text-sm text-white hover:bg-sky-300 ${
                                                        isActive
                                                            ? ""
                                                            : "bg-gray-300 text-gray-500"
                                                    }`}
                                                    data-tooltip-id={`projectMobile${year}`}
                                                    data-tooltip-content={`
                                                            ${hoveredFilter.count}
                                                        projects`}
                                                    data-tooltip-delay-show={50}
                                                >
                                                    {year}
                                                </h3>
                                                <Tooltip
                                                    id={`projectMobile${year}`}
                                                    place="bottom"
                                                    className="z-[1000] bg-gray-200 text-xl font-semibold text-slate-700 dark:bg-black dark:text-white"
                                                />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Project Cards */}
                    <div className=" mt-10 w-full rounded-b-2xl bg-white transition-all duration-300 ease-in-out dark:bg-black">
                        {projectsToDisplay.length > 0 ? (
                            projectsToDisplay.map((project) => {
                                const id = project.id
                                return (
                                    <ProjectCard key={id} project={project} />
                                )
                            })
                        ) : (
                            <div className=" flex h-full flex-col items-center justify-center align-middle">
                                <h2 className=" flex text-center text-2xl">
                                    No projects match the specified criteria
                                </h2>
                                <h3 className=" text-center">
                                    Try adding more filters.
                                </h3>
                                {/* display help text when the help info button icon is clicked */}
                                {/* hilp info icon */}
                                <div className=" mx-2 mt-2 flex cursor-pointer flex-col  items-end justify-center rounded  border bg-gray-100 p-5  transition-all duration-500 ease-in-out">
                                    <div
                                        className="flex"
                                        onClick={() =>
                                            setShowHelpInfo(!showHelpInfo)
                                        }
                                    >
                                        <h2 className="my-auto mr-3 flex text-xl">
                                            {showHelpInfo
                                                ? ""
                                                : "Click for help"}{" "}
                                        </h2>

                                        <IoIosHelpCircle
                                            className={`${
                                                showHelpInfo
                                                    ? "hidden"
                                                    : "text-gray-500"
                                            } my-auto h-12 w-12 text-2xl `}
                                        />
                                        {showHelpInfo && (
                                            <IoCloseCircleOutline className="my-auto h-12 w-12 text-2xl text-gray-500" />
                                        )}
                                    </div>
                                    <div
                                        className={`${
                                            showHelpInfo ? "" : "hidden"
                                        } mt-2 flex flex-col rounded bg-gray-500 p-8 text-white transition-opacity duration-500  ease-in-out`}
                                    >
                                        <p className="text-center md:hidden">
                                            {!showMobileFilters && (
                                                <p>
                                                    Click on the filter button
                                                    to the left (Looks like a
                                                    black thumb tac)
                                                </p>
                                            )}
                                            {showMobileFilters && (
                                                <>
                                                    <p className="mb-3">
                                                        Click on the{" "}
                                                        <strong>
                                                            "Select All"
                                                        </strong>{" "}
                                                        button to view all
                                                        projects
                                                    </p>
                                                    <div className="flex">
                                                        <hr className="mx-2 my-auto h-0.5 flex-1 border border-white/20" />
                                                        <span className="text-xl text-white/70">
                                                            OR
                                                        </span>{" "}
                                                        <hr className="mx-2 my-auto h-0.5 flex-1 border border-white/20" />
                                                    </div>
                                                    <p className="mt-3">
                                                        Click on{" "}
                                                        <span className="font-bold">
                                                            Individual Icons
                                                        </span>{" "}
                                                        to the left to see
                                                        projects that match the
                                                        specified criteria.{" "}
                                                        <span className="bold underline">
                                                            <br />
                                                            Be sure that atleast
                                                            one year is
                                                            selected.
                                                        </span>
                                                    </p>
                                                </>
                                            )}
                                        </p>
                                        <p className="hidden w-auto text-center md:flex">
                                            <>
                                                <p className="mb-3">
                                                    Click on the{" "}
                                                    <strong>
                                                        "Select All"
                                                    </strong>{" "}
                                                    button to view all projects
                                                </p>
                                                <div className="mx-4 flex flex-col">
                                                    <vr className="mx-auto w-0.5 flex-1 border border-white/20" />
                                                    <span className="my-1 text-xl text-white/70">
                                                        OR
                                                    </span>{" "}
                                                    <vr className="mx-auto w-0.5 flex-1 border border-white/20" />
                                                </div>
                                                <p className="w-50 mt-3">
                                                    Click on{" "}
                                                    <span className="font-bold">
                                                        Individual Icons
                                                    </span>{" "}
                                                    above to see projects that
                                                    match the specified
                                                    criteria.{" "}
                                                </p>
                                            </>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Pagination */}
                    {projectsToDisplay.length !== 0 && (
                        <nav className="mx-3 flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
                            <div
                                className={`${
                                    currentPage === 1 || totalPages === 0
                                        ? "cursor-not-allowed text-gray-200 "
                                        : "text-gray-600 hover:border-gray-300 hover:text-black active:text-sky-400"
                                } mt-4 flex w-0 flex-1 cursor-pointer`}
                            >
                                <a
                                    onClick={() =>
                                        updateCurrentPage(currentPage - 1)
                                    }
                                    className="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium"
                                >
                                    <ArrowLongLeftIcon
                                        className="mr-3 h-5 w-5"
                                        aria-hidden="true"
                                    />
                                    Previous
                                </a>
                            </div>
                            <div className="mx-auto -mt-4 ml-4 flex w-fit flex-1 justify-center whitespace-nowrap text-center md:ml-0">
                                {/* display the current page */}
                                <h3 className="text-center text-sm font-medium text-gray-700">
                                    Page {currentPage} of{" "}
                                    {totalPages === 0 ? 1 : totalPages}
                                </h3>
                            </div>
                            <div
                                className={`${
                                    totalPages === currentPage ||
                                    totalPages === 0
                                        ? "cursor-not-allowed text-gray-200 "
                                        : "text-gray-600 hover:border-gray-300 hover:text-black active:text-sky-400"
                                } mt-4 flex w-0 flex-1 cursor-pointer justify-end`}
                            >
                                <a
                                    onClick={() =>
                                        updateCurrentPage(currentPage + 1)
                                    }
                                    className="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium "
                                >
                                    Next
                                    <ArrowLongRightIcon
                                        className="ml-3 h-5 w-5"
                                        aria-hidden="true"
                                    />
                                </a>
                            </div>
                        </nav>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projects
