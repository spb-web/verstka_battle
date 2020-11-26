const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    colors: {
      white: '#fff',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    fontSize: {
      22: '22px',
    },
    letterSpacing: {
      wide: '.03em',
    },
    spacing: {
      full: '100%',
      32: '32px',
    },
    maxWidth: {

    },
    borderWidth: {
      1: '1px',
    },
    borderRadius: {
      4: '4px',
    }
  },
  screens: {
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  },
  plugins: [
    plugin(function({ addUtilities, theme }) {
      // const newUtilities = {
      //   '.plugin': {

      //   },
      // }

      // addUtilities(newUtilities)
    })
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'src/**/*.html'
    ]
  }
}