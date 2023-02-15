import { workExperience } from '../../content';
import ExperienceCard from './ExperienceCard';

const WorkExperience: React.FC = () => {
  return (
    <div className='mt-10'>
      <h2 className='section-heading'>Work Experience</h2>
      <div>
        {workExperience.map((experience) => {
          return <ExperienceCard key={experience.id} experience={experience} />;
        })}
      </div>
    </div>
  );
};
export default WorkExperience;
