import React from "react"
import GetQuote from "./getQuote"
import Generalinquiry from "./generalinquiry"
import HireMe from "./hireMe"
import Swal from "sweetalert2"

import { getFunctions, httpsCallable } from "firebase/functions"
import sgMail from "@sendgrid/mail"

interface TabPanelProps {
    children?: React.ReactNode
    index: any
    value: any
}

interface SendTestEmailResponse {
    success: boolean
    error?: string
}

// const handleSendTestEmail = async () => {
//     const functions = getFunctions()
//     const sendTestEmail = httpsCallable(functions, "sendTestEmail")

//     try {
//         const result = await sendTestEmail()
//         const responseData = result.data as SendTestEmailResponse
//         console.log("Email sent:", responseData.success)
//     } catch (error) {
//         console.error("Error sending email:", error)
//     }
// }
const handleSendTestEmail = async () => {
    const url =
        "https://us-central1-portfolio-23-b06dc.cloudfunctions.net/sendTestEmail"

    try {
        const response = await fetch(url, { method: "POST" })
        const responseData = await response.json()
        console.log("Email sent:", responseData.success)
    } catch (error) {
        console.error("Error sending email:", error)
    }
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
    const [store, setStore] = React.useState({})
    const [value, setValue] = React.useState(0)

    const handleChange = (newValue: number) => {
        setValue(newValue)
    }

    const onSubmit = (data: Partial<{}>) => {
        setStore({
            ...data,
        })

        // alert and thank the user for their submission using sweetalert2
        Swal.fire({
            title: "Thank you for Reaching Out!",
            text: "We will get back to you as soon as possible.",
            icon: "success",
            confirmButtonText: "OK",
        })

        // Upload all the data to the database

        //  reset all form fields within the store
        setStore({
            company: "",
            email: "",
            position: "",
            message: "",
            submissionTimestamp: "",
            date: "",
            recievedDateandTime: "",
            name: "",
            projectName: "",
            contactName: "",
            projectType: "",
            developer: "",
            deadline: "",
        })

        console.log("store reset")
    }

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
                <Generalinquiry onSubmit={onSubmit} store={store} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <HireMe onSubmit={onSubmit} store={store} />
            </TabPanel>
            <button
                className="h-fit w-fit rounded-xl bg-sky-700 p-4 text-white hover:bg-sky-600 active:bg-sky-700"
                onClick={handleSendTestEmail}
            >
                send email
            </button>
        </div>
    )
}
