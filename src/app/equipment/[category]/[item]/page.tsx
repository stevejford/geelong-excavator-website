import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Define the equipment categories and their data
// This is a duplicate of the data in the category page to avoid import issues
const categories = {
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

// Define the item interface
interface EquipmentItem {
  title: string;
  imagePath: string;
  description: string;
  dailyRate: string;
  href: string;
}

// Define the category interface
interface CategoryData {
  title: string;
  description: string;
  heroImage: string;
  items: EquipmentItem[];
}

// Type for the params
type Props = {
  params: {
    category: string;
    item: string;
  };
};

// Helper function to find an item by its slug
const findItemBySlug = (category: string, itemSlug: string) => {
  // Get the category data
  const categoryData = categories[category as keyof typeof categories];
  
  if (!categoryData) return null;
  
  // Find the item in the category
  const item = categoryData.items.find((item: EquipmentItem) => {
    // Extract the slug from the href
    const href = item.href;
    const slug = href.split('/').pop();
    return slug === itemSlug;
  });
  
  return item ? { ...item, category: categoryData } : null;
};

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = params.category;
  const item = params.item;
  
  // Find the item
  const itemData = findItemBySlug(category, item);
  
  // If item doesn't exist, return default metadata
  if (!itemData) {
    return {
      title: 'Equipment Not Found',
      description: 'The requested equipment could not be found.',
    };
  }
  
  return {
    title: `${itemData.title} for Hire | Geelong Excavator Hire`,
    description: `${itemData.description} Available for hire in Geelong and surrounding areas.`,
  };
}

export default async function ItemPage({ params }: Props) {
  const category = params.category;
  const item = params.item;
  
  // Find the item
  const itemData = findItemBySlug(category, item);
  
  // If item doesn't exist, show 404 page
  if (!itemData) {
    notFound();
  }
  
  // Extract category data
  const categoryData = itemData.category as CategoryData;
  
  // Features based on equipment type
  const getFeatures = () => {
    switch (category) {
      case 'excavators':
        return [
          'Powerful and efficient hydraulic system',
          'Comfortable operator cabin with excellent visibility',
          'Precise control for accurate digging',
          'Excellent stability and balance',
          'Compatible with various attachments'
        ];
      case 'skid-steer-loaders':
        return [
          'High maneuverability in tight spaces',
          'Versatile attachment system',
          'Powerful lifting capacity',
          'Comfortable operator cabin',
          'Easy to transport between job sites'
        ];
      case 'attachments':
        return [
          'Easy to install and remove',
          'Durable construction for long service life',
          'Designed for optimal performance',
          'Compatible with various equipment models',
          'Increases the versatility of your equipment'
        ];
      case 'compaction-equipment':
        return [
          'Efficient compaction performance',
          'Easy to operate and maneuver',
          'Durable construction for tough conditions',
          'Low maintenance requirements',
          'Suitable for various soil types'
        ];
      case 'concrete-equipment':
        return [
          'Professional-grade performance',
          'Ergonomic design for operator comfort',
          'Reliable operation for consistent results',
          'Easy to clean and maintain',
          'Suitable for various concrete applications'
        ];
      case 'tipper-trucks':
        return [
          'Powerful engine for efficient hauling',
          'Durable tipper mechanism',
          'Spacious and comfortable cabin',
          'Easy to operate controls',
          'Excellent payload capacity'
        ];
      case 'non-destructive-excavation':
        return [
          'Safe excavation around utilities',
          'Minimal environmental impact',
          'Precise excavation control',
          'Efficient soil removal system',
          'Reduces risk of damage to underground services'
        ];
      case 'augers-rock-breakers':
        return [
          'Powerful drilling/breaking performance',
          'Durable construction for tough materials',
          'Precise operation for accurate results',
          'Compatible with various equipment models',
          'Efficient for specialized applications'
        ];
      default:
        return [
          'High-quality construction',
          'Regular maintenance and servicing',
          'Excellent performance and reliability',
          'Professional-grade equipment',
          'Suitable for various applications'
        ];
    }
  };
  
  // Specifications based on equipment type
  const getSpecifications = () => {
    switch (category) {
      case 'excavators':
        return {
          'Operating Weight': itemData.title.includes('1.7t') ? '1,700 kg' : 
                             itemData.title.includes('2.5t') ? '2,500 kg' : 
                             itemData.title.includes('3.5t') ? '3,500 kg' : 
                             itemData.title.includes('5t') ? '5,000 kg' : 
                             itemData.title.includes('13t') ? '13,000 kg' : 
                             itemData.title.includes('K008') ? '800 kg' : 'Varies',
          'Digging Depth': itemData.title.includes('1.7t') ? '2.3 m' : 
                          itemData.title.includes('2.5t') ? '2.8 m' : 
                          itemData.title.includes('3.5t') ? '3.2 m' : 
                          itemData.title.includes('5t') ? '3.8 m' : 
                          itemData.title.includes('13t') ? '5.5 m' : 
                          itemData.title.includes('K008') ? '1.7 m' : 'Varies',
          'Engine Power': itemData.title.includes('1.7t') ? '17 HP' : 
                         itemData.title.includes('2.5t') ? '24 HP' : 
                         itemData.title.includes('3.5t') ? '35 HP' : 
                         itemData.title.includes('5t') ? '45 HP' : 
                         itemData.title.includes('13t') ? '95 HP' : 
                         itemData.title.includes('K008') ? '10 HP' : 'Varies',
          'Bucket Capacity': itemData.title.includes('1.7t') ? '0.04 m³' : 
                            itemData.title.includes('2.5t') ? '0.08 m³' : 
                            itemData.title.includes('3.5t') ? '0.12 m³' : 
                            itemData.title.includes('5t') ? '0.18 m³' : 
                            itemData.title.includes('13t') ? '0.6 m³' : 
                            itemData.title.includes('K008') ? '0.02 m³' : 'Varies',
          'Track Width': itemData.title.includes('1.7t') ? '230 mm' : 
                        itemData.title.includes('2.5t') ? '300 mm' : 
                        itemData.title.includes('3.5t') ? '350 mm' : 
                        itemData.title.includes('5t') ? '400 mm' : 
                        itemData.title.includes('13t') ? '600 mm' : 
                        itemData.title.includes('K008') ? '180 mm' : 'Varies'
        };
      case 'skid-steer-loaders':
        return {
          'Operating Weight': itemData.title.includes('SVL65') ? '4,200 kg' : 
                             itemData.title.includes('S70') ? '1,268 kg' : 
                             itemData.title.includes('C60') ? '1,100 kg' : 'Varies',
          'Rated Operating Capacity': itemData.title.includes('SVL65') ? '930 kg' : 
                                     itemData.title.includes('S70') ? '318 kg' : 
                                     itemData.title.includes('C60') ? '270 kg' : 'Varies',
          'Engine Power': itemData.title.includes('SVL65') ? '68 HP' : 
                         itemData.title.includes('S70') ? '23.5 HP' : 
                         itemData.title.includes('C60') ? '20 HP' : 'Varies',
          'Hydraulic Flow': itemData.title.includes('SVL65') ? '70 L/min' : 
                           itemData.title.includes('S70') ? '37 L/min' : 
                           itemData.title.includes('C60') ? '32 L/min' : 'Varies',
          'Travel Speed': itemData.title.includes('SVL65') ? '11.2 km/h' : 
                         itemData.title.includes('S70') ? '9.8 km/h' : 
                         itemData.title.includes('C60') ? '8.5 km/h' : 'Varies'
        };
      default:
        return {
          'Weight': 'Contact for details',
          'Dimensions': 'Contact for details',
          'Power': 'Contact for details',
          'Capacity': 'Contact for details',
          'Compatibility': 'Contact for details'
        };
    }
  };
  
  // Get features and specifications
  const features = getFeatures();
  const specifications = getSpecifications();
  
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
          <div className="flex flex-col space-y-2">
            <Link href={`/equipment/${category}`} className="text-sm hover:underline">
              {categoryData.title}
            </Link>
            <h1 className="max-w-3xl mb-2 text-white">
              {itemData.title}
            </h1>
            <p className="text-xl max-w-2xl">
              {itemData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Details */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Equipment Image */}
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={itemData.imagePath}
                alt={itemData.title}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Equipment Information */}
            <div>
              <div className="flex justify-between items-start mb-6">
                <h2>{itemData.title}</h2>
                <div className="bg-primary text-white px-4 py-2 rounded-lg text-lg font-semibold">
                  ${itemData.dailyRate}/day
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                {itemData.description}
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link href="/book-now" className="btn-primary w-full text-center">
                Book This Equipment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Specifications</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <tbody>
                  {Object.entries(specifications).map(([key, value], index) => (
                    <tr key={key} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium">{key}</td>
                      <td className="px-6 py-4">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Need more information about this equipment?
              </p>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Equipment */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-center mb-12">Related Equipment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categoryData.items
              .filter((relatedItem: EquipmentItem) => relatedItem.title !== itemData.title)
              .slice(0, 3)
              .map((relatedItem: EquipmentItem) => {
                // Extract the slug from the href
                const href = relatedItem.href;
                const slug = href.split('/').pop() || '';
                
                return (
                  <Link 
                    key={relatedItem.title}
                    href={`/equipment/${category}/${slug}`}
                    className="group card hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={relatedItem.imagePath}
                        alt={relatedItem.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {relatedItem.title}
                        </h3>
                        <span className="bg-primary text-white px-2 py-1 rounded text-sm font-medium">
                          ${relatedItem.dailyRate}/day
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {relatedItem.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
          </div>
          <div className="text-center mt-8">
            <Link href={`/equipment/${category}`} className="btn-secondary">
              View All {categoryData.title}
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Hire This Equipment?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book now to secure the {itemData.title} for your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book-now" className="btn-primary bg-white text-primary hover:bg-gray-100">
              Book Now
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
