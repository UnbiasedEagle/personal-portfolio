import AboutMe from './AboutMe';
import WorkExperience from './WorkExperience';

const AboutSection: React.FC = () => {
  return (
    <section id='about' className='py-4'>
      <AboutMe />
      <WorkExperience />
    </section>
  );
};
export default AboutSection;
