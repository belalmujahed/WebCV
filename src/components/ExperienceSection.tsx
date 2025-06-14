'use client';

import React from 'react';
import {Box, Card, CardContent, Stack, Typography, useTheme} from '@mui/material'; // Import useTheme
import {motion} from 'framer-motion'; // Import motion from framer-motion
import cvData from '@/data/cv-data';

/**
 * ExperienceSection - Showcases professional experience in reverse chronological order
 * Highlights role, company, dates, responsibilities, and achievements
 */
const ExperienceSection = () => {
    const {experience} = cvData;
    const theme = useTheme(); // Access the theme object

    return (
        <Box py={2} px={{xs: 1, sm: 2}}>
            <Card
                elevation={3}
                sx={{
                    borderRadius: 4,
                    mb: 4,
                    bgcolor: theme.palette.background.paper,
                    color: theme.palette.text.primary
                }}
            >
                <CardContent>
                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                    >
                        <Typography variant="h4" component="span" fontWeight={700} mb={4} color="primary">
                            Professional Experience
                        </Typography>
                    </motion.h2>
                    <Stack spacing={3}>
                        {experience.map((exp, index) => (
                            <Card
                                key={index}
                                elevation={2}
                                sx={{
                                    overflow: 'hidden',
                                    borderRadius: 3,
                                    bgcolor: theme.palette.background.paper,
                                    color: theme.palette.text.primary,
                                }}
                            >
                                <CardContent>
                                    <Box
                                        display="flex"
                                        flexDirection={{xs: 'column', md: 'row'}}
                                        alignItems={{md: 'center'}}
                                        justifyContent="space-between"
                                        mb={2}
                                    >
                                        <Typography variant="h6" fontWeight={700}
                                                    sx={{color: theme.palette.primary.main}}>
                                            {exp.role}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {exp.dates}
                                        </Typography>
                                    </Box>
                                    <Box display="flex" alignItems="center" color="text.secondary" mb={2}>
                                        <Typography variant="body2">{exp.company}</Typography>
                                    </Box>
                                    <Box component="ul" pl={2} mb={2}>
                                        {exp.description.map((item, i) => (
                                            <li key={i}
                                                style={{display: 'flex', alignItems: 'flex-start', marginBottom: 8}}>
                                                <Box component="span" sx={{color: theme.palette.primary.main}} mr={1}
                                                     mt={0.5}>
                                                    •
                                                </Box>{' '}
                                                {/* Use theme for bullet color */}
                                                <Typography variant="body2">{item}</Typography>
                                            </li>
                                        ))}
                                    </Box>
                                    <Stack direction="row" spacing={1} flexWrap="wrap" mt={2}>
                                        {exp.techStack.map((tech, i) => (
                                            <Box
                                                key={i}
                                                component="span"
                                                px={1}
                                                py={0.5}
                                                sx={{
                                                    bgcolor: theme.palette.secondary.light, // Use theme secondary light color
                                                    color: theme.palette.secondary.contrastText, // Use theme secondary contrast text color
                                                    borderRadius: theme.shape.borderRadius, // Use theme's border radius
                                                    fontSize: 14,
                                                    mr: 1,
                                                    mb: 1,
                                                }}
                                            >
                                                {tech}
                                            </Box>
                                        ))}
                                    </Stack>
                                </CardContent>
                            </Card>
                        ))}
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ExperienceSection;
