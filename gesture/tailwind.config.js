module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    rotate:{
      '20': '20deg',
      '60': '60deg',
      '65': '65deg',
      '70': '70deg',
      '75': '75deg',
      '80': '80deg',
      '90': '90deg',
      '100': '100deg',
      '110': '110deg',
      '120': '120deg',
      '130': '130deg',
      '140': '140deg'
    },
    inset: {
      '2': '2rem',
      '3': '3rem',
      '4': '4rem',
      '5': '5rem',
      '9': '9rem',
      '10': '10rem',
      '11': '11rem',
      '12': '12rem',
      '13': '13rem',
      '14': '14rem',
      '26': '26rem',
      '-2': '-2rem',
      '-3': '-3rem',
      '-4': '-4rem',
      '-5': '-5rem',
      '-9': '-9rem',
      '-10': '-10rem',
      '-11': '-11rem',
      '-12': '-12rem',
      '-13': '-13rem',
      '-14': '-14rem',
      '-15': '-15rem'
    },
    height: {
      '120p': '120%',
      '200p': '200%',
      'auto': 'auto',
      'screen': '100vh'
    },
    width: {
      '64': '16rem',
      '18': '18rem',
      '120p': '120%'
    },
    backgroundColor: theme => ({
      'primary': '#FC9A06',
      'lightShade': '#F3F6F4',
      'lightAccent': '#A2A3AA',
      'darkShade': '#1C242F',
      'darkAccent': '#B36F34',
      'green': '#80AE3C',
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
