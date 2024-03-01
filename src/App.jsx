import.meta.hot
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import { navbar as Navbar } from "./components/navbar"
import { useState, useContext, useEffect, useLayoutEffect } from "react"
import { AuthContextProvider } from "./context/AuthContext"
import { Home, SignIn, Signup, Dashboard } from "./pages/index"
import { useAuthContext } from "./hooks/useAuthContext.js"
import { FaSun } from "react-icons/fa"
import { BsFillMoonStarsFill } from "react-icons/bs"
import { Tooltip } from "react-tooltip"
import MobileMenu from "./components/mobileMenu"
import { Helmet } from "react-helmet"

import { useTheme } from "./hooks/useThemeContext"
import Footer from "./components/Footer"

function App({ children }) {
    const { user, authIsReady } = useAuthContext()
    const { mode, changeMode } = useTheme()

    const darkModeToggle = () => {
        if (mode === "light") {
            changeMode("dark")
            document.body.classList.add("dark")
            localStorage.theme = "dark"
        } else {
            changeMode("light")
            document.body.classList.remove("dark")
            localStorage.theme = "light"
        }
    }
    useLayoutEffect(() => {
        if (localStorage.theme === "dark") {
            document.body.classList.add("dark")
            changeMode("dark")
        } else {
            document.body.classList.remove("dark")
            changeMode("light")
        }
    }, [])

    return (
        <>
            <Helmet>
                <title>Michael Martell - Portfolio</title>
                <meta
                    name="Michael Martell's Developer Portfolio Website"
                    content="A collection of projects, skills, and education."
                />
            </Helmet>
            <main
                className=" relative h-full w-screen bg-slate-50 from-[#0D243B] to-[#0A1120] pb-[80px] dark:bg-gradient-to-bl dark:text-white"
                // style={{ maxWidth: "100dvw", overflowX: "hidden" }}
            >
                {/* Developer Notes*/}
                {/* <div className="text-red fixed top-0 z-[9999999999999999999999999999999999] mb-20 h-fit max-h-[180px] w-full overflow-y-auto scroll-auto bg-black p-5 text-white">
                    <h2 className=" mb-2 block text-2xl text-slate-300">
                        Developer Notes:
                    </h2>{" "}
                    <hr className="w-full border-gray-800" />
                    <span className="flex h-fit flex-wrap text-2xl ">
                        <h2 className=" text-lg text-slate-200 ">Projects:</h2>{" "}
                        <hr className="w-full border-gray-800" />
                        <h2 className=" text-lg text-slate-400 ">
                            Skills:
                        </h2>{" "}
                        <h2 className="mt-2 block w-screen text-lg text-slate-400">
                            Education
                        </h2>{" "}
                        <h2 className="mt-2 block w-screen text-lg text-slate-400">
                            Timeline
                        </h2>{" "}
                        <h2 className="mt-2 block w-screen text-lg text-slate-400">
                            Contact
                        </h2>{" "}
                        <p className="ml-1 text-[18px] text-gray-600 line-through">
                            Maybe add a photo for contact me.
                        </p>{" "}
                        <hr className="w-full border-gray-800" />
                    </span>
                    <hr className="w-full border-gray-800" />
                    <span className="flex h-fit flex-wrap text-2xl text-slate-700 dark:text-white">
                        <h2 className="text-lg text-slate-400">Other:</h2>{" "}
                        <p className="ml-1 text-[18px]">
                            Create an open / close state for dev notes.
                        </p>{" "}
                    </span>
                </div> */}
                {/* End Developer Notes*/}

                {authIsReady && (
                    <BrowserRouter>
                        <Navbar />
                        <div className="fixed right-0 top-1/3 z-[40]">
                            <div
                                id="dark-mode-toggle"
                                onClick={() => darkModeToggle()}
                                className="z-[90]  h-16 w-[50px] cursor-pointer rounded-l-xl bg-zinc-200 text-center align-middle text-3xl text-zinc-400 shadow-xl hover:bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-600 dark:hover:bg-zinc-800"
                            >
                                <FaSun
                                    className="z-100 m-auto h-full justify-center dark:hidden"
                                    data-tooltip-id="modeToggleDark"
                                    data-tooltip-content="Click for darkmode"
                                    data-tooltip-delay-show={1000}
                                    data-tooltip-offset={20}
                                />
                                <Tooltip
                                    id="modeToggleDark"
                                    place="left"
                                    className="bg-gray-200 text-base font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                                <BsFillMoonStarsFill
                                    className="z-50 m-auto hidden h-full dark:block"
                                    data-tooltip-id="modeToggleLight"
                                    data-tooltip-content="Click for lightmode"
                                    data-tooltip-delay-show={1000}
                                    data-tooltip-offset={20}
                                />
                                <Tooltip
                                    id="modeToggleLight"
                                    place="left"
                                    className="bg-gray-200 text-base font-semibold text-slate-700 dark:bg-black dark:text-white"
                                />
                            </div>
                        </div>
                        <Routes>
                            <Route path="/*" element={<Home />} />
                            {/* <Route path="/signin" element={<SignIn />} />
                            <Route path="/signup" element={<Signup />} /> */}
                            {/* {user && (
                                <Route
                                    path="/dashboard"
                                    element={<Dashboard />}
                                />
                            )}
                            {!user && (
                                <Route
                                    path="/dashboard"
                                    element={<Navigate to="/signin" />}
                                />
                            )} */}
                        </Routes>
                    </BrowserRouter>
                )}
            </main>
            <section
                className=" h-fit w-screen dark:bg-[#111111] dark:text-white"
                style={{ maxWidth: "100dvw" }}
            >
                <Footer />
            </section>
        </>
    )
}

export default App
