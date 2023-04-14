import * as React from "react"
import { useState, useEffect } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { FaUserAstronaut, FaUserTie } from "react-icons/fa"
// import { addDays, format } from "date-fns/fp"
import { format, utcToZonedTime } from "date-fns-tz"
import { MdOutlineWork, MdEmail } from "react-icons/md"

export default ({
    onSubmit,
    store,
}: {
    store: {
        company: string
        email: string
        contactName: string
        position: string
        customPosition: string
        message: string
        submissionTimestamp: string
        date: string
        recievedDateandTime: any
    }
    onSubmit: SubmitHandler<{
        company: string
        email: string
        position: string
        message: string
    }>
}) => {
    const updatedStore = {
        ...store,
        contactType: "Hire Me",
    }
    const {
        handleSubmit,
        register,
        reset,
        setValue,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: updatedStore,
        mode: "onChange",
    })

    const [showCustomPosition, setShowCustomPosition] = useState(false)

    const handlePositionChange = (e: any) => {
        const isOtherSelected = e.target.value === "Other"
        setShowCustomPosition(isOtherSelected)
    }

    const handleFormSubmit = (data: any) => {
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
        console.log(data)

        reset({
            company: "",
            contactName: "",
            email: "",
            position: "",
            customPosition: "",
            message: "",
        })
    }

    return (
        <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="my-5 mx-auto flex w-full flex-col md:w-4/5 xl:w-3/4"
        >
            {/* Company */}
            <div className="floating-label-container flex h-fit flex-col md:mx-4">
                <MdOutlineWork
                    alt="Company icon"
                    className="icon-left absolute mr-auto ml-2 h-8 w-8 translate-y-[18px] fill-black/20 transition-all duration-[400ms] ease-in-out hover:fill-black/30 focus:fill-black/50 dark:fill-white/40 dark:hover:fill-white/60 dark:focus:fill-white/80"
                />
                <label
                    htmlFor="company"
                    className="floating-label z-10 mb-2 w-fit text-xl text-gray-400 dark:text-white/30"
                >
                    Company
                </label>
                <input
                    type="text"
                    {...register("company", { required: true })}
                    name="company"
                    id="company"
                    placeholder=" "
                    className="rounded border-0 bg-gray-300/10  font-normal outline-none focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-400/50 dark:bg-black/25 dark:text-white "
                />
                {errors.company && (
                    <p className="text-red-500">Company is required.</p>
                )}
            </div>

            {/* Name */}
            <div className="floating-label-container flex h-fit flex-col md:mx-4">
                <FaUserTie
                    alt="user icon"
                    className="icon-left absolute mr-auto ml-2 h-8 w-8 translate-y-[18px] scale-90 fill-black/20 transition-all duration-[400ms] ease-in-out hover:fill-black/30 focus:fill-black/50 dark:fill-white/40 dark:hover:fill-white/60 dark:focus:fill-white/80"
                />
                <label
                    htmlFor="contactName"
                    className="floating-label z-10 mb-2 w-fit text-xl text-gray-400 dark:text-white/30"
                >
                    Contact Name
                </label>
                <input
                    type="text"
                    {...register("contactName", { required: true })}
                    name="contactName"
                    id="contactName"
                    placeholder=" "
                    className="rounded border-0 bg-gray-300/10  font-normal outline-none focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-400/50 dark:bg-black/25 dark:text-white "
                />
                {errors.contactName && (
                    <p className="text-red-500">Name is required.</p>
                )}
            </div>

            {/* Email */}
            <div className="floating-label-container flex h-fit flex-col md:mx-4">
                <MdEmail
                    alt="email input icon"
                    className="icon-left absolute mr-auto ml-2 h-8 w-8 translate-y-[18px] fill-black/20 transition-all duration-[400ms] ease-in-out hover:fill-black/30 focus:fill-black/50 dark:fill-white/40 dark:hover:fill-white/60 dark:focus:fill-white/80"
                />
                <label
                    htmlFor="email"
                    className="floating-label z-10 mb-2 w-fit text-xl text-gray-400 dark:text-white/30"
                >
                    Email
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

            {/* Position */}
            <div className="floating-label-container flex h-fit flex-col md:mx-4">
                <label
                    htmlFor="position"
                    className="floating-label z-10 mb-2 w-fit text-xl text-gray-400 dark:text-white/70"
                >
                    Position
                </label>
                <select
                    {...register("position", { required: true })}
                    name="position"
                    id="position"
                    onChange={handlePositionChange}
                    className="w-full rounded border-transparent bg-gray-300/10 font-normal outline-none focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-400/50 dark:border-none dark:bg-black/25 dark:text-white"
                >
                    <option value="">Select a position</option>
                    <option value="Front End Developer">
                        Front End Developer
                    </option>
                    <option value="Full Stack Developer">
                        Full Stack Developer
                    </option>
                    <option value="Back End Developer">
                        Back End Developer
                    </option>
                    <option value="Other">Other</option>
                </select>
                {errors.position && (
                    <p className="text-red-500">Position is required.</p>
                )}

                {showCustomPosition && (
                    <div className="mt-4">
                        <label
                            htmlFor="customPosition"
                            className="mb-2 block text-xl text-gray-400 dark:text-white/70"
                        >
                            Custom Position
                        </label>
                        <input
                            type="text"
                            {...register("customPosition")}
                            name="customPosition"
                            id="customPosition"
                            placeholder="Enter custom position (Note: *SALES POSITIONS WILL BE IGNORED*)"
                            className="w-full rounded border-transparent bg-gray-300/10 font-normal outline-none placeholder:text-gray-300 placeholder:text-white/30 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:placeholder:opacity-0 dark:border-none dark:bg-black/25 dark:text-white "
                        />
                    </div>
                )}
            </div>

            {/* Message */}
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
