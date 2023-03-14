import React from "react"
import { motion } from "framer-motion"

const Skills = () => {
    return (
        <>
            <h3 className="mb-6 mt-10 text-center text-2xl  uppercase tracking-[20px] text-gray-500">
                Skills
            </h3>{" "}
            <div className="ml-10 flex flex-col gap-3 pb-10 md:ml-10 lg:mx-auto lg:ml-[unset]">
                <h4 className="mx-auto text-lg underline md:mx-[unset]">
                    Languages and Tools:
                </h4>
                {/* md screens and up */}
                <div className="hidden md:flex">
                    <div className="flex flex-col">
                        {/* row 1 */}
                        <div className="flex">
                            <a href="https://www.w3.org/html/" target="_blank">
                                {" "}
                                <img src="https://img.icons8.com/color/48/000000/html-5.png" />{" "}
                            </a>
                            <a
                                href="https://www.w3schools.com/css/"
                                target="_blank"
                            >
                                {" "}
                                <img src="https://img.icons8.com/color/48/000000/css3.png" />{" "}
                            </a>
                            <a href="https://getbootstrap.com" target="_blank">
                                {" "}
                                <img src="https://img.icons8.com/color/48/000000/bootstrap.png" />{" "}
                            </a>
                            <a href="https://sass-lang.com/" target="_blank">
                                {" "}
                                <img
                                    src="https://i.ibb.co/n6N253V/gulp-copy.png"
                                    style={{
                                        height: "30px",
                                        marginTop: "3px",
                                        width: "30px",
                                    }}
                                />{" "}
                            </a>
                            <a href="https://sass-lang.com/" target="_blank">
                                {" "}
                                <img src="https://img.icons8.com/color/48/000000/sass.png" />{" "}
                            </a>
                            <a
                                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                                target="_blank"
                            >
                                {" "}
                                <img src="https://img.icons8.com/color/48/000000/javascript.png" />{" "}
                            </a>
                            <a href="https://git-scm.com/" target="_blank">
                                {" "}
                                <img src="https://img.icons8.com/color/48/000000/git.png" />{" "}
                            </a>
                            <a href="#" target="_blank">
                                {" "}
                                <img
                                    style={{ height: "50px", marginTop: "3px" }}
                                    src="https://i.ibb.co/h7R2dLL/webpack.png"
                                />{" "}
                            </a>
                            <a href="#" target="_blank">
                                {" "}
                                <img
                                    style={{ height: "50px", marginTop: "3px" }}
                                    src="https://i.ibb.co/MCHcY6D/d3.png"
                                />{" "}
                            </a>
                            <a href="#" target="_blank">
                                {" "}
                                <img
                                    style={{ height: "50px", marginTop: "3px" }}
                                    src="https://i.ibb.co/hyG9DhN/typescript.png"
                                />{" "}
                            </a>
                            <a href="https://reactjs.org/" target="_blank">
                                {" "}
                                <img src="https://img.icons8.com/color/48/000000/react-native.png" />{" "}
                            </a>
                            <a href="https://nextjs.org/" target="_blank">
                                {" "}
                                <img src="https://img.icons8.com/color/48/000000/nextjs.png" />{" "}
                            </a>
                            <a href="https://redux.js.org" target="_blank">
                                {" "}
                                <img src="https://img.icons8.com/color/48/000000/redux.png" />{" "}
                            </a>
                        </div>
                        {/* Row 2 */}
                        <div className="mx-auto flex">
                            <a href="https://tailwindcss.com/" target="_blank">
                                {" "}
                                <img src="https://img.icons8.com/color/48/000000/tailwindcss.png" />{" "}
                            </a>
                            <a href="#" target="_blank">
                                {" "}
                                <img
                                    style={{ height: "50px", marginTop: "3px" }}
                                    src="https://i.ibb.co/stC8B8h/tailwind-u-I.png"
                                />{" "}
                            </a>
                            <a
                                className="mx-2"
                                href="https://nodejs.org"
                                target="_blank"
                            >
                                {" "}
                                <img src="https://img.icons8.com/color/48/000000/nodejs.png" />{" "}
                            </a>
                            <a
                                href="https://firebase.google.com/"
                                target="_blank"
                            >
                                {" "}
                                <img src="https://img.icons8.com/color/48/000000/firebase.png" />{" "}
                            </a>
                            <a href="#" target="_blank">
                                {" "}
                                <img
                                    style={{ height: "50px", marginTop: "3px" }}
                                    src="https://i.ibb.co/Yjn0Nbx/supabase.png"
                                    className="mr-2"
                                />{" "}
                            </a>
                            <a href="https://postman.com" target="_blank">
                                {" "}
                                <img
                                    src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                                    alt="postman"
                                    className="mt-2 mr-2 h-[45px] w-[45px]"
                                />{" "}
                            </a>
                            <a href="#" target="_blank">
                                {" "}
                                <img
                                    style={{ height: "50px", marginTop: "3px" }}
                                    src="https://i.ibb.co/4jSbQ3t/vercel.png"
                                    className="mr-2 "
                                />{" "}
                            </a>
                            <a href="#" target="_blank">
                                {" "}
                                <img
                                    style={{ height: "50px", marginTop: "3px" }}
                                    src="https://i.ibb.co/CPTK4xm/t3.png"
                                    className="mr-2 "
                                />{" "}
                            </a>
                            <a href="#" target="_blank">
                                {" "}
                                <img
                                    style={{ height: "50px", marginTop: "3px" }}
                                    src="https://i.ibb.co/KysryBD/prisma.png"
                                    className="mr-2 "
                                />{" "}
                            </a>
                            <a href="#" target="_blank">
                                {" "}
                                <img
                                    style={{ height: "50px", marginTop: "3px" }}
                                    src="https://i.ibb.co/y4ZP2qG/sendgrid.png"
                                    className="mr-2 "
                                />{" "}
                            </a>
                            <a href="#" target="_blank">
                                {" "}
                                <img
                                    style={{ height: "50px", marginTop: "3px" }}
                                    src="https://i.ibb.co/qMSFHVM/reactemail.png"
                                />{" "}
                            </a>
                        </div>
                    </div>
                </div>
                {/* small screens */}
                <div className="flex md:hidden">
                    <div className="flex flex-col">
                        {/* Row 1 */}
                        <div className="flex">
                            <a href="https://www.w3.org/html/" target="_blank">
                                {" "}
                                <img src="https://img.icons8.com/color/48/000000/html-5.png" />{" "}
                            </a>
                            <a
                                href="https://www.w3schools.com/css/"
                                target="_blank"
                            >
                                {" "}
                                <img src="https://img.icons8.com/color/48/000000/css3.png" />{" "}
                            </a>
                            <a href="https://getbootstrap.com" target="_blank">
                                {" "}
                                <img src="https://img.icons8.com/color/48/000000/bootstrap.png" />{" "}
                            </a>
                            <a href="https://sass-lang.com/" target="_blank">
                                {" "}
                                <img
                                    src="https://i.ibb.co/n6N253V/gulp-copy.png"
                                    style={{
                                        height: "30px",
                                        marginTop: "3px",
                                        width: "30px",
                                    }}
                                />{" "}
                            </a>
                            <a href="https://sass-lang.com/" target="_blank">
                                {" "}
                                <img src="https://img.icons8.com/color/48/000000/sass.png" />{" "}
                            </a>
                            <a
                                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                                target="_blank"
                            >
                                {" "}
                                <img src="https://img.icons8.com/color/48/000000/javascript.png" />{" "}
                            </a>
                        </div>
                        {/* Row 2 */}
                        <div className="flex">
                            <a href="#" target="_blank">
                                {" "}
                                <img
                                    style={{ height: "50px", marginTop: "3px" }}
                                    src="https://i.ibb.co/MCHcY6D/d3.png"
                                />{" "}
                            </a>
                            <a href="#" target="_blank">
                                {" "}
                                <img
                                    style={{ height: "50px", marginTop: "3px" }}
                                    src="https://i.ibb.co/hyG9DhN/typescript.png"
                                />{" "}
                            </a>
                            <a href="https://reactjs.org/" target="_blank">
                                {" "}
                                <img src="https://img.icons8.com/color/48/000000/react-native.png" />{" "}
                            </a>
                            <a href="https://nextjs.org/" target="_blank">
                                {" "}
                                <img src="https://img.icons8.com/color/48/000000/nextjs.png" />{" "}
                            </a>
                            <a href="https://redux.js.org" target="_blank">
                                {" "}
                                <img src="https://img.icons8.com/color/48/000000/redux.png" />{" "}
                            </a>
                            <a href="https://tailwindcss.com/" target="_blank">
                                {" "}
                                <img src="https://img.icons8.com/color/48/000000/tailwindcss.png" />{" "}
                            </a>
                        </div>
                        {/* Row 3 */}
                        <div className="mx-auto flex">
                            <a href="#" target="_blank">
                                {" "}
                                <img
                                    style={{ height: "50px", marginTop: "3px" }}
                                    src="https://i.ibb.co/stC8B8h/tailwind-u-I.png"
                                />{" "}
                            </a>
                            <a
                                className="mx-2"
                                href="https://nodejs.org"
                                target="_blank"
                            >
                                {" "}
                                <img src="https://img.icons8.com/color/48/000000/nodejs.png" />{" "}
                            </a>
                            <a
                                href="https://firebase.google.com/"
                                target="_blank"
                            >
                                {" "}
                                <img src="https://img.icons8.com/color/48/000000/firebase.png" />{" "}
                            </a>
                            <a href="#" target="_blank">
                                {" "}
                                <img
                                    style={{ height: "50px", marginTop: "3px" }}
                                    src="https://i.ibb.co/Yjn0Nbx/supabase.png"
                                    className="mr-2"
                                />{" "}
                            </a>
                            <a href="https://postman.com" target="_blank">
                                {" "}
                                <img
                                    src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                                    alt="postman"
                                    className="mt-2 mr-2 h-[45px] w-[45px]"
                                />{" "}
                            </a>
                        </div>
                        {/* Row 4 */}
                        <div className="mx-auto flex">
                            <a href="#" target="_blank">
                                {" "}
                                <img
                                    style={{ height: "50px", marginTop: "3px" }}
                                    src="https://i.ibb.co/4jSbQ3t/vercel.png"
                                    className="mr-2 "
                                />{" "}
                            </a>
                            <a href="#" target="_blank">
                                {" "}
                                <img
                                    style={{ height: "50px", marginTop: "3px" }}
                                    src="https://i.ibb.co/CPTK4xm/t3.png"
                                    className="mr-2 "
                                />{" "}
                            </a>
                            <a href="#" target="_blank">
                                {" "}
                                <img
                                    style={{ height: "50px", marginTop: "3px" }}
                                    src="https://i.ibb.co/KysryBD/prisma.png"
                                    className="mr-2 "
                                />{" "}
                            </a>
                            <a href="#" target="_blank">
                                {" "}
                                <img
                                    style={{ height: "50px", marginTop: "3px" }}
                                    src="https://i.ibb.co/y4ZP2qG/sendgrid.png"
                                    className="mr-2 "
                                />{" "}
                            </a>
                            <a href="#" target="_blank">
                                {" "}
                                <img
                                    style={{ height: "50px", marginTop: "3px" }}
                                    src="https://i.ibb.co/qMSFHVM/reactemail.png"
                                />{" "}
                            </a>
                        </div>
                    </div>
                </div>{" "}
                <h4 className="mx-auto mt-2 text-lg underline md:mx-[unset]">
                    My Current Goto Tech Stack:
                </h4>
                <div className="mx-auto flex-col gap-3 md:mx-[unset]">
                    <div className="flex">
                        <a href="https://reactjs.org/" target="_blank">
                            {" "}
                            <img
                                src="https://img.icons8.com/color/48/000000/react-native.png"
                                className="mr-2"
                            />{" "}
                        </a>
                        <a href="#" target="_blank">
                            {" "}
                            <img
                                style={{ height: "50px", marginTop: "3px" }}
                                src="https://i.ibb.co/hyG9DhN/typescript.png"
                                className="mr-2"
                            />{" "}
                        </a>
                        <a href="https://tailwindcss.com/" target="_blank">
                            {" "}
                            <img src="https://img.icons8.com/color/48/000000/tailwindcss.png" />{" "}
                        </a>
                        <a href="https://firebase.google.com/" target="_blank">
                            {" "}
                            <img
                                src="https://img.icons8.com/color/48/000000/firebase.png"
                                className="mr-2"
                            />{" "}
                        </a>
                    </div>
                </div>
            </div>
            {/* <p className="w-70">
                {" "}
                ...Towards:
                Next13-T3App-Prisma-TPRC-Supabase/PlanetScale-Tailwind
            </p> */}
        </>
    )
}

export default Skills
