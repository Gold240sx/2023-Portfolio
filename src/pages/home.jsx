import React from "react"

const home = () => {
    return (
        <div>
            <section
                className="container m-auto mt-[80px] flex w-full justify-center border-2 border-dashed border-red-500 align-middle"
                style={{ height: "calc(100vh - 80px)" }}
            >
                <div className="my-auto min-h-fit border">
                    <div className="card prose flex h-1/2 rounded-lg bg-gray-200">
                        <h1 className="m-auto flex w-full bg-gray-200 text-center">
                            This is a home screen
                        </h1>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default home
