import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const SocialLinks: React.FC = () => {
  return (
    <div className='ml-12 hidden md:flex items-center'>
      <a
        target='_blank'
        className='mr-5'
        href='https://github.com/UnbiasedEagle'
        rel='noreferrer'
      >
        <AiFillGithub className='navlink text-2xl' />
      </a>
      <a
        target='_blank'
        href='https://www.linkedin.com/in/saurabh-singh-230936189/'
        rel='noreferrer'
      >
        <AiFillLinkedin className='navlink text-2xl' />
      </a>
    </div>
  );
};
export default SocialLinks;
