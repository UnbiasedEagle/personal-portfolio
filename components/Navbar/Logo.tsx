import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <div>
      <Link href='#home'>
        <Image
          src='/images/logo.jpeg'
          alt='logo'
          height={40}
          width={40}
          className='rounded-full border-2 border-primary'
        />
      </Link>
    </div>
  );
};
export default Logo;
