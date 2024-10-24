// src/components/Header/index.tsx

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';
import ThemeToggler from './ThemeToggler';

import menuData from './menuData'; // Import the default export
import type { MenuItem } from '@/sanity/menu'; // Import only the MenuItem type
import { isMenuItemWithPath } from '@/sanity/menu'; // Import the type guard function

const Header: React.FC = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState<boolean>(false);
  const handleStickyNavbar = useCallback(() => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleStickyNavbar);
    };
  }, [handleStickyNavbar]);

  // Submenu handler
  const [openIndex, setOpenIndex] = useState<number>(-1);
  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const currentPath = usePathname();

  return (
    <header
      className={`header left-0 top-0 z-40 flex w-full items-center ${
        sticky
          ? 'dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] !bg-opacity-80 shadow-sticky backdrop-blur-sm transition'
          : 'absolute bg-transparent'
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          {/* Logo Section */}
          <div className="w-60 max-w-full px-4 xl:mr-12">
            <Link
              href="/"
              className={`header-logo block w-full ${
                sticky ? 'py-5 lg:py-2' : 'py-8'
              } `}
            >
              <Image
                src="/images/logo/elysium-logo.svg"
                alt="logo"
                width={140}
                height={30}
                className="w-full dark:hidden"
              />
              <Image
                src="/images/logo/elysium-logo.svg"
                alt="logo"
                width={140}
                height={30}
                className="hidden w-full dark:block"
              />
            </Link>
          </div>

          {/* Navigation Section */}
          <div className="flex w-full items-center justify-between px-4">
            <div>
              {/* Mobile Menu Toggle Button */}
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? ' top-[7px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? ' top-[-8px] -rotate-45' : ''
                  }`}
                />
              </button>

              {/* Navbar Menu */}
              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-30 w-[250px] rounded border-[0.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 lg:visible lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 ${
                  navbarOpen
                    ? 'visible top-full opacity-100'
                    : 'invisible top-[120%] opacity-0'
                }`}
              >
                <ul className="block lg:flex lg:space-x-12">
                  {menuData.map((menuItem: MenuItem, index: number) => (
                    <li
                      key={`${menuItem.title}-${index}`}
                      className="group relative"
                    >
                      {isMenuItemWithPath(menuItem) ? (
                        // Menu item with path (MenuItemWithPath)
                        <Link
                          href={menuItem.path}
                          className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                            currentPath === menuItem.path
                              ? 'text-primary dark:text-white'
                              : 'text-dark hover:text-primary dark:text-white/70 dark:hover:text-white'
                          }`}
                        >
                          {menuItem.title}
                        </Link>
                      ) : (
                        // Menu item with submenu (MenuItemWithSubmenu)
                        <>
                          <button
                            onClick={() => handleSubmenu(index)}
                            aria-haspopup="true"
                            aria-expanded={openIndex === index}
                            className="flex items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                          >
                            {menuItem.title}
                            <span className="pl-3">
                              <svg width="25" height="24" viewBox="0 0 25 24">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </button>

                          {/* Submenu */}
                          <div
                            className={`submenu absolute left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                              openIndex === index ? 'block' : 'hidden'
                            }`}
                          >
                            {menuItem.submenu &&
                              menuItem.submenu.map((submenuItem, subIndex) => (
                                <Link
                                  href={submenuItem.path}
                                  key={`${submenuItem.title}-${subIndex}`}
                                  className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Theme Toggler */}

            <div className="flex items-center justify-end pr-16 lg:pr-0">
              {/* SVG with 24x24 size and white color */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 512 512"
                preserveAspectRatio="xMidYMid meet"
                className="ml-4" // add this class for styling
              >
                <g
                  transform="translate(0,512) scale(0.1,-0.1)"
                  fill="#ffffff"
                  stroke="none"
                >
                  <path d="M361 5109 c-172 -34 -318 -182 -351 -358 -14 -74 -14 -3408 0 -3482 34 -180 179 -325 359 -359 35 -6 478 -10 1251 -10 l1197 0 32 40 c18 23 36 54 41 70 6 21 -59 576 -220 1877 -126 1017 -234 1868 -240 1893 -27 109 -131 240 -230 290 -96 49 -109 50 -980 49 -448 -1 -835 -5 -859 -10z m1206 -1074 c76 -31 72 -15 239 -852 85 -422 154 -778 154 -790 0 -69 -77 -143 -150 -143 -49 0 -107 35 -128 78 -11 20 -41 146 -67 280 l-48 242 -212 0 -212 0 -48 -242 c-26 -134 -56 -259 -66 -279 -51 -103 -206 -103 -259 1 -11 21 -20 50 -20 63 0 12 69 368 154 790 166 833 163 821 236 851 51 22 375 22 427 1z" />
                  <path d="M1263 3450 l-60 -300 152 0 152 0 -60 300 -60 300 -32 0 -32 0 -60 -300z" />
                  <path d="M2810 4199 c0 -6 86 -698 191 -1537 122 -973 191 -1557 190 -1610 -1 -87 -25 -178 -63 -239 -11 -18 -172 -207 -358 -420 l-339 -388 1132 -3 c730 -1 1151 1 1187 8 181 33 327 180 360 361 7 37 9 631 8 1765 -4 1874 1 1731 -64 1844 -65 111 -184 198 -303 220 -78 15 -1941 14 -1941 -1z m1320 -1069 c60 -31 80 -78 80 -190 l0 -90 245 0 c227 0 249 -2 285 -20 45 -23 80 -80 80 -130 0 -45 -35 -107 -73 -127 -17 -9 -52 -19 -76 -22 l-43 -6 -33 -90 c-57 -160 -165 -352 -290 -517 l-36 -46 83 -69 c46 -38 128 -104 184 -146 135 -103 160 -158 114 -247 -35 -69 -125 -99 -193 -64 -36 19 -279 206 -344 266 -24 21 -47 38 -52 38 -6 0 -43 -28 -83 -63 -122 -105 -271 -223 -305 -240 -68 -36 -158 -6 -193 63 -44 86 -20 144 99 237 47 37 128 103 179 146 l93 79 -28 36 c-114 148 -225 351 -288 527 l-33 90 -43 6 c-24 3 -59 13 -76 22 -38 20 -73 82 -73 127 0 50 35 107 80 130 36 18 58 20 280 20 l240 0 0 90 c0 110 20 159 78 189 48 26 93 26 142 1z" />
                  <path d="M3820 2540 c0 -25 101 -223 153 -301 88 -131 84 -127 103 -103 79 98 234 367 234 404 0 6 -92 10 -245 10 -164 0 -245 -3 -245 -10z" />
                  <path d="M1756 568 c31 -224 36 -246 64 -304 16 -33 48 -81 70 -107 43 -48 127 -109 145 -105 6 2 82 82 170 178 88 96 199 219 248 273 l89 97 -395 0 -396 0 5 -32z" />
                </g>
              </svg>
              <ThemeToggler />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
