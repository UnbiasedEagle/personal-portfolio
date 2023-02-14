import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { navLinks } from '../../content/navbar/links';

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
      } md:hidden rounded-md overflow-hidden mt-4 duration-300`}
    >
      <ul ref={linksRef}>
        {navLinks.map((link) => {
          return (
            <li
              className='py-2 group cursor-pointer hover:pl-2 duration-300 hover:bg-gray-100 rounded-md'
              key={link.label}
            >
              <Link
                className='navlink inline-block w-full group-hover:text-primary'
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
