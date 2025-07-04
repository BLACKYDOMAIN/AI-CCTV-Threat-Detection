// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-rainbow':
          'linear-gradient(270deg, #00C9FF, #92FE9D, #fcb045, #ee7752, #e73c7e, #23a6d5)',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      animation: {
        'gradient-x': 'gradient-x 6s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
