import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import EquipmentCard from '@/components/cards/EquipmentCard';

// Define the equipment categories and their data
export const categories = {
  'excavators': {
    title: 'Excavators',
    description: 'Our range of high-quality excavators for all your earthmoving needs.',
    heroImage: '/images/excavators/13t Case Excavator.jpg',
    items: [
      {
        title: '1.7t Kubota Excavator',
        imagePath: '/images/excavators/1.7t Kubota Excavator.jpg',
        description: 'Compact excavator perfect for tight spaces and small projects.',
        dailyRate: '220',
        href: '/equipment/excavators/1-7t-kubota'
      },
      {
        title: '2.5t Kubota Excavator',
        imagePath: '/images/excavators/2.5t Kubota Excavator.jpg',
        description: 'Versatile mid-sized excavator with excellent digging capabilities.',
        dailyRate: '280',
        href: '/equipment/excavators/2-5t-kubota'
      },
      {
        title: '3.5t Kubota Excavator',
        imagePath: '/images/excavators/3.5t Kubota Excavator.jpg',
        description: 'Powerful excavator suitable for medium-sized construction projects.',
        dailyRate: '350',
        href: '/equipment/excavators/3-5t-kubota'
      },
      {
        title: '5t Kubota Excavator',
        imagePath: '/images/excavators/5t Kubota Excavator.png',
        description: 'Heavy-duty excavator for larger earthmoving and construction work.',
        dailyRate: '450',
        href: '/equipment/excavators/5t-kubota'
      },
      {
        title: '13t Case Excavator',
        imagePath: '/images/excavators/13t Case Excavator.jpg',
        description: 'Large excavator for major construction and earthmoving projects.',
        dailyRate: '750',
        href: '/equipment/excavators/13t-case'
      },
      {
        title: 'K008 Kubota Excavator',
        imagePath: '/images/excavators/K008 Kubota Excavator.jpg',
        description: 'Ultra-compact excavator for very tight access areas and indoor work.',
        dailyRate: '180',
        href: '/equipment/excavators/k008-kubota'
      }
    ]
  },
  'skid-steer-loaders': {
    title: 'Skid Steer Loaders',
    description: 'Versatile skid steer loaders for construction and landscaping projects.',
    heroImage: '/images/skid-steer-loaders/Kubota svl65 bobcat posi.png',
    items: [
      {
        title: 'Kubota SVL65 Bobcat',
        imagePath: '/images/skid-steer-loaders/Kubota svl65 bobcat posi.png',
        description: 'Powerful track loader with excellent stability and lifting capacity.',
        dailyRate: '380',
        href: '/equipment/skid-steer-loaders/kubota-svl65'
      },
      {
        title: 'S70 Bobcat',
        imagePath: '/images/skid-steer-loaders/S70 Bobcat.png',
        description: 'Compact skid steer loader perfect for tight spaces and small jobs.',
        dailyRate: '280',
        href: '/equipment/skid-steer-loaders/s70-bobcat'
      },
      {
        title: 'Cormidi C60',
        imagePath: '/images/skid-steer-loaders/Cormidi c60.png',
        description: 'Mini loader with excellent maneuverability for restricted access areas.',
        dailyRate: '250',
        href: '/equipment/skid-steer-loaders/cormidi-c60'
      },
      {
        title: 'Pallet Forks',
        imagePath: '/images/skid-steer-loaders/Pallet Forks to suit SVL65.jpeg',
        description: 'Attachment for skid steer loaders to handle palletized materials.',
        dailyRate: '50',
        href: '/equipment/skid-steer-loaders/pallet-forks'
      }
    ]
  },
  'attachments': {
    title: 'Attachments',
    description: 'Various attachments to enhance the capabilities of your hired equipment.',
    heroImage: '/images/attachments/Hydraulic Grab 12-14t.jpeg',
    items: [
      {
        title: 'Hydraulic Grab 12-14t',
        imagePath: '/images/attachments/Hydraulic Grab 12-14t.jpeg',
        description: 'Powerful hydraulic grab attachment for handling and sorting materials.',
        dailyRate: '120',
        href: '/equipment/attachments/hydraulic-grab'
      },
      {
        title: 'Gummy Bucket 1.7-2.5t',
        imagePath: '/images/attachments/GummyServices Bucket 1.7-2.5t (No Teeth).jpeg',
        description: 'Specialized bucket for precise grading and finishing work.',
        dailyRate: '80',
        href: '/equipment/attachments/gummy-bucket'
      },
      {
        title: 'Ripper Tyne 1.7-2.5t',
        imagePath: '/images/attachments/Ripper Tyne 1.7-2.5t.jpeg',
        description: 'Attachment for breaking up hard ground and rock.',
        dailyRate: '60',
        href: '/equipment/attachments/ripper-tyne'
      },
      {
        title: 'Pressure Washer',
        imagePath: '/images/attachments/Pressure-Washer.png',
        description: 'High-pressure cleaning attachment for various surfaces.',
        dailyRate: '90',
        href: '/equipment/attachments/pressure-washer'
      }
    ]
  },
  'compaction-equipment': {
    title: 'Compaction Equipment',
    description: 'Professional compaction equipment for soil and asphalt compaction.',
    heroImage: '/images/compaction-equipment/Bomag 100.png',
    items: [
      {
        title: 'Bomag 100',
        imagePath: '/images/compaction-equipment/Bomag 100.png',
        description: 'Heavy-duty roller for effective soil and asphalt compaction.',
        dailyRate: '220',
        href: '/equipment/compaction-equipment/bomag-100'
      },
      {
        title: 'Wacker Plate VPH70',
        imagePath: '/images/compaction-equipment/Wacker plate vph70.jpg',
        description: 'Versatile plate compactor for various surfaces and materials.',
        dailyRate: '90',
        href: '/equipment/compaction-equipment/wacker-plate'
      },
      {
        title: 'DPU Mikasa MVH-308',
        imagePath: '/images/compaction-equipment/DPU Mikasa mvh-308.jpg',
        description: 'Powerful reversible plate compactor for professional use.',
        dailyRate: '120',
        href: '/equipment/compaction-equipment/dpu-mikasa'
      },
      {
        title: 'Jumping Jack Rammer',
        imagePath: '/images/compaction-equipment/Jumping jack rammer bs60-4.jpeg',
        description: 'Ideal for compacting in trenches and confined areas.',
        dailyRate: '85',
        href: '/equipment/compaction-equipment/jumping-jack'
      }
    ]
  },
  'concrete-equipment': {
    title: 'Concrete Equipment',
    description: 'Specialized equipment for concrete work and finishing.',
    heroImage: '/images/concrete/Trowelling Machine.png',
    items: [
      {
        title: 'Trowelling Machine',
        imagePath: '/images/concrete/Trowelling Machine.png',
        description: 'Professional concrete finishing tool for smooth surfaces.',
        dailyRate: '150',
        href: '/equipment/concrete-equipment/trowelling-machine'
      },
      {
        title: 'Stihl Demo Saw',
        imagePath: '/images/concrete/16 stihl demo saw.png',
        description: 'Powerful concrete cutting saw for precise cuts.',
        dailyRate: '120',
        href: '/equipment/concrete-equipment/stihl-demo-saw'
      },
      {
        title: 'Honda Concrete Vibrator',
        imagePath: '/images/concrete/Honda concrete Vibe.jpg',
        description: 'Essential tool for removing air bubbles from poured concrete.',
        dailyRate: '90',
        href: '/equipment/concrete-equipment/concrete-vibrator'
      }
    ]
  },
  'tipper-trucks': {
    title: 'Tipper Trucks',
    description: 'Reliable tipper trucks for efficient material transport.',
    heroImage: '/images/tipper-trucks/Isuzu frr500 tipper (6t med rigid).jpg',
    items: [
      {
        title: 'Car License Tipper',
        imagePath: '/images/tipper-trucks/Car licence tipper.jpg',
        description: 'Convenient tipper truck that can be driven with a standard car license.',
        dailyRate: '220',
        href: '/equipment/tipper-trucks/car-license-tipper'
      },
      {
        title: 'Isuzu FRR500 Tipper (6t)',
        imagePath: '/images/tipper-trucks/Isuzu frr500 tipper (6t med rigid).jpg',
        description: 'Medium rigid tipper truck with 6-tonne capacity for larger loads.',
        dailyRate: '380',
        href: '/equipment/tipper-trucks/isuzu-frr500'
      }
    ]
  },
  'non-destructive-excavation': {
    title: 'Non-Destructive Excavation',
    description: 'Specialized equipment for non-destructive digging and excavation.',
    heroImage: '/images/non-destructive-excavation/hydroexcavationtrailer.png',
    items: [
      {
        title: 'Hydro Excavation Trailer',
        imagePath: '/images/non-destructive-excavation/hydroexcavationtrailer.png',
        description: 'Safe excavation around utilities and sensitive infrastructure.',
        dailyRate: '450',
        href: '/equipment/non-destructive-excavation/hydro-excavation-trailer'
      }
    ]
  },
  'augers-rock-breakers': {
    title: 'Augers & Rock Breakers',
    description: 'Powerful augers and rock breakers for drilling and breaking tough materials.',
    heroImage: '/images/augers&rock-breakers/Auger 300mm (Drill piece only).jpeg',
    items: [
      {
        title: 'Auger 150mm',
        imagePath: '/images/augers&rock-breakers/Auger 150mm (Drill piece only) (2).jpeg',
        description: '150mm diameter auger for precise hole drilling.',
        dailyRate: '60',
        href: '/equipment/augers-rock-breakers/auger-150mm'
      },
      {
        title: 'Auger 200mm',
        imagePath: '/images/augers&rock-breakers/Auger 200mm (Drill piece only).jpeg',
        description: '200mm diameter auger for medium-sized holes.',
        dailyRate: '70',
        href: '/equipment/augers-rock-breakers/auger-200mm'
      },
      {
        title: 'Auger 250mm',
        imagePath: '/images/augers&rock-breakers/Auger 250mm (Drill piece only).jpeg',
        description: '250mm diameter auger for larger holes.',
        dailyRate: '80',
        href: '/equipment/augers-rock-breakers/auger-250mm'
      },
      {
        title: 'Auger 300mm',
        imagePath: '/images/augers&rock-breakers/Auger 300mm (Drill piece only).jpeg',
        description: '300mm diameter auger for substantial hole drilling.',
        dailyRate: '90',
        href: '/equipment/augers-rock-breakers/auger-300mm'
      },
      {
        title: 'Auger 350mm',
        imagePath: '/images/augers&rock-breakers/Auger 350mm (Drill piece only).jpeg',
        description: '350mm diameter auger for large holes.',
        dailyRate: '100',
        href: '/equipment/augers-rock-breakers/auger-350mm'
      },
      {
        title: 'Auger 450mm',
        imagePath: '/images/augers&rock-breakers/Auger 450mm (Drill piece only) Round drive.jpeg',
        description: '450mm diameter auger for very large holes.',
        dailyRate: '120',
        href: '/equipment/augers-rock-breakers/auger-450mm'
      }
    ]
  }
};

// Type for the params
type Props = {
  params: {
    category: string;
  };
};

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Get the category data
  const category = params.category;
  const categoryData = categories[category as keyof typeof categories];
  
  // If category doesn't exist, return default metadata
  if (!categoryData) {
    return {
      title: 'Equipment Category Not Found',
      description: 'The requested equipment category could not be found.',
    };
  }
  
  return {
    title: `${categoryData.title} for Hire | Geelong Excavator Hire`,
    description: categoryData.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  // Get the category from the URL
  const category = params.category;
  
  // Get the category data
  const categoryData = categories[category as keyof typeof categories];
  
  // If category doesn't exist, show 404 page
  if (!categoryData) {
    notFound();
  }
  
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/rocks/pexels-scottwebb-1029604.jpg"
            alt={categoryData.title}
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="max-w-3xl mb-4 text-white">
            {categoryData.title}
          </h1>
          <p className="text-xl max-w-2xl">
            {categoryData.description}
          </p>
        </div>
      </section>

      {/* Equipment Items */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-center mb-12">Available {categoryData.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryData.items.map((item) => (
              <EquipmentCard
                key={item.title}
                {...item}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/book-now" className="btn-primary">
              Book Equipment Now
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">Why Choose Our {categoryData.title}</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Quality Equipment</h3>
                  <p className="text-gray-700">
                    All our {categoryData.title.toLowerCase()} are regularly serviced and maintained to ensure reliability and performance on your job site.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Flexible Hire Options</h3>
                  <p className="text-gray-700">
                    We offer daily, weekly, and monthly hire rates to suit your project timeline and budget.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Delivery Available</h3>
                  <p className="text-gray-700">
                    We can deliver our {categoryData.title.toLowerCase()} directly to your site across Geelong and surrounding areas.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Expert Advice</h3>
                  <p className="text-gray-700">
                    Not sure which {categoryData.title.toLowerCase().slice(0, -1)} is right for your project? Our team can help you select the perfect equipment for your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-center mb-8">Explore Other Equipment Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(categories)
              .filter(([key]) => key !== category)
              .slice(0, 4)
              .map(([key, value]) => (
                <Link 
                  key={key}
                  href={`/equipment/${key}`}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 hover:border-primary text-center"
                >
                  <div className="font-medium hover:text-primary transition-colors">
                    {value.title}
                  </div>
                </Link>
              ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/equipment" className="text-primary hover:underline">
              View All Equipment Categories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
