import { extendTheme } from '@chakra-ui/react';

export const myTheme = extendTheme({
  colors: {
    mainBlue: '#13113c',
    secondBlue: '#00b3ff',
    mainOrange: '#f58115',
    secondOrange: '#f5b315',
    mainGreen: '#213222',
    secondGreen: '#90c747',
    textDark: '#1b1b1b',
    textLight: '#e4e4e4',
  },
  breakpoints: {
    sm: '40rem', //640px
    md: '48rem', //768px
    lg: '64rem', //1024px
    xl: '80rem', //1280px
    '2xl': '96rem', //1536px
  },
});
