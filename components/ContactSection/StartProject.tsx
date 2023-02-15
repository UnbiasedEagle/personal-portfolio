import { FaRegHandPeace } from 'react-icons/fa';

const StartProject: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-between max-w-6xl px-5 mx-auto space-y-8 text-white -mt-36 lg:space-x-4 lg:space-y-0 lg:flex-row py-14 rounded-xl bg-slate-900'>
      <h2 className='text-4xl font-semibold text-center lg:text-left'>
        Start a project
      </h2>
      <p className='max-w-lg text-lg font-light text-center lg:text-left'>
        Interested in working together? We should queue up a time to chat. I’ll
        buy the coffee.
      </p>
      <a
        href='mailto:devsaurabhsingh@gmail.com'
        className='flex items-center px-8 py-4 duration-300 border-2 rounded-full cursor-pointer hover:bg-primary border-primary'
      >
        <FaRegHandPeace className='mr-1' />
        <span>Let&apos;s do this</span>
      </a>
    </div>
  );
};
export default StartProject;
