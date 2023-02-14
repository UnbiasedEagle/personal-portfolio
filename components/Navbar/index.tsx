import { useEffect, useRef, useState } from 'react';
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
      <header ref={navRef} className='flex items-center justify-between mt-10'>
        <Logo />
        <NavLinks />
        <MobileMenuToggle
          showMobileMenu={showMobileMenu}
          toggleMenu={toggleMenu}
        />
      </header>
      <MobileMenu showMobileMenu={showMobileMenu} />
    </>
  );
};
export default Navbar;
