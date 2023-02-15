import { projects } from '../../content';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  return (
    <section id='projects' className='py-36'>
      <h2 className='section-heading'>Projects</h2>
      <p className='text-xl font-normal text-gray-600'>
        Things I’ve built so far
      </p>
      <div className='grid grid-cols-1 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-4'>
        {projects.map((project) => {
          return <ProjectCard key={project.name} project={project} />;
        })}
      </div>
    </section>
  );
};
export default ProjectsSection;
