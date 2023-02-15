import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { navLinks } from '../../content/';

type MobileMenuProps = {
  showMobileMenu: boolean;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ showMobileMenu }) => {
  const linksContainerRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const linksHeight = linksRef.current?.getBoundingClientRect().height!;
    if (showMobileMenu) {
      if (linksContainerRef.current) {
        linksContainerRef.current.style.height = `${linksHeight}px`;
      }
    } else {
      if (linksContainerRef.current) {
        linksContainerRef.current.style.height = '0px';
      }
    }
  }, [showMobileMenu]);

  return (
    <nav
      ref={linksContainerRef}
      className={`${
        showMobileMenu ? 'border-b' : ''
      } md:hidden z-20 fixed top-14 left-0 bg-gray-100 w-full rounded-md overflow-hidden mt-4 duration-300`}
    >
      <ul ref={linksRef}>
        {navLinks.map((link) => {
          return (
            <li
              className='py-2 duration-300 rounded-md cursor-pointer group hover:pl-2 hover:bg-gray-200'
              key={link.label}
            >
              <Link
                className='inline-block w-full px-4 navlink group-hover:text-primary'
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default MobileMenu;
