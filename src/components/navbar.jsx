import React from "react"
import { Link, useLocation } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { useSignOut } from "../hooks/useSignOut"
import siteLogo from "../assets/Images/header.png"

export const navbar = () => {
    const { user } = useAuthContext()
    const { logout } = useSignOut()
    const location = useLocation()

    //console.log(location.pathname)

    return (
        <div className="absolute -mt-[80px] h-20 w-full border-b border-white/20 bg-slate-50 dark:bg-[#2b2b2a] dark:text-white">
            <div className="mx-auto flex h-full max-w-[1500px] items-center justify-between">
                <div className="flex items-center">
                    <Link to="/home">
                        <div className="ml-4">
                            {/* <h1 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">
                                Logo
                            </h1> */}
                            <img
                                src={siteLogo}
                                alt="logo"
                                className="h-16 w-auto"
                            />
                        </div>
                    </Link>
                </div>
                <div className="flex items-center">
                    {!user && (
                        <div className="mr-4">
                            <Link to="/signIn">
                                <h1 className="py-.75 text-semibold sticky z-50 cursor-pointer select-none rounded-full bg-[#DDDFDE] px-3 text-lg text-white hover:bg-[#C2C3C3] hover:opacity-80 dark:bg-slate-600 dark:text-slate-800 dark:hover:bg-slate-700">
                                    Sign In
                                </h1>
                            </Link>
                        </div>
                    )}
                    <div className="mr-4">
                        {user && (
                            <Link to="/dashboard">
                                <h1 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                                    Account
                                </h1>
                            </Link>
                        )}
                    </div>
                    <div className="mr-4 hidden" disabled>
                        {!user && (
                            <Link to="/signUp">
                                <h1 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                                    Sign Up
                                </h1>
                            </Link>
                        )}
                    </div>
                    <div className="mr-4">
                        {user && (
                            <h1
                                className="cursor-pointer text-lg font-semibold text-slate-800 dark:text-slate-200"
                                onClick={logout}
                            >
                                Logout
                            </h1>
                        )}
                    </div>
                    <div
                        id="hamburger-menu"
                        className="z-50 mr-4 cursor-pointer space-y-1.5 rounded-xl border-2 border-transparent p-2 opacity-70 hover:bg-white/20 hover:opacity-100 hover:shadow-lg active:bg-black/20 sm:space-y-2"
                    >
                        <span className=" pointer-events-none block h-1 w-6  rounded-full bg-gray-400 sm:w-8"></span>
                        <span className=" pointer-events-none block h-1 w-6 rounded-full bg-gray-400 sm:w-8"></span>
                        <span className=" pointer-events-none block h-1 w-6 rounded-full bg-gray-400 sm:w-8"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
