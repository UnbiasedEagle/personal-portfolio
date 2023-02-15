import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';

const FooterContent: React.FC = () => {
  return (
    <div className='max-w-6xl mx-auto'>
      <h3 className='p-8 text-xl text-center text-white font-extralight'>
        Living, learning, & leveling up <br />
        one day at a time.
      </h3>
      <div className='flex items-center justify-center space-x-8'>
        <a
          href='https://www.linkedin.com/in/devsaurabhsingh/'
          rel='noreferrer'
          className='flex items-center justify-center w-12 h-12 duration-300 border border-white rounded-full cursor-pointer group hover:bg-white'
        >
          <FaLinkedinIn className='text-2xl text-white group-hover:text-primary' />
        </a>
        <a
          href='https://github.com/UnbiasedEagle'
          rel='noreferrer'
          className='flex items-center justify-center w-12 h-12 duration-300 border border-white rounded-full cursor-pointer group hover:bg-white'
        >
          <FaGithub className='text-2xl text-white group-hover:text-primary' />
        </a>
        <a
          href='mailto:devsaurabhsingh@gmail.com'
          className='flex items-center justify-center w-12 h-12 border border-white rounded-full cursor-pointer hover:bg-white group'
        >
          <FaRegEnvelope className='text-2xl text-white group-hover:text-primary' />
        </a>
      </div>
      <p className='mt-8 text-lg font-light text-center text-white'>
        Copyright © {new Date().getFullYear()} Designed & Built by Saurabh Singh
      </p>
    </div>
  );
};
export default FooterContent;
