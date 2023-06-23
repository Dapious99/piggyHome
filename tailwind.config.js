/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      
      fontFamily: {
        'DM-sans': ['Duplicate Sans','DM-Sans', 'sans-serif'],
      },
    
      screens: {
        md: { min: "416px", max: "800px" },

        sm: { max: "415px" }
      },
    },
  },
  plugins: [],
}

