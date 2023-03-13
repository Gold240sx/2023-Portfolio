import.meta.hot
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import { navbar as Navbar } from "./components/navbar"
import { useState, useContext, useEffect } from "react"
import { AuthContextProvider } from "./context/AuthContext"
import { Home, SignIn, Signup, Dashboard } from "./pages/index"
import { useAuthContext } from "./hooks/useAuthContext.js"
import { FaSun } from "react-icons/fa"
import { BsFillMoonStarsFill } from "react-icons/bs"

import { useTheme } from "./hooks/useThemeContext"

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
    useEffect(() => {
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
            <main className=" relative h-auto w-auto bg-slate-50 from-[#0D243B] to-[#0A1120] dark:bg-gradient-to-bl dark:text-white">
                {authIsReady && (
                    <BrowserRouter>
                        <Navbar />
                        <div className="fixed right-0">
                            <div
                                id="dark-mode-toggle"
                                onClick={() => darkModeToggle()}
                                className="mt-[100px]  h-16 w-[50px] cursor-pointer rounded-l-xl bg-zinc-100 text-center align-middle text-3xl text-zinc-400 dark:bg-zinc-900 dark:text-zinc-600"
                            >
                                <FaSun className="m-auto h-full justify-center dark:hidden" />
                                <BsFillMoonStarsFill className="m-auto hidden h-full dark:block" />
                            </div>
                        </div>
                        <Routes>
                            <Route path="/*" element={<Home />} />
                            <Route path="/signin" element={<SignIn />} />
                            <Route path="/signup" element={<Signup />} />
                            {user && (
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
                            )}
                        </Routes>
                    </BrowserRouter>
                )}
            </main>
            <footer className="h-20 w-full dark:bg-[#111111] dark:text-white"></footer>
        </>
    )
}

export default App
