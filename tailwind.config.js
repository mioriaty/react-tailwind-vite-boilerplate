const colors = require('tailwindcss/colors');

module.exports = {
  important: 'body',
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
    options: {},
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        xl: '32px',
        '2xl': '48px',
      },
    },
    letterSpacing: {
      //
      'sub-title-540': '10px',
    },
    fontFamily: {
      // LineAwesome: ["Line Awesome Free", "system-ui", "sans-serif"],
      // Flaticon: ["Flaticon", "system-ui", "sans-serif"],
      // icomoon: ["icomoon", "system-ui", "sans-serif"],
    },
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      //
      primary: '#1c1c1c',
      secondary: '#c62447',
      //
      status: {
        success: '#287D3C',
        warning: '#B95000',
        error: '#DA1414',
        info: '#2E5AAC',
      },
      statusBg: {
        successBg: '#EDF9F0',
        warningBg: '#FFF4EC',
        errorBg: '#FEEFEF',
        infoBg: '#EEF2FA',
      },
      facebook: '#325D94',
      googlePlus: '#DF2E1C',
      twitter: '#00AADB',
    },
    extend: {
      outline: {},
      animation: {
        'spin-fast': 'spin 500ms linear infinite',
      },
      zIndex: {
        '-1': '-1',
        max: 2147483647,
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
