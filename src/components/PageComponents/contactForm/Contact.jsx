import React from "react"
import { useForm } from "react-hook-form"
import TabGroup from "./contactTabGroup"

const Contact = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className="bg-white p-4 dark:bg-gray-800">
            <div className="titlebar">
                {" "}
                <h3 className="relative top-24 z-50 w-full text-center text-2xl uppercase tracking-[20px] text-gray-500 dark:text-white md:whitespace-nowrap">
                    Contact Me
                </h3>
                {/* Subheader */}
                <div
                    id="lineup-container"
                    className="relative mt-4 w-full rounded-2xl md:p-2"
                >
                    <p className="mb-6 mt-24 text-center text-lg dark:text-gray-400 md:px-10">
                        I'd love to hear from you! Please feel free to reach
                        out.
                    </p>
                    {/* Form */}
                    <TabGroup />

                    {/* <div className="flex flex-col items-center justify-center">
                        {/* <form className="w-full max-w-lg">
                            <div className="-mx-3 mb-6 flex flex-wrap">
                                <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                                    <label
                                        className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                                        for="grid-first-name"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                                        id="grid-first-name"
                                        type="text"
                                        placeholder="Jane"
                                    />
                                    <p className="text-xs italic text-gray-600">
                                        Make it as long and as crazy as you'd
                                        like
                                    </p>

                                    <label
                                        className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                                        for="grid-last-name"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Doe"
                                    />
                                    <p className="text-xs italic text-gray-600">
                                        Make it as long and as crazy as you'd
                                        like
                                    </p>
                                </div>
                                <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                                    <label
                                        className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                                        for="grid-email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                                        id="grid-email"
                                        type="email"
                                        placeholder=""
                                    />
                                    <p className="text-xs italic text-gray-600">
                                        Make it as long and as crazy as you'd
                                        like
                                    </p>
                                    <label
                                        className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                                        for="grid-phone"
                                    >
                                        Phone
                                    </label>
                                    <input
                                        className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                                        id="grid-phone"
                                        type="text"
                                        placeholder="555-555-5555"
                                    />
                                    <p className="text-xs italic text-gray-600">
                                        Make it as long and as crazy as you'd
                                        like
                                    </p>
                                </div>

                                <div className="mb-6 flex w-full px-3 md:mb-0 md:w-1/2">
                                    <label
                                        className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                                        for="grid-company"
                                    >
                                        Company
                                    </label>
                                    <input
                                        className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                                        id="grid-company"
                                        type="text"
                                        placeholder="Company"
                                    />
                                    <p className="text-xs italic text-gray-600">
                                        Make it as long and as crazy as you'd
                                        like
                                    </p>

                                    <label
                                        className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                                        for="grid-project"
                                    >
                                        Project
                                    </label>
                                    <input
                                        className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                                        id="grid-project"
                                        type="text"
                                        placeholder="Project"
                                    />
                                    <p className="text-xs italic text-gray-600">
                                        Make it as long and as crazy as you'd
                                        like
                                    </p>
                                </div>
                            </div>
                        </form>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("firstName", {
                                    required: true,
                                    maxLength: 20,
                                })}
                            />
                            <input
                                {...register("lastName", {
                                    pattern: /^[A-Za-z]+$/i,
                                })}
                            />
                            <input
                                type="number"
                                {...register("age", { min: 18, max: 99 })}
                            />
                            <input type="submit" />
                        </form>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Contact
