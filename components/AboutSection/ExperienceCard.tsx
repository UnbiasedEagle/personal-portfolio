import Link from 'next/link';
import React from 'react';
import { BiBuilding } from 'react-icons/bi';
import { SlLocationPin } from 'react-icons/sl';
import { VscCalendar } from 'react-icons/vsc';
import { Experience } from '../../types';

type ExperienceCardProps = {
  experience: Experience;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const { company, companyLink, role, jobLocation, jobType, duration } =
    experience;

  return (
    <article className='pb-6 border-b mb-7'>
      <div className='flex items-center justify-between'>
        <h3 className='text-lg tracking-wide text-gray-600'>{role}</h3>
        <span className='px-3 py-1 text-white rounded-full bg-primary'>
          {jobType}
        </span>
      </div>
      <div className='grid grid-cols-1 mt-4 space-y-4 text-gray-500 md:space-y-0 md:grid-cols-3'>
        <Link
          className='flex items-center max-w-lg hover:text-primary'
          href={companyLink}
        >
          <BiBuilding className='mr-1' />
          <span>{company}</span>
        </Link>
        <div className='flex items-center'>
          <SlLocationPin className='mr-1' />
          <span>{jobLocation}</span>
        </div>
        <div className='flex items-center md:justify-end'>
          <VscCalendar className='mr-1' />
          <span>{duration}</span>
        </div>
      </div>
    </article>
  );
};
export default ExperienceCard;
