import Link from 'next/link';
import { navLinks } from '../../content/navbar/links';
import SocialLinks from './SocialLinks';

const NavLinks: React.FC = () => {
  return (
    <nav className='md:flex hidden items-center'>
      <ul className='flex items-center space-x-14'>
        {navLinks.map((link) => {
          return (
            <li key={link.label}>
              <Link className='navlink duration-300' href={link.href}>
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
