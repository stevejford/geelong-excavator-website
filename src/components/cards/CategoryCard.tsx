import Image from 'next/image';
import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  imagePath: string;
  description: string;
  href: string;
}

const CategoryCard = ({ title, imagePath, description, href }: CategoryCardProps) => {
  return (
    <Link 
      href={href}
      className="group card hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imagePath}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-[#0D979C] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
