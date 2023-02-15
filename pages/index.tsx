import { NextPage } from 'next';
import Navbar from '../components/Navbar';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';

const Home: NextPage = () => {
  return (
    <div className='max-w-6xl px-4 mx-auto'>
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
      </main>
    </div>
  );
};

export default Home;
