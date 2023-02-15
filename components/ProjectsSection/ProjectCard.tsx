import Image from 'next/image';
import { AiFillEye, AiOutlineGithub } from 'react-icons/ai';
import { Project } from '../../types';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className='p-4 duration-300 bg-white cursor-pointer hover:shadow-xl rounded-xl'>
      <div className='relative w-full group h-60 rounded-xl'>
        <div className='absolute top-0 left-0 z-10 w-full h-full duration-300 opacity-0 group-hover:opacity-100 rounded-xl bg-black/60'>
          <div className='flex items-center justify-center h-full space-x-8 rounded-xl'>
            <a
              href={project.liveURL}
              target='_blank'
              className='flex items-center justify-center w-12 h-12 p-2 duration-300 rounded-full hover:scale-90 bg-black/50'
              rel='noreferrer'
            >
              <AiFillEye className='text-2xl text-white' />
            </a>
            <a
              target='_blank'
              href={project.githubURL}
              className='flex items-center justify-center w-12 h-12 p-2 duration-300 rounded-full hover:scale-90 bg-black/50'
              rel='noreferrer'
            >
              <AiOutlineGithub className='text-2xl text-white' />
            </a>
          </div>
        </div>
        <Image
          src={project.image}
          className='object-cover overflow-hidden rounded-xl'
          fill
          alt={project.name}
        />
      </div>
      <div className='mt-4'>
        <h4 className='text-lg font-semibold tracking-wide text-center'>
          {project.name}
        </h4>
        <p className='mt-2 text-sm text-center text-gray-500'>
          {project.description}
        </p>
      </div>
    </article>
  );
};
export default ProjectCard;
