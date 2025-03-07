// src/components/Footer/index.tsx

'use client';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '@/components/Common/SectionTitle';
import Marquee from '@/components/Marquee/Marquee';

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-gray-dark pt-16 md:pt-20 lg:pt-24">
        {/* Container for the SectionTitle */}
        <div className="container">
          <SectionTitle
            title="Building Lasting Partnerships"
            paragraph="Let's collaborate and achieve great things together."
            center
            mb="60px"
          />
        </div>

        {/* Marquee moved outside the container so its lateral content is visible */}
        <div
          className="relative flex flex-col gap-12 overflow-visible p-8 sm:p-6"
          id="next-section"
        >
          <Marquee />
        </div>

        {/* Rest of the Footer Content inside the container */}
        <div className="container">
          <div className="-mx-4 flex flex-wrap mt-12">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/elysium-logo.svg"
                    alt="logo"
                    className="w-full"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="mb-9 text-base leading-relaxed text-body-color-dark">
                  En Elysium Consulting Firm, brindamos soluciones
                  personalizadas que impulsan tu crecimiento y seguridad
                  empresarial. Tu éxito es nuestra prioridad.
                </p>
                <div className="flex items-center">
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color-dark duration-300 hover:text-primary"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color-dark duration-300 hover:text-primary"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color-dark duration-300 hover:text-primary"
                  >
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      className="fill-current"
                    >
                      <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color-dark duration-300 hover:text-primary"
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      className="fill-current"
                    >
                      <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Footer Column: Useful Links */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-white">
                  Enlaces útiles
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/listofposts"
                      className="mb-4 inline-block text-base text-body-color-dark duration-300 hover:text-primary"
                    >
                      Publicaciones recientes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color-dark duration-300 hover:text-primary"
                    >
                      Servicios
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="mb-4 inline-block text-base text-body-color-dark duration-300 hover:text-primary"
                    >
                      Sobre nosotros
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Footer Column: Legal */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-white">Legal</h2>
                <ul>
                  <li>
                    <Link
                      href="/terms"
                      className="mb-4 inline-block text-base text-body-color-dark duration-300 hover:text-primary"
                    >
                      Términos de servicio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="mb-4 inline-block text-base text-body-color-dark duration-300 hover:text-primary"
                    >
                      Política de privacidad
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/refunds"
                      className="mb-4 inline-block text-base text-body-color-dark duration-300 hover:text-primary"
                    >
                      Política de reembolsos
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Footer Column: Soporte */}
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-white">Soporte</h2>
                <ul>
                  <li>
                    <Link
                      href="/contact"
                      className="mb-4 inline-block text-base text-body-color-dark duration-300 hover:text-primary"
                    >
                      Contacto
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color-dark duration-300 hover:text-primary"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="mb-4 inline-block text-base text-body-color-dark duration-300 hover:text-primary"
                    >
                      Sobre nosotros
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent"></div>
          <div className="py-8">
            <p className="text-center text-base text-white">
              © Elysium Consulting Firm. Todos los derechos reservados.
            </p>
          </div>
        </div>

        {/* SVG Decorations */}
        <div className="absolute right-0 top-14 z-neg-1">
          {/* ... SVG content ... */}
        </div>
        <div className="absolute bottom-24 left-0 z-neg-1">
          {/* ... SVG content ... */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
