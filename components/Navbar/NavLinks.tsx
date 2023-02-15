import Link from 'next/link';
import { navLinks } from '../../content';
import SocialLinks from './SocialLinks';

const NavLinks: React.FC = () => {
  return (
    <nav className='items-center hidden md:flex'>
      <ul className='flex items-center space-x-14'>
        {navLinks.map((link) => {
          return (
            <li key={link.label}>
              <Link className='duration-300 navlink' href={link.href}>
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <SocialLinks />
    </nav>
  );
};
export default NavLinks;
