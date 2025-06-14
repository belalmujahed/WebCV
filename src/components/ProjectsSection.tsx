'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Stack,
    Typography,
    useTheme,
} from '@mui/material'; // Import useTheme
import {GithubIcon, GlobeIcon} from 'lucide-react';
import cvData from '@/data/cv-data';

/**
 * ProjectsSection - Showcases personal or open-source projects
 * Highlights project title, description, technologies, and links
 */
const ProjectsSection = () => {
    const {projects} = cvData;
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
                            Featured Projects
                        </Typography>
                    </motion.h2>
                    <Box display="grid" gridTemplateColumns={{xs: '1fr', md: '1fr 1fr'}} gap={3}>
                        {projects.map((project, index) => (
                            <Card
                                key={index}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    overflow: 'hidden',
                                    borderRadius: theme.shape.borderRadius, // Use theme's border radius
                                    bgcolor: theme.palette.background.paper, // Use theme's paper background
                                    color: theme.palette.text.primary, // Use theme's primary text color
                                }}
                                elevation={2}
                            >
                                <CardMedia
                                    component="img"
                                    image={project.image}
                                    alt={project.title}
                                    sx={{
                                        aspectRatio: '16/9',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s',
                                        '&:hover': {transform: 'scale(1.05)'},
                                    }}
                                />
                                <CardContent sx={{flex: 1}}>
                                    <Typography variant="h6" sx={{color: theme.palette.primary.main}} fontWeight={700}
                                                gutterBottom>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" mb={2}>
                                        {project.description}
                                    </Typography>
                                    <Stack direction="row" spacing={1} flexWrap="wrap" mt={2}>
                                        {project.techStack.map((tech, i) => (
                                            <Chip
                                                key={i}
                                                label={tech}
                                                size="small"
                                                variant="outlined"
                                                color="secondary"
                                                sx={{
                                                    borderColor: theme.palette.secondary.main, // Ensure outlined chip border uses secondary main
                                                    color: theme.palette.secondary.main, // Ensure outlined chip text uses secondary main
                                                }}
                                            />
                                        ))}
                                    </Stack>
                                </CardContent>
                                <CardActions sx={{justifyContent: 'space-between', gap: 2, pt: 2}}>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        href={project.github}
                                        target="_blank"
                                        startIcon={<GithubIcon style={{fontSize: 18}}/>}
                                        sx={{
                                            color: theme.palette.primary.main, // Button text color
                                            borderColor: theme.palette.primary.main, // Button border color
                                            '&:hover': {
                                                bgcolor: theme.palette.primary.light, // Hover background
                                                borderColor: theme.palette.primary.light,
                                                color: theme.palette.primary.contrastText, // Hover text color
                                            },
                                        }}
                                    >
                                        Code
                                    </Button>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        fullWidth
                                        href={project.demo}
                                        target="_blank"
                                        startIcon={<GlobeIcon style={{fontSize: 18}}/>}
                                        sx={{
                                            bgcolor: theme.palette.primary.main, // Button background color
                                            color: theme.palette.primary.contrastText, // Button text color
                                            '&:hover': {
                                                bgcolor: theme.palette.primary.dark, // Hover background
                                            },
                                        }}
                                    >
                                        Live Demo
                                    </Button>
                                </CardActions>
                            </Card>
                        ))}
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ProjectsSection;
