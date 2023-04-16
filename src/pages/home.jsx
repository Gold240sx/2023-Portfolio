import React from "react"
import Hero from "../components/PageComponents/Hero"
import AboutMe from "../components/PageComponents/AboutMe"
import Skills from "../components/PageComponents/Skills"
import Timeline from "../components/PageComponents/Timeline"
import Education from "../components/PageComponents/Education"
import Work from "../components/PageComponents/Work.jsx"
import Contact from "../components/PageComponents/contactForm/Contact"
import CertificateSection2 from "../components/PageComponents/test"
import Projects from "../components/PageComponents/Projects"
import { useTheme } from "../hooks/useThemeContext"

const Home = () => {
    const { mode } = useTheme()

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
            <section
                className="container m-auto mt-[80px] flex w-full snap-y snap-mandatory justify-center border-2 border-dashed border-red-500 border-opacity-50 align-middle"
                style={{ minHeight: "fit-content" }}
            >
                <div className="my-auto " style={{ minHeight: "fit-content" }}>
                    <div className="">
                        <div id="aboutMe" className="snap-center">
                            <AboutMe />
                        </div>
                    </div>
                </div>
            </section>
            {/* Skills */}
            <section
                className="container m-auto mx-auto mt-[80px] flex w-full snap-y snap-center justify-center border-2 border-dashed border-red-500 border-opacity-50 pb-[40px] align-middle"
                style={
                    mode !== "dark"
                        ? {
                              backgroundColor: "#e5e5f7",
                              background:
                                  "repeating-linear-gradient( -55deg, #FBFBFC, #FBFBFC 5px, #F4F7FA 5px, #F4F7FA 15px",
                              minHeight: "fit-content",
                          }
                        : {
                              backgroundColor: "#1a202c",
                              background:
                                  "repeating-linear-gradient( -55deg, #0D2136, #0D2136 5px, #10263D 5px, #10263D 15px",
                              minHeight: "fit-content",
                          }
                }
                id="skills"
            >
                <div
                    className="my-auto  w-auto min-w-fit"
                    style={{ minHeight: "fit-content" }}
                >
                    <div id="hero" className="w-full snap-center">
                        <Skills />
                    </div>
                </div>
            </section>
            {/* Timeline */}
            <section
                className="container m-auto mt-[80px] flex w-full snap-y snap-center justify-center border-2 border-dashed border-red-500 border-opacity-50 align-middle"
                style={{ minHeight: "fit-content" }}
                id="timeline"
            >
                <div className="my-auto " style={{ minHeight: "fit-content" }}>
                    <div className="">
                        <div id="hero" className="snap-center">
                            <div className="relative w-full">
                                <Timeline />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Education */}
            <section
                className=" container m-auto mt-[80px] flex w-screen snap-y snap-center justify-center align-middle"
                style={{ minHeight: "fit-content" }}
                id="education"
            >
                <div
                    className="my-auto  md:mx-5"
                    style={{ minHeight: "fit-content" }}
                >
                    {/* to make full width, add an empty div here and wrap around the element below as shown*/}
                    <div className="w-screen px-6 lg:max-w-[70rem]">
                        <div id="hero" className=" snap-center">
                            <Education />
                        </div>
                    </div>
                </div>
            </section>
            {/* Projects */}
            <section
                className=" container m-auto mt-[80px] flex w-screen snap-y snap-center justify-center border-opacity-50 align-middle dark:bg-black/30"
                // dark:bg-[#141514]
                style={{ minHeight: "fit-content" }}
                id="projects"
            >
                <div className="w-screen px-6 lg:max-w-[70rem]">
                    <div
                        className="my-auto md:mx-5"
                        style={{ minHeight: "fit-content" }}
                    >
                        <div id="hero" className=" snap-center">
                            <Projects />
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact */}
            <section
                className=" container m-auto mt-[80px] flex w-screen snap-y snap-center justify-center  align-middle"
                style={{ minHeight: "fit-content" }}
                id="contact"
            >
                <div className="w-screen px-6 lg:max-w-[70rem]">
                    <div
                        className="my-auto md:mx-5"
                        style={{ minHeight: "fit-content" }}
                    >
                        <div id="hero" className=" snap-center">
                            <Contact />
                        </div>
                    </div>
                </div>
            </section>
            {/* Blog */}
            {/* Art */}
            {/* Test */}
            {/* <section
                className="container m-auto mt-[80px] flex w-full snap-y snap-center justify-center border-2 border-dashed border-red-500 border-opacity-50 align-middle"
                style={{ minHeight: "fit-content" }}
            >
                <div
                    className="my-auto mx-0 w-full md:mx-5"
                    style={{ minHeight: "fit-content" }}
                >
                    <div id="hero" className="snap-center">
                         <CertificateSection2 />
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default Home
