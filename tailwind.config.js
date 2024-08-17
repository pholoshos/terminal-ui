module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terminalBg: '#1E1E1E',  // Dark background
        terminalText: '#C5C8C6', // Light text
        terminalCursor: '#A8FF60', // Green cursor
      },
      fontFamily: {
        mono: ['Fira Code', 'Courier New', 'monospace'],
      },
      keyframes: {
        blink: {
          '50%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
}
