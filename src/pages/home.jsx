import React from "react"
import Hero from "../components/Hero"
import PageBar from "../components/PageBar"

const Home = () => {
    return (
        <div>
            <section
                className="container m-auto mt-[80px] flex w-full snap-y snap-center justify-center border-2 border-dashed border-red-500 border-opacity-50 align-middle"
                style={{ height: "calc(100vh - 80px)" }}
            >
                <div className="my-auto min-h-fit">
                    <div id="hero" className="mx-auto snap-center">
                        <Hero />
                    </div>
                </div>
            </section>
            {/* About Me */}
            <section className="container m-auto mt-[80px] flex h-screen w-full snap-y snap-center justify-center border-2 border-dashed border-red-500 border-opacity-50 align-middle">
                <div className="my-auto min-h-fit">
                    <div className="">
                        <div id="hero" className="mx-auto snap-center">
                            <Hero />
                        </div>
                    </div>
                </div>
            </section>
            {/* Skills */}
            {/* Timeline */}
            {/* Education */}
            {/* Experience */}
            {/* Projects */}
            {/* Contact */}
            {/* Blog */}
            {/* Art */}
        </div>
    )
}

export default Home
