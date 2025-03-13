/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
        colors: {
           
          "blue1" : "#1B4A7B",
          "blue2" : "#58B5C6",
         
        }
  
  
    },
  },

  plugins: [require("daisyui")],
};

