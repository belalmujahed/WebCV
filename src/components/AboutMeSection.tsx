'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {Box, Card, CardContent, Typography, useTheme} from '@mui/material'; // Import useTheme
import cvData from '@/data/cv-data';

/**
 * AboutMeSection - A concise section highlighting the developer's passion and strengths
 */
const AboutMeSection = () => {
    const {about} = cvData;
    const theme = useTheme(); // Access the theme object

    return (
        <Box py={2} px={{xs: 1, sm: 2}}>
            <Card elevation={3} sx={{borderRadius: 4, mb: 4, bgcolor: 'background.paper', color: 'text.primary'}}>
                <CardContent>
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                    >
                        <Typography variant="h4" component="h2" align="center" fontWeight={700} mb={4} color="primary">
                            About{' '}
                            <Box component="span" sx={{color: theme.palette.primary.main}}>
                                Me
                            </Box>{' '}
                            {/* Use theme.palette for color */}
                        </Typography>
                    </motion.div>
                    {about.paragraphs.map((paragraph, index) => (
                        <Typography key={index} variant="body1" align="center" paragraph>
                            {paragraph}
                        </Typography>
                    ))}
                </CardContent>
            </Card>
        </Box>
    );
};

export default AboutMeSection;
