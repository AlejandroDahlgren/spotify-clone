import { createTheme } from '@mui/material';

export const themeOptions = createTheme({
    palette: {
        primary: {
            main: '#1bd760',
            light: '#39d472',
            dark: '#3b5249',
            constrastText: '#ffffff',
        },
        background: {
            default: '#000000',
            secondary: '#121212',
        },
        text: {
            primary: '#ffffff',
            secondary: '#b3b3b3'
        },
        divider: '#292929',
    }
});