import React, { useState, useEffect } from "react"

const MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export const DatePicker = ({ onChange }) => {
    const [showDatepicker, setShowDatepicker] = useState(false)
    const [datePickerValue, setDatePickerValue] = useState("")
    const [dateValue, setDateValue] = useState("")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")
    const [noOfDays, setNoOfDays] = useState([])
    const [blankDays, setBlankDays] = useState([])
    const [timeoutId, setTimeoutId] = useState(null)

    useEffect(() => {
        const initDate = () => {
            let today = new Date()
            setMonth(today.getMonth())
            setYear(today.getFullYear())
            setDatePickerValue(today.toDateString())
        }
        initDate()
    }, [])

    useEffect(() => {
        const getNoOfDays = () => {
            let daysInMonth = new Date(year, month + 1, 0).getDate()

            let dayOfWeek = new Date(year, month).getDay()
            let blankdaysArray = []
            for (var i = 1; i <= dayOfWeek; i++) {
                blankdaysArray.push(i)
            }

            let daysArray = []
            for (var i = 1; i <= daysInMonth; i++) {
                daysArray.push(i)
            }

            setBlankDays(blankdaysArray)
            setNoOfDays(daysArray)
        }

        getNoOfDays()
    }, [year, month])

    const isToday = (date) => {
        const today = new Date()
        const d = new Date(year, month, date)

        return today.toDateString() === d.toDateString()
    }

    const handleInputBlur = () => {
        // Set a timeout to close the datepicker
        const id = setTimeout(() => {
            setShowDatepicker(false)
        }, 150)

        // Save the timeout ID so it can be cleared later
        setTimeoutId(id)
    }

    const getDateValue = (date, disabled) => {
        if (disabled) return
        let selectedDate = new Date(year, month, date)
        setDatePickerValue(selectedDate.toDateString())

        setDateValue(
            selectedDate.getFullYear() +
                "-" +
                ("0" + (selectedDate.getMonth() + 1)).slice(-2) +
                "-" +
                ("0" + selectedDate.getDate()).slice(-2)
        )

        // Clear the timeout if it exists
        if (timeoutId) {
            clearTimeout(timeoutId)
        }

        setShowDatepicker(false)
    }

    useEffect(() => {
        onChange(datePickerValue)
    }, [datePickerValue])

    return (
        <div className="flex h-full items-center justify-center">
            <div className="antialiased">
                <div className="container mx-auto px-4 pt-4">
                    <div className="mb-5 w-64">
                        <label
                            htmlFor="datepicker"
                            className="text-semibold mb-1 block"
                        >
                            Select Date
                        </label>
                        <div className="relative select-none">
                            <input
                                type="text"
                                readOnly
                                value={datePickerValue}
                                onClick={() =>
                                    setShowDatepicker(!showDatepicker)
                                }
                                onBlur={() => handleInputBlur()}
                                className=" w-full cursor-pointer select-none rounded-lg border-2 border-transparent bg-slate-100/50 py-3 pl-4 pr-10 text-base font-medium leading-none text-gray-500 shadow-sm transition duration-150 ease-in-out focus:border-sky-300 focus:outline-none focus:ring-0 dark:bg-black/25"
                                placeholder="Select date"
                            />

                            <div className="pointer-events-none absolute top-0 right-0 px-3 py-2">
                                <svg
                                    className="h-6 w-6 translate-y-0.5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>

                            <div
                                className={`absolute top-0 left-0 mt-12 rounded-lg bg-white p-4 shadow transition-all duration-300 ease-in-out dark:bg-[#141514] dark:text-white ${
                                    showDatepicker
                                        ? "z-50 scale-100 opacity-100 shadow-2xl  shadow-black/20"
                                        : "pointer-events-none  absolute h-0 scale-95 opacity-0"
                                }`}
                                style={{ width: "17rem" }}
                            >
                                <div className="mb-2 flex items-center justify-between ">
                                    <div>
                                        <span className="text-lg font-bold text-gray-800 dark:text-white">
                                            {MONTH_NAMES[month]}
                                        </span>
                                        <span className="ml-1 text-lg font-normal text-gray-600 dark:text-gray-400">
                                            {year}
                                        </span>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            className="hover:bg-gray-20 inline-flex cursor-pointer rounded-full p-1 transition duration-100 ease-in-out "
                                            disabled={month === 0}
                                            onClick={() => {
                                                setMonth(month - 1)
                                            }}
                                        >
                                            <svg
                                                className="inline-flex h-6 w-6 text-gray-500 dark:text-gray-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 19l-7-7 7-7"
                                                />
                                            </svg>
                                        </button>
                                        <button
                                            type="button"
                                            className=" inline-flex cursor-pointer rounded-full p-1 transition duration-100 ease-in-out hover:bg-gray-200 "
                                            disabled={month === 11}
                                            onClick={() => {
                                                setMonth(month + 1)
                                            }}
                                        >
                                            <svg
                                                className="inline-flex h-6 w-6 text-gray-500 dark:text-gray-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="-mx-1 mb-3 flex flex-wrap">
                                    {DAYS.map((day, index) => (
                                        <div
                                            key={index}
                                            style={{ width: "14.26%" }}
                                            className="px-1"
                                        >
                                            <div className="text-center text-xs font-medium text-gray-800 dark:text-gray-200">
                                                {day}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="-mx-1 flex flex-wrap">
                                    {blankDays.map((_, index) => (
                                        <div
                                            key={index}
                                            style={{ width: "14.28%" }}
                                            className=" border border-transparent p-1 text-center text-sm"
                                        ></div>
                                    ))}
                                    {noOfDays.map((date, index) => {
                                        const d = new Date(year, month, date)
                                        d.setHours(0, 0, 0, 0)
                                        const today = new Date()
                                        today.setHours(0, 0, 0, 0)
                                        const disabled = d < today
                                        return (
                                            <div
                                                key={index}
                                                style={{ width: "14.28%" }}
                                                className="mb-1 px-1"
                                            >
                                                <div
                                                    onClick={() =>
                                                        getDateValue(
                                                            date,
                                                            disabled
                                                        )
                                                    }
                                                    className={`cursor-pointer rounded-full text-center text-sm leading-loose transition duration-100 ease-in-out
                                                        ${
                                                            isToday(date)
                                                                ? "bg-sky-400 pr-0.5 text-white dark:text-black"
                                                                : disabled
                                                                ? "text-gray-400 hover:bg-gray-50 active:bg-red-200 active:text-red-500 dark:text-gray-700 dark:hover:bg-black dark:active:bg-red-600"
                                                                : "text-gray-700 hover:bg-sky-100 dark:text-gray-200 dark:hover:bg-slate-700 dark:active:bg-slate-600"
                                                        }
                                                    `}
                                                >
                                                    {date}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
