'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {Badge} from './ui/badge'; // Assuming this is a custom component, ensure it respects MUI theme if possible
import {Tabs, TabsContent, TabsList, TabsTrigger} from './ui/tabs'; // Assuming this is a custom component, ensure it respects MUI theme if possible
import {Box, Card, CardContent, Typography, useTheme} from '@mui/material'; // Import useTheme
import cvData from '@/data/cv-data';

/**
 * SkillsSection - A comprehensive display of the developer's technical skills
 * Organizes skills into categories with visual representations of proficiency
 */
const SkillsSection = () => {
    const {skills} = cvData;
    const theme = useTheme(); // Access the theme object

    // Animation variants for staggered animations
    const container = {
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: {opacity: 0, y: 20},
        show: {opacity: 1, y: 0, transition: {duration: 0.5}},
    };

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
                            Technical Skills
                        </Typography>
                    </motion.h2>
                    <Tabs defaultValue={skills.categories[0].name} className="w-full">
                        <TabsList
                            className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6"
                            sx={{
                                bgcolor: theme.palette.grey[200], // Use a lighter grey from theme for TabsList background
                                borderRadius: theme.shape.borderRadius,
                            }}
                        >
                            {skills.categories.map((category) => (
                                <TabsTrigger
                                    key={category.name}
                                    value={category.name}
                                    className="text-sm md:text-base"
                                    sx={{
                                        bgcolor: theme.palette.background.default, // Default tab background
                                        color: theme.palette.primary.main, // Default tab text color
                                        '&[data-state="active"]': {
                                            bgcolor: theme.palette.primary.main, // Active tab background
                                            color: theme.palette.primary.contrastText, // Active tab text color
                                            fontWeight: 700,
                                            boxShadow: theme.shadows[2], // Use theme's shadow
                                        },
                                        borderRadius: theme.shape.borderRadius, // Use theme's border radius
                                        mx: 0.5,
                                        minHeight: 40,
                                    }}
                                >
                                    {category.name}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        {skills.categories.map((category) => (
                            <TabsContent key={category.name} value={category.name}>
                                <Card
                                    elevation={2}
                                    className="mui-nested-2"
                                    sx={{
                                        borderRadius: 3,
                                        mb: 2,
                                        bgcolor: theme.palette.background.paper,
                                        color: theme.palette.text.primary,
                                    }}
                                >
                                    <CardContent>
                                        <motion.div
                                            variants={container}
                                            initial="hidden"
                                            whileInView="show"
                                            viewport={{once: true}}
                                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                        >
                                            {category.skills.map((skill) => (
                                                <motion.div key={skill.name} variants={item} className="space-y-2">
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center gap-2">
                              <span style={{color: theme.palette.text.primary}} className="font-medium">
                                {skill.name}
                              </span>
                                                            {/* Ensure Badge component accepts theme-based styling or is a MUI component */}
                                                            <Badge
                                                                className="md-badge text-xs"
                                                                style={{
                                                                    backgroundColor: theme.palette.primary.light,
                                                                    color: theme.palette.primary.contrastText,
                                                                }}
                                                            >
                                                                {skill.proficiency}%
                                                            </Badge>
                                                        </div>
                                                    </div>
                                                    {/* Custom Progress Bar Styling */}
                                                    <div
                                                        className="md-progress-track"
                                                        style={{
                                                            backgroundColor: theme.palette.grey[300], // Background of the track
                                                            borderRadius: theme.shape.borderRadius,
                                                            height: '8px', // Define a height
                                                            overflow: 'hidden',
                                                        }}
                                                    >
                                                        <div
                                                            className="md-progress-bar"
                                                            style={{
                                                                width: `${skill.proficiency}%`,
                                                                backgroundColor: theme.palette.primary.main, // Color of the progress bar
                                                                height: '100%',
                                                                borderRadius: theme.shape.borderRadius,
                                                                transition: 'width 0.5s ease-in-out',
                                                            }}
                                                        />
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        ))}
                    </Tabs>
                    {/* Additional Skills Badges */}
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        transition={{delay: 0.5}}
                        className="mt-8 flex flex-wrap gap-2 justify-center"
                    >
                        {skills.additionalSkills.map((skill, index) => (
                            <Badge
                                key={index}
                                className={index % 3 === 0 ? 'md-badge' : index % 3 === 1 ? 'md-badge-secondary' : 'md-badge-tertiary'}
                                style={{
                                    backgroundColor:
                                        index % 3 === 0
                                            ? theme.palette.primary.light
                                            : index % 3 === 1
                                                ? theme.palette.secondary.light
                                                : theme.palette.tertiary.light,
                                    color:
                                        index % 3 === 0
                                            ? theme.palette.primary.contrastText
                                            : index % 3 === 1
                                                ? theme.palette.secondary.contrastText
                                                : theme.palette.secondary.contrastText,
                                    borderRadius: theme.shape.borderRadius,
                                    padding: '4px 8px', // Example padding
                                    fontSize: '0.75rem', // Example font size
                                }}
                            >
                                {skill}
                            </Badge>
                        ))}
                    </motion.div>
                </CardContent>
            </Card>
        </Box>
    );
};

export default SkillsSection;
