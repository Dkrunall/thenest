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
        "nest-black": "#FCFAF7",
        "nest-dark": "#FAF4E8",
        "nest-darker": "#F3EBE0",
        "nest-gold": "#510909",
        "nest-gold-light": "#7A1515",
        "nest-gold-pale": "#E3D5B2",
        "nest-teal": "#1C7565",
        "nest-teal-dark": "#105246",
        "nest-cream": "#241E15",
        "nest-amber": "#734C2D",
        "nest-amber-light": "#9B6F49",
        "nest-brown": "#C8B195",
        "nest-green": "#F0EDE4",
        "nest-green-light": "#E6E1D3",
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #510909 0%, #510909 100%)",
        "dark-gradient": "linear-gradient(180deg, #FCFAF7 0%, #FAF4E8 100%)",
        "hero-overlay": "linear-gradient(180deg, rgba(252,250,247,0.3) 0%, rgba(252,250,247,0.55) 60%, rgba(252,250,247,0.95) 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "pulse-gold": "pulseGold 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      scale: {
        "108": "1.08",
      },
    },
  },
  plugins: [],
};

export default config;
