/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "1.5rem",
          md: "2rem",
          lg: "2.5rem",
          xl: "3rem",
          "2xl": "4rem",
        }
      }
    },
    fontFamily: {
      kanit: ["Kanit", "sans-serif"],
      josefin: ["Josefin Sans", "sans-serif"],
    },
    backgroundImage: {
      'background-image-1' : "url('/src/assets/backgrounds/background-image.jpg')",
      'background-image-2' : "url('/src/assets/backgrounds/dark-texture-surface.webp')",
      'background-image-3' : "url('/src/assets/backgrounds/white-simple-textured-design-background.jpg')",
      'background-image-4' : "url('/src/assets/backgrounds/blue-background.jpeg')",
      'background-image-5' : "url('/src/assets/backgrounds/brushed-white-paint-background.webp')",
    }
  },
  plugins: [],
}

