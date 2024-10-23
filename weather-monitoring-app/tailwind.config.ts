import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";
// import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {

      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      dark: {
        extend: "dark",
        layout: {
          radius: {
            small: "5px",
            medium: "8px",
            large: "12px",
          },
          boxShadow: {
            large: "0 0 20px 0 #00b1e2ff",
            medium: "0 0 10px 0 #00b1e2ff",
            small: "0 0 5px 0 #00b1e2ff",
          },
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          }
        },

        colors: {
          background: "#0e1623ff",

          primary: {
            DEFAULT: '#1a2332', // Verde brillante //1a2332
            '50': '#f0f9ebff', // Verde muy claro
            '100': '#daf3c4ff',
            '200': '#b1e38dff',
            '300': '#84cc16ff', // Verde principal
            '400': '#65a610ff',
            '500': '#4e850dff',
            '600': '#3a640aff',
            '700': '#284408ff',
            '800': '#172507ff',
            '900': '#0e1623ff', // Fondo oscuro principal
            foreground: '#f3f5f7ff',
          }
        }

      },
      light: {
        extend: "light",
        // layout: {
        //   radius: {
        //     small: "5px",
        //     medium: "8px",
        //     large: "12px",
        //   },
        //   boxShadow: {
        //     large: "0 0 20px 0 #0e1623ff",
        //     medium: "0 0 10px 0 #0e1623ff",
        //     small: "0 0 5px 0 #0e1623ff",
        //   },
        // },
        // colors: {
        //   background: "#f1ffdf",
        //   primary: {
        //     DEFAULT: '#84cc16ff', // Verde principal
        //     50: '#f1ffdf',
        //     100: '#ddf9b5',
        //     200: '#c9f389',
        //     300: '#b4ee5d',
        //     400: '#a0e930',
        //     500: '#86cf16',
        //     600: '#67a10e',
        //     700: '#497306',
        //     800: '#2b4501',
        //     900: '#0c1800',
        //     foreground: '#0e1623ff',
        //   },
        // }
        layout: {
          radius: {
            small: '5px',
            medium: '7px',
            large: '10px',
          },

        },

        colors: {
          background: '#fafafb',
          primary: {
            DEFAULT: '#fe265c',
            '50': '#fff0f2',
            '100': '#ffe2e7',
            '200': '#ffcad5',
            '300': '#ff9fb3',
            '400': '#ff698c',
            '500': '#fe265c',
            '600': '#ec1253',
            '700': '#c80846',
            '800': '#a70a41',
            '900': '#8f0c3e',
          },

        }
      }
    }
  })]
};
export default config;

