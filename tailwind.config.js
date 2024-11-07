/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        base: '18px' // Override base size if necessary
      },
      lineHeight: {
        6: '24px' // Override line-height if necessary
      }
    },
    colors: {
      mainColor: '#2253C8',
      secondColor: '#5932EA',
      cGreen: '#32B900',
      lpurple: '#F2EFFF',
      lblue: '#EBF1FC',
      white: '#ffffff',
      login: '#2253C8',
      black: '#000000',
      lgray: '#FFF',
      dblue: '#165ECB',
      dgreen: '#89A784',
      lgreen: '#DEF6DA',
      tline: '#394999',
      llgray: '#EFEFEF',
      lred: '#FFEBEB',
      tGreen: '#0B8A00',
      red: '#FF0000',
      lllgray: '#BCBCBC',
      green: '#32B900',
      gray: '#E0E0E0',
      line: '#CCD4E0',
      cbutton: '#67748A',
      tgray: '#DBE0E8',
      ddgray: '#32363E',
      hoverButton: '#1c46b5',
      fgray: '#ccc'
    },
    plugins: []
  }
}
