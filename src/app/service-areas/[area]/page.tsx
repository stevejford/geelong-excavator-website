import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PostcodeChecker from '@/components/PostcodeChecker';
import { serviceAreasData, serviceablePostcodes } from '@/data/service-areas';

// Type for the params
type Props = {
  params: {
    area: string;
  };
};

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = params.area;
  const areaData = serviceAreasData[area];
  
  // If area doesn't exist, return default metadata
  if (!areaData) {
    return {
      title: 'Service Area Not Found | Geelong Excavator Hire',
      description: 'The requested service area could not be found. Explore our equipment hire services in Geelong and surrounding areas.',
    };
  }
  
  return {
    title: areaData.title + ' | Geelong Excavator Hire',
    description: areaData.description,
  };
}

export default function ServiceAreaPage({ params }: Props) {
  const area = params.area;
  const formattedArea = area.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  // Get the area data
  const areaData = serviceAreasData[area];
  
  // If area doesn't exist, show 404 page
  if (!areaData) {
    notFound();
  }
  
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/rocks/pexels-mikebirdy-383559.jpg"
            alt={`Equipment Hire in ${formattedArea}`}
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="max-w-3xl mb-4 text-white">
            Equipment Hire in {formattedArea}
          </h1>
          <p className="text-xl max-w-2xl">
            Quality excavator and equipment hire services for {formattedArea} and surrounding areas
          </p>
        </div>
      </section>

      {/* Area Information */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Our Services in {formattedArea}</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {areaData.content}
              </p>
              
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                At Geelong Excavator Hire, we provide a comprehensive range of equipment hire services to meet the specific needs of {formattedArea} residents and businesses. Our well-maintained fleet of machinery is available for daily, weekly, or monthly hire at competitive rates.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Whether you're undertaking a major construction project, landscaping your property, or need specialized equipment for a specific task, our team is here to help you select the right machinery for your needs in {formattedArea}.
              </p>
            </div>
            
            {/* Equipment Needed in This Area */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">Popular Equipment in {formattedArea}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {areaData.equipmentNeeded.map((equipment) => (
                  <div key={equipment} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-lg mb-2">{equipment}</h4>
                    <p className="text-gray-600 mb-4">
                      Our range of {equipment.toLowerCase()} is perfect for {formattedArea} projects.
                    </p>
                    <Link href={`/equipment/${equipment.toLowerCase().replace(' & ', '-').replace(' ', '-')}`} className="text-primary hover:underline font-medium">
                      View {equipment} →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Common Projects */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">Common Projects in {formattedArea}</h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="space-y-3">
                  {areaData.commonProjects.map((project, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{project}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Service Area Information */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">Service Area Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-medium text-lg mb-2">Postcodes Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {areaData.postcodes.map((postcode) => (
                      <span key={postcode} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {postcode}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-medium text-lg mb-2">Nearby Areas We Serve</h4>
                  <ul className="space-y-2">
                    {areaData.nearbyAreas.map((nearbyArea) => {
                      const slug = nearbyArea.toLowerCase().replace(' ', '-');
                      return (
                        <li key={nearbyArea}>
                          <Link href={`/service-areas/${slug}`} className="text-primary hover:underline">
                            {nearbyArea}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Postcode Checker */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">Check If We Service Your Area</h2>
            <PostcodeChecker serviceablePostcodes={serviceablePostcodes} areaName={formattedArea} />
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-center mb-8">{formattedArea} Service Area</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9 relative h-[400px]">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDyY4fwnlBWT5Up8HCfFjAXKAlQcyKNEIc&q=${formattedArea},+Victoria,+Australia`}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium mb-2">How far in advance should I book equipment in {formattedArea}?</h3>
                <p className="text-gray-700">
                  We recommend booking at least 2-3 days in advance for standard equipment, and 5-7 days for specialized machinery. However, we always try to accommodate last-minute requests when possible.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium mb-2">Do you offer delivery to {formattedArea}?</h3>
                <p className="text-gray-700">
                  Yes, we offer delivery and pickup services to all locations in {formattedArea}. Delivery fees are based on distance and equipment size. Contact us for a specific quote for your location.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium mb-2">What if I need equipment for longer than expected?</h3>
                <p className="text-gray-700">
                  If you need to extend your hire period, simply contact us as soon as possible. We'll do our best to accommodate your request, subject to availability. Additional charges will apply based on our standard rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-primary rounded-lg p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Your {formattedArea} Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
                  Contact us today to discuss your equipment needs and get a competitive quote for your {formattedArea} project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book-now" className="btn-primary bg-white text-primary hover:bg-gray-100">
                Book Equipment
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
