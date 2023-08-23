import React from "react"
import { motion } from "framer-motion"
import { Tooltip } from "react-tooltip"
import { Barplot } from "../barplot"

export const skillData = [
    { name: "SASS/CSS", value: 98 },
    { name: "Tailwind", value: 95 },
    { name: "Vanilla Javascript", value: 90 },
    { name: "React", value: 85 },
    { name: "NextJS", value: 75 },
    { name: "TypeScript", value: 50 },
    // { name: "REST API", value: 25 },
    // { name: "NOSQL", value: 45 },
]

const Skills = () => {
    return (
        <div className=" z-10">
            <h3 className=" z-10 mt-12 mb-12 text-center text-2xl uppercase tracking-[20px] text-gray-500">
                Skills
            </h3>
            <div className=" z-10 flex flex-col lg:flex-row">
                <div className="z-10 flex flex-col gap-3 pb-4 md:ml-5 lg:mx-auto lg:ml-[unset]">
                    <h4 className="z-10 mx-auto text-lg underline md:mx-[unset]">
                        Languages and Technologies:
                    </h4>
                    {/* md screens and up */}
                    <div className="z-10 hidden md:flex">
                        <div className="z-10 flex flex-col">
                            {/* row 1 */}
                            <div className="z-10 flex cursor-pointer">
                                <a
                                    href="https://www.figma.com/?fuid="
                                    target="_blank"
                                    data-tooltip-id="figma"
                                    data-tooltip-content="Figma"
                                    data-tooltip-delay-show={500}
                                    className="z-10"
                                    style={{
                                        height: "48px",
                                        marginTop: "0px",
                                        width: "52px",
                                    }}
                                >
                                    <img
                                        className="z-10"
                                        src="https://i.ibb.co/0FJ39J4/png-transparent-figma-app-logo-tech-companies-thumbnail.png"
                                    />
                                </a>
                                <Tooltip
                                    id="figma"
                                    place="top"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://www.w3.org/html/"
                                    target="_blank"
                                    data-tooltip-id="html"
                                    data-tooltip-content="HTML"
                                    data-tooltip-delay-show={500}
                                    className="z-10"
                                >
                                    <img
                                        className="z-10"
                                        src="https://img.icons8.com/color/48/000000/html-5.png"
                                    />
                                </a>
                                <Tooltip
                                    id="html"
                                    place="top"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://www.w3schools.com/css/"
                                    target="_blank"
                                    data-tooltip-id="css"
                                    data-tooltip-content="CSS"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        className="z-10"
                                        src="https://img.icons8.com/color/48/000000/css3.png"
                                    />
                                </a>
                                <Tooltip
                                    id="css"
                                    place="top"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://getbootstrap.com"
                                    target="_blank"
                                    data-tooltip-id="bootstrap"
                                    data-tooltip-content="Bootstrap"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        className="z-10"
                                        src="https://img.icons8.com/color/48/000000/bootstrap.png"
                                    />
                                </a>
                                <Tooltip
                                    id="bootstrap"
                                    place="top"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://gulpjs.com/"
                                    target="_blank"
                                    data-tooltip-id="gulp"
                                    data-tooltip-content="GULP"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        src="https://i.ibb.co/n6N253V/gulp-copy.png"
                                        style={{
                                            height: "40px",
                                            marginTop: "3px",
                                            width: "42px",
                                        }}
                                        className="z-10"
                                    />
                                </a>
                                <Tooltip
                                    id="gulp"
                                    place="top"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://sass-lang.com/"
                                    target="_blank"
                                    data-tooltip-id="sass"
                                    data-tooltip-content="SASS / SCSS"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        src="https://img.icons8.com/color/48/000000/sass.png"
                                        className="h-30 z-10"
                                    />
                                </a>
                                <Tooltip
                                    id="sass"
                                    place="top"
                                    className=" bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                                    target="_blank"
                                    data-tooltip-id="js"
                                    data-tooltip-content="Javascript"
                                    data-tooltip-delay-show={500}
                                    className="z-10"
                                >
                                    <img
                                        src="https://img.icons8.com/color/48/000000/javascript.png"
                                        className="z-10"
                                    />
                                </a>
                                <Tooltip
                                    id="js"
                                    place="top"
                                    className=" bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://git-scm.com/"
                                    target="_blank"
                                    data-tooltip-id="git"
                                    data-tooltip-content="Git / Github"
                                    data-tooltip-delay-show={500}
                                    className="z-10"
                                >
                                    <img
                                        src="https://img.icons8.com/color/48/000000/git.png"
                                        className="z-10"
                                    />
                                </a>
                                <Tooltip
                                    id="git"
                                    place="top"
                                    className=" bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://webpack.js.org/"
                                    target="_blank"
                                    data-tooltip-id="webpack"
                                    data-tooltip-content="Webpack"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        style={{
                                            height: "50px",
                                            marginTop: "3px",
                                        }}
                                        src="https://i.ibb.co/h7R2dLL/webpack.png"
                                    />
                                </a>
                                <Tooltip
                                    id="webpack"
                                    place="top"
                                    className=" bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://d3js.org/"
                                    target="_blank"
                                    data-tooltip-id="d3"
                                    data-tooltip-content="D3.js"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        style={{
                                            height: "50px",
                                            marginTop: "3px",
                                        }}
                                        src="https://i.ibb.co/MCHcY6D/d3.png"
                                    />
                                </a>
                                <Tooltip
                                    id="d3"
                                    place="top"
                                    className=" bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://www.typescriptlang.org/"
                                    target="_blank"
                                    data-tooltip-id="typescript"
                                    data-tooltip-content="Typescript"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        style={{
                                            height: "50px",
                                            marginTop: "3px",
                                        }}
                                        src="https://i.ibb.co/hyG9DhN/typescript.png"
                                    />
                                </a>
                                <Tooltip
                                    id="typescript"
                                    place="top"
                                    className=" bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://reactjs.org/"
                                    target="_blank"
                                    data-tooltip-id="react"
                                    data-tooltip-content="React"
                                    data-tooltip-delay-show={500}
                                >
                                    <img src="https://img.icons8.com/color/48/000000/react-native.png" />
                                </a>
                                <Tooltip
                                    id="react"
                                    place="top"
                                    className=" bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://nextjs.org/"
                                    target="_blank"
                                    data-tooltip-id="next"
                                    data-tooltip-content="Next.js"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        src="https://img.icons8.com/color/48/000000/nextjs.png"
                                        className="dark:grayscale dark:invert"
                                    />
                                </a>
                                <Tooltip
                                    id="next"
                                    place="top"
                                    className=" bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://redux.js.org"
                                    target="_blank"
                                    data-tooltip-id="redux"
                                    data-tooltip-content="Redux"
                                    data-tooltip-delay-show={500}
                                >
                                    <img src="https://img.icons8.com/color/48/000000/redux.png" />
                                </a>
                                <Tooltip
                                    id="redux"
                                    place="top"
                                    className=" bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                            </div>
                            {/* Row 2 */}
                            <div className="mx-auto flex">
                                <a
                                    href="https://tailwindcss.com/"
                                    target="_blank"
                                    data-tooltip-id="tailwind"
                                    data-tooltip-content="Tailwind"
                                    data-tooltip-delay-show={500}
                                >
                                    <img src="https://img.icons8.com/color/48/000000/tailwindcss.png" />
                                </a>
                                <Tooltip
                                    id="tailwind"
                                    place="bottom"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                {/* <a
                                    href="https://tailwindui.com/"
                                    target="_blank"
                                    data-tooltip-id="tailwindUI"
                                    data-tooltip-content="Tailwind UI"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        style={{
                                            height: "50px",
                                            marginTop: "3px",
                                        }}
                                        src="https://i.ibb.co/stC8B8h/tailwind-u-I.png"
                                    />
                                </a>
                                <Tooltip
                                    id="tailwindUI"
                                    place="bottom"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                /> */}
                                <a
                                    className="ml-2 mt-1 px-1 pb-[-4px] pt-[1px] dark:bg-white"
                                    href="https://nodejs.org"
                                    target="_blank"
                                    data-tooltip-id="node"
                                    data-tooltip-content="Node.js"
                                    data-tooltip-delay-show={500}
                                >
                                    <img src="https://img.icons8.com/color/48/000000/nodejs.png" />
                                </a>
                                <Tooltip
                                    id="node"
                                    place="bottom"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://firebase.google.com/"
                                    target="_blank"
                                    data-tooltip-id="firebase"
                                    data-tooltip-content="Firebase"
                                    data-tooltip-delay-show={500}
                                >
                                    <img src="https://img.icons8.com/color/48/000000/firebase.png" />
                                </a>
                                <Tooltip
                                    id="firebase"
                                    place="bottom"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://supabase.com/"
                                    target="_blank"
                                    data-tooltip-id="supabase"
                                    data-tooltip-content="Supabase"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        style={{
                                            height: "50px",
                                            marginTop: "3px",
                                        }}
                                        src="https://i.ibb.co/Yjn0Nbx/supabase.png"
                                        className="mr-2"
                                    />
                                </a>
                                <Tooltip
                                    id="supabase"
                                    place="bottom"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://postman.com"
                                    target="_blank"
                                    data-tooltip-id="postman"
                                    data-tooltip-content="Postman"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                                        alt="postman"
                                        className="mt-2 mr-2 h-[45px] w-[45px]"
                                    />
                                </a>
                                <Tooltip
                                    id="postman"
                                    place="bottom"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://vercel.com"
                                    target="_blank"
                                    data-tooltip-id="vercel"
                                    data-tooltip-content="Vercel"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        style={{
                                            height: "50px",
                                            marginTop: "3px",
                                        }}
                                        src="https://i.ibb.co/4jSbQ3t/vercel.png"
                                        className="mr-2 "
                                    />
                                </a>
                                <Tooltip
                                    id="vercel"
                                    place="bottom"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://create.t3.gg/"
                                    target="_blank"
                                    data-tooltip-id="t3"
                                    data-tooltip-content="T3 App"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        style={{
                                            height: "50px",
                                            marginTop: "3px",
                                        }}
                                        src="https://i.ibb.co/CPTK4xm/t3.png"
                                        className="mr-2 "
                                    />
                                </a>
                                <Tooltip
                                    id="t3"
                                    place="bottom"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />

                                <a
                                    href="https://www.prisma.io/"
                                    target="_blank"
                                    data-tooltip-id="prisma"
                                    data-tooltip-content="Prisma"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        style={{
                                            height: "50px",
                                            marginTop: "3px",
                                        }}
                                        src="https://i.ibb.co/xj61MMr/prisma-logo-3805665-B69-seeklogo-com-2.png"
                                        className="mr-2 dark:invert"
                                    />
                                </a>
                                <Tooltip
                                    id="prisma"
                                    place="bottom"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />

                                <a
                                    href="https://planetscale.com"
                                    target="_blank"
                                    data-tooltip-id="planetscale"
                                    data-tooltip-content="PlanetScale"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        style={{
                                            height: "40px",
                                            marginTop: "7px",
                                        }}
                                        src="https://i.ibb.co/X3Xjk9w/planetscale-logo-0-EEA8-CAEB4-seeklogo-com.png"
                                        className="mr-2 dark:invert"
                                    />
                                </a>
                                <Tooltip
                                    id="planetscale"
                                    place="bottom"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://Upstash.com"
                                    target="_blank"
                                    data-tooltip-id="Upstash"
                                    data-tooltip-content="Upstash"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        style={{
                                            height: "50px",
                                            marginTop: "3px",
                                        }}
                                        src=" https://i.ibb.co/PFcgZPb/upstash-icon-logo-6-EB6-AA96-EE-seeklogo-com.png"
                                        className="mr-2 "
                                    />
                                </a>
                                <Tooltip
                                    id="Upstash"
                                    place="bottom"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://sendgrid.com/"
                                    target="_blank"
                                    data-tooltip-id="sendgrid"
                                    data-tooltip-content="SendGrid"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        style={{
                                            height: "50px",
                                            marginTop: "3px",
                                        }}
                                        src="https://i.ibb.co/y4ZP2qG/sendgrid.png"
                                        className="mr-2 "
                                    />
                                </a>
                                <Tooltip
                                    id="sendgrid"
                                    place="bottom"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://react.email/"
                                    target="_blank"
                                    data-tooltip-id="reactEmail"
                                    data-tooltip-content="ReactE-Mail"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        style={{
                                            height: "50px",
                                            marginTop: "3px",
                                        }}
                                        src="https://i.ibb.co/qMSFHVM/reactemail.png"
                                    />
                                </a>
                                <Tooltip
                                    id="reactEmail"
                                    place="bottom"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                            </div>
                        </div>
                    </div>
                    {/* small screens */}
                    <div className="flex md:hidden">
                        <div className="flex flex-col">
                            {/* Row 1 */}
                            <div className="flex">
                                <a
                                    href="https://www.figma.com/?fuid="
                                    target="_blank"
                                    data-tooltip-id="figma"
                                    data-tooltip-content="Figma"
                                    data-tooltip-delay-show={500}
                                    style={{
                                        height: "48px",
                                        marginTop: "0px",
                                        width: "52px",
                                    }}
                                >
                                    <img src="https://i.ibb.co/0FJ39J4/png-transparent-figma-app-logo-tech-companies-thumbnail.png" />
                                </a>
                                <Tooltip
                                    id="figma"
                                    place="top"
                                    className="z-20 bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://www.w3.org/html/"
                                    target="_blank"
                                    data-tooltip-id="html"
                                    data-tooltip-content="HTML"
                                    data-tooltip-delay-show={500}
                                >
                                    <img src="https://img.icons8.com/color/48/000000/html-5.png" />
                                </a>
                                <Tooltip
                                    id="html"
                                    place="top"
                                    className="z-20 bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://www.w3schools.com/css/"
                                    target="_blank"
                                    data-tooltip-id="css"
                                    data-tooltip-content="CSS"
                                    data-tooltip-delay-show={500}
                                >
                                    <img src="https://img.icons8.com/color/48/000000/css3.png" />
                                </a>
                                <Tooltip
                                    id="css"
                                    place="top"
                                    className="z-20 bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://getbootstrap.com"
                                    target="_blank"
                                    data-tooltip-id="bootstrap"
                                    data-tooltip-content="Bootstrap"
                                    data-tooltip-delay-show={500}
                                >
                                    <img src="https://img.icons8.com/color/48/000000/bootstrap.png" />
                                </a>
                                <Tooltip
                                    id="bootstrap"
                                    place="top"
                                    className="z-20 bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://gulpjs.com/"
                                    target="_blank"
                                    data-tooltip-id="gulp"
                                    data-tooltip-content="Gulp"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        src="https://i.ibb.co/n6N253V/gulp-copy.png"
                                        style={{
                                            height: "40px",
                                            marginTop: "3px",
                                            width: "42px",
                                        }}
                                    />
                                </a>
                                <Tooltip
                                    id="gulp"
                                    place="top"
                                    className="z-20 bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://sass-lang.com/"
                                    target="_blank"
                                    data-tooltip-id="sass"
                                    data-tooltip-content="Sass / Scss"
                                    data-tooltip-delay-show={500}
                                >
                                    <img src="https://img.icons8.com/color/48/000000/sass.png" />
                                </a>
                                <Tooltip
                                    id="sass"
                                    place="top"
                                    className="z-20 bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                            </div>
                            {/* Row 2 */}
                            <div className="flex">
                                <a
                                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                                    target="_blank"
                                    data-tooltip-id="js"
                                    data-tooltip-content="Javascript"
                                    data-tooltip-delay-show={500}
                                >
                                    <img src="https://img.icons8.com/color/48/000000/javascript.png" />
                                </a>
                                <Tooltip
                                    id="js"
                                    place="top"
                                    className="z-20 bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://d3js.org/"
                                    target="_blank"
                                    data-tooltip-id="d3"
                                    data-tooltip-content="D3.js"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        style={{
                                            height: "50px",
                                            marginTop: "3px",
                                        }}
                                        src="https://i.ibb.co/MCHcY6D/d3.png"
                                    />
                                </a>
                                <Tooltip
                                    id="d3"
                                    place="top"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://www.typescriptlang.org/"
                                    target="_blank"
                                    data-tooltip-id="typescript"
                                    data-tooltip-content="Typescript"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        style={{
                                            height: "50px",
                                            marginTop: "3px",
                                        }}
                                        src="https://i.ibb.co/hyG9DhN/typescript.png"
                                    />
                                </a>
                                <Tooltip
                                    id="typescript"
                                    place="top"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://reactjs.org/"
                                    target="_blank"
                                    data-tooltip-id="react"
                                    data-tooltip-content="React"
                                    data-tooltip-delay-show={500}
                                >
                                    <img src="https://img.icons8.com/color/48/000000/react-native.png" />
                                </a>
                                <Tooltip
                                    id="react"
                                    place="top"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://nextjs.org/"
                                    target="_blank"
                                    data-tooltip-id="next"
                                    data-tooltip-content="Next.js"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        src="https://img.icons8.com/color/48/000000/nextjs.png"
                                        className="dark:invert"
                                    />
                                </a>
                                <Tooltip
                                    id="next"
                                    place="top"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://redux.js.org"
                                    target="_blank"
                                    data-tooltip-id="redux"
                                    data-tooltip-content="Redux"
                                    data-tooltip-delay-show={500}
                                >
                                    <img src="https://img.icons8.com/color/48/000000/redux.png" />
                                </a>
                                <Tooltip
                                    id="redux"
                                    place="top"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                            </div>
                            {/* Row 3 */}
                            <div className="mx-auto flex">
                                <a
                                    href="https://tailwindcss.com/"
                                    target="_blank"
                                    data-tooltip-id="tailwind-top"
                                    data-tooltip-content="Tailwind"
                                    data-tooltip-delay-show={500}
                                >
                                    <img src="https://img.icons8.com/color/48/000000/tailwindcss.png" />
                                </a>
                                <Tooltip
                                    id="tailwind-top"
                                    place="top"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://tailwindui.com/"
                                    target="_blank"
                                    data-tooltip-id="tailwindUI"
                                    data-tooltip-content="Taiwind UI"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        style={{
                                            height: "50px",
                                            marginTop: "3px",
                                        }}
                                        src="https://i.ibb.co/stC8B8h/tailwind-u-I.png"
                                    />
                                </a>
                                <Tooltip
                                    id="tailwindUI"
                                    place="bottom"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    className="ml-2 mt-1 px-1 pb-[-4px] pt-[1px] dark:bg-white"
                                    href="https://nodejs.org"
                                    target="_blank"
                                    data-tooltip-id="node"
                                    data-tooltip-content="Node.js"
                                    data-tooltip-delay-show={500}
                                >
                                    <img src="https://img.icons8.com/color/48/000000/nodejs.png" />
                                </a>
                                <Tooltip
                                    id="node"
                                    place="bottom"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://firebase.google.com/"
                                    target="_blank"
                                    data-tooltip-id="firebase"
                                    data-tooltip-content="Firebase"
                                    data-tooltip-delay-show={500}
                                >
                                    <img src="https://img.icons8.com/color/48/000000/firebase.png" />
                                </a>
                                <Tooltip
                                    id="firebase"
                                    place="bottom"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://supabase.com/"
                                    target="_blank"
                                    data-tooltip-id="supabase"
                                    data-tooltip-content="Supabase"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        style={{
                                            height: "50px",
                                            marginTop: "3px",
                                        }}
                                        src="https://i.ibb.co/Yjn0Nbx/supabase.png"
                                        className="mr-2"
                                    />
                                </a>
                                <Tooltip
                                    id="supabase"
                                    place="bottom"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://postman.com"
                                    target="_blank"
                                    data-tooltip-id="postman"
                                    data-tooltip-content="Postman"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                                        alt="postman"
                                        className="mt-2 mr-2 h-[45px] w-[45px]"
                                    />
                                </a>
                                <Tooltip
                                    id="postman"
                                    place="bottom"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                            </div>
                            {/* Row 4 */}
                            <div className="mx-auto flex">
                                <a
                                    href="https://vercel.com/"
                                    target="_blank"
                                    data-tooltip-id="vercel"
                                    data-tooltip-content="Vercel"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        style={{
                                            height: "50px",
                                            marginTop: "3px",
                                        }}
                                        src="https://i.ibb.co/4jSbQ3t/vercel.png"
                                        className="mr-2"
                                    />
                                </a>
                                <Tooltip
                                    id="vercel"
                                    place="bottom"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://create.t3.gg/"
                                    target="_blank"
                                    data-tooltip-id="t3"
                                    data-tooltip-content="T3 App"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        style={{
                                            height: "50px",
                                            marginTop: "3px",
                                        }}
                                        src="https://i.ibb.co/CPTK4xm/t3.png"
                                        className="mr-2 "
                                    />
                                </a>
                                <Tooltip
                                    id="t3"
                                    place="bottom"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://www.prisma.io/"
                                    target="_blank"
                                    data-tooltip-id="prisma"
                                    data-tooltip-content="Prisma"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        style={{
                                            height: "50px",
                                            marginTop: "3px",
                                        }}
                                        src="https://i.ibb.co/KysryBD/prisma.png"
                                        className="mr-2 dark:invert"
                                    />
                                </a>
                                <Tooltip
                                    id="prisma"
                                    place="bottom"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://planetscale.com"
                                    target="_blank"
                                    data-tooltip-id="planetscale"
                                    data-tooltip-content="PlanetScale"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        style={{
                                            height: "40px",
                                            marginTop: "7px",
                                        }}
                                        src="https://i.ibb.co/X3Xjk9w/planetscale-logo-0-EEA8-CAEB4-seeklogo-com.png"
                                        className="mr-2 dark:invert"
                                    />
                                </a>
                                <Tooltip
                                    id="planetscale"
                                    place="bottom"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://sendgrid.com/"
                                    target="_blank"
                                    data-tooltip-id="sendGrid"
                                    data-tooltip-content="SendGrid"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        style={{
                                            height: "50px",
                                            marginTop: "3px",
                                        }}
                                        src="https://i.ibb.co/y4ZP2qG/sendgrid.png"
                                        className="mr-2 "
                                    />
                                </a>
                                <Tooltip
                                    id="sendGrid"
                                    place="bottom"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <a
                                    href="https://react.email/"
                                    target="_blank"
                                    data-tooltip-id="reactMail"
                                    data-tooltip-content="ReactE-Mail"
                                    data-tooltip-delay-show={500}
                                >
                                    <img
                                        style={{
                                            height: "50px",
                                            marginTop: "3px",
                                        }}
                                        src="https://i.ibb.co/qMSFHVM/reactemail.png"
                                    />
                                </a>
                                <Tooltip
                                    id="reactMail"
                                    place="bottom"
                                    className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                            </div>
                        </div>
                    </div>
                    <h4 className="mx-auto mt-2 text-lg underline md:mx-[unset]">
                        My Current Goto Tech Stack:
                    </h4>
                    <div className="mx-auto flex-col gap-3 md:mx-[unset]">
                        <div className="flex">
                            <a
                                href="https://www.figma.com/?fuid="
                                target="_blank"
                                data-tooltip-id="figma"
                                data-tooltip-content="Figma"
                                data-tooltip-delay-show={500}
                                className="z-10"
                                style={{
                                    height: "48px",
                                    marginTop: "3px",
                                    width: "52px",
                                }}
                            >
                                <img
                                    className="z-10"
                                    src="https://i.ibb.co/0FJ39J4/png-transparent-figma-app-logo-tech-companies-thumbnail.png"
                                />
                            </a>
                            <Tooltip
                                id="figma"
                                place="top"
                                className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                            />
                            <a
                                href="https://nextjs.org/"
                                target="_blank"
                                data-tooltip-id="next"
                                data-tooltip-content="Next.js"
                                data-tooltip-delay-show={500}
                                className="mt-0.5 flex"
                            >
                                <img
                                    src="https://img.icons8.com/color/48/000000/nextjs.png"
                                    className="dark:grayscale dark:invert"
                                />
                            </a>
                            <Tooltip
                                id="next"
                                place="top"
                                className=" bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                            />
                            <a
                                href="https://www.typescriptlang.org/"
                                target="_blank"
                                data-tooltip-id="typescript-bottom"
                                data-tooltip-content="Typescript"
                                data-tooltip-delay-show={500}
                            >
                                <img
                                    style={{ height: "50px", marginTop: "3px" }}
                                    src="https://i.ibb.co/hyG9DhN/typescript.png"
                                    className="mr-2"
                                />
                            </a>
                            <Tooltip
                                id="typescript-bottom"
                                place="bottom"
                                className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                            />
                            <a
                                href="https://vercel.com"
                                target="_blank"
                                data-tooltip-id="vercel"
                                data-tooltip-content="Vercel"
                                data-tooltip-delay-show={500}
                            >
                                <img
                                    style={{
                                        height: "50px",
                                        marginTop: "3px",
                                    }}
                                    src="https://i.ibb.co/4jSbQ3t/vercel.png"
                                    className="mr-2 "
                                />
                            </a>
                            <Tooltip
                                id="vercel"
                                place="bottom"
                                className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                            />
                            <a
                                href="https://sass-lang.com/"
                                target="_blank"
                                data-tooltip-id="sass"
                                data-tooltip-content="SASS / SCSS"
                                data-tooltip-delay-show={500}
                            >
                                <img
                                    src="https://img.icons8.com/color/48/000000/sass.png"
                                    className="h-30 z-10"
                                />
                            </a>
                            <Tooltip
                                id="sass"
                                place="top"
                                className=" bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                            />
                            <a
                                href="https://tailwindcss.com/"
                                target="_blank"
                                data-tooltip-id="tailwind"
                                data-tooltip-content="Tailwind"
                                data-tooltip-delay-show={500}
                            >
                                <img src="https://img.icons8.com/color/48/000000/tailwindcss.png" />
                            </a>
                            <Tooltip
                                id="tailwind"
                                place="bottom"
                                className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                            />
                            <a
                                href="https://supabase.com/"
                                target="_blank"
                                data-tooltip-id="supabase"
                                data-tooltip-content="Supabase"
                                data-tooltip-delay-show={500}
                            >
                                <img
                                    style={{
                                        height: "50px",
                                        marginTop: "3px",
                                    }}
                                    src="https://i.ibb.co/Yjn0Nbx/supabase.png"
                                    className="mr-2"
                                />
                            </a>
                            <Tooltip
                                id="supabase"
                                place="bottom"
                                className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                            />
                            {/* <a
                                href="https://firebase.google.com/"
                                target="_blank"
                                data-tooltip-id="firebase"
                                data-tooltip-content="Firebase"
                                data-tooltip-delay-show={500}
                            >
                                <img
                                    src="https://img.icons8.com/color/48/000000/firebase.png"
                                    className="mr-2"
                                />
                            </a> */}
                            <Tooltip
                                id="firebase"
                                place="bottom"
                                className="bg-gray-200 font-semibold text-slate-700 dark:bg-black dark:text-white"
                            />
                        </div>
                    </div>
                </div>
                {/* Upload bar graph from Github */}
                {/*  */}
                {/* <div className="ml-10 flex flex-col">
                    <h4 className="mx-auto ml-8 text-lg underline">
                        Strengths
                    </h4>
                    <Barplot
                        data={skillData}
                        className="mx-auto h-96 w-auto"
                        // width={400}
                        // height={150}
                    />
                </div> */}
                {/*  */}
                {/* <p className="w-70 mx-auto hidden bg-gray-300 text-center md:flex">
                    ...Towards:
                    Next13-T3App-Prisma-TPRC-Supabase/PlanetScale-Tailwind
                </p> */}
            </div>
        </div>
    )
}

export default Skills
