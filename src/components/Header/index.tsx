'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckmarkIcon } from '@sanity/icons';
import { ChevronDown } from 'lucide-react';
import menuData from './menuData';
import type { MenuItem } from '@/sanity/shared-types';
import { isMenuItemWithPath } from '@/sanity/shared-types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [sticky, setSticky] = useState<boolean>(false);
  const [openIndex, setOpenIndex] = useState<number>(-1);
  const currentPath = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { i18n, t } = useTranslation();

  /* ------------------------------------------------------------------ */
  /*  Handlers
  /* ------------------------------------------------------------------ */
  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  const handleStickyNavbar = useCallback(() => {
    setSticky(window.scrollY >= 80);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);
    return () => window.removeEventListener('scroll', handleStickyNavbar);
  }, [handleStickyNavbar]);

  const handleSubmenu = (index: number) =>
    setOpenIndex(openIndex === index ? -1 : index);

  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setNavbarOpen(false);
      setOpenIndex(-1);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setNavbarOpen(false);
    setOpenIndex(-1);
  };

  /* ------------------------------------------------------------------ */
  /*  Languages
  /* ------------------------------------------------------------------ */
  type Language = { code: string; label: string };

  const languages: Language[] = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
    { code: 'ca', label: 'Català' },
  ];

  /* ------------------------------------------------------------------ */
  /*  JSX
  /* ------------------------------------------------------------------ */
  return (
    <header
      className={`header left-0 right-0 top-0 z-15 flex w-full items-center ${
        sticky
          ? 'fixed z-20 bg-gray-dark bg-opacity-80 shadow-sticky backdrop-blur-sm transition'
          : 'absolute bg-transparent'
      }`}
    >
      <div className="container">
        <div className="relative flex w-full items-center justify-between">
          {/* Logo ------------------------------------------------------- */}
          <div className="w-64 max-w-full xl:mr-12">
            <Link
              href="/"
              className={`header-logo block w-full ${sticky ? 'py-5 lg:py-2' : 'py-8'}`}
            >
              <Image
                src="/images/logo/elysium-logo.svg"
                alt="logo"
                width={140}
                height={30}
                className="w-full"
              />
            </Link>
          </div>

          {/* Right side ------------------------------------------------- */}
          <div className="flex w-fit flex-row-reverse items-center justify-end pl-4 pr-6 lg:w-[75%] lg:flex-row lg:px-4">
            {/* Mobile hamburger + nav ----------------------------------- */}
            <div className="relative w-full" ref={dropdownRef}>
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-0 top-1/2 -translate-y-1/2 rounded p-2 lg:hidden focus:outline-none focus:ring-0"
              >
                <span
                  className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${navbarOpen ? 'rotate-45 translate-y-1.5' : ''}`}
                />
                <span
                  className={`block h-0.5 w-6 bg-white my-1 transition-opacity duration-300 ${navbarOpen ? 'opacity-0' : ''}`}
                />
                <span
                  className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${navbarOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
                />
              </button>

              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-10 w-[250px] rounded border-[0.5px] border-white/20 bg-hero-dark px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 ${
                  navbarOpen
                    ? 'visible top-full opacity-100'
                    : 'invisible top-[120%] opacity-0'
                }`}
              >
                <ul className="block justify-center lg:flex lg:flex-nowrap lg:space-x-12">
                  {menuData.map((menuItem: MenuItem, index: number) => (
                    <li
                      key={`${menuItem.title}-${index}`}
                      className="group relative"
                    >
                      {isMenuItemWithPath(menuItem) ? (
                        /* --------------------------------------------------------
                         *  Link with NO submenu
                         * ------------------------------------------------------ */
                        <Link
                          href={menuItem.path}
                          onClick={handleLinkClick}
                          className={`flex whitespace-nowrap py-2 text-base lg:inline-flex lg:px-0 lg:py-6 ${
                            currentPath === menuItem.path
                              ? 'text-white'
                              : 'text-white/70 hover:text-white'
                          }`}
                        >
                          {t(menuItem.title)}
                        </Link>
                      ) : (
                        /* --------------------------------------------------------
                         *  Item WITH submenu
                         * ------------------------------------------------------ */
                        <>
                          <button
                            onClick={() => handleSubmenu(index)}
                            aria-haspopup="true"
                            aria-expanded={openIndex === index}
                            className="flex items-center justify-between whitespace-nowrap py-2 text-base text-white/70 hover:text-white lg:inline-flex lg:px-0 lg:py-6"
                          >
                            {t(menuItem.title)}
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

                          {/* ----------------------------------------------------
                           *  Sub-menu container
                           *  - relative (accordion) on mobile
                           *  - absolute dropdown on ≥ lg
                           * -------------------------------------------------- */}
                          <div
                            className={`submenu
                              relative                               /* mobile: in flow  */
                              rounded-sm bg-dark
                              transition-all duration-300
                              ${openIndex === index ? 'block' : 'hidden'} /* mobile toggle */

                              lg:absolute lg:left-0 lg:top-full      /* desktop: dropdown */
                              lg:w-[250px] lg:p-4 lg:shadow-lg
                              lg:invisible lg:opacity-0              /* hidden until hover */
                              lg:group-hover:visible lg:group-hover:opacity-100
                            `}
                          >
                            {menuItem.submenu?.map((submenuItem, subIndex) => (
                              <Link
                                href={submenuItem.path}
                                onClick={handleLinkClick}
                                key={`${submenuItem.title}-${subIndex}`}
                                className="block rounded py-2.5 text-sm text-white/70 hover:text-white lg:px-3"
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

            {/* Language selector ---------------------------------------- */}
            <div className="ml-4 flex items-center space-x-2 pr-12 sm:pr-12 lg:pr-0">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="flex w-auto items-center px-2 text-white"
                  >
                    <Image
                      src="/icons/Globe.svg"
                      alt="Language Globe"
                      width={24}
                      height={24}
                    />
                    {i18n.language.toUpperCase()}
                    <ChevronDown className="ml-1 h-4 text-white" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  {languages.map(({ code, label }) => (
                    <DropdownMenuItem
                      key={code}
                      onClick={() => changeLanguage(code)}
                      className="flex items-center justify-between"
                    >
                      <span>{label}</span>
                      {i18n.language === code && (
                        <CheckmarkIcon className="h-9 w-9 text-black" />
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
