'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {Box, Card, CardContent, Divider, Stack, Typography, useTheme} from '@mui/material'; // Import useTheme
import {AppButton} from './ui/button';
import {Input} from './ui/input';
import {HeartIcon, MailIcon, SendIcon} from 'lucide-react';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from './ui/form';
import cvData from '@/data/cv-data';
import {SiGithub, SiLinkedin} from 'react-icons/si';

/**
 * ContactSection - Provides a contact form and footer with social links
 */
const ContactSection = () => {
    const {hero, footer} = cvData;
    const theme = useTheme(); // Access the theme object

    // Define form validation schema with Zod
    const formSchema = z.object({
        name: z.string().min(2, 'Name must be at least 2 characters.'),
        email: z.string().email('Please enter a valid email address.'),
        message: z.string().min(10, 'Message must be at least 10 characters long.'),
    });

    // Create form with react-hook-form and zod resolver
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    // Handle form submission
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        // In a real application, you would send this data to your backend
        console.log(values);
        // For now, we'll just show an alert
        alert("Thank you for your message! I'll get back to you soon.");
        form.reset();
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
                            Get In Touch
                        </Typography>
                    </motion.h2>
                    <Box maxWidth="sm" mx="auto">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <Stack spacing={3}>
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel
                                                    sx={{color: theme.palette.text.primary}}>Name</FormLabel>{' '}
                                                {/* Use theme for label color */}
                                                <FormControl>
                                                    <Input
                                                        placeholder="Your name"
                                                        {...field}
                                                        sx={{
                                                            bgcolor: theme.palette.background.default, // Use theme background color
                                                            color: theme.palette.text.primary, // Use theme text color
                                                            '& .MuiOutlinedInput-notchedOutline': {
                                                                borderColor: theme.palette.outline, // Use outline color from theme
                                                            },
                                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                                borderColor: theme.palette.primary.main, // Primary color on hover
                                                            },
                                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                                borderColor: theme.palette.primary.main, // Primary color when focused
                                                            },
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel sx={{color: theme.palette.text.primary}}>Email</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="your.email@example.com"
                                                        {...field}
                                                        sx={{
                                                            bgcolor: theme.palette.background.default,
                                                            color: theme.palette.text.primary,
                                                            '& .MuiOutlinedInput-notchedOutline': {
                                                                borderColor: theme.palette.outline,
                                                            },
                                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                                borderColor: theme.palette.primary.main,
                                                            },
                                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                                borderColor: theme.palette.primary.main,
                                                            },
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel sx={{color: theme.palette.text.primary}}>Message</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        as="textarea"
                                                        placeholder="Your message..."
                                                        minRows={4}
                                                        {...field}
                                                        sx={{
                                                            bgcolor: theme.palette.background.default,
                                                            color: theme.palette.text.primary,
                                                            '& .MuiOutlinedInput-notchedOutline': {
                                                                borderColor: theme.palette.outline,
                                                            },
                                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                                borderColor: theme.palette.primary.main,
                                                            },
                                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                                borderColor: theme.palette.primary.main,
                                                            },
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <AppButton type="submit" variant="contained" color="primary">
                                        <SendIcon style={{marginRight: 8}}/> Send Message
                                    </AppButton>
                                </Stack>
                            </form>
                        </Form>
                    </Box>
                    <Divider
                        sx={{my: 4, borderColor: theme.palette.outlineVariant}}/> {/* Use theme for divider color */}
                    {/* Footer Section */}
                    <Box textAlign="center">
                        <Typography variant="body2" color="text.secondary">
                            {footer.copyright}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mt={1}>
                            Built with{' '}
                            <HeartIcon
                                style={{fontSize: 16, color: theme.palette.error.main, verticalAlign: 'middle'}}/> using
                            React, Next.js, and Material UI {/* Use theme for heart icon color */}
                        </Typography>
                        <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
                            <AppButton variant="outlined" color="primary" size="small">
                                <a href={`mailto:${hero.contacts.email}`} aria-label="Email">
                                    <MailIcon/>
                                </a>
                            </AppButton>
                            <AppButton variant="outlined" color="primary" size="small">
                                <a href={hero.contacts.github} target="_blank" rel="noopener noreferrer"
                                   aria-label="GitHub">
                                    <SiGithub/>
                                </a>
                            </AppButton>
                            <AppButton variant="outlined" color="primary" size="small">
                                <a href={hero.contacts.linkedin} target="_blank" rel="noopener noreferrer"
                                   aria-label="LinkedIn">
                                    <SiLinkedin/>
                                </a>
                            </AppButton>
                        </Stack>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ContactSection;
