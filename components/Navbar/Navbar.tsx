import { useState } from 'react';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import MobileMenuToggle from './MobileMenuToggle';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';

const Navbar: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const openMenu = () => {
    setShowMobileMenu(true);
  };

  const closeMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <>
      <header className='flex items-center justify-between mt-10'>
        <Logo />
        <NavLinks />
        <MobileMenuToggle
          showMobileMenu={showMobileMenu}
          openMenu={openMenu}
          closeMenu={closeMenu}
        />
      </header>
      <MobileMenu showMobileMenu={showMobileMenu} />
    </>
  );
};
export default Navbar;
