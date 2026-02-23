import Image from 'next/image';
import Link from 'next/link';

interface FoodCardProps {
  name: string;
  slug: string;
  image: string;
  category?: string;
  spiceLevel?: string;
  description?: string;
}

const spiceLevelConfig: Record<string, { label: string; color: string }> = {
  mild: { label: 'Mild', color: 'text-warm-500' },
  medium: { label: 'Medium', color: 'text-amber-600' },
  hot: { label: 'Hot', color: 'text-orange-600' },
  'very hot': { label: 'Very Hot', color: 'text-red-600' },
};

const FoodCard: React.FC<FoodCardProps> = ({ name, slug, image, category, spiceLevel, description }) => {
  const spice = spiceLevel ? spiceLevelConfig[spiceLevel.toLowerCase()] : null;

  return (
    <div className="card group">
      <Link href={`/food/${slug}/`}>
        <div className="relative h-48 overflow-hidden rounded-t-2xl">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {category && (
            <span className="badge-accent absolute top-3 left-3">
              {category}
            </span>
          )}
        </div>
      </Link>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-display font-bold text-lg text-warm-900">{name}</h3>
          {spiceLevel && (
            <span className={`text-xs font-medium ${spice?.color ?? 'text-warm-500'}`}>
              {spice?.label ?? spiceLevel}
            </span>
          )}
        </div>
        {description && (
          <p className="text-warm-500 text-sm line-clamp-2">{description}</p>
        )}
      </div>
    </div>
  );
};

export default FoodCard;
