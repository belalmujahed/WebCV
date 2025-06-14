'use client';

import React from 'react';
import Image from 'next/image';

import {SiGithub, SiLinkedin} from 'react-icons/si';

import {AppButton} from './ui/button'; // Assuming this is a custom component, ensure it respects MUI theme if possible
import {Tooltip, TooltipContent, TooltipTrigger} from './ui/tooltip'; // Assuming this is a custom component, ensure it respects MUI theme if possible
import cvData from '@/data/cv-data';
import {Box, Card, CardContent, Stack, Typography, useTheme} from '@mui/material'; // Import useTheme

/**
 * HeroSection - The main header/hero section of the CV
 * Includes profile photo, name, title, summary, and contact information
 */
const HeroSection = () => {
    const {hero} = cvData;
    const theme = useTheme(); // Access the theme object

    return (
        <Box py={4} px={{xs: 1, sm: 2}}>
            <Card
                elevation={6}
                sx={{
                    bgcolor: theme.palette.primary.dark, // Use theme's dark primary color for the card background
                    color: theme.palette.primary.contrastText, // Use theme's primary contrast text color
                    borderRadius: 4,
                    overflow: 'visible',
                    mb: 4,
                }}
            >
                <CardContent>
                    <Stack direction={{xs: 'column', md: 'row'}} spacing={4} alignItems="center"
                           justifyContent="center">
                        {/* Profile Photo */}
                        <Box position="relative" display="flex" alignItems="center" justifyContent="center">
                            <Box
                                sx={{
                                    width: {xs: 120, sm: 160, md: 180},
                                    height: {xs: 120, sm: 160, md: 180},
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    border: '4px solid',
                                    borderColor: theme.palette.primary.light, // Use theme's light primary color for border
                                    boxShadow: 3,
                                    position: 'relative',
                                }}
                            >
                                <Image src={hero.photo} alt="Profile Photo" fill style={{objectFit: 'cover'}} priority/>
                            </Box>
                        </Box>
                        {/* Name, Title, Summary */}
                        <Box flex={1} textAlign={{xs: 'center', md: 'left'}}>
                            <Typography variant="h3" fontWeight={700} gutterBottom
                                        sx={{color: theme.palette.primary.contrastText}}>
                                {hero.name}
                            </Typography>
                            <Stack
                                direction="row"
                                spacing={1}
                                justifyContent={{xs: 'center', md: 'flex-start'}}
                                mb={2}
                                flexWrap="wrap"
                            >
                                {hero.titles.map((title, index) => (
                                    <Box
                                        key={index}
                                        component="span"
                                        px={2}
                                        py={0.5}
                                        sx={{
                                            bgcolor: index === 0 ? theme.palette.background.paper : theme.palette.secondary.main, // Use theme background paper or secondary main
                                            color: index === 0 ? theme.palette.primary.main : theme.palette.secondary.contrastText, // Use theme primary main or secondary contrast text
                                            borderRadius: theme.shape.borderRadius, // Use theme's border radius
                                            fontWeight: 500,
                                            fontSize: 16,
                                            mr: 1,
                                            mb: 1,
                                        }}
                                    >
                                        {title}
                                    </Box>
                                ))}
                            </Stack>
                            <Typography variant="h6" sx={{color: theme.palette.primary.contrastText, opacity: 0.9}}
                                        mb={3}>
                                {hero.summary}
                            </Typography>
                            {/* Contact Icons */}
                            <Stack direction="row" spacing={2} justifyContent={{xs: 'center', md: 'flex-start'}}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <AppButton variant="contained" color="secondary" size="small">
                                            <a href={hero.contacts.github} target="_blank" rel="noopener noreferrer">
                                                <SiGithub size={20}/>
                                            </a>
                                        </AppButton>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>GitHub Profile</p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <AppButton variant="contained" color="secondary" size="small">
                                            <a href={hero.contacts.linkedin} target="_blank" rel="noopener noreferrer">
                                                <SiLinkedin size={20}/>
                                            </a>
                                        </AppButton>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>LinkedIn Profile</p>
                                    </TooltipContent>
                                </Tooltip>
                            </Stack>
                        </Box>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
};

export default HeroSection;
