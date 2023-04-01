import * as React from "react"
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { FaUserAstronaut, FaUserTie } from "react-icons/fa"
import { MdOutlineWork, MdEmail } from "react-icons/md"

export default ({
    onSubmit,
    store,
}: {
    store: { company: string; email: string; position: string; message: string }
    onSubmit: SubmitHandler<{
        company: string
        email: string
        position: string
        message: string
        date: string
    }>
}) => {
    const {
        handleSubmit,
        register,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: store,
    })

    const [showCustomPosition, setShowCustomPosition] = useState(false)
    const [submissionTimestamp, setSubmissionTimestamp] = useState("")

    const handlePositionChange = (e) => {
        const isOtherSelected = e.target.value === "Other"
        setShowCustomPosition(isOtherSelected)
    }

    const handleFormSubmit = (data) => {
        setSubmissionTimestamp(new Date().toISOString())
        onSubmit(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="">
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
                    className="floating-label z-10 mb-2 w-fit text-xl text-gray-400 dark:text-white/30"
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
                            htmlFor="custom_position"
                            className="mb-2 block text-xl text-gray-400 dark:text-white/30"
                        >
                            Custom Position
                        </label>
                        <input
                            type="text"
                            {...register("custom_position")}
                            name="custom_position"
                            id="custom_position"
                            placeholder="Enter custom position"
                            className="w-full rounded border-transparent bg-gray-300/10 font-normal outline-none placeholder:text-gray-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:placeholder:opacity-0 dark:border-none dark:bg-black/25 dark:text-white "
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

            {/*auto timestamp */}
            <input
                type="hidden"
                {...register("submissionTimestamp")}
                name="submissionTimestamp"
                id="submissionTimestamp"
                value={submissionTimestamp}
            />
            <div className="mt-6 flex justify-center md:justify-start">
                <button
                    type="submit"
                    className="mx-4 w-40 rounded bg-pink-500 py-2 px-4 text-2xl  text-white hover:bg-pink-600"
                >
                    Submit
                </button>
            </div>
        </form>
    )
}
