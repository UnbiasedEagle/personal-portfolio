import { NextPage } from 'next';
import Navbar from '../components/Navbar';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import TechStackSection from '../components/TechStack';
import ContactSection from '../components/ContactSection';
import ProjectsSection from '../components/ProjectsSection';

const Home: NextPage = () => {
  return (
    <>
      <div className='max-w-6xl px-4 mx-auto'>
        <Navbar />
        <main>
          <HomeSection />
          <AboutSection />
          <TechStackSection />
          <ProjectsSection />
        </main>
      </div>
      <ContactSection />
    </>
  );
};

export default Home;
