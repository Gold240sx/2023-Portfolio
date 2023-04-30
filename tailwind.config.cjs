/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/tw-elements/dist/js/**/*.js",
    ],
    theme: {
        textFillColor: (theme) => theme("borderColor"),
        textStrokeColor: (theme) => theme("borderColor"),
        textStrokeWidth: (theme) => theme("borderWidth"),
        paintOrder: {
            fsm: { paintOrder: "fill stroke markers" },
            fms: { paintOrder: "fill markers stroke" },
            sfm: { paintOrder: "stroke fill markers" },
            smf: { paintOrder: "stroke markers fill" },
            mfs: { paintOrder: "markers fill stroke" },
            msf: { paintOrder: "markers stroke fill" },
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            textShadow: {
                "custom-light": "0 0px 15px rgb(0 0 0 / 60%)",
                "custom-dark": "0 0px 15px rgb(0 0 0 / 30%)",
            },
            fontFamily: {
                "bebas-neue": ["'Bebas Neue'", "cursive"],
                "permanent-marker": ["'Permanent Marker'", "cursive"],
            },
        },
    },
    variants: {
        extend: {
            opacity: ["group-focus"],
            textShadow: ["hover", "dark"],
            transform: ["hover"],
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/line-clamp"),
        require("@tailwindcss/aspect-ratio"),
        require("daisyui"),
        require("tw-elements/dist/plugin"),
        require("tailwindcss-text-fill-stroke"),
    ],
}
