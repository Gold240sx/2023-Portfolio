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

    // Generate unique IDs for the gradients
    const gradientId1 = "gradient1"
    const gradientId2 = "gradient2"

    return (
        <div>
            {/* Timeline Blob BG */}
            <div className="fixed top-0 left-0 right-0 bottom-0 z-[-0] h-[100vh] w-full items-center justify-between blur-xl">
                {/* First and second SVG blobs */}
                <div className="duration-2000 absolute -left-10 -bottom-10 h-[80vh]  w-[60vh] translate-y-1/2 scale-x-[250%] scale-y-[350%]  opacity-100 transition-all ease-in-out dark:opacity-[20%]">
                    <div className=" w-[50vw]] h-[70vh]">
                        <svg
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient id={gradientId2}>
                                    <stop offset="5%" stopColor="#DE0F87" />
                                    <stop offset="95%" stopColor="#39ACC4" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M11.9,-19.3C16.9,-15.3,23.5,-14.5,28.3,-10.9C33.1,-7.2,36.3,-0.8,32.9,2.9C29.6,6.7,19.8,7.7,14.6,11.3C9.3,14.9,8.7,21.2,5.9,23.5C3.2,25.8,-1.7,24.2,-7.8,23.7C-13.8,23.3,-21,23.9,-26.2,21C-31.3,18.1,-34.4,11.7,-32.1,6.6C-29.8,1.4,-22.2,-2.6,-18.4,-7.4C-14.6,-12.1,-14.7,-17.6,-12.3,-22.7C-9.9,-27.9,-4.9,-32.8,-0.7,-31.6C3.5,-30.5,6.9,-23.3,11.9,-19.3Z"
                                transform="translate(100 100)"
                                // Use the generated gradient ID as a class
                                fill={`url(#${gradientId2})`}
                            />
                        </svg>
                    </div>
                </div>

                <div className=" absolute top-[20%] -right-20 bottom-1/2 h-[80vh] w-[60vh] translate-x-6 scale-[150%] opacity-100 transition-all ease-in-out dark:opacity-[20%]">
                    <div className=" h-[80%] w-[80%]">
                        <svg
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient id={gradientId2}>
                                    <stop offset="5%" stopColor="#FF6" />
                                    <stop offset="95%" stopColor="#9EF0F0" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M31.5,-48.3C44.8,-40.4,62.4,-38.5,64.1,-30.5C65.8,-22.6,51.6,-8.6,42.9,1.5C34.3,11.7,31.2,18,28.4,28.7C25.5,39.3,22.9,54.2,14.9,61.3C7,68.3,-6.3,67.6,-11.6,57.7C-16.9,47.9,-14.3,28.9,-13.7,18.2C-13.1,7.5,-14.6,4.9,-20,-0.1C-25.3,-5.1,-34.5,-12.6,-36.8,-20.6C-39,-28.6"
                                transform="translate(100 100)"
                                // Use the generated gradient ID as a class
                                fill={`url(#${gradientId2})`}
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <section
                id="hero-container"
                className="max-w-screen z-10  m-auto mt-8 flex h-screen w-screen items-center justify-center align-middle dark:bg-transparent"
                //  if in landscape mode, move the hero section down
                style={{
                    // height: "calc(100vh - 144px)",
                    minHeight: "fit-content",
                    maxHeight: "100vh",
                }}
            >
                <div className="my-auto min-h-fit ">
                    <div id="hero" className="mx-auto snap-center">
                        <Hero />
                    </div>
                </div>
            </section>
            {/* About Me */}
            <section
                className="container z-0 m-auto mt-[80px] flex w-full max-w-[100vw] justify-center  px-4 align-middle md:px-6"
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
                className={`section-background relative ${
                    mode !== "dark" ? "light-mode" : "dark-mode"
                } z-10 m-auto mx-auto my-[80px] flex h-[600px] w-full skew-y-12 snap-y snap-center justify-center border-t-8 border-gray-200/40 pb-[40px] align-middle dark:border-gray-600 lg:skew-y-0 lg:border-transparent`}
                id="skills"
            >
                <div
                    className="max-w-screen z-10  my-auto w-auto min-w-fit -skew-y-12  overflow-hidden lg:skew-y-0"
                    style={{ minHeight: "fit-content" }}
                >
                    <div id="skills" className="z-10 w-full snap-center">
                        <Skills />
                    </div>
                </div>
            </section>
            {/* Timeline */}
            <section
                className="max-w-screen  mt-[80px] flex  justify-center align-middle"
                style={{ minHeight: "fit-content" }}
                id="timeline"
            >
                <div className="my-auto " style={{ minHeight: "fit-content" }}>
                    <div className="snap-center">
                        <div className="relative">
                            {/* <Timeline />
                             */}
                            <Timeline />
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
                className="m-auto mt-[80px] flex w-screen snap-y snap-center justify-center  align-middle "
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
