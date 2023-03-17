import { motion } from "framer-motion"

const Timeline = () => {
    return (
        <div className="relative mx-auto flex h-fit max-w-7xl flex-col items-center justify-evenly px-10 text-center md:text-left">
            <h3 className="relative top-24 z-50 text-2xl uppercase tracking-[20px] text-gray-500 dark:text-white">
                Timeline
            </h3>
            <div
                id="lineup-container"
                className="relative w-full rounded-lg bg-zinc-200 px-2 py-4 dark:bg-slate-800 dark:text-zinc-200"
            >
                <h2 className="mt-20">Lineup</h2>
                <p>
                    Follow the timetable and stage to ensure you don't miss your
                    favorite artist
                </p>
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
                        {/* <!-- Day 1 --> */}
                        <div id="lineup-col-content" className="">
                            <h4 className="my-4 rounded-lg bg-white p-2 dark:bg-zinc-900">
                                1st of July
                            </h4>
                        </div>
                        <div id="empty-right-1"></div>

                        <div className="text-right">
                            <div className="font-bold">Blink 182</div>
                            <div className="text-zinc-400">
                                6PM - Sage Stage
                            </div>
                        </div>
                        <div id="empty-right-2"></div>

                        <div id="empty-left-1"></div>
                        <div className="">
                            <div className="font-bold">Death Cab For Cutie</div>
                            <div className="text-zinc-400">
                                3PM - Teal Stage
                            </div>
                        </div>

                        {/* <!-- Day 2 --> */}
                        <div id="lineup-col-content" className="">
                            <h4 className="my-4 rounded-lg bg-white p-2 dark:bg-zinc-900">
                                1st of July
                            </h4>
                        </div>
                        <div id="empty-right-1"></div>

                        <div className="text-right">
                            <div className="font-bold">Blink 182</div>
                            <div className="text-zinc-400">
                                6PM - Sage Stage
                            </div>
                        </div>
                        <div id="empty-right-2"></div>

                        <div id="empty-left-1"></div>
                        <div className="">
                            <div className="font-bold">Death Cab For Cutie</div>
                            <div className="text-zinc-400">
                                3PM - Teal Stage
                            </div>
                        </div>

                        <div className="text-right">
                            <div className="font-bold">Blink 182</div>
                            <div className="text-zinc-400">
                                6PM - Sage Stage
                            </div>
                        </div>
                        <div id="empty-right-2"></div>

                        <div id="empty-left-1"></div>
                        <div className="">
                            <div className="font-bold">Death Cab For Cutie</div>
                            <div className="text-zinc-400">
                                3PM - Teal Stage
                            </div>
                        </div>

                        <div className="text-right">
                            <div className="font-bold">Blink 182</div>
                            <div className="text-zinc-400">
                                6PM - Sage Stage
                            </div>
                        </div>
                        <div id="empty-right-2"></div>

                        <div id="empty-left-1"></div>
                        <div className="">
                            <div className="font-bold">Death Cab For Cutie</div>
                            <div className="text-zinc-400">
                                3PM - Teal Stage
                            </div>
                        </div>

                        <div className="text-right">
                            <div className="font-bold">Blink 182</div>
                            <div className="text-zinc-400">
                                6PM - Sage Stage
                            </div>
                        </div>
                        <div id="empty-right-2"></div>

                        <div id="empty-left-1"></div>
                        <div className="">
                            <div className="font-bold">Death Cab For Cutie</div>
                            <div className="text-zinc-400">
                                3PM - Teal Stage
                            </div>
                        </div>

                        <div className="text-right">
                            <div className="font-bold">Blink 182</div>
                            <div className="text-zinc-400">
                                6PM - Sage Stage
                            </div>
                        </div>
                        <div id="empty-right-2"></div>

                        <div id="empty-left-1"></div>
                        <div className="">
                            <div className="font-bold">Death Cab For Cutie</div>
                            <div className="text-zinc-400">
                                3PM - Teal Stage
                            </div>
                        </div>

                        <div className="text-right">
                            <div className="font-bold">Blink 182</div>
                            <div className="text-zinc-400">
                                6PM - Sage Stage
                            </div>
                        </div>
                        <div id="empty-right-2"></div>

                        <div id="empty-left-1"></div>
                        <div className="">
                            <div className="font-bold">Death Cab For Cutie</div>
                            <div className="text-zinc-400">
                                3PM - Teal Stage
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="font-bold">Blink 182</div>
                            <div className="text-zinc-400">
                                6PM - Sage Stage
                            </div>
                        </div>
                        <div id="empty-right-2"></div>

                        <div id="empty-left-1"></div>
                        <div className="">
                            <div className="font-bold">Death Cab For Cutie</div>
                            <div className="text-zinc-400">
                                3PM - Teal Stage
                            </div>
                        </div>

                        <div className="text-right">
                            <div className="font-bold">Blink 182</div>
                            <div className="text-zinc-400">
                                6PM - Sage Stage
                            </div>
                        </div>
                        <div id="empty-right-2"></div>

                        <div id="empty-left-1"></div>
                        <div className="">
                            <div className="font-bold">Death Cab For Cutie</div>
                            <div className="text-zinc-400">
                                3PM - Teal Stage
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline
