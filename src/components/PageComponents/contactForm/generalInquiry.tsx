import * as React from "react"
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { FaUserAstronaut } from "react-icons/fa"
import { format, utcToZonedTime } from "date-fns-tz"
import { MdEmail } from "react-icons/md"

export default ({
    onSubmit,
    store,
}: {
    store: { name: string; email: string; developer: string; message: string }
    onSubmit: SubmitHandler<{
        name: string
        email: string
        developer: string
        message: string
    }>
}) => {
    const updatedStore = {
        ...store,
        contactType: "General Inquiry",
    }
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: updatedStore,
        mode: "onChange",
    })

    const handleFormSubmit = async (data: any) => {
        const targetTimeZone = "America/Chicago"
        const submissionTimestamp = new Date().toISOString()
        const date = format(new Date(), "MM-dd-yyyy, h:mma")
        const myConvertedDateandTime = format(
            utcToZonedTime(submissionTimestamp, targetTimeZone),
            "MM-dd-yyyy, h:mma"
        )

        const updatedData = {
            ...data,
            submissionTimestamp,
            date,
            myConvertedDateandTime,
        }

        onSubmit(updatedData)
        console.log(updatedData)
        reset({
            name: "",
            email: "",
            developer: "no",
            message: "",
        })
    }

    return (
        <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="my-5 mx-auto flex w-full flex-col justify-center md:w-4/5 xl:w-3/4"
        >
            <div className="floating-label-container flex h-fit flex-col md:mx-4">
                <FaUserAstronaut
                    alt="user icon"
                    className="icon-left absolute mr-auto ml-2 h-8 w-8 translate-y-[18px] fill-black/20 transition-all duration-[400ms] ease-in-out hover:fill-black/30 focus:fill-black/50 dark:fill-white/40 dark:hover:fill-white/60 dark:focus:fill-white/80"
                />
                <label
                    htmlFor="name"
                    className="floating-label z-10 mb-2 w-fit text-xl text-gray-400 dark:text-white/30"
                >
                    Name*
                </label>
                <input
                    type="text"
                    {...register("name", { required: true })}
                    name="name"
                    id="name"
                    placeholder=" "
                    className="rounded border-0 bg-gray-300/10  font-normal outline-none focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-400/50 dark:bg-black/25 dark:text-white "
                />
                {errors.name && (
                    <p className="text-red-500">Name is required.</p>
                )}
            </div>

            <div className="floating-label-container flex h-fit flex-col md:mx-4">
                <MdEmail
                    alt="email input icon"
                    className="icon-left absolute mr-auto ml-2 h-8 w-8 translate-y-[18px] fill-black/20 transition-all duration-[400ms] ease-in-out hover:fill-black/30 focus:fill-black/50 dark:fill-white/40 dark:hover:fill-white/60 dark:focus:fill-white/80"
                />
                <label
                    htmlFor="email"
                    className="floating-label z-10 mb-2 w-fit text-xl text-gray-400 dark:text-white/30"
                >
                    Email*
                </label>
                <input
                    type="email"
                    {...register("email", { required: true })}
                    name="email"
                    id="email"
                    placeholder=" "
                    className="w-full rounded border-transparent bg-gray-300/10 font-normal outline-none focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-400/50 dark:border-none dark:bg-black/25 dark:text-white "
                />
                {errors.email && (
                    <p className="text-red-500">Email is required.</p>
                )}
            </div>

            <fieldset className="flex w-full">
                <div className="mx-auto flex items-center sm:ml-10 sm:mr-auto">
                    {/* developer */}
                    <div className="flex-col">
                        <legend className="mb-2 first-letter:text-lg">
                            Are you a developer?
                        </legend>
                        <div className=" flex items-center justify-center space-x-4">
                            <input
                                type="radio"
                                {...register("developer", { required: true })}
                                name="developer"
                                id="developer_yes"
                                value="yes"
                                className=" bg-gray-100 text-sky-600 outline-none focus:border-transparent focus:outline-none focus:ring-2  focus:ring-sky-400/50 dark:bg-black/30 dark:focus:bg-sky-400"
                            />
                            <label
                                htmlFor="developer_yes"
                                className={` cursor-pointer text-gray-400 dark:text-white`}
                            >
                                Yes
                            </label>

                            <input
                                type="radio"
                                {...register("developer", { required: true })}
                                name="developer"
                                id="developer_no"
                                value="no"
                                defaultChecked
                                className=" bg-gray-100 text-sky-600 outline-none focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-400/50  dark:bg-black/30 dark:focus:bg-sky-400"
                            />
                            <label
                                htmlFor="developer_no"
                                className={` cursor-pointer text-gray-400 dark:text-white`}
                            >
                                No
                            </label>
                        </div>
                    </div>
                </div>
            </fieldset>

            <div className="floating-label-container mb-10 mt-6 flex h-fit flex-col md:mx-4">
                <label
                    htmlFor="message"
                    className="floating-label z-10 mb-2 w-fit text-xl text-gray-400 dark:text-white/30"
                >
                    Custom Message*
                </label>
                <textarea
                    {...register("message", { required: true })}
                    name="message"
                    id="message"
                    placeholder=" "
                    rows="4"
                    className="max-h-[200px] rounded-lg border-transparent bg-gray-300/10 font-normal focus:border-transparent focus:ring-2 focus:ring-sky-400/50 dark:border-none dark:bg-black/25 dark:text-white"
                ></textarea>
                {errors.message && (
                    <p className="text-red-500">Message is required.</p>
                )}
            </div>

            <div className="mt-6 flex justify-center md:justify-start">
                <button
                    type="submit"
                    className={`mx-4 w-40 rounded py-2 px-4 text-2xl ${
                        isValid
                            ? "bg-pink-500 text-white hover:bg-pink-600"
                            : "cursor-not-allowed bg-pink-500/10 text-gray-500/30"
                    }`}
                    disabled={!isValid}
                >
                    Submit
                </button>
            </div>
        </form>
    )
}
