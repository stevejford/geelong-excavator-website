import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { serviceAreasData } from '@/data/service-areas';

export const metadata: Metadata = {
  title: 'Service Areas | Geelong Excavator Hire',
  description: 'Geelong Excavator Hire serves Geelong and surrounding areas including Anakie, Armstrong Creek, Barwon Heads, Belmont, Corio, Drysdale, and more.',
};

export default function ServiceAreasPage() {
  // Get all service area names from the data
  const serviceAreas = Object.keys(serviceAreasData).map(slug => {
    const formattedName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return { slug, name: formattedName };
  });

  // Sort service areas alphabetically
  serviceAreas.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/rocks/pexels-mikebirdy-383559.webp"
            alt="Service Areas"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="max-w-3xl mb-4 text-white">
            Service Areas
          </h1>
          <p className="text-xl max-w-2xl">
            We provide equipment hire services throughout Geelong and surrounding areas
          </p>
        </div>
      </section>

      {/* Service Areas List */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8 text-center">Areas We Serve</h2>
            <p className="text-gray-700 mb-12 text-center">
              Geelong Excavator Hire provides equipment rental services to the following areas. Click on a location to learn more about our services in that area.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceAreas.map((area) => (
                <Link 
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 hover:border-primary"
                >
                  <div className="font-medium hover:text-primary transition-colors">
                    {area.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Service Area</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9 relative h-[500px]">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDyY4fwnlBWT5Up8HCfFjAXKAlQcyKNEIc&q=Geelong,Victoria,Australia&zoom=10"
              ></iframe>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-600 text-sm">
            <p>We service Geelong and surrounding areas including Anakie, Armstrong Creek, Avalon, Balliang, Barwon Heads, and more.</p>
            <p className="mt-2">Contact us to confirm service availability for your specific location.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-primary rounded-lg p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Need Equipment for Your Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your equipment needs and get a competitive quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/equipment" className="btn-primary bg-white text-primary hover:bg-gray-100">
                Browse Equipment
              </Link>
              <Link href="/contact" className="btn-primary border-2 border-white bg-transparent hover:bg-white hover:text-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
