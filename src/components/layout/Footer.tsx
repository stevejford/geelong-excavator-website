import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const serviceAreas = [
    'Anakie',
    'Armstrong Creek',
    'Avalon',
    'Balliang',
    'Barwon Heads',
    'Batesford',
    'Bell Park',
    'Bell Post Hill',
    'Bellarine',
    'Belmont',
    'Breakwater',
    'Breamlea',
    'Ceres',
    'Charlemont',
    'Clifton Springs',
    'Connewarre',
    'Corio',
    'Curlewis',
    'Drumcondra',
    'Drysdale'
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/images/logo2.webp"
              alt="Geelong Excavator Hire"
              width={200}
              height={60}
              className="h-14 w-auto brightness-200"
            />
            <p className="text-sm">
              Professional excavator and equipment hire services in Geelong and surrounding areas.
            </p>
            <div className="space-y-2">
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:0408851525" className="hover:text-white">
                  0408 851 525
                </a>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:info@geelongexcavatorhire.com.au" className="hover:text-white">
                  info@geelongexcavatorhire.com.au
                </a>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Shed 15/12-14 Gravel Pits Rd, South Geelong VIC 3220</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/equipment" className="hover:text-white transition-colors">
                  Equipment Hire
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/book-now" className="hover:text-white transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-1">
              <li className="flex justify-between">
                <span>Monday:</span>
                <span>7 am–6 pm</span>
              </li>
              <li className="flex justify-between">
                <span>Tuesday:</span>
                <span>7 am–6 pm</span>
              </li>
              <li className="flex justify-between">
                <span>Wednesday:</span>
                <span>7 am–6 pm</span>
              </li>
              <li className="flex justify-between">
                <span>Thursday:</span>
                <span>7 am–6 pm</span>
              </li>
              <li className="flex justify-between">
                <span>Friday:</span>
                <span>7 am–6 pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>7:30 am–8:30 am, 4:30 pm–5:30 pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Service Areas</h3>
            <div className="grid grid-cols-2 gap-2">
              {serviceAreas.slice(0, 10).map((area) => (
                <Link
                  key={area}
                  href={`/service-areas/${area.toLowerCase().replace(' ', '-')}`}
                  className="text-sm hover:text-white transition-colors"
                >
                  {area}
                </Link>
              ))}
            </div>
            <Link href="/service-areas" className="text-sm text-primary hover:underline mt-2 inline-block">
              View All Service Areas
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p>© {new Date().getFullYear()} Geelong Excavator Hire. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
