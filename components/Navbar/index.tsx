import { useEffect, useRef, useState } from 'react';
import Backdrop from './Backdrop';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import MobileMenuToggle from './MobileMenuToggle';
import NavLinks from './NavLinks';

const Navbar: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.target) {
        const element = event.target as HTMLElement;

        if (!navRef.current?.contains(element)) {
          setShowMobileMenu(false);
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => document.body.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <header
        ref={navRef}
        className='fixed top-0 z-30 flex items-center justify-between w-full max-w-6xl p-4 backdrop-blur-sm -translate-x-2/4 left-1/2'
      >
        <Logo />
        <NavLinks />
        <MobileMenuToggle
          showMobileMenu={showMobileMenu}
          toggleMenu={toggleMenu}
        />
      </header>
      <MobileMenu showMobileMenu={showMobileMenu} />
      <Backdrop show={showMobileMenu} />
    </>
  );
};
export default Navbar;
