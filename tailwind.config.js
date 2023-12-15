/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}",],
    theme: {
        extend: {}
    },
    plugins: [
        require('@tailwindcss/typography'),
        require("daisyui")
    ],
    daisyui: {
        themes: [
            {
                inhale: {
                    ...require("daisyui/src/theming/themes")["[data-theme=light]"],
                    "primary": "rgb(125 211 252)", // Sky 300
                    "primary-content": "#fff",
                    "secondary": "#3b82f6",
                    "accent": "#fef08a",
                    "neutral": "#fcf8ff",
                    "base-100": "#fcf8ff"
                }
            }
        ]
    }
}