import { faTrumpet } from "@fortawesome/pro-light-svg-icons"
import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import { SiHellofresh } from "react-icons/si"
import { InView } from "react-intersection-observer"

const timelineEvents = {
    work: [
        {
            name: "Beach's Long Lake Service",
            date: "2004",
            endDate: "2005",
            description: "First Job",
        },
        {
            name: "AirTraffic Kites and Games",
            date: "2005",
            endDate: "2008",
            description: "",
        },
        {
            name: "Team Winmark",
            date: "2008",
            endDate: "2010",
            description: "Sales Associate",
        },
        {
            name: "Promoted to Manager",
            date: "2009",
            endDate: "",
            description: "Team Winmark",
        },
        {
            name: "Phase 2 Marketing Solutions",
            date: "2011",
            endDate: "",
            description: "CO-founded - (Pittsburgh, PA)",
        },
        {
            name: "Phase 2 Marketing Solutions",
            date: "2015",
            endDate: "",
            description: "Created Solar Division",
        },
        {
            name: "Easy Green Solar",
            date: "2016",
            endDate: "2019",
            description: "CEO and founder",
        },
        {
            name: "ELM Fieldsight",
            date: "2020",
            endDate: "2021",
            description: "Business Development Manager",
        },
        {
            name: "Tech Solar Industries",
            date: "2021",
            endDate: "2022",
            description: "Business Development Manager",
        },
        {
            name: "Dimaco (Direct Mail)",
            date: "2022",
            endDate: "2023",
            description: "Web Developer",
        },
    ],
    education: [
        {
            name: "Irondale High School",
            date: "2004",
            endDate: "2005",
            description: "",
        },
        {
            name: "College For Creative Studies",
            date: "2005",
            endDate: "",
            description: "Summer Camp",
        },
        {
            name: "Perpich - PCAE (High School)",
            date: "2006",
            endDate: "2008",
            description: "Visual Arts",
        },
        {
            name: "High School Diploma",
            date: "2008",
            endDate: "",
            description: "Perpich - PCAE",
        },
        {
            name: "Art Center College of Design",
            date: "2014",
            endDate: "",
            description: "Transportation Design",
        },
        {
            name: "ES6 Vanilla JS Master Course",
            date: "2021",
            endDate: "",
            description: "Course Completed",
        },
        {
            name: "D3 JS Data Visualization",
            date: "2022",
            endDate: "",
            description: "Course Completed",
        },
        {
            name: " React / Firebase Master Course",
            date: "2022",
            endDate: "",
            description: "Course Completed",
        },
        {
            name: "Started Next JS Master Course",
            date: "2022",
            endDate: "",
            description: "... In Progress",
        },
    ],
    life: [
        {
            name: "Competed in Juggling World Championships",
            date: "2005",
            endDate: "",
            description: "",
        },
        {
            name: "Moved to Fresno, CA",
            date: "2005",
            endDate: "",
            description: "",
        },
        {
            name: "Bought drift car",
            date: "2008",
            endDate: "",
            description: "240sx",
        },
        {
            name: "Moved to Minnesota",
            date: "2010",
            endDate: "",
            description: "",
        },
        {
            name: "Moved to Fresno, CA",
            date: "2013",
            endDate: "",
            description: "",
        },
        {
            name: "Moved to Pasadena, CA",
            date: "2014",
            endDate: "",
            description: "to Attend Art Center",
        },
        {
            name: "Moved to Huntington Beach, CA",
            date: "2014",
            endDate: "",
            description: "",
        },
        {
            name: "Moved to Fresno, CA",
            date: "2014",
            endDate: "",
            description: "",
        },
        {
            name: "Moved to Marin County, CA",
            date: "2015",
            endDate: "",
            description: "",
        },
        {
            name: "started Jiu Jitsu",
            date: "2016",
            endDate: "",
            description: "",
        },
        {
            name: "Got my Jiu Jitsu Blue Belt",
            date: "2019",
            endDate: "",
            description: "",
        },
        {
            name: "moved to Dallas, TX",
            date: "2019",
            endDate: "",
            description: "",
        },
        {
            name: "Synaptic Solar",
            date: "2019",
            endDate: "2020",
            description: "Account Manager",
        },
        {
            name: "Learned advanced Excel",
            date: "2017",
            endDate: "",
            description: "Built a Solar Quote Calculator",
        },
        {
            name: "Started learning to code",
            date: "2020",
            endDate: "",
            description: "Vanilla HTML, CSS, JS",
        },
        {
            name: "Tailwind CSS Course",
            date: "2023",
            endDate: "",
            description: "Course Completed",
        },
        {
            name: "Supabase Course",
            date: "2023",
            endDate: "",
            description: "Course Completed",
        },
    ],
}

// const FiterButton = (category, label, active) => {
//     return (
//         <button
//             className={`${
//                 category
//                     ? " border-sky-400 bg-gray-200 dark:border-sky-400 dark:bg-gray-700"
//                     : ""
//             } mx-3 rounded-lg border-2 border-gray-300 bg-gray-200 py-2 px-4 font-bold text-gray-800 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200`}
//             onClick={(e) => handleFilter(e)}
//         >
//             {label}
//         </button>
//     )
// }
function YearLabel(props) {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <InView
            as="div"
            onChange={(inView, entry) => {
                if (inView) {
                    setIsVisible(true)
                }
            }}
            threshold={0.1}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
                className={` ${isVisible ? " w-full " : "hidden"}`}
            >
                <div id="lineup-col-content" className="">
                    <h4 className="mx-auto mt-4 flex max-w-[80%] rounded-lg bg-white p-2 text-center font-permanent-marker text-xl text-gray-400 dark:bg-zinc-900">
                        {props.year}
                    </h4>
                </div>
                <div id="empty-right-1"></div>
            </motion.div>
        </InView>
    )
}

function TimelineItem(props) {
    const [isVisible, setIsVisible] = useState(false)
    const {
        category,
        title,
        description,
        position,
        filters,
        index = {},
    } = props

    const descriptNutShell = (description, date, endDate, key) => {
        // If title.toLowerCase() starts with "moved" then show no description
        if (title.toLowerCase().startsWith("moved")) {
            // set description to empty string
            return key
        } else if (description === "" && date && endDate) {
            // if the description is "" but we have a date and EndDate
            return `(${date} - ${endDate} - ${key})`
        } else if (props.endDate === "" && category === "education") {
            // if the description doesnt have an end date and is education
            return "Course Completed"
        } else if (description !== "" && date && endDate) {
            // if there is a description and a date and an end date
            return `${description} (${date} - ${endDate})`
        } else {
            return description
        }
    }

    if (position === "left") {
        return (
            <InView
                as="div"
                onChange={(inView, entry) => {
                    if (inView) {
                        setIsVisible(true)
                    }
                }}
                threshold={0.1}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className={` ${
                        isVisible
                            ? "ml-auto flex w-fit items-end px-2 text-right"
                            : "hidden"
                    }`}
                >
                    <div className="mt-4 text-right">
                        <div className="text-sm font-bold md:text-base">
                            {title}
                        </div>
                        <div className=" text-xs text-zinc-400 md:text-sm">
                            {descriptNutShell(
                                props.description,
                                props.date,
                                props.endDate
                            )}
                        </div>
                    </div>
                    <div id="empty-right-2"></div>
                </motion.div>
            </InView>
        )
    } else if (position === "right") {
        return (
            <InView
                as="div"
                onChange={(inView, entry) => {
                    if (inView) {
                        setIsVisible(true)
                    }
                }}
                threshold={0.1}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className={` ${
                        isVisible
                            ? "mr-auto flex w-fit items-start px-2 text-left"
                            : "hidden"
                    }`}
                >
                    <div id="empty-left-1"></div>
                    <div className=" mt-4 text-left text-sm md:ml-2 md:text-base">
                        <div className=" wrap break-normal font-bold lg:max-w-none">
                            {title}
                        </div>
                        <div className=" overflow-ellipsis text-xs text-zinc-400 md:text-sm">
                            {descriptNutShell(
                                props.description,
                                props.date,
                                props.endDate
                            )}
                        </div>
                    </div>
                </motion.div>
            </InView>
        )
    } else {
        return <p>missing position</p>
    }
}

const Timeline = () => {
    const [workTimeline, setWorkTimeline] = useState(true)
    const [educationTimeline, setEducationTimeline] = useState(true)
    const [lifeTimeline, setLifeTimeline] = useState(false)
    const [time2000s, setTime2000s] = useState(false)
    const [time2010s, setTime2010s] = useState(false)

    const processEvents = (data, filters) => {
        const {
            workTimeline,
            educationTimeline,
            lifeTimeline,
            time2000s,
            time2010s,
        } = filters
        const events = []

        Object.keys(data).forEach((category) => {
            if (
                (category === "work" && workTimeline) ||
                (category === "education" && educationTimeline) ||
                (category === "life" && lifeTimeline)
            ) {
                data[category].forEach((event) => {
                    const date = parseInt(event.date, 10)
                    if (
                        (!time2000s && !time2010s) ||
                        (time2000s && date >= 2000 && date < 2010) ||
                        (time2010s && date >= 2010 && date < 2020) ||
                        date >= 2020
                    ) {
                        events.push({ ...event, category })
                    }
                })
            }
        })

        // Sort events by date
        events.sort((a, b) => parseInt(a.date, 10) - parseInt(b.date, 10))

        return events
    }

    const filteredEvents = processEvents(timelineEvents, {
        workTimeline,
        educationTimeline,
        lifeTimeline,
        time2000s,
        time2010s,
    })

    const handleFilter = (e) => {
        const button = e.target
        const category = button.textContent.toLowerCase()

        if (category === "work") {
            setWorkTimeline(!workTimeline)
        } else if (category === "education") {
            setEducationTimeline(!educationTimeline)
        } else if (category === "life") {
            setLifeTimeline(!lifeTimeline)
        }
    }

    // const handleFilter = (e) => {
    //     const button = e.target
    //     const category = button.textContent.toLowerCase()

    //     if (category === "work") {
    //         setWorkTimeline(!workTimeline)
    //     } else if (category === "education") {
    //         setEducationTimeline(!educationTimeline)
    //     } else if (category === "life") {
    //         setLifeTimeline(!lifeTimeline)
    //     }
    // }

    const { leftElements, rightElements } = filteredEvents.reduce(
        (acc, event, index) => {
            let shouldDisplayYear = false

            if (acc.lastYear !== event.date) {
                acc.lastYear = event.date
                acc.itemCounter = 0
                shouldDisplayYear = true
            }

            if (shouldDisplayYear) {
                acc.leftElements.push(
                    <YearLabel key={`year-${event.date}`} year={event.date} />
                )
                acc.rightElements.push(
                    <div key={`year-placeholder-${event.date}`}></div>
                )
            }

            if (acc.itemCounter % 2 === 0) {
                acc.leftElements.push(
                    <TimelineItem
                        key={`${event.date}-${event.name}-left`}
                        category={event.category}
                        title={event.name}
                        date={event.date}
                        endDate={event.endDate}
                        description={event.description}
                        position="left"
                    />
                )
                acc.rightElements.push(
                    <div
                        key={`${event.date}-${event.name}-right-placeholder`}
                    ></div>
                )
            } else {
                acc.leftElements.push(
                    <div
                        key={`${event.date}-${event.name}-left-placeholder`}
                    ></div>
                )
                acc.rightElements.push(
                    <TimelineItem
                        key={`${event.date}-${event.name}-right`}
                        category={event.category}
                        title={event.name}
                        date={event.date}
                        endDate={event.endDate}
                        description={event.description}
                        position="right"
                    />
                )
            }

            acc.itemCounter++
            return acc
        },
        { lastYear: "", leftElements: [], rightElements: [], itemCounter: 0 }
    )

    return (
        <div className="relative mx-auto flex h-fit  flex-col items-center justify-evenly text-center sm:max-w-screen-sm md:max-w-7xl md:text-left">
            <div className="flex w-screen justify-center">
                <h3 className="z-50 translate-x-2.5 translate-y-16  text-center text-2xl uppercase tracking-[20px] text-gray-500 dark:text-white">
                    Timeline
                </h3>
            </div>
            {/*  */}
            <div className=" left-0 right-0 bottom-0 z-0 mx-auto flex w-[80%] max-w-2xl origin-top-right skew-y-[11deg] transform rounded-lg bg-zinc-200/20 pt-16 dark:bg-slate-800 md:skew-y-0">
                <div
                    id="lineup-container"
                    className="relative mt-2 w-full -skew-y-[11deg] rounded-lg bg-zinc-200/20 px-2 py-4 pb-10 ring-offset-accent-focus dark:bg-slate-800 dark:text-zinc-200 md:skew-y-0"
                >
                    <p className="mt-24 text-center dark:text-gray-400">
                        Click on each button to toggle timeline category
                        visibility.
                    </p>
                    {/* Filter Buttons */}
                    <div className="mt-4 flex flex-col items-center justify-center  align-middle md:flex-row">
                        {/* filter buttons */}
                        <div className="block w-auto md:flex">
                            <button
                                className={`${
                                    workTimeline
                                        ? " border-sky-400 bg-gray-200 dark:border-sky-400 dark:bg-gray-700"
                                        : ""
                                } mx-3 my-2  rounded-lg border-2 border-gray-300 bg-gray-200 py-2 px-4 font-bold text-gray-800 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200`}
                                onClick={(e) => handleFilter(e)}
                            >
                                Work
                            </button>
                            <button
                                className={`${
                                    educationTimeline
                                        ? " border-sky-400 bg-gray-200 dark:border-sky-400 dark:bg-gray-700"
                                        : ""
                                } mx-3  my-2 rounded-lg border-2 border-gray-300 bg-gray-200 py-2 px-4 font-bold text-gray-800 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200`}
                                onClick={(e) => handleFilter(e)}
                            >
                                Education
                            </button>
                            <button
                                className={`${
                                    lifeTimeline
                                        ? " border-sky-400 bg-gray-200 dark:border-sky-400 dark:bg-gray-700"
                                        : ""
                                } mx-3  my-2 rounded-lg border-2 border-gray-300 bg-gray-200 py-2 px-4 font-bold text-gray-800 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200`}
                                onClick={(e) => handleFilter(e)}
                            >
                                Life
                            </button>
                        </div>
                        {/* filter checkboxes */}
                        <div className="bg-gray my-3 flex h-fit items-center justify-center gap-3 md:mx-[unset] md:ml-5 md:flex-col md:items-start md:gap-[2px]">
                            {time2010s && (
                                <div className=" flex gap-3">
                                    <h2 className="text-gray-500 dark:text-gray-400">
                                        2000s
                                    </h2>
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 cursor-pointer rounded-md text-gray-600 dark:text-gray-400"
                                        checked={time2000s}
                                        onChange={() =>
                                            setTime2000s(!time2000s)
                                        }
                                    />
                                </div>
                            )}
                            <div className="flex gap-3">
                                <h2 className="text-gray-500 dark:text-gray-400">
                                    2010s
                                </h2>
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 cursor-pointer rounded-md text-gray-600 dark:text-gray-400"
                                    checked={time2010s}
                                    onChange={() => setTime2010s(!time2010s)}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Timeline */}
                    <div
                        id="lineup-wrapper"
                        className="relative mt-5 mb-10 min-h-[250px]"
                    >
                        <div
                            id="placement-indicator-wrapper"
                            className="sticky top-1/2  translate-y-4"
                            style={{ zIndex: "100" }}
                        >
                            <div
                                id="placement-indicator"
                                className="relative mx-auto h-4 w-4"
                            >
                                {/* <!-- animate-ping below comes out of the box in tailwind, so no need to set up a custom animation--> */}
                                <div
                                    id="pulse-effect"
                                    className="absolute h-4 w-4 animate-ping rounded-full bg-pink-500 opacity-75 dark:border-white/20 sm:ml-0 "
                                ></div>
                                <div
                                    id="pin"
                                    className="relative z-[60] h-4 w-4 rounded-full bg-rose-500 shadow-sm shadow-black dark:border-white/20 sm:ml-0 "
                                ></div>
                            </div>
                        </div>
                        <div className="bluebar-container flex items-center justify-center">
                            <div
                                id="blue-timeline"
                                className={` left:1/2 absolute top-[14px] mx-auto mt-0.5 flex h-[100%] w-4 rounded-full bg-white bg-gradient-to-b from-sky-400 via-cyan-600 to-teal-600 dark:bg-black dark:from-sky-900 dark:via-cyan-900 dark:to-teal-900`}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-8 text-gray-600 dark:text-gray-300">
                            {leftElements.map((leftElem, index) => (
                                <React.Fragment key={leftElem.key}>
                                    <div className="max-w-[100%]">
                                        {leftElem}
                                    </div>
                                    <div className="max-w-[100%]">
                                        {rightElements[index]}
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline
