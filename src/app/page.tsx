import HeroSection from '@/components/HeroSection';
import AboutMeSection from '@/components/AboutMeSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
    return (
        <div className="min-h-screen font-sans">
            <main className="flex flex-col">
                <HeroSection/>
                <AboutMeSection/>
                <SkillsSection/>
                <ExperienceSection/>
                <ProjectsSection/>
                <EducationSection/>
                <ContactSection/>
            </main>
        </div>
    );
}
