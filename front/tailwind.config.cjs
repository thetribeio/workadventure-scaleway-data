module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  corePlugins: {
    preflight: false
  },
  prefix: 'tw-', //Prefixes every tailwind class with tw- to prevent incompatibilities with existing css
  theme: {
    colors: {
      //UI colors
      'dark-purple': '#1B1B29',
      'dark-blue': '#0F1F2D',
      'light-purple': '#4D4B67',
      'lighter-purple': '#928EBB',
      'light-blue': '#56EAFF',

      //WA brand colors
      'brand-blue': '#14304C',
      'pop-blue': '#365DFF',
      'pop-green': '#04F17A',
      'pop-yellow': '#F9E81E',
      'pop-red': '#FF475a',
      'grey': '#f6f6f6',

      //Useful adds
      'white': '#FFFFFF',
      'black': '#000000',
      'transparent': 'rgba(0,0,0,0)'
    },
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
};