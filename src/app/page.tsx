import Image from 'next/image';
import Link from 'next/link';
import CategoryCard from '@/components/cards/CategoryCard';

const categories = [
  {
    title: 'Excavators',
    imagePath: '/images/excavators/5t Kubota Excavator.png',
    description: 'Wide range of excavators from 1.7t to 13t for all your earthmoving needs.',
    href: '/equipment/excavators'
  },
  {
    title: 'Skid Steer Loaders',
    imagePath: '/images/skid-steer-loaders/Kubota svl65 bobcat posi.png',
    description: 'Versatile skid steer loaders perfect for construction and landscaping projects.',
    href: '/equipment/skid-steer-loaders'
  },
  {
    title: 'Attachments',
    imagePath: '/images/attachments/Hydraulic Grab 12-14t.jpeg',
    description: 'Various attachments to enhance the capabilities of your hired equipment.',
    href: '/equipment/attachments'
  },
  {
    title: 'Compaction Equipment',
    imagePath: '/images/compaction-equipment/Bomag 100.png',
    description: 'Professional compaction equipment for soil and asphalt compaction.',
    href: '/equipment/compaction-equipment'
  },
  {
    title: 'Concrete Equipment',
    imagePath: '/images/concrete/Trowelling Machine.png',
    description: 'Specialized equipment for concrete work and finishing.',
    href: '/equipment/concrete-equipment'
  },
  {
    title: 'Tipper Trucks',
    imagePath: '/images/tipper-trucks/Car licence tipper.jpg',
    description: 'Reliable tipper trucks for efficient material transport.',
    href: '/equipment/tipper-trucks'
  }
];

export default function Home() {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/rocks/pexels-pixabay-414765.jpg"
            alt="Excavator in action"
            fill
            className="object-cover brightness-50"
            priority
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzMzMyIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM2NjYiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4="
            sizes="100vw"
          />
        </div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="max-w-3xl mb-6 text-white">
            Professional Excavator & Equipment Hire in Geelong
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Quality machinery and equipment for construction, landscaping, and earthmoving projects.
            Serving Geelong and surrounding areas.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/equipment" className="btn-primary">
              View Equipment
            </Link>
            <Link href="/contact" className="btn-secondary bg-white text-gray-900">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Equipment Range</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                {...category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-primary">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Professional guidance and support throughout your hire period
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-primary">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Hire</h3>
              <p className="text-gray-600">
                Daily, weekly, and monthly hire options available
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 text-primary">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Service</h3>
              <p className="text-gray-600">
                Serving all areas across Geelong and surrounds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your equipment needs and get a competitive quote.
          </p>
          <Link href="/book-now" className="btn-primary bg-white text-primary hover:bg-gray-100">
            Book Equipment Now
          </Link>
        </div>
      </section>
    </div>
  );
}
