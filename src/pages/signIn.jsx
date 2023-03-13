import React, { useState, useRef, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useLogin } from "../hooks/useSignIn.js"
import { AuthContext } from "../context/AuthContext.jsx"
import { navbar as Navbar } from "../components/navbar"

const signIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { error, isPending, login } = useLogin()
    const navigate = useNavigate()
    const location = useLocation()
    // const from = `${location.state?.from?.pathname || "/"}`
    const userRef = useRef()
    const errRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            //firebase
            await login(email, password)
            const form = document.querySelector("form")
            form.reset()
        } catch (err) {
            isPending(false)
            console.log(err.message)
            errRef.current.focus()
        }
    }

    useEffect(() => {
        userRef.current.focus()
    }, [])

    return (
        <>
            <section
                className="mx-auto mt-[80px] flex  w-full max-w-[700px] flex-col items-center  justify-center border-2 border-dashed border-red-500 p-4 align-middle"
                style={{ height: "calc(100vh - 80px)" }}
            >
                <p
                    ref={errRef}
                    className={error ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                >
                    {error}
                </p>
                <div className="align-left mr-auto w-full">
                    <h1 className="mb-4 text-left  text-4xl">Sign In</h1>
                </div>
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="mb-4">
                        <label>Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full rounded-lg border border-gray-300 p-2"
                            ref={userRef}
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label>Password</label>
                        <input
                            type="password"
                            id="password"
                            autoComplete="off"
                            className="w-full rounded-lg border border-gray-300 p-2"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </div>
                    {error && <p>{error}</p>}
                    <div className="mb-4">
                        <p>
                            Don't have an account?{" "}
                            <Link
                                to="/signup"
                                className="text-blue-400 underline"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </div>
                    {!isPending && (
                        <button className="submit cursor-pointer rounded-lg bg-blue-500 px-4 py-2 text-white">
                            Sign In
                        </button>
                    )}
                    {isPending && (
                        <button
                            className="btn cursor-pointer rounded-lg bg-blue-500 px-4 py-2 text-white"
                            disabled
                        >
                            loading...
                        </button>
                    )}
                </form>
            </section>
        </>
    )
}

export default signIn
