import Image from 'next/image';
import Link from 'next/link';

interface EquipmentCardProps {
  title: string;
  imagePath: string;
  description: string;
  dailyRate?: string;
  href: string;
}

const EquipmentCard = ({ title, imagePath, description, dailyRate, href }: EquipmentCardProps) => {
  return (
    <Link 
      href={href}
      className="group card hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={imagePath}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
            {title}
          </h3>
          {dailyRate && (
            <span className="bg-primary text-white px-2 py-1 rounded text-sm font-medium">
              ${dailyRate}/day
            </span>
          )}
        </div>
        <p className="text-gray-600 text-sm">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default EquipmentCard;
