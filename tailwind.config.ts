import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1a1a1a',
                    foreground: '#ffffff',
                },
                accent: {
                    DEFAULT: '#ffd700', // Example gold accent for luxury packaging
                    foreground: '#1a1a1a',
                }
            },
        },
    },
    plugins: [],
};
export default config;
