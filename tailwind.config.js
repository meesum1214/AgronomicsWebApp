module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      '2xs': '0.6rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        // tahoma: ["Tahoma", "sans-serif"],
      },
      boxShadow: {
        '3xl': '1px 1px 8px 6px rgba(0, 0, 0, 0.05)',
        '2sm': '0 0 3px 4px rgba(0, 0, 0, 0.05)',
        'heavy' : '0px 0px 10px 5px rgba(0,0,0,0.3);',
        '4xl': '3px 3px 13px black;',
        '5xl': '0px 17px 50px -17px rgba(0,0,0,0.6);',
      },
      colors: {
        primary: "#668968",
        primaryDark: "#283D29",
        secondary: "#cc9441",
        secondaryDark: "#77623E",
        accent: "#2d3748",
        muted: "#D8D8D6",
        basic: "#283D29",
        dark: "#333333",
        facebook: '#3b5998',
        twitter: '#1da1f2',
        linkedin: '#0077b5',
        whatsapp: '#30B744',
        bgblacktp: 'rgba(255, 255, 255, 0.69)',
      },
      lineHeight: {
        hero: '4.5rem',
      },
      height: {
        '120': '500px',
      },
      width:{
        '120': '500px',
        '140': '600px',
      },
      maxWidth: {
        '1/2': '50%',
      },
      borderRadius: {
        '4xl': '80px',
        '5xl': '50px'
      },
    },
  },
  variants: {},
  plugins: [],
};
