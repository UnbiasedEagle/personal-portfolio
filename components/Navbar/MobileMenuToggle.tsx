import { CgClose } from 'react-icons/cg';
import { RxHamburgerMenu } from 'react-icons/rx';

type MobileMenuToggleProps = {
  showMobileMenu: boolean;
  toggleMenu: () => void;
};

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({
  showMobileMenu,
  toggleMenu,
}) => {
  return (
    <div onClick={toggleMenu} className='md:hidden toggle-menu'>
      <CgClose
        className={`${
          showMobileMenu ? 'block' : 'hidden'
        } cursor-pointer h-full w-full text-xl`}
      />
      <RxHamburgerMenu
        className={`${
          showMobileMenu ? 'hidden' : 'block'
        } cursor-pointer h-full w-full text-xl`}
      />
    </div>
  );
};
export default MobileMenuToggle;
