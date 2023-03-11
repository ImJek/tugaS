/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./tugas/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'Poto': "url('/img/poto.png')",
      },
        colors: {
        pigma: '#7F56DA'
      }
    },
  },
  plugins: [],
}
