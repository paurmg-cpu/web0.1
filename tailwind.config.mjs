/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        vetamans: {
          nogal: '#5D4037',   // Marrón profundo, autoridad y solidez
          roble: '#A1887F',   // Marrón natural, calidez y artesanía
          lino: '#FDFBFA',    // Blanco crema, luz y limpieza
          carbon: '#424242',  // Gris oscuro, modernidad y rigor
          bosque: '#2D3A3A',  // Verde opaco, diseño contemporáneo
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
