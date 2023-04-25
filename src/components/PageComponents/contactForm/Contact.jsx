import React from "react"
import { useForm } from "react-hook-form"
import TabGroup from "./contactTabGroup"

import { FaInfoCircle } from "react-icons/fa"
import { Tooltip } from "react-tooltip"

const Contact = () => {
    // const { register, handleSubmit } = useForm()
    // const onSubmit = (data) => console.log(data)

    return (
        <div className=" bg-white p-4 dark:bg-gray-800">
            <div className="titlebar">
                {" "}
                <h3 className=" z-50 mx-auto mt-24 flex w-fit text-center text-2xl uppercase tracking-[20px] text-gray-500 dark:text-white md:whitespace-nowrap">
                    Contact Me
                </h3>
            </div>
            {/* Subheader */}
            <div
                className=" relative mt-4 w-full rounded-2xl  md:px-2
            "
            >
                <p className="mb-6 mt-24 text-center text-lg dark:text-gray-400 md:px-10">
                    I'd love to hear from you! Please feel free to reach out.
                </p>
                {/* Form */}
                <TabGroup />
            </div>
            <div
                className="ml-auto flex w-fit cursor-help"
                data-tooltip-id="contactInfo"
                data-tooltip-content="This contact form uses Google Firebase as a database, Trigger-Email serverless
                        functions and sendgrid to send emails. Any information obtained by this form will not be used for any other purpose than to contact you. I will never sell your information to any third party."
                data-tooltip-delay-show={100}
            >
                <FaInfoCircle className="z-[1000]  ml-auto mt-4 mr-2 flex h-6 w-6 cursor-help text-gray-400 dark:text-gray-500" />
                <Tooltip
                    id="contactInfo"
                    place="left"
                    className="z-[1000] flex  h-fit max-w-[300px] rounded bg-gray-200 text-sm font-semibold text-slate-700 dark:bg-zinc-900 dark:text-white"
                />
            </div>
        </div>
    )
}

export default Contact
