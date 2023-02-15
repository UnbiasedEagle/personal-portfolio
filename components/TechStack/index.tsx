import Image from 'next/image';
import { techLogos } from '../../content';

const TechStackSection: React.FC = () => {
  return (
    <section id='tech-stack' className='py-36'>
      <h2 className='section-heading'>My Tech Stack</h2>
      <p className='text-xl font-normal text-gray-600'>
        Technologies I&apos;ve been working with recently
      </p>
      <div className='grid grid-cols-2 mt-12 md:grid-cols-4 gap-y-12 gap-x-4'>
        {techLogos.map((tech) => {
          return (
            <div key={tech.label}>
              <Image
                className='object-contain w-full h-20'
                alt={tech.label}
                width={100}
                height={100}
                src={tech.icon}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default TechStackSection;
