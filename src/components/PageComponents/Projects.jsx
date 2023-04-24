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
import Carousel from "../Carousel"
import ProjectCard from "./ProjectCard.jsx"

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
        name: "Solar Proposal Tool",
        image: "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg",
        tagline: "This website is a portfolio of my work.",
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
        galleryImages: [
            {
                id: 1,
                image: "https://i.ibb.co/CH8rLhy/Avatar-prop.png",
            },
            {
                id: 2,
                image: "https://i.ibb.co/DGVVsj4/circle-logo-color.png",
            },
            {
                id: 3,
                image: "https://i.ibb.co/M8M8Vkr/megaman.png",
            },
            {
                id: 4,
                image: "https://i.ibb.co/bQqMwvY/fireship.png",
            },
            {
                id: 5,
                image: "https://i.ibb.co/DGVVsj4/circle-logo-color.png",
            },
        ],
    },
    {
        id: 2,
        name: "My Super Awesome Portfolio that is so cool",
        image: "https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png",
        tagline: "This website is a portfolio of my work.",
        description:
            "This website is a portfolio of my work. It is built with Next.js and Tailwind CSS. It is hosted on Vercel.",
        month: "February",
        year: 2023,
        technologies: ["Next.js", "Tailwind"],
        repository: "#",
        link: "#",
        tags: ["Next.js", "Tailwind"],
        galleryImages: [
            {
                id: 1,
                image: "https://i.ibb.co/CH8rLhy/Avatar-prop.png",
            },
            {
                id: 2,
                image: "https://i.ibb.co/DGVVsj4/circle-logo-color.png",
            },
        ],
    },
    {
        id: 3,
        name: "Project 3",
        image: "https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png",
        tagline: "This website is a portfolio of my work.",
        description:
            "This website is a portfolio of my work. It is built with Next.js and Tailwind CSS. It is hosted on Vercel.",
        month: "February",
        year: 2023,
        technologies: ["Next.js", "Tailwind"],
        repository: "#",
        link: "#",
        tags: ["Next.js", "Tailwind"],
        galleryImages: [
            {
                id: 1,
                image: "https://i.ibb.co/CH8rLhy/Avatar-prop.png",
            },
            {
                id: 2,
                image: "https://i.ibb.co/DGVVsj4/circle-logo-color.png",
            },
            {
                id: 3,
                image: "https://i.ibb.co/M8M8Vkr/megaman.png",
            },
        ],
    },
    {
        id: 4,
        name: "Project 4",
        image: "https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png",
        tagline: "This website is a portfolio of my work.",
        description:
            "This website is a portfolio of my work. It is built with Next.js and Tailwind CSS. It is hosted on Vercel.",
        month: "February",
        year: 2023,
        technologies: ["Next.js", "Tailwind"],
        repository: "#",
        link: "#",
        tags: ["Next.js", "Tailwind"],
        galleryImages: [
            {
                id: 1,
                image: "https://i.ibb.co/CH8rLhy/Avatar-prop.png",
            },
        ],
    },
    {
        id: 5,
        name: "Project 5",
        image: "https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png",
        tagline: "This website is a portfolio of my work.",
        description:
            "This website is a portfolio of my work. It is built with Next.js and Tailwind CSS. It is hosted on Vercel.",
        month: "February",
        year: 2023,
        technologies: ["Next.js", "Tailwind"],
        repository: "#",
        link: "#",
        tags: ["Next.js", "Tailwind"],
        galleryImages: [
            {
                id: 1,
                image: "https://i.ibb.co/0hYQqZV/Screen-Shot-2021-09-01-at-11-01-51-AM.png",
            },
            {
                id: 2,
                image: "https://i.ibb.co/0hYQqZV/Screen-Shot-2021-09-01-at-11-01-51-AM.png",
            },
        ],
    },
]

const Projects = () => {
    // PROJECTS FUNCTIONS
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
        "2022",
    ])
    const [hoveredFilter, setHoveredFilter] = useState({
        filter: "",
        count: 0,
    })
    const [showMobileFilters, setShowMobileFilters] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [showHelpInfo, setShowHelpInfo] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [inputFocused, setInputFocused] = useState(false)
    const [searchMatchInfo, setSearchMatchInfo] = useState({})
    const [showCarousel, setShowCarousel] = useState(false)
    const [activeGalleryImages, setActiveGalleryImages] = useState([])
    const itemsPerPage = 4
    const updateCurrentPage = (newPage) => {
        // Ensure the new page number is within the valid range
        const maxPage = Math.ceil(filteredProjects.length / itemsPerPage)
        if (newPage >= 1 && newPage <= maxPage) {
            setCurrentPage(newPage)
        }
    }
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
    // Rename the searchMatches function to getSearchMatchInfo
    const getSearchMatchInfo = (project, searchTerm) => {
        if (searchTerm.length === 0) {
            return { isMatch: true, matchType: "", matchText: "" }
        }

        const nameMatch = project.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        const tagsMatch = project.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
        const descriptionMatch = project.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase())

        if (nameMatch) {
            return {
                isMatch: true,
                matchType: "Name",
                matchText: project.name,
            }
        } else if (tagsMatch) {
            const matchedTag = project.tags.find((tag) =>
                tag.toLowerCase().includes(searchTerm.toLowerCase())
            )
            return {
                isMatch: true,
                matchType: "Tag",
                matchText: matchedTag,
            }
        } else if (descriptionMatch) {
            return {
                isMatch: true,
                matchType: "Description",
                matchText: project.description,
            }
        } else {
            return { isMatch: false, matchType: "", matchText: "" }
        }
    }
    // Move setSearchMatchInfo logic outside of filteredProjects function
    useEffect(() => {
        const newSearchMatchInfo = {}

        ProjectItems.forEach((project) => {
            const searchMatch = getSearchMatchInfo(project, searchTerm)
            newSearchMatchInfo[project.name] = searchMatch
        })

        setSearchMatchInfo(newSearchMatchInfo)
    }, [ProjectItems, searchTerm, activeFilters])
    // Update the filteredProjects function
    const filteredProjects = ProjectItems.filter((project) => {
        const hasTechnology = project.technologies.some((tech) =>
            activeFilters.includes(tech)
        )
        const hasYear = activeFilters.includes(project.year.toString())

        return (
            hasTechnology && hasYear && searchMatchInfo[project.name]?.isMatch
        )
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
    const renderMatchedInfo = (searchMatchInfo, name, searchTerm) => {
        if (searchTerm == "" || searchTerm == null || searchTerm == undefined) {
            return ""
        }

        const matchInfo = searchMatchInfo[name] || {}

        if (!matchInfo.matchType || !matchInfo.matchText) {
            return null
        }

        const searchTermIndex = matchInfo.matchText
            .toLowerCase()
            .indexOf(searchTerm.toLowerCase())
        const beforeMatch = matchInfo.matchText.slice(0, searchTermIndex)
        const matchedText = matchInfo.matchText.slice(
            searchTermIndex,
            searchTermIndex + searchTerm.length
        )
        const afterMatch = matchInfo.matchText.slice(
            searchTermIndex + searchTerm.length
        )
    }
    //END PROJECTS  FUNCTIONS

    return (
        <div className="max-w-screen container relative flex w-screen max-w-[70rem] flex-col items-center  justify-evenly pb-12 text-center dark:bg-transparent md:px-6 md:text-left lg:px-10">
            {/* Title */}
            <div className="flex w-auto justify-center">
                <h3 className="z-50 translate-y-16  text-center text-2xl uppercase tracking-[20px] text-gray-500 dark:text-white">
                    Projects
                </h3>
            </div>

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

            {/* Mobile / main div */}
            <div className="max-w-screen relative mx-auto flex w-auto justify-between dark:bg-transparent md:max-w-[1200px] ">
                {/* mobile filter menu */}
                <div
                    className={`${
                        showMobileFilters
                            ? "w-[76px]"
                            : "  sticky top-1/3  mt-16 w-[0px] default:top-0"
                    } z-50 flex h-full flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden`}
                >
                    <div
                        className={`${
                            showMobileFilters ? "" : "  mt-16"
                        } relative my-4 h-fit w-full  rounded-t-2xl bg-opacity-10 dark:bg-transparent`}
                    >
                        <div
                            className={`${
                                //
                                showMobileFilters
                                    ? "mt-5 w-fit dark:bg-[#060B19]"
                                    : " -ml-5 w-[76px] shadow-2xl shadow-black hover:bg-gray-50 dark:bg-[#282a2a]"
                            } flex flex-col items-center justify-around gap-2 rounded-2xl border-2 border-gray-200 bg-white p-1.5 outline-none dark:border-gray-700  `}
                        >
                            {/* left */}
                            <a
                                href="#projects"
                                onClick={handleMobileFilterClose}
                            >
                                <HiFilter
                                    className={`${
                                        showMobileFilters ? "" : ""
                                    } w-22 h-22 z-50 my-auto flex cursor-pointer text-center align-middle text-4xl capitalize tracking-widest text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-white`}
                                    data-tooltip-id="projectMobileFilter"
                                    data-tooltip-content="Filter Projects (Click to minimize)."
                                    data-tooltip-delay-show={300}
                                />
                                <Tooltip
                                    id="projectMobileFilter"
                                    place="right"
                                    className="z-[1000] flex  h-fit bg-gray-200 text-base font-semibold text-slate-700 dark:bg-black dark:text-white md:text-xl"
                                />
                            </a>
                            {/* Select All / Deselect All Button */}
                            <div
                                className="txt-sm flex min-w-fit cursor-pointer justify-center rounded-md border-2 border-transparent bg-sky-400 text-center align-middle text-white  hover:bg-sky-500  hover:text-white dark:bg-sky-500 dark:hover:bg-sky-400"
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
                                <p className="m-auto flex h-fit w-5/6 cursor-pointer rounded p-[2px] text-xs  hover:text-white">
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
                                <div className="flex h-full flex-col items-center justify-center rounded-lg border-2 p-1.5 dark:border-gray-600 dark:bg-white/5 dark:hover:bg-white/10">
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
                                <div className="flex h-full flex-col items-center justify-center rounded-lg border-2 p-1.5 dark:border-gray-600 dark:bg-white/5 dark:hover:bg-white/10">
                                    <SiStylelint
                                        className=" w-22 h-22 my-auto flex pb-1.5 text-center align-middle text-4xl capitalize tracking-widest "
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
                                <div className="flex h-full flex-col items-center justify-center rounded-lg border-2 p-1.5 dark:border-gray-600 dark:bg-white/5 dark:hover:bg-white/10">
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
                                <div className="flex h-full flex-col items-center justify-center rounded-lg border-2 p-1.5 dark:border-gray-600 dark:bg-white/5 dark:hover:bg-white/10">
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
                <div
                    className={` ${
                        showMobileFilters
                            ? " md:w-auto lg:w-[92%] xl:w-full"
                            : "w-auto"
                    } rounded-lg bg-white dark:bg-transparent md:p-4`}
                >
                    {/* large filter box */}
                    <div className="relative mx-6 my-4 hidden h-fit w-auto rounded-2xl border-2 border-gray-200 bg-white bg-opacity-10  p-2 dark:border-none dark:bg-[#323737]/40 dark:text-white md:block">
                        <div className="flex gap-4">
                            {" "}
                            <h2 className=" m-auto ml-5 flex text-center align-middle text-4xl capitalize tracking-widest dark:text-gray-300">
                                FILTER
                            </h2>
                            <vr className="border-gray/10 mx-1 mr-auto w-0.5 max-w-[2px] flex-1 border dark:border-black/30" />
                            {/* Search Bar */}
                            <div className=" hidden w-full flex-col md:flex">
                                <div className="relative flex w-full flex-row items-center justify-center">
                                    <input
                                        type="text"
                                        className="focus:shadow-outline h-10 w-full rounded-lg border-2 border-gray-200 px-5 pr-10 text-base placeholder-gray-300 outline-none transition-all duration-300 ease-in-out focus:border-transparent focus:placeholder-opacity-0  focus:outline-none focus:ring-2 focus:ring-sky-400 dark:border-none dark:bg-[#57534E]/20 dark:focus:bg-[#57534E]/40 "
                                        placeholder="Search Projects..."
                                        value={searchTerm}
                                        onChange={(e) =>
                                            setSearchTerm(e.target.value)
                                        }
                                        onFocus={() => setInputFocused(true)}
                                        onBlur={() => setInputFocused(false)}
                                    />
                                    <div className="pointer-events-none absolute right-0 top-0 mt-2 mr-4">
                                        <MdOutlineSearch
                                            className={`h-6 w-6 text-gray-400 ${
                                                inputFocused ? "opacity-50" : ""
                                            }`}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Select All / Deselect All Button */}
                            <div
                                className="txt-xs my-auto mx-auto mr-2 cursor-pointer text-gray-500 dark:text-gray-400"
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
                                <p className="h-fit w-fit cursor-pointer  whitespace-nowrap rounded-lg bg-sky-300 p-1 px-3  text-base text-white hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-700">
                                    {areAllFiltersActive()
                                        ? "Select none"
                                        : "Select all"}
                                </p>
                            </div>
                        </div>
                        <div className="mt-2 flex h-full items-center justify-around">
                            {/* left middle*/}
                            <div className="group flex h-full flex-col items-center justify-center rounded-lg p-1.5 ">
                                <h3 className="mb-1 text-2xl  tracking-wide text-gray-700  opacity-50 transition-all duration-300 ease-in-out group-hover:opacity-100 dark:text-gray-300">
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
                                <h3 className="mb-1 text-2xl tracking-wide text-gray-700 opacity-50 transition-all duration-300 ease-in-out group-hover:opacity-100 dark:text-gray-300">
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
                                <h3 className=" mb-1 text-2xl tracking-wide text-gray-700 opacity-50 transition-all duration-300 ease-in-out group-hover:opacity-100 dark:text-gray-300">
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
                                <h3 className=" mb-1 text-2xl tracking-wide text-gray-700 opacity-50 transition-all duration-300 ease-in-out group-hover:opacity-100 dark:text-gray-300">
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
                    <div className=" mt-10 ml-auto flex w-auto flex-col rounded-2xl bg-white p-[2px] py-5 transition-all duration-300 ease-in-out dark:bg-[#262826]/30 sm:p-2 md:gap-6">
                        {projectsToDisplay.length > 0 ? (
                            projectsToDisplay.map((project) => {
                                const id = project.id
                                return (
                                    <>
                                        {/* filter project according to the search term if the search term length is greater than 0, where matchtype is the type (contains: name, title or description, and text is the surrounding text of the search containing the search query, and highlighting it in yellow) */}
                                        <React.Fragment
                                            key={`${id}-${searchTerm}`}
                                        >
                                            <ProjectCard
                                                key={id}
                                                project={project}
                                                searchTerm={searchTerm}
                                                renderMatchedInfo={() =>
                                                    renderMatchedInfo(
                                                        searchMatchInfo,
                                                        project.name,
                                                        searchTerm
                                                    )
                                                }
                                                setShowCarousel={
                                                    setShowCarousel
                                                }
                                                showCarousel={showCarousel}
                                                setActiveGalleryImages={
                                                    setActiveGalleryImages
                                                }
                                                activeGalleryImages={
                                                    activeGalleryImages
                                                }
                                            />
                                        </React.Fragment>
                                    </>
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
                                {/* help info icon */}
                                <div className=" mx-2 mt-2 flex cursor-pointer flex-col  items-end justify-center rounded  border bg-gray-100 p-5  transition-all duration-500 ease-in-out hover:text-gray-600 dark:border-none dark:bg-[#1E1E1D] dark:text-gray-400 dark:hover:text-gray-200">
                                    <div
                                        className="flex"
                                        onClick={() => {
                                            setShowHelpInfo(!showHelpInfo)
                                            setSearchTerm("")
                                        }}
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
                                            } my-auto h-12 w-12 text-2xl  `}
                                        />
                                        {showHelpInfo && (
                                            <IoCloseCircleOutline className="my-auto h-12 w-12 rounded-full text-2xl text-gray-500 hover:text-gray-700 dark:hover:bg-[#262826] dark:hover:text-gray-300" />
                                        )}
                                    </div>
                                    <div
                                        className={`${
                                            showHelpInfo ? "" : "hidden"
                                        } mt-2 flex flex-col rounded-lg bg-gray-500 p-8 text-white transition-opacity  duration-500 ease-in-out dark:border-2 dark:border-white/5 dark:bg-[#151515]`}
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
                        <nav className="mx-3 flex items-center justify-between border-t border-gray-200 px-4 dark:border-none sm:px-0">
                            <div
                                className={`${
                                    currentPage === 1 || totalPages === 0
                                        ? "cursor-not-allowed text-gray-200 dark:text-gray-700"
                                        : "text-gray-600 hover:border-gray-300 hover:text-black  dark:text-gray-400 dark:hover:text-white"
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
                                        ? "cursor-not-allowed text-gray-200 dark:text-gray-700"
                                        : "text-gray-600 hover:border-gray-300 hover:text-black  dark:text-gray-400 dark:hover:text-white"
                                } mt-4 flex w-0 flex-1 cursor-pointer justify-end`}
                            >
                                <a
                                    onClick={() => {
                                        updateCurrentPage(currentPage + 1)
                                    }}
                                    href="#projects"
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
            {/* Image Carousel (Gallery Viewer full screen) */}
            {showCarousel && (
                <div className="fixed top-0 bottom-0 z-[99999999999999999999999] h-screen w-screen overscroll-contain">
                    <Carousel
                        slides={activeGalleryImages}
                        autoslide={true}
                        interval={5000}
                        setShowCarousel={setShowCarousel}
                        showCarousel={showCarousel}
                    />
                </div>
            )}
            {/* End Projects */}
        </div>
    )
}

export default Projects
