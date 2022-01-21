module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3F403F',
        'green-light': '#06942A33',
        'green-dark': '#06942A',
        light: '#9B9B9B',
        'light-1': '#F4F5F9',
        e5: '#E5E5E5',
        'shadow-1': '#06942A0D',
      },
      borderRadius: {
        '50px': '50px',
      },
      boxShadow: {
        'custom-1': '0px 10px 30px 0px rgba(6, 148, 42, 0.05)', //box-shadow: 0px 10px 30px 0px rgba(6, 148, 42, 0.05);
      },
    },
  },
  plugins: [],
};
