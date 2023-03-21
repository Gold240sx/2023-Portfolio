import * as te from "tw-elements"
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
import { useState, useRef, useEffect } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import { IoIosCloseCircleOutline } from "react-icons/io"

const tabs = {
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
    ],
}

export const CertificateSection = () => {
    return (
        <section className="my-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base font-semibold uppercase tracking-wide text-sky-600">
                        Continued Education / Certificates
                    </h2>
                </div>
                <div className="mt-10">
                    {tabs.features.map((feature) => (
                        <div
                            key={feature.name}
                            className="flex flex-col items-center justify-between px-4 py-8 sm:px-0 md:flex-row"
                        >
                            <div className="mb-8 md:mb-0 md:w-1/2 lg:w-1/3">
                                <div className="h-56 overflow-hidden rounded-lg">
                                    <img
                                        src={feature.imageSrc}
                                        alt={feature.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                            </div>
                            <div className="md:w-1/2 md:pl-8 lg:w-2/3">
                                <h3 className="mb-2 text-xl font-semibold text-gray-700">
                                    {feature.name}
                                </h3>
                                <h4 className="mb-4 font-medium text-gray-600">
                                    {feature.instructor} | {feature.platform}
                                </h4>
                                <p className="mb-4 leading-relaxed text-gray-600">
                                    {feature.description}
                                </p>
                                <div className="flex flex-wrap">
                                    {feature.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="mr-2 mb-2 inline-flex items-center rounded-full border-2 border-gray-400 py-1.5 px-3 text-sm leading-none text-gray-600"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-4 flex justify-end">
                                    <a
                                        href={feature.certLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sky-500"
                                    >
                                        See Certificate
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
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const CertificateSection2 = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    const handleAccordionClick = (index) => {
        if (index === activeIndex) {
            setActiveIndex(null)
        } else {
            setActiveIndex(index)
        }
    }

    return (
        <div className="my-12 w-full rounded-xl border border-gray-300">
            <div className=" w-full">
                {tabs.features.map((feature, index) => (
                    <div
                        key={feature.name}
                        className="border-b border-gray-300 last:border-b-0"
                    >
                        {/* header */}
                        <div
                            className={` ${
                                index === activeIndex
                                    ? "border-b border-gray-300 bg-white/50 hover:bg-white/80 dark:bg-black"
                                    : ""
                            } flex cursor-pointer items-center justify-between  px-2 py-2 transition-all duration-300 ease-in-out  hover:bg-white/50 hover:dark:bg-slate-900`}
                            onClick={() => handleAccordionClick(index)}
                        >
                            <div className="flex items-center space-x-3">
                                <div className=" h-16 w-16 shrink-0 overflow-hidden rounded-full">
                                    <img
                                        src={feature.imageSrc}
                                        alt={feature.imageAlt}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-md overflow-ellipsis font-bold text-gray-800 line-clamp-2">
                                        {feature.name}
                                    </div>
                                    <div className="mt-1  hidden text-sm font-medium text-gray-800 md:flex">
                                        {feature.instructor} |
                                        <img
                                            src={feature.platformLogo}
                                            className="ml-2 h-5 w-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="text-gray-500">
                                {activeIndex === index ? (
                                    <FaChevronUp />
                                ) : (
                                    <FaChevronDown />
                                )}
                            </div>
                        </div>
                        {/* body */}
                        {activeIndex === index && (
                            <div className="p-2 transition-all duration-300 ease-in-out md:flex md:justify-center md:px-4 lg:p-4 ">
                                {/* Small Screen Image Full */}
                                <div className="relative w-full overflow-hidden rounded-sm md:hidden">
                                    <img
                                        src={feature.platformLogo}
                                        className=" absolute right-2 mt-2 h-8 w-auto rounded bg-white/50 px-1 py-1 md:hidden"
                                    />
                                    <img
                                        src={feature.imageSrc}
                                        alt={feature.imageAlt}
                                        className="h-full w-full rounded object-cover"
                                    />
                                </div>
                                {/* Small Screen Info */}
                                <div className="mb-4 flex items-start justify-between py-2">
                                    <div className="flex items-center md:hidden">
                                        <div>
                                            <a
                                                href={feature.courseLink}
                                                className="cursor-pointer hover:underline"
                                            >
                                                <h3 className="text-lg font-bold text-gray-800">
                                                    {feature.name}
                                                </h3>
                                            </a>
                                            {/* Instructor */}
                                            <div className="my-2 flex gap-2 text-sm text-gray-500">
                                                <span className="font-semibold">
                                                    Instructor:
                                                </span>{" "}
                                                {feature.instructor}
                                            </div>
                                            {/* Certification */}
                                            <div className="flex gap-2 text-sm text-gray-500">
                                                <span className="font-semibold">
                                                    Certification:
                                                </span>{" "}
                                                {feature.certLink ? (
                                                    <a
                                                        href={feature.certLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center text-sky-500"
                                                    >
                                                        See Certificate
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
                                            <h3 className="text-lg font-bold text-black dark:text-white">
                                                Description
                                            </h3>
                                            <p className="px-2 text-gray-600">
                                                {feature.description}
                                            </p>
                                        </div>
                                        {/* Certificate for md and up screens */}
                                        <div className="hidden gap-2 text-sm text-gray-500 md:flex ">
                                            <span className="font-semibold">
                                                Certification:
                                            </span>{" "}
                                            {feature.certLink ? (
                                                <a
                                                    href={feature.certLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center text-sky-500"
                                                >
                                                    See Certificate
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
                                            {/* Tags */}
                                            <div
                                                className={`flex max-w-[90%] flex-wrap`}
                                            >
                                                {feature.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="xlg:text-base mb-2 mr-2 inline-flex h-fit items-center rounded-full border-2 bg-gray-100 px-1.5 py-1 text-xs leading-none text-gray-500 md:border-gray-300 md:bg-transparent md:px-2 md:text-gray-400 lg:px-3 lg:text-sm"
                                                    >
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="justify-center">
                                        <div className="relative hidden h-72 w-auto md:flex lg:h-[22rem]">
                                            <img
                                                src={feature.imageSrc}
                                                alt={feature.imageAlt}
                                                className="absolute inset-0 h-full w-full rounded-lg object-cover"
                                            />
                                            <h3 className="text-lg font-medium text-gray-900">
                                                QR Code
                                            </h3>
                                            <img
                                                src={feature.qrCode}
                                                alt={`${feature.name} QR Code`}
                                                className="mt-2 h-32 w-32 object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CertificateSection2
