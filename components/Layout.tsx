import Navbar from './Navbar/Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='max-w-6xl mx-auto px-4'>
      <Navbar />
    </div>
  );
};
export default Layout;
