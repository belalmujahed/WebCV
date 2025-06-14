'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {Box, Card, CardContent, Chip, Divider, Stack, Typography, useTheme} from '@mui/material'; // Import useTheme
import {Award, BookOpen, Calendar} from 'lucide-react';
import cvData from '@/data/cv-data';

/**
 * EducationSection - Displays educational background and certifications
 */
const EducationSection = () => {
    const {education, certifications} = cvData;
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
                            Education & Certifications
                        </Typography>
                    </motion.h2>
                    <Box display="grid" gridTemplateColumns={{xs: '1fr', lg: '1fr 1fr'}} gap={4}>
                        {/* Education Section */}
                        <Box>
                            <Typography
                                variant="h6"
                                fontWeight={600}
                                sx={{color: theme.palette.primary.main}}
                                display="flex"
                                alignItems="center"
                                mb={2}
                            >
                                <BookOpen style={{marginRight: 8, fontSize: 20}}/> Education
                            </Typography>
                            <Stack spacing={3}>
                                {education.map((edu, index) => (
                                    <Card
                                        key={index}
                                        elevation={2}
                                        sx={{
                                            borderRadius: 3,
                                            bgcolor: theme.palette.background.paper,
                                            color: theme.palette.text.primary
                                        }}
                                    >
                                        <CardContent>
                                            <Box
                                                display="flex"
                                                flexDirection={{xs: 'column', md: 'row'}}
                                                alignItems={{md: 'center'}}
                                                justifyContent="space-between"
                                                mb={1}
                                            >
                                                <Typography variant="subtitle1" fontWeight={700}
                                                            sx={{color: theme.palette.primary.main}}>
                                                    {edu.degree}
                                                </Typography>
                                                <Chip
                                                    label={edu.dates}
                                                    icon={<Calendar style={{fontSize: 16}}/>}
                                                    variant="outlined"
                                                    size="small"
                                                    sx={{
                                                        mt: {xs: 1, md: 0},
                                                        color: theme.palette.text.secondary, // Use theme color for text
                                                        borderColor: theme.palette.outline, // Use theme color for border
                                                        '& .MuiChip-icon': {
                                                            color: theme.palette.text.secondary, // Use theme color for icon
                                                        },
                                                    }}
                                                />
                                            </Box>
                                            <Typography variant="body1" color="text.secondary" fontWeight={500} mb={1}>
                                                {edu.institution}
                                            </Typography>
                                            <Typography variant="body2" mb={2}>
                                                {edu.description}
                                            </Typography>
                                            <Box mt={2}>
                                                <Typography variant="caption" fontWeight={600} color="text.secondary"
                                                            mb={1} display="block">
                                                    Key Courses:
                                                </Typography>
                                                <Stack direction="row" spacing={1} flexWrap="wrap">
                                                    {edu.courses.map((course, i) => (
                                                        <Chip key={i} label={course} size="small" color="secondary"/>
                                                    ))}
                                                </Stack>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                ))}
                            </Stack>
                        </Box>
                        {/* Certifications Section */}
                        <Box>
                            <Typography
                                variant="h6"
                                fontWeight={600}
                                sx={{color: theme.palette.primary.main}}
                                display="flex"
                                alignItems="center"
                                mb={2}
                            >
                                <Award style={{marginRight: 8, fontSize: 20}}/> Certifications
                            </Typography>
                            <Stack spacing={2}>
                                {certifications.map((cert, index) => (
                                    <Card
                                        key={index}
                                        elevation={2}
                                        sx={{
                                            borderRadius: 3,
                                            bgcolor: theme.palette.background.paper,
                                            color: theme.palette.text.primary
                                        }}
                                    >
                                        <CardContent>
                                            <Typography
                                                variant="subtitle1"
                                                fontWeight={700}
                                                sx={{color: theme.palette.primary.main}}
                                                mb={1}
                                            >
                                                {cert.name}
                                            </Typography>
                                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                                <Typography variant="body2" color="text.secondary">
                                                    {cert.issuer}
                                                </Typography>
                                                <Chip
                                                    label={cert.date}
                                                    icon={<Calendar style={{fontSize: 16}}/>}
                                                    variant="outlined"
                                                    size="small"
                                                    sx={{
                                                        color: theme.palette.text.secondary, // Use theme color for text
                                                        borderColor: theme.palette.outline, // Use theme color for border
                                                        '& .MuiChip-icon': {
                                                            color: theme.palette.text.secondary, // Use theme color for icon
                                                        },
                                                    }}
                                                />
                                            </Box>
                                            <Divider sx={{my: 2, borderColor: theme.palette.outlineVariant}}/>{' '}
                                            {/* Use theme for divider color */}
                                            <Typography variant="caption" color="text.secondary">
                                                <Box component="span" fontWeight={600}>
                                                    Credential ID:
                                                </Box>{' '}
                                                {cert.credentialId}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                ))}
                            </Stack>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default EducationSection;
