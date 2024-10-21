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
    "./node_modules/@nextui-org/react/dist/**/*.{js,ts,jsx,tsx}",
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
          }
        },

        colors: {
          background: "#0e1623ff",

          primary: {
            DEFAULT: '#84cc16ff', // Verde brillante
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
          },

          secondary: {
            DEFAULT: '#1e2a38ff', // Azul oscuro (para paneles y fondos secundarios)
            '50': '#f5f7fbff',
            '100': '#dfe7f2ff',
            '200': '#b9c9ddff',
            '300': '#7c94baff',
            '400': '#415d8eff',
            '500': '#1e2a38ff', // Azul más profundo
            '600': '#172230ff',
            '700': '#111b29ff',
            '800': '#0a121fff',
            '900': '#050a14ff',
            foreground: '#f3f5f7ff',
          },

          danger: {
            DEFAULT: '#d22f2fff', // Rojo (para alertas o notificaciones)
            '50': '#fee5e5ff',
            '100': '#fcb3b3ff',
            '200': '#f27171ff',
            '300': '#e63939ff',
            '400': '#d22f2fff', // Rojo brillante
            '500': '#a82626ff',
            '600': '#7e1c1cff',
            '700': '#541414ff',
            '800': '#2b0b0bff',
            '900': '#0d0202ff',
            foreground: '#f3f5f7ff',
          },
          overlay: {
            DEFAULT: '#00b1e2ff', // Azul (para resaltar textos o botones)
            '50': '#e5f9fdff',
            '100': '#c4f1fbff',
            '200': '#88e2f8ff',
            '300': '#40d0f4ff',
            '400': '#00b1e2ff', // Azul brillante
            '500': '#0095c5ff',
            '600': '#0078a2ff',
            '700': '#005f81ff',
            '800': '#00495eff',
            '900': '#00343bff',
            foreground: '#f3f5f7ff',
          },
        }

      },
      light: {
        extend: "light",
        layout: {
          radius: {
            small: "5px",
            medium: "8px",
            large: "12px",
          }
        },
        colors: {
          background: "#f3f5f7ff",

          primary: {
            DEFAULT: '#84cc16ff', // Verde principal
            '50': '#f0f8e4ff', // Verde claro
            '100': '#e2f2d6ff',
            '200': '#c9e7afff',
            '300': '#afd978ff',
            '400': '#94cc40ff',
            '500': '#84cc16ff', // Verde brillante
            '600': '#6b9f12ff',
            '700': '#53740eff',
            '800': '#3b4a0aff',
            '900': '#232a06ff',
            foreground: '#0e1623ff',
          },

          secondary: {
            DEFAULT: '#4d4e54ff', // Gris oscuro (fondos secundarios)
            '50': '#f6f7f9ff',
            '100': '#eceef1ff',
            '200': '#d9dce3ff',
            '300': '#b6b8bfff',
            '400': '#969aa0ff',
            '500': '#4d4e54ff', // Gris medio
            '600': '#424448ff',
            '700': '#37383cff',
            '800': '#2c2d30ff',
            '900': '#212224ff',
            foreground: '#0e1623ff',
          },

          danger: {
            DEFAULT: '#ec464aff', // Rojo acentuado
            '50': '#ffebecff',
            '100': '#ffd8d9ff',
            '200': '#ffb4b5ff',
            '300': '#ff8f91ff',
            '400': '#ff5b5dff',
            '500': '#ec464aff', // Rojo vibrante
            '600': '#c1393cff',
            '700': '#962d2fff',
            '800': '#6b2022ff',
            '900': '#3f1315ff',
            foreground: '#0e1623ff',
          },
        }
      }
    }
  })]
};
export default config;
