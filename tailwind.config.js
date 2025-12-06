/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#FEA55F", // Orange from buttons/highlights
                "background-light": "#E5E9F0", // Light color for text/elements in dark mode
                "background-dark": "#011627", // Dark blue background
                "slate-light": "#607B96", // Grey text/borders
                "green-light": "#43D9AD", // Green in game/code
                "blue-light": "#4D5BCE", // Blue for '>' symbol
                "red-light": "#E99287", // Red for string in code
                "border-light": "#1E2D3D",
            },
            fontFamily: {
                display: ["Fira Code", "monospace"],
            },
            borderRadius: {
                DEFAULT: "8px",
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, var(--grid-color) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)",
            },
        },
    },
    plugins: [],
}
