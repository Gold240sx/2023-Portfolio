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
                id="hero-container"
                className="max-w-screen container m-auto mt-8 flex h-screen w-full justify-center overflow-hidden align-middle"
                //  if in landscape mode, move the hero section down
                style={{
                    minHeight: "fit-content",
                    maxHeight: "100vh",
                }}
            >
                <div className="my-auto min-h-fit">
                    <div id="hero" className="mx-auto snap-center">
                        <Hero />
                    </div>
                </div>
            </section>
            {/* About Me */}
            <section
                className="container z-0 m-auto mt-[80px] flex w-full snap-y snap-mandatory justify-center  align-middle"
                style={{ minHeight: "fit-content" }}
            >
                <div
                    className="my-auto  w-full"
                    style={{ minHeight: "fit-content" }}
                >
                    <div className="">
                        <div id="aboutMe" className="snap-center">
                            <AboutMe />
                        </div>
                    </div>
                </div>
            </section>
            {/* Skills */}
            <section
                className=" m-auto mx-auto my-[80px] flex h-[600px] w-full skew-y-12 snap-y snap-center justify-center border-t-8 border-gray-200 pb-[40px] align-middle dark:border-gray-600 lg:skew-y-0 lg:border-transparent"
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
                    className="max-w-screen  my-auto w-auto min-w-fit -skew-y-12  overflow-hidden lg:skew-y-0"
                    style={{ minHeight: "fit-content" }}
                >
                    <div id="skills" className="w-full snap-center">
                        <Skills />
                    </div>
                </div>
            </section>
            {/* Timeline */}
            {/* <section
                className="max-w-screen  mt-[80px] flex  justify-center align-middle"
                style={{ minHeight: "fit-content" }}
                id="timeline"
            >
                <div className="my-auto " style={{ minHeight: "fit-content" }}>
                    <div className="snap-center">
                        <div className="relative">
                            <Timeline />{" "}
                        </div>
                    </div>
                </div>
            </section> */}
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
                    <div className="w-screen px-6 lg:max-w-[70rem]">
                        <div id="education" className=" snap-center">
                            <Education />
                        </div>
                    </div>
                </div>
            </section>
            {/* Projects */}
            <section
                className="max-w-screen m-auto mt-[80px] flex w-auto snap-y snap-center justify-center  border-opacity-50 align-middle dark:bg-black/30"
                // dark:bg-[#141514]
                style={
                    mode !== "dark"
                        ? {
                              backgroundColor: "#ffffff",
                              opacity: 1,
                              backgroundImage:
                                  "linear-gradient(#F8FAFC 2.4000000000000004px, transparent 2.4000000000000004px), linear-gradient(90deg, #F8FAFC 2.4000000000000004px, transparent 2.4000000000000004px), linear-gradient(#F8FAFC 1.2000000000000002px, transparent 1.2000000000000002px), linear-gradient(90deg, #F8FAFC 1.2000000000000002px, #FFFFFF 1.2000000000000002px)",
                              backgroundSize:
                                  "60px 60px, 60px 60px, 12px 12px, 12px 12px",
                              backgroundPosition:
                                  "-2.4000000000000004px -2.4000000000000004px, -2.4000000000000004px -2.4000000000000004px, -1.2000000000000002px -1.2000000000000002px, -1.2000000000000002px -1.2000000000000002px",
                          }
                        : {
                              opacity: 1,
                              backgroundImage:
                                  "linear-gradient( rgba(255, 255, 255, .0058) 2.4000000000000004px, transparent 2.4000000000000004px), linear-gradient(90deg, rgba(255, 255, 255, .0058) 2.4000000000000004px, transparent 2.4000000000000004px), linear-gradient(rgba(255, 255, 255, .0058) 1.2000000000000002px, transparent 1.2000000000000002px), linear-gradient(90deg, rgba(255, 255, 255, .0058) 1.2000000000000002px,  rgba(255, 255, 255, 0) 1.2000000000000002px)",
                              backgroundSize:
                                  "60px 60px, 60px 60px, 12px 12px, 12px 12px",
                              backgroundPosition:
                                  "-2.4000000000000004px -2.4000000000000004px, -2.4000000000000004px -2.4000000000000004px, -1.2000000000000002px -1.2000000000000002px, -1.2000000000000002px -1.2000000000000002px",
                          }
                }
                id="projects"
            >
                <div className="max-w-screen relative mx-auto flex justify-center md:p-4">
                    <div
                        className="my-auto"
                        style={{ minHeight: "fit-content" }}
                    >
                        <Projects />
                    </div>
                </div>
            </section>
            {/* Contact */}
            <section
                className="m-auto mt-[80px] flex w-screen snap-y snap-center justify-center  align-middle"
                style={{ minHeight: "fit-content" }}
                id="contact"
            >
                <div className="w-screen px-6 lg:max-w-[55rem]">
                    <div
                        className="my-auto md:mx-5"
                        style={{ minHeight: "fit-content" }}
                    >
                        <div id="contact" className=" snap-center">
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
                    <div id="certificates" className="snap-center">
                         <CertificateSection2 />
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default Home
