import { Fragment, useState } from "react"
import { Tab } from "@headlessui/react"
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
                name: "Perpich Center for Arts Education",
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
                    "front end",
                    "front end",
                    "Front end developer",
                    "front end development",
                ],
                platform: "Udemy",
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
            },
            {
                name: "Stripe Masterclass with React.js and Node.js",
                description:
                    "Integrate  payments into your React.js and Node.js apps with Stripe.",
                imageSrc: Stripe,
                imageAlt: "Stripe Masterclass Preview.",
            },
            {
                name: "Master Electron: Desktop Apps with HTML, JavaScript & CSS",
                description:
                    "Create Windows and MacOS Desktop Applications using web-technologies like HTML, CSS, and JavaScript.",
                imageSrc: Electron,
                imageAlt: "Electron Masterclass Preview.",
            },
            {
                name: "The Complete SQL Bootcamp: Go from Zero to Hero",
                description:
                    "SQL  database fundamentals and advanced concepts. Build a database from scratch and learn how to query, manipulate, and analyze data.",
                imageSrc: Postgres,
                imageAlt: "Postgres SQL Masterclass Preview.",
            },
            {
                name: "Learn APIs development with Prisma, Nodejs, and Postgres",
                description:
                    "Master RESTful APIs development with Prisma, Nodejs, Jest, Express, and Postgres. REST",
                imageSrc: APIDev,
                imageAlt: "API Masterclass Preview.",
            },
            {
                name: "Complete React Native in 2023: Zero to Mastery (with Hooks)",
                description:
                    "Master React Native for iOS and Android Mobile App Development using JavaScript. Build a modern e-commerce mobile app!",
                imageSrc: ReactNative,
                imageAlt: "ReactNatice Masterclass Preview.",
            },
        ],
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
}

const Education = () => {
    const defaultTabIndex = tabs.findIndex(
        (tab) => tab.name === "Continued Education / Certificates"
    )
    const [selectedTab, setSelectedTab] = useState(
        "Continued Education / Certificates"
    )

    return (
        <div className="mb-10 w-full rounded-3xl bg-white dark:bg-slate-800">
            <section
                aria-labelledby="features-heading"
                className="mx-auto py-32 sm:px-2 lg:px-8"
            >
                <div className="mx-auto px-4 lg:max-w-none lg:px-0">
                    <div className="max-w-3xl">
                        <h3 className="relative  z-50 text-2xl uppercase tracking-[20px] text-gray-500 dark:text-white">
                            Education
                        </h3>
                        <p className="mt-4 text-gray-500">
                            Always Learning, Always Growing
                        </p>
                    </div>

                    <Tab.Group
                        as="div"
                        className="mt-4"
                        defaultIndex={defaultTabIndex}
                    >
                        <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                            <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                                <Tab.List className="-mb-px flex space-x-10">
                                    {tabs.map((tab) => (
                                        <Tab
                                            key={tab.name}
                                            onClick={() =>
                                                setSelectedTab(tab.name)
                                            }
                                            className={({ selected }) =>
                                                classNames(
                                                    selected
                                                        ? "border-sky-500 text-sky-600"
                                                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                                                    "whitespace-nowrap border-b-2 border-t-transparent border-l-transparent border-r-transparent py-6 text-sm font-medium"
                                                )
                                            }
                                        >
                                            {tab.name}
                                        </Tab>
                                    ))}
                                </Tab.List>
                            </div>
                        </div>

                        <Tab.Panels as={Fragment}>
                            {tabs.map((tab) => (
                                <Tab.Panel
                                    key={tab.name}
                                    className="space-y-16 pt-10 lg:pt-16"
                                >
                                    <h1 className="text-red">{selectedTab}</h1>
                                    {tab.features.map((feature) => (
                                        <div
                                            key={feature.name}
                                            className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8"
                                        >
                                            <div className="mt-6 lg:col-span-5 lg:mt-0">
                                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                                    {feature.name}
                                                </h3>
                                                {feature.years && (
                                                    <h4 className="text-base font-medium text-gray-600">
                                                        {feature.years} |{" "}
                                                        {feature.location}
                                                    </h4>
                                                )}{" "}
                                                {feature.degree && (
                                                    <p className="text-sm font-medium text-gray-600">
                                                        {feature.degree}
                                                    </p>
                                                )}
                                                <p className="mt-2 text-sm text-gray-500">
                                                    {feature.description}
                                                </p>
                                            </div>
                                            <div className="lg:col-span-7">
                                                <div className="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 sm:aspect-w-5 sm:aspect-h-2">
                                                    <img
                                                        src={feature.imageSrc}
                                                        alt={feature.imageAlt}
                                                        className="object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {/* Accordian */}
                                    {selectedTab ===
                                        "Continued Education / Certificates" && (
                                        <div id="accordionExample5">
                                            <div class="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                                <h2
                                                    class="mb-0"
                                                    id="headingOne5"
                                                >
                                                    <button
                                                        class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-sky-600 [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-sky-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                                        type="button"
                                                        data-te-collapse-init
                                                        data-te-target="#collapseOne5"
                                                        aria-expanded="true"
                                                        aria-controls="collapseOne5"
                                                    >
                                                        Accordion Item #1
                                                        <span class="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
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
                                                    id="collapseOne5"
                                                    class="!visible"
                                                    data-te-collapse-item
                                                    data-te-collapse-show
                                                    aria-labelledby="headingOne5"
                                                >
                                                    <div class="py-4 px-5">
                                                        <strong>
                                                            This is the first
                                                            item's accordion
                                                            body.
                                                        </strong>{" "}
                                                        It is shown by default,
                                                        until the collapse
                                                        plugin adds the
                                                        appropriate classes that
                                                        we use to style each
                                                        element. These classes
                                                        control the overall
                                                        appearance, as well as
                                                        the showing and hiding
                                                        via CSS transitions. You
                                                        can modify any of this
                                                        with custom CSS or
                                                        overriding our default
                                                        variables. It's also
                                                        worth noting that just
                                                        about any HTML can go
                                                        within the{" "}
                                                        <code>
                                                            .accordion-body
                                                        </code>
                                                        , though the transition
                                                        does limit overflow.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                                <h2
                                                    class="mb-0"
                                                    id="headingTwo5"
                                                >
                                                    <button
                                                        class="dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                                        type="button"
                                                        data-te-collapse-init
                                                        data-te-collapse-collapsed
                                                        data-te-target="#collapseTwo5"
                                                        aria-expanded="false"
                                                        aria-controls="collapseTwo5"
                                                    >
                                                        Accordion Item #2
                                                        <span class="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
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
                                                    id="collapseTwo5"
                                                    class="!visible hidden"
                                                    data-te-collapse-item
                                                    aria-labelledby="headingTwo5"
                                                >
                                                    <div class="py-4 px-5">
                                                        <strong>
                                                            This is the second
                                                            item's accordion
                                                            body.
                                                        </strong>{" "}
                                                        It is hidden by default,
                                                        until the collapse
                                                        plugin adds the
                                                        appropriate classes that
                                                        we use to style each
                                                        element. These classes
                                                        control the overall
                                                        appearance, as well as
                                                        the showing and hiding
                                                        via CSS transitions. You
                                                        can modify any of this
                                                        with custom CSS or
                                                        overriding our default
                                                        variables. It's also
                                                        worth noting that just
                                                        about any HTML can go
                                                        within the{" "}
                                                        <code>
                                                            .accordion-body
                                                        </code>
                                                        , though the transition
                                                        does limit overflow.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                                <h2
                                                    class="mb-0"
                                                    id="headingThree5"
                                                >
                                                    <button
                                                        class="dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 group relative flex w-full items-center border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] [&[data-te-collapse-collapsed]]:rounded-b-[15px] [&[data-te-collapse-collapsed]]:transition-none"
                                                        type="button"
                                                        data-te-collapse-init
                                                        data-te-collapse-collapsed
                                                        data-te-target="#collapseThree5"
                                                        aria-expanded="false"
                                                        aria-controls="collapseThree5"
                                                    >
                                                        Accordion Item #3
                                                        <span class="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
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
                                                    id="collapseThree5"
                                                    class="!visible hidden"
                                                    data-te-collapse-item
                                                    aria-labelledby="headingThree5"
                                                >
                                                    <div class="py-4 px-5">
                                                        <strong>
                                                            This is the third
                                                            item's accordion
                                                            body.
                                                        </strong>{" "}
                                                        It is hidden by default,
                                                        until the collapse
                                                        plugin adds the
                                                        appropriate classes that
                                                        we use to style each
                                                        element. These classes
                                                        control the overall
                                                        appearance, as well as
                                                        the showing and hiding
                                                        via CSS transitions. You
                                                        can modify any of this
                                                        with custom CSS or
                                                        overriding our default
                                                        variables. It's also
                                                        worth noting that just
                                                        about any HTML can go
                                                        within the{" "}
                                                        <code>
                                                            .accordion-body
                                                        </code>
                                                        , though the transition
                                                        does limit overflow.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
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
