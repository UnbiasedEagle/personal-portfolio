import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const SocialLinks: React.FC = () => {
  return (
    <div className='items-center hidden ml-12 md:flex'>
      <a
        target='_blank'
        className='mr-5'
        href='https://github.com/UnbiasedEagle'
        rel='noreferrer'
      >
        <AiFillGithub className='text-2xl navlink' />
      </a>
      <a
        target='_blank'
        href='https://www.linkedin.com/in/devsaurabhsingh/'
        rel='noreferrer'
      >
        <AiFillLinkedin className='text-2xl navlink' />
      </a>
    </div>
  );
};
export default SocialLinks;
