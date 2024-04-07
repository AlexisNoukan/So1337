// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      },
      backgroundImage: {
        'header': "url('assets/img/logo_h.jpg')",
        'dex': "url('assets/img/dex.webp')",
        'telegram': "url('assets/img/telegram.png')",
        'x': "url('assets/img/x.png')",
        'slogan': "url('assets/img/slogan.webp)",
        'ownership': "url('assets/img/ownership.png')",
        'burn': "url('assets/img/burn.jpg')",
        'lp': "url('assets/img/lp.png')",
        'token': "url('assets/img/token.png')",
        'head': "url('assets/img/head.webp')",
      }
    },
  },
  plugins: [],
};
