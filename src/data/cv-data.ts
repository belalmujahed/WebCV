// CV Data file - Edit this file to update content across the entire CV

export interface CvData {
    hero: {
        name: string;
        photo: string;
        titles: string[];
        summary: string;
        contacts: {
            email: string;
            github: string;
            linkedin: string;
            website: string;
        };
    };
    about: {
        paragraphs: string[];
    };
    skills: {
        categories: {
            name: string;
            skills: {
                name: string;
                proficiency: number;
            }[];
        }[];
        additionalSkills: string[];
    };
    experience: {
        role: string;
        company: string;
        dates: string;
        description: string[];
        techStack: string[];
    }[];
    projects: {
        title: string;
        description: string;
        image: string;
        techStack: string[];
        github: string;
        demo: string;
    }[];
    education: {
        degree: string;
        institution: string;
        dates: string;
        description: string;
        courses: string[];
    }[];
    certifications: {
        name: string;
        issuer: string;
        date: string;
        credentialId: string;
    }[];
    footer: {
        copyright: string;
    };
}

const cvData: CvData = {
    hero: {
        name: 'John Doe',
        photo: '/public/images/profile.png',
        titles: ['Full-Stack Developer', 'React', 'Node.js', 'TypeScript'],
        summary:
            'Passionate full-stack developer with 6+ years of experience creating elegant solutions. Specialized in React, Node.js, and cloud technologies, with a focus on building scalable and performant applications that solve real-world problems.',
        contacts: {
            email: 'john.developer@example.com',
            github: 'https://github.com/johndoe',
            linkedin: 'https://linkedin.com/in/johndoe',
            website: 'https://johndoe.com',
        },
    },
    about: {
        paragraphs: [
            "I'm a dedicated software engineer with a passion for creating elegant solutions to complex problems. My journey in tech began over 6 years ago, and I've since developed expertise in building robust web applications with modern JavaScript frameworks like React and Next.js, along with backend technologies including Node.js and cloud platforms.",
            "What drives me is the opportunity to blend creativity with technical expertise to deliver intuitive user experiences. I thrive in collaborative environments where I can contribute to meaningful projects that make a positive impact. Currently seeking opportunities to work with forward-thinking teams on challenging projects that push the boundaries of what's possible on the web.",
        ],
    },
    skills: {
        categories: [
            {
                name: 'Languages',
                skills: [
                    {name: 'JavaScript', proficiency: 95},
                    {name: 'TypeScript', proficiency: 90},
                    {name: 'HTML/CSS', proficiency: 92},
                    {name: 'Python', proficiency: 80},
                    {name: 'SQL', proficiency: 85},
                ],
            },
            {
                name: 'Frontend',
                skills: [
                    {name: 'React', proficiency: 95},
                    {name: 'Next.js', proficiency: 90},
                    {name: 'Tailwind CSS', proficiency: 92},
                    {name: 'Redux', proficiency: 85},
                    {name: 'Framer Motion', proficiency: 80},
                ],
            },
            {
                name: 'Backend',
                skills: [
                    {name: 'Node.js', proficiency: 90},
                    {name: 'Express', proficiency: 88},
                    {name: 'MongoDB', proficiency: 85},
                    {name: 'PostgreSQL', proficiency: 80},
                    {name: 'GraphQL', proficiency: 75},
                ],
            },
            {
                name: 'Tools & Others',
                skills: [
                    {name: 'Git', proficiency: 92},
                    {name: 'Docker', proficiency: 80},
                    {name: 'AWS', proficiency: 78},
                    {name: 'Jest', proficiency: 85},
                    {name: 'CI/CD', proficiency: 82},
                ],
            },
        ],
        additionalSkills: [
            'RESTful APIs',
            'Responsive Design',
            'Agile/Scrum',
            'UI/UX',
            'Performance Optimization',
            'Microservices',
            'Serverless',
            'TDD',
        ],
    },
    experience: [
        {
            role: 'Senior Full-Stack Developer',
            company: 'Tech Innovators Inc.',
            dates: 'Jan 2023 - Present',
            description: [
                'Led the development of a high-traffic e-commerce platform, resulting in a 40% increase in conversion rates',
                'Implemented CI/CD pipelines reducing deployment time by 65% and improving code quality',
                'Mentored junior developers and conducted code reviews to maintain coding standards',
                'Architected microservices infrastructure to improve scalability and maintainability',
            ],
            techStack: ['React', 'Node.js', 'TypeScript', 'AWS', 'GraphQL', 'MongoDB'],
        },
        {
            role: 'Frontend Developer',
            company: 'Digital Solutions LLC',
            dates: 'Mar 2020 - Dec 2022',
            description: [
                'Developed responsive web applications with React, improving user engagement by 35%',
                'Optimized application performance, reducing load times by 50%',
                'Collaborated with design team to implement UI/UX improvements, increasing user retention by 25%',
                'Built reusable component library that reduced development time across multiple projects',
            ],
            techStack: ['React', 'Redux', 'JavaScript', 'SASS', 'Jest', 'Webpack'],
        },
        {
            role: 'Web Developer',
            company: 'Creative Web Agency',
            dates: 'Jun 2018 - Feb 2020',
            description: [
                'Created responsive websites using HTML, CSS, and JavaScript for 20+ clients',
                'Implemented custom WordPress themes and plugins for content management',
                'Improved site performance and SEO, resulting in 40% more organic traffic',
                'Maintained and updated existing client websites and fixed compatibility issues',
            ],
            techStack: ['JavaScript', 'HTML/CSS', 'WordPress', 'PHP', 'jQuery'],
        },
    ],
    projects: [
        {
            title: 'E-Commerce Platform',
            description:
                'A full-featured e-commerce platform with product management, cart functionality, payment processing, and order tracking. Implemented with React, Node.js, and MongoDB.',
            image: 'https://placehold.co/600x400/4834d4/ffffff?text=E-Commerce',
            techStack: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Redux'],
            github: 'https://github.com/johndeveloper/ecommerce-platform',
            demo: 'https://ecommerce-platform-demo.vercel.app',
        },
        {
            title: 'Task Management App',
            description:
                'A Kanban-style task management application with drag-and-drop functionality, task prioritization, and team collaboration features. Built with React, TypeScript, and Firebase.',
            image: 'https://placehold.co/600x400/3498db/ffffff?text=Task+App',
            techStack: ['React', 'TypeScript', 'Firebase', 'React DnD', 'Tailwind CSS'],
            github: 'https://github.com/johndeveloper/task-management-app',
            demo: 'https://task-app-demo.vercel.app',
        },
        {
            title: 'Weather Dashboard',
            description:
                'A weather dashboard providing real-time forecasts, historical data visualization, and location-based weather alerts. Uses React, Chart.js, and OpenWeatherMap API.',
            image: 'https://placehold.co/600x400/1abc9c/ffffff?text=Weather+App',
            techStack: ['React', 'Chart.js', 'OpenWeatherMap API', 'Geolocation API'],
            github: 'https://github.com/johndeveloper/weather-dashboard',
            demo: 'https://weather-dashboard-demo.vercel.app',
        },
        {
            title: 'Developer Blog',
            description:
                'A tech blog built with Next.js and MDX for sharing programming tutorials, tips, and insights. Features code syntax highlighting, comments, and newsletter subscription.',
            image: 'https://placehold.co/600x400/e74c3c/ffffff?text=Dev+Blog',
            techStack: ['Next.js', 'MDX', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
            github: 'https://github.com/johndeveloper/developer-blog',
            demo: 'https://developer-blog-demo.vercel.app',
        },
    ],
    education: [
        {
            degree: 'Master of Science in Computer Science',
            institution: 'University of Technology',
            dates: '2016 - 2018',
            description: 'Specialized in Software Engineering and Distributed Systems. Graduated with distinction.',
            courses: ['Advanced Algorithms', 'Cloud Computing', 'Software Architecture', 'Machine Learning'],
        },
        {
            degree: 'Bachelor of Science in Information Technology',
            institution: 'State University',
            dates: '2012 - 2016',
            description: "Focus on web development and database management. Dean's List for all semesters.",
            courses: ['Data Structures', 'Web Development', 'Database Systems', 'Operating Systems'],
        },
    ],
    certifications: [
        {
            name: 'AWS Certified Solutions Architect',
            issuer: 'Amazon Web Services',
            date: 'May 2023',
            credentialId: 'AWS-1234-5678',
        },
        {
            name: 'Professional Scrum Master I (PSM I)',
            issuer: 'Scrum.org',
            date: 'October 2022',
            credentialId: 'PSM-1234567',
        },
        {
            name: 'MongoDB Certified Developer',
            issuer: 'MongoDB University',
            date: 'January 2022',
            credentialId: 'MCD-987654',
        },
    ],
    footer: {
        copyright: `© ${new Date().getFullYear()} John Developer. All rights reserved.`,
    },
};

export default cvData;
