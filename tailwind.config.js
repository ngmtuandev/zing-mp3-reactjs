/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,ts,tsx,html,js}",
  "./public/index.html"
],
  theme: {
    extend: {
      keyframes: {
        'slide-left' : {
          '0%' : {
            '-webkit-transform': 'translateX(0)',
            transform: 'translateX(0)'
          },
          '100%' : {
            '-webkit-transform': 'translateX(-100px)',
            transform: 'translateX(-100px)'
          }
        },
        // 'slide-left' : {
        //   '0%' : {
        //     '-webkit-transform': 'translateX(0)',
        //     'transform': 'translateX(0)'
        //   },
        //   '100%' : {
        //     '-webkit-transform': 'translateX(-100px)',
        //     'transform': 'translateX(-100px)'
        //   }
        // }
      }
    },
    animation: {
      'slide-left': 'slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
    },
    screens: {
      'tablet': '800px'
    }
  },
  plugins: [],
}