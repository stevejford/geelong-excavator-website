import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const navLinks = [
    { href: '/equipment', label: 'Equipment' },
    { href: '/about', label: 'About Us' },
    { href: '/service-areas', label: 'Service Areas' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-sm">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo2.webp"
              alt="Geelong Excavator Hire"
              width={280}
              height={84}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/book-now" className="btn-primary">
              Book Now
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu - Hidden by default */}
        <div className="hidden md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium nav-link"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-now"
              className="block px-3 py-2 rounded-md text-base font-medium btn-primary text-center mt-4"
            >
              Book Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
