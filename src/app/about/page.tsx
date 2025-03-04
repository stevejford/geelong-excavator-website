import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Geelong Excavator Hire',
  description: 'Learn about Geelong Excavator Hire, our commitment to quality equipment, excellent service, and our experience in the construction and earthmoving industry.',
};

export default function AboutPage() {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/rocks/pexels-adam-b-1620746-12231410.jpg"
            alt="About Geelong Excavator Hire"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="max-w-3xl mb-4 text-white">About Us</h1>
          <p className="text-xl max-w-2xl">
            Your trusted partner for quality excavator and equipment hire
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Company</h2>
              <p className="text-gray-700 mb-4">
                Geelong Excavator Hire is a locally owned and operated equipment rental company serving Geelong and surrounding areas. With years of experience in the construction and earthmoving industry, we provide high-quality equipment and exceptional service to both residential and commercial clients.
              </p>
              <p className="text-gray-700 mb-4">
                Our extensive fleet includes excavators ranging from 1.7t to 13t, skid steer loaders, attachments, compaction equipment, and more. All our machinery is well-maintained, reliable, and ready to help you complete your project efficiently and safely.
              </p>
              <p className="text-gray-700">
                We pride ourselves on our customer-focused approach, offering flexible hire options, competitive rates, and expert advice to ensure you get the right equipment for your specific needs.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/excavators/5t Kubota Excavator.png"
                alt="Excavator in action"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2>Customer Testimonials</h2>
            <div className="flex items-center justify-center mt-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-600">5.0 from 6 reviews</span>
            </div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our customers have to say about our service and equipment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                &quot;Excellent company to deal with. New equipment, great service and reasonable rates. Would definitely use them again.&quot;
              </p>
              <div className="flex items-center">
                <div className="font-medium">Josh Kent</div>
                <span className="mx-2 text-gray-400">•</span>
                <div className="text-gray-500 text-sm">1 year ago</div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                &quot;Long time customer here, always good service and quality machines to hire.&quot;
              </p>
              <div className="flex items-center">
                <div className="font-medium">Andrew Dawes</div>
                <span className="mx-2 text-gray-400">•</span>
                <div className="text-gray-500 text-sm">8 months ago</div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                &quot;Awesome new equipment, flexible hours and great company to deal with. Highly recommend.&quot;
              </p>
              <div className="flex items-center">
                <div className="font-medium">Seth Binion</div>
                <span className="mx-2 text-gray-400">•</span>
                <div className="text-gray-500 text-sm">1 year ago</div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="https://www.google.com/maps/place/Geelong+Excavator+Hire/@-38.1172895,143.7442798,218893m/data=!3m1!1e3!4m12!1m2!2m1!1sgeelong+excavator+hire!3m8!1s0x6ad4155b626a3b97:0xba55521c1c83cb3!8m2!3d-38.1715305!4d144.3613552!9m1!1b1!15sChZnZWVsb25nIGV4Y2F2YXRvciBoaXJlkgEYcGxhbnRfYW5kX21hY2hpbmVyeV9oaXJl4AEA!16s%2Fg%2F11rq1d0693?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D" 
              className="btn-primary bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Leave a Review on Google
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 mb-4 text-primary">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Equipment</h3>
              <p className="text-gray-600">
                Our fleet is regularly serviced and maintained to ensure reliability and performance on your job site.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 mb-4 text-primary">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Our knowledgeable staff can help you select the right equipment and provide guidance for your project.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 mb-4 text-primary">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Options</h3>
              <p className="text-gray-600">
                We offer daily, weekly, and monthly hire rates with delivery and pickup services available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2>Areas We Serve</h2>
            <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
              We provide equipment hire services throughout Geelong and surrounding areas, including:
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white rounded-lg">
              <Link href="/service-areas/anakie" className="hover:text-primary">Anakie</Link>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <Link href="/service-areas/armstrong-creek" className="hover:text-primary">Armstrong Creek</Link>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <Link href="/service-areas/barwon-heads" className="hover:text-primary">Barwon Heads</Link>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <Link href="/service-areas/belmont" className="hover:text-primary">Belmont</Link>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <Link href="/service-areas/corio" className="hover:text-primary">Corio</Link>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <Link href="/service-areas/drysdale" className="hover:text-primary">Drysdale</Link>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <Link href="/service-areas/clifton-springs" className="hover:text-primary">Clifton Springs</Link>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <Link href="/service-areas" className="text-primary font-medium">View All Areas</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Get Started?</h2>
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
      </section>
    </div>
  );
}
