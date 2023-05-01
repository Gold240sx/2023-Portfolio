import * as React from "react"
import { useState, useEffect } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { MdAutoAwesome, MdEmail } from "react-icons/md"
import { FaUserNinja } from "react-icons/fa"
import { format, utcToZonedTime } from "date-fns-tz"
import { DatePicker } from "../../datePicker"

export default ({
    onSubmit,
    store,
}: {
    store: {
        email: string
        message: string
        projectType: string
        projectName: string
        contactName: string
        submissionTimestamp: string
        date: string
        recievedDateandTime: any
        deadline: string
    }
    onSubmit: SubmitHandler<{
        email: string
        message: string
        projectType: string
        deadline: string
    }>
}) => {
    const updatedStore = {
        ...store,
        contactType: "Get a Quote",
    }
    const {
        handleSubmit,
        register,
        setValue,
        reset,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: updatedStore,
        mode: "onChange",
    })

    const [deadline, setDeadline] = useState("")

    // For the tailwind-elements datepicker
    const handleDateChange = (date) => {
        setDeadline(date)
        setValue("deadline", date)
    }

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
            recievedDateandTime: myConvertedDateandTime,
            deadline,
        }

        onSubmit(updatedData)
        console.log(updatedData)
        reset({
            projectName: "",
            contactName: "",
            email: "",
            projectType: "",
            message: "",
        })
    }

    // Update the form value when the deadline state changes
    useEffect(() => {
        setValue("deadline", deadline)
    }, [deadline, setValue])

    return (
        <section className="flex h-full w-full flex-col items-center justify-center">
            <div className="quoteDetails">
                <h1 className="mx-[10%] mt-6 text-4xl font-bold">
                    Get a Quote
                </h1>
                <p className=" mx-[12%] my-6 text-gray-400/80">
                    The Project Quote Estimator is currently under developement.
                    In the meanwhile, Please fill out the form below describing
                    the project you are working on and I'll get back to you as
                    soon as possible!
                </p>
            </div>

            <form
                onSubmit={handleSubmit(handleFormSubmit)}
                className="my-5 flex w-full flex-col md:w-4/5 xl:w-3/4"
            >
                {/* Project Name */}
                <div className="floating-label-container flex h-fit flex-col md:mx-4">
                    <MdAutoAwesome
                        alt="projectName icon"
                        className="icon-left absolute mr-auto ml-2 h-8 w-8 translate-y-[18px] fill-black/20 transition-all duration-[400ms] ease-in-out hover:fill-black/30 focus:fill-black/50 dark:fill-white/40 dark:hover:fill-white/60 dark:focus:fill-white/80"
                    />
                    <label
                        htmlFor="projectName"
                        className="floating-label z-10 mb-2 w-fit text-xl text-gray-400 dark:text-white/30"
                    >
                        Project Name
                    </label>
                    <input
                        type="text"
                        {...register("projectName", { required: true })}
                        name="projectName"
                        id="projectName"
                        placeholder=" "
                        className="rounded border-0 bg-gray-300/10  font-normal outline-none focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-400/50 dark:bg-black/25 dark:text-white "
                    />
                    {errors.company && (
                        <p className="text-red-500">Company is required.</p>
                    )}
                </div>

                {/* Name */}
                <div className="floating-label-container flex h-fit flex-col md:mx-4">
                    <FaUserNinja
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
                        alt="email icon"
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
                        className="rounded border-0 bg-gray-300/10  font-normal outline-none focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-400/50 dark:bg-black/25 dark:text-white "
                    />
                    {errors.email && (
                        <p className="text-red-500">Email is required.</p>
                    )}
                </div>

                {/* Project Type */}
                {/* <div className="floating-label-container flex h-fit flex-col md:mx-4">
                    <label
                        htmlFor="projectType"
                        className="floating-label z-10 mb-2 w-fit text-xl text-gray-400 dark:text-white/30"
                    >
                        Project Type
                    </label>
                    <select
                        {...register("projectType", { required: true })}
                        name="projectType"
                        id="projectType"
                        className="rounded border-0 bg-gray-300/10  font-normal outline-none focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-400/50 dark:bg-black/25 dark:text-white "
                    >
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile Development">
                            Mobile Development
                        </option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.projectType && (
                        <p className="text-red-500">
                            Project Type is required.
                        </p>
                    )}
                </div> */}
                <div className="my-2 mt-4 flex flex-col md:mx-4">
                    <p className=" mb-8 text-xl text-gray-400 dark:text-white/30">
                        Project Type
                    </p>
                    <div className="mx-[10%]  flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-center">
                        {[
                            { label: "Website", value: "website" },
                            { label: "Web App", value: "webapp" },
                            { label: "Mobile App", value: "mobileapp" },
                            { label: "Other", value: "other" },
                        ].map(({ label, value }) => (
                            <label
                                key={value}
                                htmlFor={`projectType-${value}`}
                                className="mr-4 mb-2 inline-flex cursor-pointer items-center"
                            >
                                <input
                                    type="radio"
                                    {...register("projectType")}
                                    name="projectType"
                                    id={`projectType-${value}`}
                                    value={value}
                                    defaultChecked={value === "website"}
                                    className="darkbg-sky-400/50 cursor-pointer select-none border-none bg-slate-200 text-sky-400 outline-none dark:bg-black/25 dark:text-sky-400"
                                />
                                <span className="ml-2 cursor-pointer text-gray-400 dark:text-white/70">
                                    {label}
                                </span>
                            </label>
                        ))}
                    </div>

                    {/* Project Deadline DatePicker */}
                    <label
                        htmlFor="projectDeadline"
                        className="floating-label z-10 mt-8 w-fit text-xl text-gray-400 dark:text-white/30"
                    >
                        Project Deadline
                    </label>
                    <DatePicker onChange={handleDateChange} />

                    {/* Message */}
                    <div className="floating-label-container mb-10 mt-6 flex h-fit flex-col">
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

                    {errors.projectType && (
                        <p className="text-red-500">
                            Project Type is required.
                        </p>
                    )}
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
                </div>
            </form>
        </section>
    )
}
