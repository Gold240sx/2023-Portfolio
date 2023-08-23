import React from "react"
import { useState, useEffect, useRef } from "react"
import { HiFilter } from "react-icons/hi"
import { BsRulers, BsFillCalendarMonthFill } from "react-icons/bs"
import {
    ArrowLongLeftIcon,
    ArrowLongRightIcon,
} from "@heroicons/react/20/solid"
import { IoIosHelpCircle } from "react-icons/io"
import { InView } from "react-intersection-observer"
import { motion } from "framer-motion"
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
        name: "Javascript",
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
        invert: true,
    },
    {
        name: "SendGrid",
        id: 11,
        logo: "https://i.ibb.co/y4ZP2qG/sendgrid.png",
        type: "other",
    },
    {
        name: "Prisma",
        id: 12,
        logo: "https://i.ibb.co/xj61MMr/prisma-logo-3805665-B69-seeklogo-com-2.png",
        type: "other",
        invert: true,
    },
    {
        name: "Upstash",
        id: 13,
        logo: "https://i.ibb.co/PFcgZPb/upstash-icon-logo-6-EB6-AA96-EE-seeklogo-com.png",
        type: "database",
    },
]

const ProjectItems = [
    {
        id: 1,
        name: "2023 Portfolio Website",
        image: "https://i.ibb.co/JjN2VfS/SCR-20230519-duat.png",
        imageDescription:
            "Search function across all project descriptions, tags, and technologies.",
        tagline: "This website is a portfolio of my work.",
        uiDesign: "#",
        description:
            " It is built with React.js and Tailwind CSS. It is hosted on Firebase. It uses Sendgrid for contact-form email integration. For further info on me, my resume is available to download in the lower lefthand corner. ",
        month: "March",
        year: 2023,
        technologies: ["Javascript", "React", "Tailwind", "Firebase"],
        repository: "https://github.com/Gold240sx/2023-Portfolio",
        link: "#",
        tags: [
            "NoSQL",
            "Responsive",
            "Mobile-First",
            "Edge Functions",
            "Cloud Functions",
            "React-hook-form",
        ],
        galleryImages: [
            {
                id: 1,
                image: "https://i.ibb.co/M8LcDKj/email-recieved.gif",
                description: "Contact Me Form Email To The User",
            },
            {
                id: 2,
                image: "https://i.ibb.co/Tb0BTGT/SCR-20230519-dvod.png",
                description: "Mobile Projects section with menubar collapsed",
            },
            {
                id: 3,
                image: "https://i.ibb.co/HCYdMKq/SCR-20230519-dway.png",
                description: "Section Pagination with animated buttons",
            },
            {
                id: 4,
                image: "https://i.ibb.co/bgJLtYk/SCR-20230519-dwir.png",
                description: "Hand drawn (ipad) Hero Logo",
            },
        ],
    },
    {
        id: 2,
        name: "Google Streetview Image Bundler",
        image: "https://i.ibb.co/GMKXQNJ/SCR-20230623-lvmd.png",
        tagline: "API => JPG => Zip.",
        description: `This app parses and combines addresses from an an XLSX file, uses Google StreetView API to return an image of that address, 
            and bundle all the images into a zip file for data-processing. Images were also named according to their image size to sort out invalid 
            address photos. This app replaced an outdated PHP variation that one day quit working due to outdated / legacy dependencies.`,
        month: "December",
        year: 2022,
        uiDesign: "#",
        technologies: ["React", "Tailwind", "Firebase", "SendGrid'"],
        repository: "https://github.com/Gold240sx/GoogleStreetViewImageDLr",
        link: "https://dimaco-streets-demo.web.app",
        tags: [
            "file processing",
            "xlsx",
            "spreadsheet",
            "application",
            "dashboard",
            "authentication",
            "auth",
            "react",
            "API",
            "tailwind",
        ],
        galleryImages: [
            {
                id: 1,
                image: "https://i.ibb.co/s98m4RV/SCR-20230623-lvgw.png",
            },
            {
                id: 2,
                image: "https://i.ibb.co/M1FB23K/SCR-20230623-kybl.png",
            },
            {
                id: 3,
                image: "https://i.ibb.co/wC8TwM4/SCR-20230623-kjip.png",
            },
        ],
    },
    {
        id: 3,
        name: "Insurance Sales Funnel",
        image: "https://i.ibb.co/GnDMPbW/SCR-20230623-jxda.png",
        imageDescription:
            "Search function across all project descriptions, tags, and technologies.",
        uiDesign: "#",
        tagline: "Vanilla JS + CSS Sales Funnel to Email.",
        description: `User specified that he wanted a QR code to link to a webform whose form data would be sent to two seperate emails.  Originally the custom 
        HTML form and emails were to be sent via SalesChimp, but with two days left to spare, Mailchimp informed me only one email per form submission was 
        possible. I then configured this to run via Google's triggerEmail extension. The extension sent an email to both my client and his client sending the data 
        and confiming that the data was recieved. Data could then optionally be stored for analytics or for access to the data at a later date. For convieniece sake, 
        everything was built into a single HTML file since nearing project completion I found that the site was updated via FTP and I wanted updates to be as simple 
        as possible for my client. The form design was created by the design department and a conditional form interest check was put in place to limit the length 
        of the form to only the policies the user was interested in. (I did not take part in any other url belonging to this site)`,
        month: "November",
        year: 2022,
        technologies: ["Javascript", "Firebase", "SendGrid"],
        repository: "#",
        link: "http://www.zaneshepherdfinancial.com/getQuote/",
        tags: [
            "vanilla",
            "validation",
            "email",
            "javascript",
            "FTP",
            "responsive",
            "QRCode",
            "marketing",
            "emailDevelopment",
        ],
        galleryImages: [
            {
                id: 1,
                image: "https://i.ibb.co/McWXCdH/SCR-20230623-jxgp.png",
                description: "Hand drawn (ipad) Hero Logo",
            },
            {
                id: 2,
                image: "https://i.ibb.co/RzwZhjR/SCR-20230623-jxjf.png",
                description: "Hand drawn (ipad) Hero Logo",
            },
        ],
    },
    {
        id: 4,
        name: "T3 Stack Demo",
        image: "https://i.ibb.co/QbHRpGT/SCR-20230516-kpwz.png",
        uiDesign: "#",
        imageDescription:
            "Search function across all project descriptions, tags, and technologies.",
        tagline: "Production Ready Typesafe Twitter-like App.",
        description: `The purpose of this project is to build a production-ready application with the T3 Stack: 
            A Next.JS based framework that uses Typescript, TailwindCSS, TRPC and Prisma. In this 
            project, we enbaled Upstash (built on Redis) rate limiting to prevent DDOS attacks and 
            post spamming, We used Clerk for Authentication, and ensured back-to front typesafety 
            with Zod. Data management was each passed through a GraphQL API, and we used Prisma 
            and PrismaStudio to manage our Planetscale Database, built on MySQL. Logging handled via Axiom API Integration.`,
        month: "May",
        year: 2023,
        technologies: [
            "Typescript",
            "Tailwind",
            "T3",
            "Prisma",
            "PlanetScale",
            "Upstash",
        ],
        repository: "https://github.com/Gold240sx/theo-t3-demo",
        link: "https://theo-t3-demo-git-7-demo-completed-gold240sx.vercel.app",
        tags: [
            "Next.js",
            "Rate Limiting",
            "DDOS Prevention",
            "Production Ready",
            "Demo",
            "SSR",
            "SSG",
            "API Integration",
            "React",
            "SQL",
            "CRUD",
        ],
        galleryImages: [
            {
                id: 1,
                image: "https://i.ibb.co/GRLyb8m/SCR-20230516-kptv.png",
                description:
                    "Prisma Studio - Data Visualization of Planetscale Database",
            },
        ],
    },
    {
        id: 5,
        name: "Drag + Drop App",
        image: "https://i.ibb.co/rtbvR6g/SCR-20230628-dcox.png",
        imageDescription:
            "Validation from scratch using decorators and class-based components.",
        uiDesign: "#",
        tagline: "Typescript Node Drag and Drop Project Management App",
        description: `Project Management App built with vanilla Typescript and Node.js.  
        Drag and Drop functionality built with HTML5 Drag and Drop API.  
        The puropose of this project was to strengthen my understanding of types, class-based components and OOP. 
        This project features Form validation, and a build-from-scratch state management system similar in functionality 
        and use as React. This project followed a demo belonging to Maximilian Schwarzmullers Udemy course, 
        Understanding Typescript - 2021 Edition.`,
        month: "June",
        year: 2023,
        technologies: ["Node.Js", "Typescript"],
        repository: "https://github.com/Gold240sx/TS-Drag-And-Drop",
        link: "https://ts-drag-and-drop-pi.vercel.app",
        tags: [
            "node.js",
            "OOP",
            "class-based",
            "decorators",
            "state management",
            "typescript",
            "vanilla",
            "drag and drop",
        ],
        galleryImages: [
            {
                id: 1,
                image: "https://i.ibb.co/j5LNXHk/SCR-20230628-dclr.png",
                description:
                    "Prisma Studio - Data Visualization of Planetscale Database",
            },
            {
                id: 2,
                image: "https://i.ibb.co/6nsVGkh/SCR-20230628-dcxv.png",
                description:
                    "Prisma Studio - Data Visualization of Planetscale Database",
            },
        ],
    },
    {
        id: 5,
        name: "TS Google Maps App",
        image: "https://i.ibb.co/2qgmv5L/SCR-20230628-oqni.png",
        imageDescription: "Typescript Vite-React Google Maps Application ",
        uiDesign: "#",
        tagline: "Api Key -Env Variable Security - Google Maps API",
        description: `This project is a refactorization of Maximilian Schwarzmüller's Google Maps application demo from his "Understanding TypeScript" Udemy course. Originally a vanilla Ts app, I rewrote this app in vite-react and by expressing the API keys as env variables, I could then ensure that these env variables were not exposed in the browser..`,
        month: "June",
        year: 2023,
        technologies: ["Typescript", "React"],
        repository: "https://github.com/Gold240sx/Ts-vite-googleMaps",
        link: "https://ts-vite-google-maps.vercel.app",
        tags: ["api", "google maps", "env variables", "demo refactor", "Vite"],
        galleryImages: [],
    },
    {
        id: 7,
        name: "Project 7",
        image: "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg",
        tagline: "This is a placeholder",
        description: "Project coming soon!",
        uiDesign: "#",
        month: "February",
        year: 2023,
        technologies: ["Next.js", "Tailwind"],
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
        ],
    },
    {
        id: 8,
        name: "Project 8",
        image: "https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png",
        tagline: "This is a placeholder",
        description: "Project coming soon!",
        uiDesign: "#",
        month: "February",
        year: 2023,
        technologies: ["React", "Sass"],
        repository: "#",
        link: "#",
        tags: ["React", "Sass"],
        galleryImages: [
            {
                id: 1,
                image: "https://i.ibb.co/CH8rLhy/Avatar-prop.png",
            },
        ],
    },
]

const Projects = () => {
    // PROJECTS FUNCTIONS
    const [activeFilters, setActiveFilters] = useState([
        "Javascript",
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
        "Prisma",
        "Upstash",
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
    const [activeImageDescription, setActiveImageDescription] = useState([])
    const [showMobileFilterTooltip, setShowMobileFilterTooltip] =
        useState(false)
    const [showTechFilterTooltip, setShowTechFilterTooltip] = useState(false)
    const [projectFilterTooltipsSeen, setProjectFilterTooltipsSeen] =
        useState(false)
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
        console.log("countMatchingProjects", filter)
        console.log(
            ProjectItems.filter(
                (project) =>
                    project.technologies.includes(filter) ||
                    project.year.toString() === filter
            ).length
        )
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

    useEffect(() => {
        if (hoveredFilter.filter) {
            let tooltip
            if (isNaN(hoveredFilter.filter)) {
                // Handle technologies
                tooltip = document.querySelector(
                    `#projectMobile${hoveredFilter.filter}`
                )
            } else {
                // Handle years
                tooltip = document.querySelector(
                    `#projectMobileYear${hoveredFilter.filter}`
                )
            }
            if (tooltip) {
                tooltip.setAttribute(
                    "data-tooltip-content",
                    `${hoveredFilter.filter}: ${hoveredFilter.count} projects`
                )
            }
        }
    }, [hoveredFilter])

    return (
        <div
            className={` ${
                showMobileFilters ? "" : " "
            } max-w-screen container relative flex w-auto max-w-[100vw] flex-col items-center justify-evenly  pb-12 text-center  dark:bg-transparent md:text-left lg:max-w-[70rem]`}
        >
            {/* Title */}
            <div className="flex w-auto max-w-[100vw] justify-center">
                <h3 className="z-50 translate-y-16  text-center text-xl uppercase tracking-[20px] text-gray-500 dark:text-white sm:text-2xl">
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
            <div
                className={` ${
                    showMobileFilters ? "" : " "
                } relative mx-auto flex w-full max-w-[100vw] justify-around  dark:bg-transparent `}
            >
                {/* mobile filter menu */}
                <div
                    className={`${
                        showMobileFilters
                            ? "w-[76px] translate-x-12"
                            : "  sticky top-1/3  mt-16 w-[0px] translate-x-8  bg-white default:top-0"
                    }  z-50 flex h-full flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden `}
                >
                    <div
                        className={`${
                            showMobileFilters ? "" : "  mt-16"
                        } relative my-4 h-fit w-full  rounded-t-2xl bg-white bg-opacity-10 dark:bg-transparent`}
                    >
                        <div
                            className={`${
                                //
                                showMobileFilters
                                    ? "translate-x-0px-1.5 mt-5 w-fit py-2 dark:bg-[#060B19]"
                                    : " fixed top-1/4 -ml-[1rem] w-[60px] bg-white p-1.5  shadow-2xl shadow-black hover:bg-gray-50 dark:bg-[#282a2a]"
                            } z-[999] flex flex-col items-center justify-around gap-0.5 rounded-xl   outline-none dark:border-gray-700  `}
                        >
                            {/* left */}
                            <a
                                href="#projects"
                                onClick={handleMobileFilterClose}
                            >
                                <HiFilter
                                    className={`${
                                        showMobileFilters
                                            ? "h-14 w-14"
                                            : "h-12 w-12"
                                    } z-50 my-auto flex  cursor-pointer rounded-2xl border-2 p-2 text-center align-middle text-4xl capitalize tracking-widest text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-white`}
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
                            <InView
                                as="div"
                                onChange={(inView, entry) => {
                                    if (inView) {
                                        setShowMobileFilterTooltip(true)
                                    }
                                }}
                                threshold={0.1}
                            >
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={
                                        showMobileFilterTooltip
                                            ? { opacity: 1 }
                                            : {}
                                    }
                                    transition={{ duration: 0.75 }}
                                    className={` ${
                                        showMobileFilterTooltip
                                            ? " w-full "
                                            : "hidden"
                                    }`}
                                >
                                    {showMobileFilterTooltip &&
                                        !projectFilterTooltipsSeen && (
                                            <div className="absolute top-0 left-1 ml-16 mt-4 flex w-[500%] max-w-[60vw] flex-col items-center justify-center rounded-xl bg-gray-200 p-2  text-sm font-semibold text-slate-700 shadow-lg shadow-black/50 dark:bg-black dark:text-white md:hidden">
                                                <span>
                                                    <div className="mx-auto flex w-fit items-center gap-4">
                                                        <p className="text-lg">
                                                            {" "}
                                                            {`< Click:`}
                                                        </p>
                                                        <HiFilter className="h-6 w-6" />
                                                    </div>
                                                    to minimize the filter bar
                                                    and view the projects in
                                                    full screen.
                                                </span>
                                                <button
                                                    onClick={() => {
                                                        setShowMobileFilterTooltip(
                                                            false
                                                        )
                                                        setShowTechFilterTooltip(
                                                            true
                                                        )
                                                    }}
                                                    className=" my-2 flex cursor-pointer rounded bg-sky-600 py-2  px-4 text-white hover:text-gray-700 dark:text-gray-200 dark:hover:text-white"
                                                >
                                                    Sweet!
                                                </button>
                                            </div>
                                        )}
                                </motion.div>
                            </InView>

                            <InView
                                as="div"
                                onChange={(inView, entry) => {
                                    if (inView) {
                                        setShowTechFilterTooltip(false)
                                    }
                                }}
                                threshold={0.1}
                            >
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={
                                        showTechFilterTooltip
                                            ? { opacity: 1 }
                                            : {}
                                    }
                                    transition={{ duration: 0.5 }}
                                    className={` ${
                                        showTechFilterTooltip
                                            ? " w-full "
                                            : "hidden"
                                    }`}
                                >
                                    {showTechFilterTooltip &&
                                        !projectFilterTooltipsSeen && (
                                            <div className="absolute top-[150px] left-1 ml-16 mt-4 flex w-[500%] max-w-[60vw] flex-col items-center justify-center rounded-xl bg-gray-200 p-2  text-sm font-semibold text-slate-700 shadow-lg shadow-black/50 dark:bg-black dark:text-white md:hidden">
                                                <span>
                                                    <div className="mx-auto flex w-fit items-center gap-4">
                                                        <p className="mt-2 text-center align-middle text-lg">
                                                            {" "}
                                                            {`< Click Icons like:`}
                                                        </p>
                                                        <img
                                                            src="https://img.icons8.com/color/48/000000/javascript.png"
                                                            className="h-10 w-10"
                                                        />
                                                    </div>
                                                    to the left to add / remove
                                                    individual technologies and
                                                    years from the filtered
                                                    projects.
                                                </span>
                                                <button
                                                    onClick={() => {
                                                        setShowTechFilterTooltip(
                                                            false
                                                        )
                                                        setProjectFilterTooltipsSeen(
                                                            true
                                                        )
                                                    }}
                                                    className=" my-2 flex cursor-pointer rounded bg-sky-600 py-2  px-4 text-white hover:text-gray-700 dark:text-gray-200 dark:hover:text-white"
                                                >
                                                    OK! Got it.
                                                </button>
                                            </div>
                                        )}
                                </motion.div>
                            </InView>
                            {/* Select All / Deselect All Button */}
                            <div
                                className="txt-sm mb-1 flex min-w-fit cursor-pointer justify-center rounded-md border-2 border-transparent bg-sky-400 text-center align-middle text-white  hover:bg-sky-500  hover:text-white dark:bg-sky-500 dark:hover:bg-sky-400"
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
                                {/* Top*/}
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
                                {/* Upper-Center */}
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
                                {/* Lower-Center */}
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
                                {/* Bottom*/}
                                {/* <div className="flex h-full flex-col items-center justify-center rounded-lg border-2 p-1.5 dark:border-gray-600 dark:bg-white/5 dark:hover:bg-white/10">
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
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main Content */}
                <div
                    className={` ${
                        showMobileFilters ? "" : ""
                    } max-w-70 mx-10 ml-14 w-full max-w-[100vw]  flex-col rounded-lg   dark:bg-transparent md:mx-0 md:p-4`}
                >
                    {/* large filter box */}
                    <div className="relative mx-6 my-4 hidden h-fit w-auto rounded-2xl border-2 border-gray-200 bg-white/50 bg-opacity-10  p-2 dark:border-none dark:bg-[#323737]/40 dark:text-white md:mx-10 md:block">
                        <div className="flex gap-4">
                            {" "}
                            <h2 className=" m-auto ml-5 flex text-center align-middle text-4xl capitalize tracking-widest dark:text-gray-300">
                                FILTER
                            </h2>
                            {/* <vr className="border-gray/10 mx-1 mr-auto w-0.5 max-w-[2px] flex-1 border dark:border-black/30" /> */}
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
                        <p className="mt-4 ml-6">
                            Click on the icons below to filter in/out individual
                            projects by technology or year.
                        </p>
                        <div className=" flex h-full items-center justify-around">
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
                                                <>
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
                                                        data-tooltip-id={`projectMobile${tech.id}`}
                                                        data-tooltip-content={`
                                                            ${hoveredFilter.filter}:
                                                            ${hoveredFilter.count}
                                                        projects`}
                                                        data-tooltip-delay-show={
                                                            50
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
                                                    <Tooltip
                                                        id={`projectMobile${tech.id}`}
                                                        place="bottom"
                                                        className=" bg-gray-200 text-xl font-semibold text-slate-700 dark:bg-black dark:text-white"
                                                    />
                                                </>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                            <div className="group flex h-full flex-col items-center justify-center p-1.5">
                                <h3 className="mb-1 text-2xl tracking-wide text-gray-700 opacity-50 transition-all duration-300 ease-in-out group-hover:opacity-100 dark:text-gray-300">
                                    CSS
                                </h3>
                                <div className="flex md:gap-2">
                                    {Technologies.map((tech) => {
                                        if (tech.type === "css") {
                                            const isActive =
                                                activeFilters.includes(
                                                    tech.name
                                                )
                                            return (
                                                <>
                                                    <div
                                                        key={tech.id}
                                                        className="align-center flex cursor-pointer rounded-lg hover:bg-white dark:hover:bg-gray-600"
                                                        data-tooltip-id={`projectMobile${tech.id}`}
                                                        data-tooltip-content={`
                                                            ${hoveredFilter.filter}:
                                                            ${hoveredFilter.count}
                                                        projects`}
                                                        data-tooltip-delay-show={
                                                            50
                                                        }
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
                                                    <Tooltip
                                                        id={`projectMobile${tech.id}`}
                                                        place="bottom"
                                                        className="z-[1000] bg-gray-200 text-xl font-semibold text-slate-700 dark:bg-black dark:text-white"
                                                    />
                                                </>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                            <div className="group flex h-full flex-col items-center justify-center p-1.5">
                                <h3 className=" mb-1 text-2xl tracking-wide text-gray-700 opacity-50 transition-all duration-300 ease-in-out group-hover:opacity-100 dark:text-gray-300">
                                    Databases
                                </h3>
                                <div className="flex md:gap-2">
                                    {Technologies.map((tech) => {
                                        if (tech.type === "database") {
                                            const isActive =
                                                activeFilters.includes(
                                                    tech.name
                                                )
                                            return (
                                                <>
                                                    <div
                                                        key={tech.id}
                                                        className="align-center flex cursor-pointer rounded-lg hover:bg-white dark:hover:bg-gray-600"
                                                        data-tooltip-id={`projectMobile${tech.id}`}
                                                        data-tooltip-content={`
                                                            ${hoveredFilter.filter}:
                                                            ${hoveredFilter.count}
                                                        projects`}
                                                        data-tooltip-delay-show={
                                                            50
                                                        }
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
                                                    <Tooltip
                                                        id={`projectMobile${tech.id}`}
                                                        place="bottom"
                                                        className="z-[1000] bg-gray-200 text-xl font-semibold text-slate-700 dark:bg-black dark:text-white"
                                                    />
                                                </>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
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
                                                    className={`mx-[.15rem] mt-auto rounded-md  px-1 text-sm text-white ${
                                                        isActive
                                                            ? "bg-sky-400"
                                                            : "bg-gray-300 text-gray-500 hover:bg-sky-300 "
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
                    <div
                        id="projectCards"
                        className=" max-w-screen mt-10 ml-auto flex w-auto flex-col rounded-2xl bg-white/60 p-[2px] py-5 transition-all duration-300 ease-in-out dark:bg-[#262826]/30 sm:p-2 md:mx-10 md:gap-6"
                    >
                        {projectsToDisplay.length > 0 ? (
                            projectsToDisplay.map((project) => {
                                const id = project.id
                                const uiDesign = project.uiDesign
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
                                                uiDesign={uiDesign}
                                                // renderMatchedInfo={() =>
                                                //     renderMatchedInfo(
                                                //         searchMatchInfo,
                                                //         project.name,
                                                //         searchTerm
                                                //     )
                                                // }
                                                matchedInfo={
                                                    searchMatchInfo[
                                                        project.name
                                                    ]
                                                }
                                                setShowCarousel={
                                                    setShowCarousel
                                                }
                                                Technologies={Technologies}
                                                showCarousel={showCarousel}
                                                setActiveGalleryImages={
                                                    setActiveGalleryImages
                                                }
                                                ProjectItems={ProjectItems}
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
                                <div className="mx-2 mt-2 flex cursor-pointer flex-col  items-end justify-center rounded  border bg-gray-100 p-5  transition-all duration-500 ease-in-out hover:text-gray-600 dark:border-none dark:bg-[#1E1E1D] dark:text-gray-400 dark:hover:text-gray-200">
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
                                                        <hr className="mx-2 my-auto  h-0.5 flex-1 border border-white/20" />
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
                        <nav className="mx-3 flex items-center justify-between border-t border-gray-200 px-4 dark:border-none sm:mx-16 sm:px-0">
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
                        // pass the descriptions to the carousel
                        // slideDescriptions={[activeGalleryImages.descriptions]}
                    />
                </div>
            )}
            {/* End Projects */}
        </div>
    )
}

export default Projects
