'use client';

import { RecoilRoot } from 'recoil';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head />
            <RecoilRoot>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline />
                    <body>{children}</body>
                </ThemeProvider>
            </RecoilRoot>
        </html>
    );
}
