import React from "react"
import GetQuote from "./getQuote"
import GeneralInquiry from "./generalInquiry"
import HireMe from "./hireMe"

interface TabPanelProps {
    children?: React.ReactNode
    index: any
    value: any
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            className="w-full"
            {...other}
        >
            {value === index && <div className="w-full p-4">{children}</div>}
        </div>
    )
}

export default function TabGroup() {
    const [store, setStore] = React.useState({
        test1: "",
        test2: "",
        test3: "",
    })
    const [value, setValue] = React.useState(0)

    const handleChange = (newValue: number) => {
        setValue(newValue)
    }

    const onSubmit = (data: Partial<{}>) => {
        setStore({
            ...store,
            ...data,
        })
    }

    console.log(store)

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="mx-auto mt-2 mb-6 w-auto overflow-hidden  rounded-xl border-2 p-4 text-gray-400 dark:border-black/20 md:w-[580px]">
                <div className=" mx-auto flex flex-col justify-around overflow-hidden rounded-xl border border-black/10 bg-gray-50/50 shadow-inner shadow-black/20 outline-2 dark:bg-black/20 sm:w-fit sm:flex-row">
                    <button
                        className={`p-4 ${
                            value === 0
                                ? " bg-gradient-radial from-sky-400  via-sky-400 to-sky-500 text-white dark:from-sky-900 dark:via-sky-900  dark:to-sky-900/60 dark:hover:bg-sky-900/40 md:shadow-2xl md:shadow-black/60"
                                : "hover:bg-sky-300/20"
                        }  min-w-fit cursor-pointer whitespace-nowrap focus:outline-none md:rounded-l-xl`}
                        onClick={() => handleChange(0)}
                    >
                        Quote Request
                    </button>
                    <button
                        className={`p-4 ${
                            value === 1
                                ? " bg-gradient-radial from-sky-400  via-sky-400 to-sky-500 text-white dark:from-sky-900 dark:via-sky-900 dark:to-sky-900/60 dark:hover:bg-sky-900/40  md:shadow-2xl md:shadow-black/60"
                                : "hover:bg-sky-300/20"
                        }  min-w-fit cursor-pointer whitespace-nowrap focus:outline-none`}
                        onClick={() => handleChange(1)}
                    >
                        General Inquiry
                    </button>
                    <button
                        className={`p-4 ${
                            value === 2
                                ? " bg-gradient-radial from-sky-400  via-sky-400 to-sky-500 text-white dark:from-sky-900 dark:via-sky-900 dark:to-sky-900/60 dark:hover:bg-sky-900/40  md:shadow-2xl md:shadow-black/60"
                                : "hover:bg-sky-300/20"
                        }  min-w-fit cursor-pointer whitespace-nowrap focus:outline-none md:rounded-r-xl`}
                        onClick={() => handleChange(2)}
                    >
                        Hire Me
                    </button>
                </div>
                <div className="mx-auto max-w-[80%] px-2 text-center text-sm text-gray-400">
                    {value === 0 && (
                        <div className="mt-2 ">
                            I am interested in recieving a quote for a personal
                            project.
                        </div>
                    )}
                    {value === 1 && (
                        <div className="mt-2 ">
                            I am interested in persuing a collaboration with, or
                            other gereal inquiry.
                        </div>
                    )}
                    {value === 2 && (
                        <div className="mt-2 ">
                            I am a company looking to hire a developer, and
                            would like to set up a time to speak.
                        </div>
                    )}{" "}
                </div>
            </div>
            <TabPanel value={value} index={0}>
                <GetQuote onSubmit={onSubmit} store={store} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <GeneralInquiry onSubmit={onSubmit} store={store} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <HireMe onSubmit={onSubmit} store={store} />
            </TabPanel>
        </div>
    )
}
