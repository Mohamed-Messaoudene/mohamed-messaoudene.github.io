import { createContext, useState, useEffect, useContext, type ReactNode } from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import generateTheme from '../utils/customTheme';
import { ThemeMode } from '../types';

type ThemeContextValue = {
  mode: ThemeMode;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<ThemeMode>('dark');

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const theme = createTheme(generateTheme(mode));

    useEffect(() => {
        document.body.className = mode;
    }, [mode]);

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <MUIThemeProvider theme={theme}>
                {children} 
            </MUIThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useCustomTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useCustomTheme must be used within ThemeProvider');
    }
    return context;
};
