'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
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

  // Use the useTranslation hook
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleStickyNavbar = useCallback(() => {
    window.scrollY >= 80 ? setSticky(true) : setSticky(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);
    return () => window.removeEventListener('scroll', handleStickyNavbar);
  }, [handleStickyNavbar]);

  const handleSubmenu = (index: number) => {
    openIndex === index ? setOpenIndex(-1) : setOpenIndex(index);
  };

  // Function to change the language
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  type Language = { code: string; label: string };

  const languages: Language[] = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
    { code: 'ca', label: 'Català' },
  ];

  return (
    <header
      className={`header left-0 top-0 z-15 flex w-full items-center  ${
        sticky
          ? 'fixed z-20 bg-gray-dark bg-opacity-80 shadow-sticky backdrop-blur-sm transition'
          : 'absolute bg-transparent'
      }`}
    >
      <div className="w-full">
        <div className="flex justify-between w-full items-center relative pl-8 lg:pl-24 pr-8 lg:pr-24">
          <div className="w-64 max-w-full xl:mr-12">
            <Link
              href="/"
              className={`header-logo block w-full ${
                sticky ? 'py-2 lg:py-2' : 'py-2'
              }`}
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

          <div className="flex justify-end w-fit lg:w-[75%] items-center self-center pl-4 lg:px-4 mx-auto flex-row-reverse lg:flex-row">
            <div className="relative w-full ">
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="rounded-lg absolute block focus:ring-2 lg:hidden pl-3 py-[6px] right-0 ring-primary top-1/2 translate-y-[-50%]"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                    navbarOpen ? 'top-[7px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                    navbarOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                    navbarOpen ? 'top-[-8px] -rotate-45' : ''
                  }`}
                />
              </button>
              <button
                // onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="hidden"
                className="rounded-lg pointer-events-none !invisible !opacity-0 block focus:ring-2 lg:hidden px-3 py-[6px] right-4 ring-primary top-1/2 translate-y-[-50%]"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                    navbarOpen ? 'top-[7px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                    navbarOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                    navbarOpen ? 'top-[-8px] -rotate-45' : ''
                  }`}
                />
              </button>

              <nav
                id="navbarCollapse"
                className={`navbar absolute lg:bg-yellow-300 right-0 z-10 w-[250px] rounded border-[0.5px] border-white/20 bg-dark px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100  ${
                  navbarOpen
                    ? 'visible top-full opacity-100'
                    : 'invisible top-[120%] opacity-0'
                }`}
              >
                <ul className="block lg:flex lg:space-x-12 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-[calc(50%+130px)] lg:-translate-y-1/2">
                  {menuData.map((menuItem: MenuItem, index: number) => (
                    <li
                      key={`${menuItem.title}-${index}`}
                      className="group relative"
                    >
                      {isMenuItemWithPath(menuItem) ? (
                        <Link
                          href={menuItem.path}
                          className={`flex py-2 text-base whitespace-nowrap lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                            currentPath === menuItem.path
                              ? 'text-white'
                              : 'text-white/70 hover:text-white'
                          }`}
                        >
                          {t(menuItem.title)}
                        </Link>
                      ) : (
                        <>
                          <button
                            onClick={() => handleSubmenu(index)}
                            aria-haspopup="true"
                            aria-expanded={openIndex === index}
                            className="flex justify-between text-base whitespace-nowrap text-white/70 hover:text-white items-center lg:inline-flex lg:mr-0 lg:px-0 lg:py-6 py-2"
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

                          <div
                            className={`submenu absolute left-0 top-full rounded-sm bg-dark transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                              openIndex === index ? 'block' : 'hidden'
                            }`}
                          >
                            {menuItem.submenu?.map((submenuItem, subIndex) => (
                              <Link
                                href={submenuItem.path}
                                key={`${submenuItem.title}-${subIndex}`}
                                className="rounded text-sm text-white/70 block hover:text-white lg:px-3 py-2.5"
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

            {/* Language Switcher */}
            <div className="flex items-center ml-4 space-x-2 ">
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-white flex items-center w-auto px-2"
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
                <DropdownMenuContent className="">
                  {/* Language Switcher Menu */}
                  {languages.map(({ code, label }) => (
                    <DropdownMenuItem
                      key={code}
                      onClick={() => changeLanguage(code)}
                      className="flex justify-between items-center"
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
