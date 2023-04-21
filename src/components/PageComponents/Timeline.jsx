import { faTrumpet } from "@fortawesome/pro-light-svg-icons"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const FiterButton = (category, label, active) => {
    return (
        <button
            className={`${
                category
                    ? " border-sky-400 bg-gray-200 dark:border-sky-400 dark:bg-gray-700"
                    : ""
            } mx-3 rounded-lg border-2 border-gray-300 bg-gray-200 py-2 px-4 font-bold text-gray-800 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200`}
            onClick={(e) => handleFilter(e)}
        >
            {label}
        </button>
    )
}

function TimelineItem(props) {
    const { category, title, description, position, filters = {} } = props

    if (position === "left") {
        return (
            <>
                <>
                    <div className="mt-4 text-right">
                        <div className="text-sm font-bold md:text-base">
                            {title}
                        </div>
                        <div className=" text-xs text-zinc-400 md:text-sm">
                            {props.description}
                        </div>
                    </div>
                    <div id="empty-right-2"></div>
                </>
            </>
        )
    } else if (position === "right") {
        return (
            <>
                <>
                    <div id="empty-left-1"></div>
                    <div className=" mt-4 text-left text-sm md:ml-2 md:text-base">
                        <div className=" wrap max-w-[200px] break-normal font-bold lg:max-w-none">
                            {title}
                        </div>
                        <div className=" overflow-ellipsis text-xs text-zinc-400 md:text-sm">
                            {description}
                        </div>
                    </div>
                </>
            </>
        )
    } else {
        return <p>missing position</p>
    }
}

function YearLabel(props) {
    return (
        <>
            <div id="lineup-col-content" className="">
                <h4 className="mx-auto mt-4 flex max-w-[80%] rounded-lg bg-white p-2 text-center text-xl dark:bg-zinc-900 ">
                    {props.year}
                </h4>
            </div>
            <div id="empty-right-1"></div>
        </>
    )
}

const Timeline = () => {
    const [workTimeline, setWorkTimeline] = useState(true)
    const [educationTimeline, setEducationTimeline] = useState(true)
    const [lifeTimeline, setLifeTimeline] = useState(false)
    const [time2000s, setTime2000s] = useState(false)
    const [time2010s, setTime2010s] = useState(false)

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

    return (
        <div className="relative mx-auto flex h-fit  w-auto max-w-screen-xs flex-col items-center justify-evenly text-center sm:max-w-screen-sm sm:px-4 md:max-w-7xl md:text-left">
            <h3 className="relative top-24 z-50 w-[541.98px] text-center text-2xl uppercase tracking-[20px] text-gray-500 dark:text-white">
                Timeline
            </h3>
            <div className="absolute top-10 left-0 right-0 bottom-0 z-0 origin-top-right skew-y-[10deg] transform rounded-lg bg-zinc-200 dark:bg-slate-800 md:skew-y-0"></div>
            <div
                id="lineup-container"
                className="relative mt-2 w-full rounded-lg bg-zinc-200 px-2 py-4 dark:bg-slate-800 dark:text-zinc-200"
            >
                <p className="mt-24 text-center dark:text-gray-400">
                    Click on each button to toggle timeline category visibility.
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
                    <div className="bg-gray my-3 flex h-fit w-fit items-center justify-center gap-3 md:mx-[unset] md:ml-5 md:flex-col md:items-start md:gap-[2px]">
                        {time2010s && (
                            <div className=" flex gap-3">
                                <h2 className="text-gray-500 dark:text-gray-400 ">
                                    2000s
                                </h2>
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 cursor-pointer rounded-md text-gray-600 dark:text-gray-400"
                                    checked={time2000s}
                                    onChange={() => setTime2000s(!time2000s)}
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
                                className="absolute h-4 w-4 animate-ping rounded-full bg-pink-500 opacity-75 dark:border-white/20 sm:ml-0 md:ml-[0.375rem]"
                            ></div>
                            <div
                                id="pin"
                                className="relative z-[60] h-4 w-4 rounded-full bg-rose-500 shadow-sm shadow-black dark:border-white/20 sm:ml-0 md:ml-[0.375rem]"
                            ></div>
                        </div>
                    </div>
                    <div className="bluebar-container flex items-center justify-center">
                        <div
                            id="blue-timeline"
                            className="absolute top-[14px] mx-auto flex h-[100%] w-4 rounded-full bg-white bg-gradient-to-b from-sky-400 via-cyan-600 to-teal-600 dark:bg-black dark:from-sky-900 dark:via-cyan-900 dark:to-teal-900 md:left-[261px]"
                            style={{ marginTop: "2px" }}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        {time2000s && (
                            <>
                                <YearLabel year="2004" />
                                {educationTimeline && (
                                    <TimelineItem
                                        category="education"
                                        title={
                                            <a
                                                href="https://www.moundsviewschools.org/irondale"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="cursor-pointer underline"
                                            >
                                                Irondale High School
                                            </a>
                                        }
                                        description="(2004-2005)"
                                        position="left"
                                    />
                                )}
                                {workTimeline && (
                                    <TimelineItem
                                        category="work"
                                        title={
                                            <a
                                                href="https://www.facebook.com/people/Beachs-Long-Lake-Service/100063752972731/"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="cursor-pointer underline"
                                            >
                                                Beach's Long Lake Service
                                            </a>
                                        }
                                        description="First Job"
                                        position="right"
                                    />
                                )}
                                <YearLabel year="2005" />
                                {workTimeline && (
                                    <TimelineItem
                                        category="work"
                                        title={
                                            <a
                                                href="https://airtraffictoys.com/"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="cursor-pointer underline"
                                            >
                                                AirTraffic Kites and Games
                                            </a>
                                        }
                                        description="(2004-2008)"
                                        position="left"
                                    />
                                )}
                                {lifeTimeline && (
                                    <TimelineItem
                                        category="life"
                                        title={
                                            <a
                                                href="https://www.juggle.org/"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="cursor-pointer text-[.95rem] underline"
                                            >
                                                Juggling World Championships
                                            </a>
                                        }
                                        description="Competed"
                                        position="right"
                                    />
                                )}
                                {educationTimeline && (
                                    <TimelineItem
                                        category="education"
                                        title={
                                            <a
                                                href="https://www.collegeforcreativestudies.edu"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="cursor-pointer underline"
                                            >
                                                College For Creative Studies
                                            </a>
                                        }
                                        description="Summer Camp"
                                        position="left"
                                    />
                                )}
                                <YearLabel year="2006" />
                                {educationTimeline && (
                                    <TimelineItem
                                        category="education"
                                        title={
                                            <a
                                                href="https://perpich.mn.gov/"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="cursor-pointer underline"
                                            >
                                                Perpich - PCAE (High School)
                                            </a>
                                        }
                                        description="Visual Arts (2006 - 2008)"
                                        position="right"
                                    />
                                )}
                                <YearLabel year="2008" />
                                {educationTimeline && (
                                    <TimelineItem
                                        category="education"
                                        title="High School Diploma"
                                        description="Perpich - PCAE"
                                        position="left"
                                    />
                                )}
                                {workTimeline && (
                                    <TimelineItem
                                        category="work"
                                        title="Team Winmark"
                                        description="Sales Associate"
                                        position="right"
                                    />
                                )}
                                {lifeTimeline && (
                                    <TimelineItem
                                        category="life"
                                        title="Moved: Fresno, CA"
                                        description=""
                                        position="left"
                                    />
                                )}
                                <YearLabel year="2009" />
                                {workTimeline && (
                                    <TimelineItem
                                        category="work"
                                        title="Promoted to Manager"
                                        description="Team Winmark"
                                        position="right"
                                    />
                                )}
                                {lifeTimeline && (
                                    <TimelineItem
                                        category="life"
                                        title="Bought drift car"
                                        description="240sx"
                                        position="left"
                                    />
                                )}
                            </>
                        )}
                        {time2010s && (
                            <>
                                <YearLabel year="2010" />
                                {lifeTimeline && (
                                    <TimelineItem
                                        category="life"
                                        title="Moved: Minnesota"
                                        description=""
                                        position="right"
                                    />
                                )}
                                <YearLabel year="2011" />
                                {lifeTimeline && (
                                    <TimelineItem
                                        category="life"
                                        title="Married"
                                        description="(Pittsburgh, PA)"
                                        position="left"
                                    />
                                )}
                                {workTimeline && (
                                    <TimelineItem
                                        category="work"
                                        title="Phase 2 Marketing Solutions"
                                        description="CO-founded - (Pittsburgh, PA)"
                                        position="right"
                                    />
                                )}
                                <YearLabel year="2013" />
                                {lifeTimeline && (
                                    <TimelineItem
                                        category="life"
                                        title="Moved: Fresno, CA"
                                        description=""
                                        position="left"
                                    />
                                )}
                                <YearLabel year="2014" />
                                {lifeTimeline && (
                                    <TimelineItem
                                        category="life"
                                        title="Divorced"
                                        description=""
                                        position="right"
                                    />
                                )}
                                {lifeTimeline && (
                                    <TimelineItem
                                        category="life"
                                        title="Moved: Pasadena, CA"
                                        description="to Attend Art Center"
                                        position="left"
                                        className="text-[.95rem]"
                                    />
                                )}
                                {educationTimeline && (
                                    <TimelineItem
                                        category="education"
                                        title={
                                            <a
                                                href="https://perpich.mn.gov/"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="cursor-pointer underline"
                                            >
                                                Art Center College of Design
                                            </a>
                                        }
                                        description="Transportation Design (2014)"
                                        position="right"
                                    />
                                )}
                                {lifeTimeline && (
                                    <TimelineItem
                                        category="life"
                                        title="Homeless"
                                        description="for 3 months"
                                        position="left"
                                    />
                                )}
                                {lifeTimeline && (
                                    <TimelineItem
                                        category="life"
                                        title="Moved: Huntington Beach, CA"
                                        description=""
                                        position="right"
                                        className="flex text-[.6rem]"
                                    />
                                )}
                                {lifeTimeline && (
                                    <TimelineItem
                                        category="life"
                                        title="Moved: Fresno, CA"
                                        description=""
                                        position="left"
                                    />
                                )}
                                <YearLabel year="2015" />
                                {lifeTimeline && (
                                    <TimelineItem
                                        category="life"
                                        title="Moved: Marin County, CA"
                                        description=""
                                        position="right"
                                    />
                                )}
                                {workTimeline && (
                                    <TimelineItem
                                        category="work"
                                        title="Phase 2 Marketing Solutions"
                                        description="Created Solar Division"
                                        position="left"
                                    />
                                )}
                                <YearLabel year="2016" />
                                {workTimeline && (
                                    <TimelineItem
                                        category="work"
                                        title="Easy Green Solar"
                                        description="CEO and Founder"
                                        position="right"
                                    />
                                )}
                                {educationTimeline && (
                                    <TimelineItem
                                        category="education"
                                        title="Got pretty good with Excel"
                                        description="Built a Solar Quote Generator"
                                        position="left"
                                    />
                                )}
                                {lifeTimeline && (
                                    <TimelineItem
                                        category="life"
                                        title="Started Jiu Jitsu"
                                        description=""
                                        position="right"
                                    />
                                )}
                                <YearLabel year="2019" />
                                {lifeTimeline && (
                                    <TimelineItem
                                        category="life"
                                        title="Got my Jiu Jitsu Blue Belt"
                                        description=""
                                        position="left"
                                    />
                                )}
                                {lifeTimeline && (
                                    <TimelineItem
                                        category="life"
                                        title="Moved: Dallas, TX"
                                        description=""
                                        position="right"
                                    />
                                )}
                                {workTimeline && (
                                    <TimelineItem
                                        category="work"
                                        title="Synaptic Solar"
                                        description="Account Manager (2019-2020)"
                                        position="left"
                                    />
                                )}
                            </>
                        )}
                        <YearLabel year="2020" />
                        {workTimeline && (
                            <TimelineItem
                                category="work"
                                title="ELM Fieldsight"
                                description="Biz Dev Manager (2020-2021)"
                                position="right"
                            />
                        )}
                        {educationTimeline && (
                            <TimelineItem
                                category="education"
                                title="Started learning To Code"
                                description="Vaniilla HTML, CSS, JS"
                                position="left"
                            />
                        )}
                        <YearLabel year="2021" />
                        {workTimeline && (
                            <TimelineItem
                                category="work"
                                title="Tech Solar Industries"
                                description="Biz Dev (2021-2022)"
                                position="right"
                            />
                        )}
                        {educationTimeline && (
                            <TimelineItem
                                category="education"
                                title="ES6 Vanilla JS Master Course"
                                description="Completed"
                                position="left"
                            />
                        )}
                        <YearLabel year="2022" />
                        {educationTimeline && (
                            <TimelineItem
                                category="education"
                                title="D3 JS Data Visualization"
                                description="Course Completed"
                                position="right"
                            />
                        )}
                        {educationTimeline && (
                            <TimelineItem
                                category="education"
                                title="React / Firebase Master Course"
                                description="Completed"
                                position="left"
                            />
                        )}
                        {lifeTimeline && (
                            <TimelineItem
                                category="life"
                                title="Deployed my 1st Portfolio Site"
                                description="Built in React"
                                position="right"
                            />
                        )}
                        {educationTimeline && (
                            <TimelineItem
                                category="education"
                                title="Started NextJS Course"
                                description="In Progress..."
                                position="left"
                            />
                        )}
                        {workTimeline && (
                            <TimelineItem
                                category="work"
                                title="Dimaco (Direct Mail)"
                                description="Web Developer (2022-2023)"
                                position="right"
                            />
                        )}
                        <YearLabel year="2023" />
                        {educationTimeline && (
                            <TimelineItem
                                category="education"
                                title="Tailwind CSS Course"
                                description="Completed"
                                position="left"
                            />
                        )}
                        {educationTimeline && (
                            <TimelineItem
                                category="education"
                                title="Supabase Course"
                                description="Completed"
                                position="right"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline
