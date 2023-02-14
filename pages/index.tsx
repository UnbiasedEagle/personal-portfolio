import { NextPage } from 'next';
import Navbar from '../components/Navbar';
import HomeSection from '../components/HomeSection';

const Home: NextPage = () => {
  return (
    <div className='max-w-6xl px-4 mx-auto h-[2000px]'>
      <Navbar />
      <main>
        <HomeSection />
      </main>
    </div>
  );
};

export default Home;
