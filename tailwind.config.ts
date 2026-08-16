import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width:{
        profile_bar: '288px',
        profile_bar_md: '210px',
        profile_bar_sm: '0px',
      },
      height:{
        profile_cred: 'calc(100vh - 310px)'
      },
      colors:{
        primary: '#141a26',
        // typo_mute: '#6c757d',
        typo_mute: '#b7c1cc',
        accent: '#2dd4bf',

      },
      backgroundColor: {
        // card:  ' linear-gradient(159deg,#2d2d3a 0,#2b2b35 100%)'
      },
      backgroundImage: {
        mute_linear: 'linear-gradient(159deg, #1f2937fa 0%, #172033fa 100%)'
      },
    },
  },
  plugins: [],
};
export default config;
