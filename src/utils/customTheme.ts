import { alpha } from '@mui/material';
import { grey, purple } from '@mui/material/colors';
import { ThemeMode } from '../types';

const generateTheme = (mode: ThemeMode) => {
  const isLight = mode === 'light';

  const palette = {
    mode,
    primary: {
      main: isLight ? purple[400] : purple[300],
      text: isLight ? grey[900] : grey[50],
    },
    background: {
      paper: isLight ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.8)',
      bgcolor: isLight ? 'whitesmoke' : '#1F2235',
      bgcolor1: isLight ? grey[300] : grey[800],
      bgcolor2: isLight ? '#f7f7f7' : '#121524',
    },
    code: {
      bg: isLight ? '#fafafa' : '#1e1e2e',
      chromeBorder: isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)',
      filename: isLight ? 'rgba(0,0,0,0.45)' : 'rgba(255,255,255,0.5)',
      comment: isLight ? '#008000' : '#6a9955',
      keyword: isLight ? '#0000ff' : '#569cd6',
      variable: isLight ? '#267f99' : '#4fc1ff',
      key: isLight ? '#001080' : '#9cdcfe',
      string: isLight ? '#a31515' : '#ce9178',
      punctuation: isLight ? '#1e1e1e' : '#d4d4d4',
      bioText: isLight ? '#3b3b3b' : '#dcd7ce',
      bioBg: isLight
        ? alpha('#a31515', 0.05)
        : alpha('#ce9178', 0.08),
    },
  };

  return {
    palette,
    typography: {
      fontFamily: '"Quantico", sans-serif',
      h1: {
        fontFamily: '"Quantico", sans-serif',
      },
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
  };
};

export default generateTheme;
