import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CategoryCard from '@/components/cards/CategoryCard';

export const metadata: Metadata = {
  title: 'Equipment Hire | Excavators, Loaders & More',
  description: 'Browse our wide range of equipment for hire including excavators, skid steer loaders, attachments, and more. Quality machinery for construction and earthmoving projects.',
};

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
  },
  {
    title: 'Non-Destructive Excavation',
    imagePath: '/images/non-destructive-excavation/hydroexcavationtrailer.png',
    description: 'Specialized equipment for non-destructive digging and excavation.',
    href: '/equipment/non-destructive-excavation'
  },
  {
    title: 'Augers & Rock Breakers',
    imagePath: '/images/augers&rock-breakers/Auger 300mm (Drill piece only).jpeg',
    description: 'Powerful augers and rock breakers for drilling and breaking tough materials.',
    href: '/equipment/augers-rock-breakers'
  }
];

export default function EquipmentPage() {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/rocks/pexels-johnnymckane-237950.jpg"
            alt="Equipment for hire"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="max-w-3xl mb-4 text-white">
            Equipment Hire
          </h1>
          <p className="text-xl max-w-2xl">
            Browse our extensive range of quality equipment for hire
          </p>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-center mb-12">Browse Equipment Categories</h2>
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

      {/* Hire Process */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">How to Hire Equipment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Equipment</h3>
              <p className="text-gray-600">
                Browse our categories and select the equipment that suits your project needs
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Book Online</h3>
              <p className="text-gray-600">
                Select your hire dates and complete the booking form
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Delivery or Pickup</h3>
              <p className="text-gray-600">
                Choose delivery to your site or pickup from our location
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/book-now" className="btn-primary">
              Book Equipment Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
