'use client';

import './globals.css';
import './custom-styles.css'; // Import our custom styles
import MuiProvider from '@/components/ui/MuiProvider';
import {Box, Card} from '@mui/material';

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" style={{height: '100%'}}>
        <body
            style={{
                background: '#e3eaf2',
                minHeight: '100vh',
                height: '100vh',
                margin: 0,
            }}
        >
        <MuiProvider>
            <Box
                minHeight="100vh"
                height="auto"
                width="100vw"
                position="relative"
                sx={{
                    background: 'linear-gradient(135deg, #e3eaf2 0%, #f5f7fa 100%)',
                    p: 0,
                    overflow: 'auto',
                }}
            >
                {/* Background Card */}
                <Card
                    elevation={4}
                    sx={{
                        width: {xs: '100vw', md: '90vw', lg: '80vw'},
                        maxWidth: '1200px',
                        minHeight: '100vh',
                        p: {xs: 1, sm: 2, md: 3},
                        bgcolor: '#f7fafd',
                        boxShadow: 2,
                        border: '1px solid #e3eaf2',
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 1,
                        height: '100%',
                        pointerEvents: 'none',
                    }}
                    data-background-card="true"
                />
                {/* Foreground Content */}
                <Box
                    width="100%"
                    maxWidth="1200px"
                    mx="auto"
                    position="relative"
                    zIndex={2}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="flex-start"
                    minHeight="100vh"
                    p={{xs: 1, sm: 2, md: 3}}
                >
                    {children}
                </Box>
            </Box>
        </MuiProvider>
        </body>
        </html>
    );
}
