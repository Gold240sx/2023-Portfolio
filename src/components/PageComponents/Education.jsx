import { Fragment, useState } from "react"
import { Tab } from "@headlessui/react"
import { useTheme } from "../../hooks/useThemeContext"
import * as te from "tw-elements"
import IrondalePhoto from "../../assets/Images/Irondale.jpg"
import PerpichPhoto from "../../assets/Images/Perpich.jpeg"
import ArtCenterPhoto from "../../assets/Images/ArtCenter.jpeg"
import CCSPhoto from "../../assets/Images/CCS.jpg"
import Next from "../../assets/Images/coursePreviews/next.jpg"
import Supabase from "../../assets/Images/coursePreviews/Supabase.jpg"
import Tailwind from "../../assets/Images/coursePreviews/Tailwind.jpg"
import Email from "../../assets/Images/coursePreviews/email.jpg"
import D3 from "../../assets/Images/coursePreviews/d3.jpg"
import React from "../../assets/Images/coursePreviews/react-firebase.jpg"
import VanillaJS from "../../assets/Images/coursePreviews/vanillaJS.jpg"
import OpenAi from "../../assets/Images/coursePreviews/openAi.jpg"
import ReactNative from "../../assets/Images/coursePreviews/reactNative.jpg"
import APIDev from "../../assets/Images/coursePreviews/apiDev.jpg"
import Electron from "../../assets/Images/coursePreviews/electron.jpg"
import Postgres from "../../assets/Images/coursePreviews/postgres.jpg"
import Stripe from "../../assets/Images/coursePreviews/stripe.jpg"
import Udemy from "../../assets/Images/coursePreviews/udemy.png"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

// Optimized  images
import CollegeDarkGray from "../../assets/Icons/education-icons/college-dark-gray.png"
import CollegeLightGray from "../../assets/Icons/education-icons/college-light-gray.png"
import CollegeSelected from "../../assets/Icons/education-icons/college-selected.png"
import HighSchoolDarkGray from "../../assets/Icons/education-icons/hs-dark-gray.png"
import HighSchoolLightGray from "../../assets/Icons/education-icons/hs-light-gray.png"
import HighSchoolSelected from "../../assets/Icons/education-icons/hs-selected.png"
import ContEdDarkGray from "../../assets/Icons/education-icons/contEd-dark-gray.png"
import ContEdLightGray from "../../assets/Icons/education-icons/contEd-light-gray.png"
import ContEdSelected from "../../assets/Icons/education-icons/contEd-selected.png"
import QueDarkGray from "../../assets/Icons/education-icons/que-dark-gray.png"
import QueLightGray from "../../assets/Icons/education-icons/que-light-gray.png"
import QueSelected from "../../assets/Icons/education-icons/que-selected.png"
import CollegeNeon from "../../assets/Icons/education-icons/college-neon.png"
import HighSchoolNeon from "../../assets/Icons/education-icons/highSchool-neon.png"
import ContinuedNeon from "../../assets/Icons/education-icons/continued.png"
import EducationNeon from "../../assets/Icons/education-icons/education.png"
import QueNeon from "../../assets/Icons/education-icons/que.png"

const tabs = [
    {
        name: "High School",
        features: [
            {
                name: "Irondale High School",
                years: "2004-2006",
                location: "New Brighton, MN",
                description: "General Education - Freshman and Softmore years",
                imageSrc: IrondalePhoto,
                degree: "",
                imageAlt: "Irondale High School",
            },
            {
                name: "Perpich Center for the Arts and Education",
                years: "2006-2008",
                location: "Golden Valley, MN",
                description: `Visual Arts Major - Junior and Senior years.`,
                imageSrc: PerpichPhoto,
                degree: "High School Diploma 2008",
                imageAlt: "Irondale High School",
            },
        ],
    },
    {
        name: "College",
        features: [
            {
                name: "College For Creative Studies",
                years: "2004",
                location: "Detroit, MI",
                description: "Transportation Design Summer Program",
                imageSrc: CCSPhoto,
                degree: "Transportation Design Certificate and Credit",
                imageAlt: "College For Creative Studies",
            },
            {
                name: "Art Center College of Design",
                years: "2014",
                location: "Pasadena, CA",
                description: `Transportation Design Major`,
                imageSrc: ArtCenterPhoto,
                imageAlt: "Art Center College of Design",
            },
        ],
    },
    // Continued Education
    {
        name: "Continued Education / Certificates",
        features: [
            {
                instructor: "ZTM Academy",
                name: "Complete Next.js Developer in 2023: Zero to Mastery",
                certLink: "In Progress...",
                courseLink:
                    "https://www.udemy.com/course/complete-nextjs-developer-zero-to-mastery/",
                description:
                    "Next JS MasterClass - I'm learning fullstack app developement, Serverside rendering Techniques, and Api Developement with Next JS.",
                imageSrc: Next,
                imageAlt:
                    "ZTM Academy - Complete Next.js Developer in 2023: Zero to Mastery Preview",
                qrCode: "",
                tags: [
                    "next",
                    "nextjs",
                    "serverside",
                    "server",
                    "vercel",
                    "SSR",
                    "SSG",
                    "ISR",
                    "API",
                ],
                platform: "Udemy",
                platformLogo: Udemy,
            },
            {
                instructor: " Dr. Muhammad Nauman, Codestars",
                name: "SupaBase From Scratch: Serverless Database Backend with JS",
                certLink: "https://lnkd.in/ginHiAYr",
                courseLink:
                    "https://www.udemy.com/course/supabase-from-scratch-serverless-database-backend-with-javascript/",
                description:
                    "I learned how to work with SQL Datatables, and relational datasets with Supabase.",
                imageSrc: Supabase,
                imageAlt:
                    "Supabase Pro by CodeStars - Learn how to build a fullstack app with Supabase and JavaScript Preview",
                qrCode: "",
                tags: [
                    "udemy",
                    "fullstack",
                    "SQL",
                    "jamstack",
                    "supabase",
                    "serverless",
                    "backend",
                    "database",
                ],
                platform: "Udemy",
                platformLogo: Udemy,
            },
            {
                instructor: "Tom Phillips, WebDevEducation",
                name: "Tailwind CSS - Zero to Hero, Tailwind V3 2023",
                certLink: "https://lnkd.in/d3qzRAYe",
                courseLink:
                    "https://www.udemy.com/course/tailwind-css-zero-to-hero/",
                description:
                    "I learned how to fully utilize Tailwind CSS in modern, dynamic websites and web apps.",
                imageSrc: Tailwind,
                imageAlt: "Zero to Hero, Tailwind V3 2023 Preview",
                qrCode: "",
                tags: [
                    "udemy",
                    "front-end",
                    "CSS",
                    "tailwind",
                    "webDesign",
                    "ui",
                    "UI/UX",
                    "uiDesign",
                    "ux",
                    "uxDesign",
                    "design",
                ],
                platform: "Udemy",
                platformLogo: Udemy,
            },
            {
                instructor: "Drew Ryan",
                name: "HTML Email Mastery - Build Responsive HTML Email Templates",
                certLink: "https://lnkd.in/g3h8s4Ep",
                courseLink: "https://www.udemy.com/course/html-email/",
                description: `
                    - I learned how to utilize media queries to build user responsive email templates, including accessibility options and accessibility testing.
                    - I learned how to include Text, Images, Gifs, Tables, Email Links, Call Links, and fonts across all email clients. 
                    - I also learned testing across all modern and legacy email clients and devices, analyzing emails to score them, and find error with specific, browsers, devices, and clients (Desktop, Mobile, Tablet, IOS, Android, all browsers (modern and legacy), Kindle, and desktop apps)
                    - Lastly, I learned how to utilize dark/light mode user preferences within email.
                `,
                imageSrc: Email,
                imageAlt: "Zero to Hero, Tailwind V3 2023 Preview",
                qrCode: "",
                tags: [
                    "email",
                    "emailDev",
                    "emaildevelopement",
                    "emailDesign",
                    "email Marketing",
                    "mail",
                ],
                platform: "Udemy",
                platformLogo: Udemy,
            },
            {
                instructor: "Shaun Pelling (The Net Ninja)",
                name: "Build Data Visualizations with D3.js and Firebase",
                certLink: "https://lnkd.in/gaW4WYNG",
                courseLink:
                    "https://www.udemy.com/course/build-data-uis-with-d3-firebase/",
                description: `- I learned how to build user Interactive Charts (bar, circle, pie, tree-hierarchy, and data-plot) with realtime- communication with the database.`,
                imageSrc: D3,
                imageAlt: "Zero to Hero, Tailwind V3 2023 Preview",
                qrCode: "",
                tags: [
                    "data",
                    "Data Visualization",
                    "Charts",
                    "Analytics",
                    "analytic",
                    "dashboard",
                    "d3",
                    "d3js",
                    "firebase",
                ],
                platform: "Udemy",
                platformLogo: Udemy,
            },
            {
                instructor: "Shaun Pelling (The Net Ninja)",
                name: "Build Web Apps with React & Firebase",
                certLink: "https://lnkd.in/g3fmVNRF",
                courseLink:
                    "https://www.udemy.com/course/build-web-apps-with-react-firebase/",
                description: `- I learned how to build full-stack web applications utilizing React.`,
                imageSrc: React,
                imageAlt:
                    "The Net Ninja - Build Web Apps with React & Firebase Preview",
                qrCode: "",
                tags: [
                    "react",
                    "reactjs",
                    "firebase",
                    "frontend",
                    "front end",
                    "Front end developer",
                    "front end development",
                ],
                platform: "Udemy",
                platformLogo: Udemy,
            },
            {
                instructor: "Shaun Pelling (The Net Ninja)",
                name: "Build Web Apps with React & Firebase",
                certLink: "https://lnkd.in/gdPeeaEE",
                courseLink:
                    "https://www.udemy.com/course/modern-javascript-from-novice-to-ninja/",
                description: `Modern CS6 Vanilla Javascript Masterclass`,
                imageSrc: VanillaJS,
                imageAlt:
                    "The Net Ninja - Modern CS6 Vanilla Javascript Masterclass Preview",
                qrCode: "",
                tags: ["vanilla", "javascript", "js", "front end", "cs6"],
                platform: "Udemy",
                platformLogo: Udemy,
            },
        ],
    },
    // Future Learning
    {
        name: "My Learning Que",
        features: [
            {
                name: "Next JS & Open AI / GPT: Next-generation Next JS & AI apps",
                description:
                    "Integrate OpenAI into your Next Generation Web Application feat. a SAAS project. Setup Stripe for charging customers. Store content with MongoDB.",
                imageSrc: OpenAi,
                imageAlt: "Open Ai + Next JS Preview.",
                platformLogo: Udemy,
            },
            {
                name: "Stripe Masterclass with React.js and Node.js",
                description:
                    "Integrate  payments into your React.js and Node.js apps with Stripe.",
                imageSrc: Stripe,
                imageAlt: "Stripe Masterclass Preview.",
                platformLogo: Udemy,
            },
            {
                name: "Master Electron: Desktop Apps with HTML, JavaScript & CSS",
                description:
                    "Create Windows and MacOS Desktop Applications using web-technologies like HTML, CSS, and JavaScript.",
                imageSrc: Electron,
                imageAlt: "Electron Masterclass Preview.",
                platformLogo: Udemy,
            },
            {
                name: "The Complete SQL Bootcamp: Go from Zero to Hero",
                description:
                    "SQL  database fundamentals and advanced concepts. Build a database from scratch and learn how to query, manipulate, and analyze data.",
                imageSrc: Postgres,
                imageAlt: "Postgres SQL Masterclass Preview.",
                platformLogo: Udemy,
            },
            {
                name: "Learn APIs development with Prisma, Nodejs, and Postgres",
                description:
                    "Master RESTful APIs development with Prisma, Nodejs, Jest, Express, and Postgres. REST",
                imageSrc: APIDev,
                imageAlt: "API Masterclass Preview.",
                platformLogo: Udemy,
            },
            {
                name: "Complete React Native in 2023: Zero to Mastery (with Hooks)",
                description:
                    "Master React Native for iOS and Android Mobile App Development using JavaScript. Build a modern e-commerce mobile app!",
                imageSrc: ReactNative,
                imageAlt: "ReactNatice Masterclass Preview.",
                platformLogo: Udemy,
            },
        ],
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
}

const Education = () => {
    // Accordian
    const [activeIndex, setActiveIndex] = useState(null)
    const handleAccordionClick = (accordianIndex) => {
        if (accordianIndex === activeIndex) {
            setActiveIndex(null)
        } else {
            setActiveIndex(accordianIndex)
        }
    }
    // Tabs
    const defaultTabIndex = tabs.findIndex(
        (tab) => tab.name === "Continued Education / Certificates"
    )
    const [selectedTab, setSelectedTab] = useState(
        "Continued Education / Certificates"
    )
    const { mode } = useTheme()

    return (
        <div className="mb-10 w-auto rounded-3xl bg-white dark:bg-white/5">
            <section
                aria-labelledby="features-heading"
                className="mx-auto pb-4 pt-16  md:pt-32 lg:px-8"
            >
                <div className="mx-auto  px-4 lg:px-0">
                    <div className="text-center">
                        <h3 className="relative  z-50 text-2xl uppercase tracking-[20px] text-gray-500 dark:text-white">
                            Education
                        </h3>
                        <p className="mt-4 text-gray-500">
                            Always Learning, Never Quiting, Always Growing
                        </p>
                    </div>

                    <Tab.Group
                        as="div"
                        className="mt-4"
                        defaultIndex={defaultTabIndex}
                    >
                        {/* <div className="-mx-4 hidden flex-col overflow-x-auto sm:mx-0 md:flex-row lg:flex">
                            <div className="flex-col border-b border-gray-200 px-4 xs:mx-auto sm:min-w-fit sm:max-w-[60%] sm:px-0 md:mr-auto md:ml-0 md:flex-row">
                                <Tab.List className=" -mb-px mr-auto flex w-full flex-col items-center gap-3 md:flex-row md:items-start md:gap-2">
                                    {tabs.map((tab) => (
                                        <Tab
                                            key={tab.name}
                                            onClick={() =>
                                                setSelectedTab(tab.name)
                                            }
                                            className={({ selected }) =>
                                                classNames(
                                                    selected
                                                        ? "bg-sky-500 text-white md:border-b-2 md:border-sky-500  md:border-l-transparent md:border-t-transparent md:border-r-transparent  md:text-sky-600 hover:md:border-l-transparent hover:md:border-t-transparent hover:md:border-r-transparent "
                                                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 md:border-gray-300 md:border-l-transparent md:border-t-transparent md:border-r-transparent md:bg-white hover:md:border-l-transparent hover:md:border-t-transparent hover:md:border-r-transparent",
                                                    "text-overflow-ellipsis w-full overflow-hidden overflow-ellipsis whitespace-nowrap rounded-full border-2 border-gray-300 border-transparent px-3 py-2 text-sm font-medium dark:bg-transparent md:w-fit md:rounded-none md:border-b-2  md:border-t-transparent md:border-l-transparent md:border-r-transparent  md:text-base"
                                                )
                                            }
                                        >
                                            {tab.name}
                                        </Tab>
                                    ))}
                                </Tab.List>
                            </div>
                        </div> */}
                        {/* Mobile Tabs */}
                        <div className="relative mt-16 h-32 w-full border-0 py-2 px-4 outline-none ">
                            <div
                                className={`absolute mx-auto mt-20 inline-block h-12 w-[95%] -skew-x-12 border-0 bg-gray-200  outline-none dark:bg-black/50`}
                            >
                                {/* gold line decoration */}
                                <div className="absolute right-1  ml-auto mr-2 flex w-fit justify-between gap-2">
                                    <div className=" ml-auto h-8 w-1 -translate-y-1 bg-[#ffd666]  "></div>
                                    <div className=" ml-auto h-8 w-1 -translate-y-1 bg-[#ffd666]  "></div>
                                    <div className=" ml-auto h-8 w-1 -translate-y-1 bg-[#ffd666]  "></div>
                                </div>
                                {/* Tab Title */}
                                {/* <p className="absolute -top-36 -ml-8 aspect-1 h-fit max-w-full md:-ml-4">
                                    {selectedTab ===
                                        "Continued Education / Certificates" && (
                                        <div className=" flex w-auto flex-col md:flex-row">
                                            <img
                                                src={ContinuedNeon}
                                                className="h-14 w-auto scale-110 md:h-16"
                                            />
                                            <img
                                                src={EducationNeon}
                                                className="-ml-2 h-14 w-auto scale-90 md:ml-0 md:h-16"
                                            />
                                        </div>
                                    )}

                                    {selectedTab === "High School" && (
                                        <img
                                            src={HighSchoolNeon}
                                            className="h-16 w-auto"
                                        />
                                    )}

                                    {selectedTab === "College" && (
                                        <img
                                            src={CollegeNeon}
                                            className="h-16 w-auto"
                                        />
                                    )}

                                    {selectedTab === "My Learning Que" && (
                                        <img
                                            src={QueNeon}
                                            className="h-16 w-auto"
                                        />
                                    )}
                                </p> */}
                                {/* Tabs in the form of icons */}
                                <Tab.List className="  sm:pr-15 flex -translate-y-5 justify-between border-0 outline-none hover:outline-none focus:border-0 focus:outline-none md:pr-20">
                                    {tabs.map((tab) => (
                                        <Tab
                                            key={tab.name}
                                            onClick={() =>
                                                setSelectedTab(tab.name)
                                            }
                                            className={({ selected }) =>
                                                classNames(
                                                    selected
                                                        ? " scale:125 translate-y-6 md:translate-y-6 md:scale-150"
                                                        : "-mx-2 translate-y-6 sm:ml-1 md:translate-y-3",
                                                    "h-auto border-0 outline-none transition-all duration-300 ease-in-out"
                                                )
                                            }
                                        >
                                            {/* {tab.name} */}
                                            {/* Each icon */}
                                            {/* <div className=" flex-row items-center justify-center">
                                                {/* LIghtMode 
                                                {mode !== "dark" && (
                                                    <>
                                                        {tab.name ===
                                                            "High School" && (
                                                            <img
                                                                src={
                                                                    HighSchoolLightGray
                                                                }
                                                                alt="High School"
                                                                className={`${({
                                                                    selected,
                                                                }) =>
                                                                    classNames(
                                                                        selected
                                                                            ? "h-[190px] w-[190px] bg-red-500"
                                                                            : ""
                                                                    )} my-auto h-40 w-[160px] -translate-y-10 skew-x-12  `}
                                                            />
                                                        )}
                                                        {tab.name ===
                                                            "Continued Education / Certificates" && (
                                                            <img
                                                                src={
                                                                    ContEdLightGray
                                                                }
                                                                alt="Continued Education"
                                                                className=" my-auto h-40 w-[160px] -translate-y-10 skew-x-12  "
                                                            />
                                                        )}
                                                        {tab.name ===
                                                            "College" && (
                                                            <img
                                                                src={
                                                                    CollegeLightGray
                                                                }
                                                                alt="College"
                                                                className=" my-auto h-40 w-[160px] -translate-y-10 skew-x-12  "
                                                            />
                                                        )}
                                                        {tab.name ===
                                                            "My Learning Que" && (
                                                            <img
                                                                src={
                                                                    QueLightGray
                                                                }
                                                                alt="High School"
                                                                className=" my-auto h-40 w-[160px] -translate-y-10 skew-x-12  "
                                                            />
                                                        )}
                                                    </>
                                                )}
                                                {/* DarkMode 
                                                {mode === "dark" && (
                                                    <>
                                                        {tab.name ===
                                                            "High School" && (
                                                            <img
                                                                src={
                                                                    HighSchoolDarkGray
                                                                }
                                                                alt="High School"
                                                                className="my-auto h-40 w-[160px] -translate-y-10 skew-x-12  "
                                                            />
                                                        )}
                                                        {tab.name ===
                                                            "Continued Education / Certificates" && (
                                                            <img
                                                                src={
                                                                    ContEdDarkGray
                                                                }
                                                                alt="Continued Education"
                                                                className=" my-auto h-40 w-[160px] -translate-y-10 skew-x-12  "
                                                            />
                                                        )}
                                                        {tab.name ===
                                                            "College" && (
                                                            <img
                                                                src={
                                                                    CollegeDarkGray
                                                                }
                                                                alt="College"
                                                                className=" my-auto h-40 w-[160px] -translate-y-10 skew-x-12  "
                                                            />
                                                        )}
                                                        {tab.name ===
                                                            "My Learning Que" && (
                                                            <img
                                                                src={
                                                                    QueDarkGray
                                                                }
                                                                alt="High School"
                                                                className=" my-auto h-40 w-[160px] -translate-y-10 skew-x-12  "
                                                            />
                                                        )}
                                                    </>
                                                )}
                                            </div> */}
                                            {selectedTab === tab.name && (
                                                <>
                                                    {tab.name ===
                                                        "High School" && (
                                                        <img
                                                            src={
                                                                HighSchoolSelected
                                                            }
                                                            alt="High School"
                                                            className="my-auto h-[120px] w-[120px] -translate-y-10 skew-x-12  sm:h-[130px]  sm:w-[140px] md:h-40 md:w-[160px]"
                                                        />
                                                    )}
                                                    {tab.name ===
                                                        "Continued Education / Certificates" && (
                                                        <img
                                                            src={ContEdSelected}
                                                            alt="Continued Education"
                                                            className="my-auto h-[120px] w-[120px] -translate-y-10 skew-x-12 sm:h-[130px] sm:w-[140px] md:h-40 md:w-[160px]"
                                                        />
                                                    )}
                                                    {tab.name === "College" && (
                                                        <img
                                                            src={
                                                                CollegeSelected
                                                            }
                                                            alt="College"
                                                            className="my-auto h-[120px] w-[120px] -translate-y-10 skew-x-12 sm:h-[130px] sm:w-[140px] md:h-40 md:w-[160px]"
                                                        />
                                                    )}
                                                    {tab.name ===
                                                        "My Learning Que" && (
                                                        <img
                                                            src={QueSelected}
                                                            alt="My Learning Que"
                                                            className="my-auto h-[120px] w-[120px] -translate-y-10 skew-x-12 sm:h-[130px] sm:w-[140px] md:h-40 md:w-[160px]"
                                                        />
                                                    )}
                                                </>
                                            )}
                                            {selectedTab !== tab.name && (
                                                <>
                                                    {/* LIghtMode */}
                                                    {mode !== "dark" && (
                                                        <>
                                                            {tab.name ===
                                                                "High School" && (
                                                                <img
                                                                    src={
                                                                        HighSchoolLightGray
                                                                    }
                                                                    alt="High School"
                                                                    className="my-auto h-24 w-[90px] -translate-y-10 skew-x-12 sm:w-[120px]   md:h-40 md:w-[160px]"
                                                                />
                                                            )}
                                                            {tab.name ===
                                                                "Continued Education / Certificates" && (
                                                                <img
                                                                    src={
                                                                        ContEdLightGray
                                                                    }
                                                                    alt="Continued Education"
                                                                    className=" my-auto h-24 w-[90px] -translate-y-10 skew-x-12 sm:w-[120px]   md:h-40 md:w-[160px]"
                                                                />
                                                            )}
                                                            {tab.name ===
                                                                "College" && (
                                                                <img
                                                                    src={
                                                                        CollegeLightGray
                                                                    }
                                                                    alt="College"
                                                                    className=" my-auto h-24 w-[90px] -translate-y-10 skew-x-12 sm:w-[120px]   md:h-40 md:w-[160px]"
                                                                />
                                                            )}
                                                            {tab.name ===
                                                                "My Learning Que" && (
                                                                <img
                                                                    src={
                                                                        QueLightGray
                                                                    }
                                                                    alt="My Learning Que"
                                                                    className=" my-auto h-24 w-[90px] -translate-y-10 skew-x-12  sm:w-[120px] md:h-40 md:w-[160px]"
                                                                />
                                                            )}
                                                        </>
                                                    )}
                                                    {/* DarkMode */}
                                                    {mode === "dark" && (
                                                        <>
                                                            {tab.name ===
                                                                "High School" && (
                                                                <img
                                                                    src={
                                                                        HighSchoolDarkGray
                                                                    }
                                                                    alt="High School"
                                                                    className="my-auto h-24 w-[90px] -translate-y-10 skew-x-12 sm:w-[120px]   md:h-40 md:w-[160px]"
                                                                />
                                                            )}
                                                            {tab.name ===
                                                                "Continued Education / Certificates" && (
                                                                <img
                                                                    src={
                                                                        ContEdDarkGray
                                                                    }
                                                                    alt="Continued Education"
                                                                    className=" my-auto h-24 w-[90px] -translate-y-10 skew-x-12  sm:w-[120px] md:h-40 md:w-[160px]"
                                                                />
                                                            )}
                                                            {tab.name ===
                                                                "College" && (
                                                                <img
                                                                    src={
                                                                        CollegeDarkGray
                                                                    }
                                                                    alt="College"
                                                                    className=" my-auto h-24 w-[90px] -translate-y-10 skew-x-12 sm:w-[120px]   md:h-40 md:w-[160px]"
                                                                />
                                                            )}
                                                            {tab.name ===
                                                                "My Learning Que" && (
                                                                <img
                                                                    src={
                                                                        QueDarkGray
                                                                    }
                                                                    alt="High School"
                                                                    className=" my-auto h-24 w-[90px] -translate-y-10 skew-x-12  sm:w-[120px] md:h-40 md:w-[160px]"
                                                                />
                                                            )}
                                                        </>
                                                    )}
                                                </>
                                            )}
                                        </Tab>
                                    ))}
                                </Tab.List>
                            </div>
                        </div>
                        {/* End Mobile Tabs */}

                        <Tab.Panels as={Fragment}>
                            {tabs.map((tab, tabIndex) => (
                                <Tab.Panel
                                    key={tab.name}
                                    className=" mt-10 md:mt-28 lg:mt-10 lg:pt-16"
                                >
                                    <div
                                        className={` ${
                                            tab.name ===
                                            "Continued Education / Certificates"
                                                ? "my-12 w-full rounded-xl text-white "
                                                : ""
                                        }`}
                                    >
                                        {tab.features.map(
                                            (feature, featureIndex) => (
                                                <>
                                                    {/* High School and College Layout */}
                                                    {selectedTab !==
                                                        "Continued Education / Certificates" &&
                                                        selectedTab !==
                                                            "My Learning Que" && (
                                                            <div
                                                                key={
                                                                    feature.name
                                                                }
                                                                className="flex flex-col-reverse items-center justify-between px-4 py-8 sm:px-0 md:flex-row"
                                                            >
                                                                {/* Info */}
                                                                <div className="md:w-1/2 md:pl-8 lg:w-2/3">
                                                                    <h3 className="mb-2 text-xl font-semibold text-gray-700 dark:text-white">
                                                                        {
                                                                            feature.name
                                                                        }
                                                                    </h3>
                                                                    <h4 className="mb-4 font-medium text-gray-600 dark:text-gray-400">
                                                                        {
                                                                            feature.instructor
                                                                        }
                                                                        {
                                                                            feature.platform
                                                                        }
                                                                        {feature.years && (
                                                                            <div>
                                                                                <h4 className="text-base font-medium text-gray-600 dark:text-gray-400">
                                                                                    {
                                                                                        feature.years
                                                                                    }{" "}
                                                                                    |{" "}
                                                                                    {
                                                                                        feature.location
                                                                                    }
                                                                                </h4>
                                                                                {feature.degree && (
                                                                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                                                                        {
                                                                                            feature.degree
                                                                                        }
                                                                                    </p>
                                                                                )}
                                                                                <p className="mt-2 text-sm text-gray-500">
                                                                                    {
                                                                                        feature.description
                                                                                    }
                                                                                </p>
                                                                            </div>
                                                                        )}
                                                                    </h4>
                                                                    {/* <p className="mb-4 leading-relaxed text-gray-600">
                                                                        {
                                                                            feature.description
                                                                        }
                                                                    </p> */}
                                                                </div>
                                                                {/* Image */}
                                                                <div className="mb-8 md:mb-0 md:w-3/5 lg:w-4/5">
                                                                    <div className="h-56 overflow-hidden rounded-lg">
                                                                        <img
                                                                            src={
                                                                                feature.imageSrc
                                                                            }
                                                                            alt={
                                                                                feature.imageAlt
                                                                            }
                                                                            className="h-full w-full object-cover object-center"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    {/* Accordian */}
                                                    <div className="overflow-hidden border-l-0  border-t-0 border-r-0 first:overflow-hidden first:rounded-t-2xl first:rounded-b-none last:overflow-hidden last:rounded-t-none last:rounded-b-2xl dark:border-b-2 dark:border-zinc-900 ">
                                                        {selectedTab ===
                                                            "Continued Education / Certificates" && (
                                                            <div
                                                                key={
                                                                    feature.name
                                                                }
                                                                className=" border border-gray-300  last:border-b-0 dark:border-2 dark:border-zinc-800"
                                                            >
                                                                {/* header */}
                                                                <div
                                                                    className={` ${
                                                                        featureIndex ===
                                                                        activeIndex
                                                                            ? " border-gray-300 bg-white/50  dark:bg-[#353535] "
                                                                            : " "
                                                                    } flex cursor-pointer items-center justify-between border-2  border-t  border-l-transparent border-r-transparent px-2 py-2 transition-all duration-300 ease-in-out last:border-b-transparent hover:bg-white/50 dark:border-zinc-800  dark:bg-zinc-800 dark:hover:bg-[#353535] dark:hover:text-sky-300`}
                                                                    onClick={() =>
                                                                        handleAccordionClick(
                                                                            featureIndex
                                                                        )
                                                                    }
                                                                >
                                                                    <div className="flex items-center space-x-3">
                                                                        <div className=" h-16 w-16 shrink-0 overflow-hidden rounded-full">
                                                                            <img
                                                                                src={
                                                                                    feature.imageSrc
                                                                                }
                                                                                alt={
                                                                                    feature.imageAlt
                                                                                }
                                                                                className="h-full w-full object-cover"
                                                                            />
                                                                        </div>
                                                                        <div className="flex flex-col">
                                                                            <div className="text-md overflow-ellipsis font-bold text-gray-800 line-clamp-2 dark:text-gray-200">
                                                                                {
                                                                                    feature.name
                                                                                }
                                                                            </div>
                                                                            <div className="mt-1  hidden text-sm font-medium text-gray-800 dark:text-gray-200 md:flex">
                                                                                {
                                                                                    feature.instructor
                                                                                }{" "}
                                                                                |
                                                                                <img
                                                                                    src={
                                                                                        feature.platformLogo
                                                                                    }
                                                                                    className="ml-2 h-5 w-auto dark:grayscale dark:invert"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mr-4 text-gray-500 dark:text-white">
                                                                        {activeIndex ===
                                                                        featureIndex ? (
                                                                            <FaChevronUp />
                                                                        ) : (
                                                                            <FaChevronDown />
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                {/* body */}
                                                                {activeIndex ===
                                                                    featureIndex && (
                                                                    <div className="p-2 transition-all duration-300 ease-in-out dark:bg-zinc-900 dark:shadow-inner dark:shadow-black/50 md:flex md:justify-center md:px-4 lg:p-4">
                                                                        {/* Small Screen Image Full */}
                                                                        <div className="relative w-full overflow-hidden rounded-sm md:hidden">
                                                                            <img
                                                                                src={
                                                                                    feature.platformLogo
                                                                                }
                                                                                className=" absolute right-2 mt-2 h-8 w-auto rounded bg-white/50 px-1 py-1 md:hidden"
                                                                            />
                                                                            <img
                                                                                src={
                                                                                    feature.imageSrc
                                                                                }
                                                                                alt={
                                                                                    feature.imageAlt
                                                                                }
                                                                                className="h-full w-full rounded object-cover"
                                                                            />
                                                                        </div>
                                                                        {/* Small Screen Info */}
                                                                        <div className="mb-4 flex items-start justify-between py-2">
                                                                            <div className="flex items-center md:hidden">
                                                                                <div>
                                                                                    <a
                                                                                        href={
                                                                                            feature.courseLink
                                                                                        }
                                                                                        className="cursor-pointer hover:underline"
                                                                                    >
                                                                                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                                                                            {
                                                                                                feature.name
                                                                                            }
                                                                                        </h3>
                                                                                    </a>
                                                                                    {/* Instructor */}
                                                                                    <div className="my-2 flex gap-2 text-sm text-gray-500">
                                                                                        <span className="font-semibold">
                                                                                            Instructor:
                                                                                        </span>{" "}
                                                                                        {
                                                                                            feature.instructor
                                                                                        }
                                                                                    </div>
                                                                                    {/* Certification */}
                                                                                    <div className="flex gap-2 text-sm text-gray-500">
                                                                                        <span className="font-semibold">
                                                                                            Certification:
                                                                                        </span>
                                                                                        {feature.certLink !==
                                                                                        "In Progress..." ? (
                                                                                            <a
                                                                                                href={
                                                                                                    feature.certLink
                                                                                                }
                                                                                                target="_blank"
                                                                                                rel="noopener noreferrer"
                                                                                                className="inline-flex items-center text-sky-500"
                                                                                            >
                                                                                                See
                                                                                                Certificate
                                                                                                <svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    className="ml-2 h-4 w-4"
                                                                                                    viewBox="0 0 20 20"
                                                                                                    fill="currentColor"
                                                                                                >
                                                                                                    <path
                                                                                                        fillRule="evenodd"
                                                                                                        d="M14.707 8.707a1 1 0 010 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L10 10.586V3a1 1 0 112 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                                                                                                        clipRule="evenodd"
                                                                                                    />
                                                                                                </svg>
                                                                                            </a>
                                                                                        ) : (
                                                                                            "Pending..."
                                                                                        )}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        {/* Description, Tags and Photo*/}
                                                                        <div className="grid grid-cols-1 md:grid-cols-2">
                                                                            {/* Description and Tags */}
                                                                            <div className="w-auto space-y-4">
                                                                                <div>
                                                                                    <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                                                                                        Description
                                                                                    </h3>
                                                                                    <p className="px-2 text-gray-600 dark:text-gray-400">
                                                                                        {
                                                                                            feature.description
                                                                                        }
                                                                                    </p>
                                                                                </div>
                                                                                {/* Certificate for md and up screens */}
                                                                                <div className="hidden gap-2 text-sm text-gray-500 dark:text-gray-300  md:flex">
                                                                                    <span className="font-semibold">
                                                                                        Certification:
                                                                                    </span>{" "}
                                                                                    {feature.certLink !==
                                                                                    "In Progress..." ? (
                                                                                        <a
                                                                                            href={
                                                                                                feature.certLink
                                                                                            }
                                                                                            target="_blank"
                                                                                            rel="noopener noreferrer"
                                                                                            className="inline-flex items-center font-bold text-sky-500 hover:underline dark:text-sky-400"
                                                                                        >
                                                                                            See
                                                                                            Certificate
                                                                                            <svg
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                className="ml-2 h-4 w-4"
                                                                                                viewBox="0 0 20 20"
                                                                                                fill="currentColor"
                                                                                            >
                                                                                                <path
                                                                                                    fillRule="evenodd"
                                                                                                    d="M14.707 8.707a1 1 0 010 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L10 10.586V3a1 1 0 112 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                                                                                                    clipRule="evenodd"
                                                                                                />
                                                                                            </svg>
                                                                                        </a>
                                                                                    ) : (
                                                                                        "Pending..."
                                                                                    )}
                                                                                </div>
                                                                                <div className="">
                                                                                    <h3 className="mb-2 text-lg font-bold text-black dark:text-white md:mb-4">
                                                                                        Tags
                                                                                    </h3>
                                                                                    {feature.tags && (
                                                                                        <div
                                                                                            className={`flex max-w-[90%] flex-wrap`}
                                                                                        >
                                                                                            {feature.tags.map(
                                                                                                (
                                                                                                    tag
                                                                                                ) => (
                                                                                                    <span
                                                                                                        key={
                                                                                                            tag
                                                                                                        }
                                                                                                        className="border-2/50 mb-2 mr-2 inline-flex h-fit items-center rounded-full border-2 bg-gray-100 px-1.5 py-1 text-xs leading-none text-gray-500  dark:border-zinc-800 dark:bg-zinc-700 dark:text-gray-300 md:border-gray-300 md:bg-transparent md:px-2 md:text-gray-400 md:dark:border-gray-700 md:dark:text-white lg:px-3 lg:text-sm xl:text-base"
                                                                                                    >
                                                                                                        #
                                                                                                        {
                                                                                                            tag
                                                                                                        }
                                                                                                    </span>
                                                                                                )
                                                                                            )}
                                                                                        </div>
                                                                                    )}
                                                                                </div>
                                                                            </div>
                                                                            <div className="justify-center">
                                                                                <div className="relative hidden h-72 w-auto md:flex lg:h-[22rem]">
                                                                                    <img
                                                                                        src={
                                                                                            feature.imageSrc
                                                                                        }
                                                                                        alt={
                                                                                            feature.imageAlt
                                                                                        }
                                                                                        className="inset-0 h-full w-full rounded-lg object-cover"
                                                                                    />
                                                                                    {/* <h3 className="text-lg font-medium text-gray-900">
                                                                                        QR
                                                                                        Code
                                                                                    </h3>
                                                                                    <img
                                                                                        src={
                                                                                            feature.qrCode
                                                                                        }
                                                                                        alt={`${feature.name} QR Code`}
                                                                                        className="mt-2 h-32 w-32 object-contain"
                                                                                    /> */}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                    {/* My Learning Que */}
                                                    {selectedTab ===
                                                        "My Learning Que" && (
                                                        <div
                                                            key={feature.name}
                                                            className="flex flex-col items-center justify-between px-4 py-8 sm:px-0 md:flex-row"
                                                        >
                                                            <div className="mb-8 md:mb-0 md:w-1/2 lg:w-1/3">
                                                                <div className="h-fit w-full rounded-lg sm:h-56 md:overflow-hidden">
                                                                    <img
                                                                        src={
                                                                            feature.imageSrc
                                                                        }
                                                                        alt={
                                                                            feature.imageAlt
                                                                        }
                                                                        className="h-auto max-h-full w-auto scale-110 bg-cover object-center sm:h-full md:object-cover"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="w-full px-4 md:pl-8 lg:w-2/3">
                                                                <h3 className="mb-2 text-xl font-semibold text-gray-700 dark:text-white">
                                                                    {
                                                                        feature.name
                                                                    }
                                                                </h3>
                                                                <h4 className="mb-4 font-medium text-gray-600 dark:text-gray-400">
                                                                    {
                                                                        feature.instructor
                                                                    }
                                                                    {
                                                                        feature.platform
                                                                    }
                                                                </h4>
                                                                <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
                                                                    {
                                                                        feature.description
                                                                    }
                                                                </p>
                                                                <div className="flex flex-wrap">
                                                                    {feature.tags &&
                                                                        feature.tags.map(
                                                                            (
                                                                                tag
                                                                            ) => (
                                                                                <span
                                                                                    key={
                                                                                        tag
                                                                                    }
                                                                                    className="mr-2 mb-2 inline-flex items-center rounded-full border-2 border-gray-400 py-1.5 px-3 text-sm leading-none text-gray-600"
                                                                                >
                                                                                    {
                                                                                        tag
                                                                                    }
                                                                                </span>
                                                                            )
                                                                        )}
                                                                </div>
                                                                <div className="mt-4 flex justify-end">
                                                                    <a
                                                                        href={
                                                                            feature.courseLink
                                                                        }
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="mr-auto inline-flex cursor-pointer items-center rounded-full
                                                                        bg-sky-400 py-1.5 px-4 text-sm text-white hover:bg-sky-500 focus:outline-none"
                                                                    >
                                                                        Course
                                                                        Link
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </>
                                            )
                                        )}
                                    </div>
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </section>
        </div>
    )
}

export default Education
