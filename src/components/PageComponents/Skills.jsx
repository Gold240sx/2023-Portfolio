import React from "react"
import { motion } from "framer-motion"
import { Tooltip } from "react-tooltip"
import { Barplot } from "../barplot"
import { TechStack } from "./skillsSections/techStack"
import { Tech } from "./skillsSections/ tech"

export const skillData = [
    { name: "SASS/CSS", value: 99 },
    { name: "Tailwind", value: 99 },
    { name: "Vanilla Javascript", value: 90 },
    { name: "React", value: 85 },
    { name: "NextJS", value: 80 },
    { name: "TypeScript", value: 60 },
    { name: "Swift", value: 10 },
    // { name: "REST API", value: 25 },
    // { name: "NOSQL", value: 45 },
]

const Skills = () => {
    return (
        <div className=" z-10">
            <h3 className=" z-10 mt-12 mb-12 text-center text-2xl uppercase tracking-[20px] text-gray-500">
                Skills
            </h3>
            <div className=" z-10 mx-auto flex w-3/4">
                <div className="justify-content-center z-10 flex  flex-col gap-3 pb-4 md:ml-5 lg:mx-auto lg:ml-[unset]">
                    <h4 className="z-10 mx-auto text-lg underline md:mx-[unset]">
                        Languages and Technologies:
                    </h4>
                    <Tech />
                    <h4 className="mx-auto mt-2 text-lg underline md:mx-[unset]">
                        My Current Goto Tech Stack:
                    </h4>
                    <div className="mx-auto flex-col gap-3 md:mx-[unset]">
                        <TechStack />
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
