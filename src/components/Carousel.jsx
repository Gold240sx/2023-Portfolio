import React, { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, StopCircle } from "react-feather"
import { FaRegPlayCircle } from "react-icons/fa"
import { RiCloseCircleLine } from "react-icons/ri"
import { MdOutlineDownloadForOffline } from "react-icons/md"

function Carousel({ slides, autoslide, interval, setShowCarousel }) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [autoSlide, setAutoSlide] = useState(autoslide)
    const videoRef = useRef(null)

    const prev = () => {
        setCurrentSlide((currentSlide) =>
            currentSlide === 0 ? slides.length - 1 : currentSlide - 1
        )
        setAutoSlide(false)
    }

    const next = () => {
        setCurrentSlide((currentSlide) =>
            currentSlide === slides.length - 1 ? 0 : currentSlide + 1
        )
        setAutoSlide(false)
    }

    const dLimage = () => {
        const a = document.createElement("a")
        a.href = slides[currentSlide]
        a.download = "image.png"
        a.click()
    }

    useEffect(() => {
        console.log(slides)
    }, [])

    useEffect(() => {
        if (autoSlide) {
            const intervalId = setInterval(() => {
                setCurrentSlide((currentSlide) =>
                    currentSlide === slides.length - 1 ? 0 : currentSlide + 1
                )
            }, interval)
            return () => clearInterval(intervalId)
        }
    }, [currentSlide, setAutoSlide, autoSlide])

    return (
        <div className="absolute h-screen w-screen overflow-hidden overscroll-contain ">
            {/* <p> {setShowCarousel ? "true" : "false"}</p> */}
            <div
                className="absolute inset-0 bg-white/50 backdrop-blur-lg backdrop-filter dark:bg-black/60"
                onClick={() => setShowCarousel(false)}
            ></div>
            <div
                className="top-0 flex h-auto max-h-screen w-auto transition-transform duration-500 ease-out "
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className=" top-0 flex w-screen flex-shrink-0 items-center justify-center"
                    >
                        {/* If slide is an image */}
                        {slide.endsWith(".mp4" || ".gif") ? (
                            <>
                                <video
                                    ref={videoRef}
                                    src={slide}
                                    className="z-40 mx-auto my-auto flex h-fit w-fit align-middle"
                                    autoPlay
                                    muted
                                    loop
                                />
                            </>
                        ) : (
                            <img
                                src={slide.startsWith("http") ? slide : slide}
                                alt="slide"
                                className={`pointer-events-none z-50 my-auto h-fit w-fit scale-[80%] align-middle ${
                                    slide.endsWith(".png") &&
                                    slide.indexOf("?bg=transparent") !== -1
                                        ? "bg-checkerboard"
                                        : ""
                                }`}
                                style={{
                                    objectFit: "contain",
                                    width: "100vw",
                                    maxHeight: "100vh",
                                }}
                            />
                        )}

                        {/*  If slide is a gif or a video */}
                    </div>
                ))}
            </div>
            <div
                id="carousel-bts"
                className=" absolute inset-0 z-40 flex items-center justify-between p-4"
            >
                <div className="absolute right-4 top-6  z-[99999999999999999999999999999999999999999999999] flex flex-col gap-4 landscape:flex-row lg:landscape:flex-col">
                    <button
                        onClick={() => setShowCarousel(false)}
                        className=" cursor-pointer"
                    >
                        <RiCloseCircleLine
                            size={40}
                            className=" cursor-pointer text-zinc-300 hover:scale-110"
                        />
                    </button>
                    {!autoSlide && (
                        <button
                            onClick={() => setAutoSlide(true)}
                            className=" cursor-pointer"
                        >
                            <FaRegPlayCircle
                                size={40}
                                className=" scale-95 cursor-pointer text-zinc-300 hover:scale-110"
                            />
                        </button>
                    )}
                    {autoSlide && (
                        <button
                            onClick={() => setAutoSlide(false)}
                            className=" cursor-pointer"
                        >
                            <StopCircle
                                size={40}
                                className="scale-95 cursor-pointer text-zinc-300 hover:scale-110"
                            />
                        </button>
                    )}
                    {/* MdOutlineDownloadForOffline */}
                    <button
                        onClick={() => dLimage()}
                        className=" cursor-pointer"
                    >
                        <MdOutlineDownloadForOffline
                            size={40}
                            className=" scale-110 cursor-pointer text-zinc-300 hover:scale-125"
                        />
                    </button>
                </div>
                <button
                    onClick={prev}
                    className="pointer-events-auto h-fit w-fit rounded-full bg-zinc-200/80 p-1 shadow hover:bg-white dark:bg-zinc-800/80 dark:hover:bg-zinc-800"
                >
                    <ChevronLeft
                        size={40}
                        className="-translate-x-0.5 dark:text-zinc-400"
                    />
                </button>
                <button
                    onClick={next}
                    className="pointer-events-auto h-fit w-fit rounded-full bg-zinc-200/80 p-1 shadow hover:bg-white dark:bg-zinc-800/80 dark:hover:bg-zinc-800"
                >
                    <ChevronRight
                        size={40}
                        className="translate-x-0.5 dark:text-zinc-400"
                    />
                </button>
            </div>
            {/* Indicator Section */}
            <div className="absolute bottom-4 left-0 flex w-full items-center justify-center">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`align-center mx-1 h-2 w-2 rounded-full bg-zinc-200 transition-all duration-300 ${
                            currentSlide === index
                                ? "bg-zinc-300 p-1.5"
                                : "opacity-50"
                        }`}
                    ></div>
                ))}
            </div>
        </div>
        // <div></div>
    )
}

export default Carousel
