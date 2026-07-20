import { grey, purple } from '@mui/material/colors';
import { ThemeMode } from '../types';

const generateTheme = (mode: ThemeMode): any => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: { 
                    main:purple[400],
                    text: grey[900],
                },
                background: {
                    paper: 'rgba(255, 255, 255, 0.9)',
                    bgcolor:'whitesmoke',
                    bgcolor1:grey[300]
                },
              }
            : {
                primary: { 
                    main: purple[300],
                    text: grey[50],
                },
            
                background: {
                    paper: 'rgba(0, 0, 0, 0.8)',
                    bgcolor:'#1F2235',
                    bgcolor1:grey[800]
                },
              }),
    },
    typography: {
        fontFamily: `"Quantico", sans-serif`, 
        h1:{
            fontFamily: `"Quantico", sans-serif`, 
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 610,
            md: 970,
            lg: 1200,
            xl: 1520,
        },
    },
});

export default generateTheme;
