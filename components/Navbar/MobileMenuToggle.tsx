import { CgClose } from 'react-icons/cg';
import { RxHamburgerMenu } from 'react-icons/rx';

type MobileMenuToggleProps = {
  showMobileMenu: boolean;
  openMenu: () => void;
  closeMenu: () => void;
};

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({
  showMobileMenu,
  closeMenu,
  openMenu,
}) => {
  return (
    <div className='md:hidden'>
      {showMobileMenu ? (
        <CgClose onClick={closeMenu} className='cursor-pointer text-xl' />
      ) : (
        <RxHamburgerMenu
          onClick={openMenu}
          className='cursor-pointer text-xl'
        />
      )}
    </div>
  );
};
export default MobileMenuToggle;
