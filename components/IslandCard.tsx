import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '../hooks/useTranslation';

interface IslandCardProps {
  name: string;
  slug: string;
  image: string;
  bestFor?: (string | { en: string; nl?: string })[];
  description?: string;
}

const IslandCard: React.FC<IslandCardProps> = ({ name, slug, image, bestFor = [], description }) => {
  const { t, locale } = useTranslation('common');

  return (
    <div className="card group">
      <Link href={`/islands/${slug}/`}>
        <div className="relative h-52 overflow-hidden rounded-t-2xl">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </Link>
      <div className="p-5">
        <h3 className="font-display font-bold text-lg text-warm-900 mb-1">{name}</h3>
        {description && (
          <p className="text-warm-500 text-sm line-clamp-2 mb-3">{description}</p>
        )}
        {bestFor.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {bestFor.slice(0, 3).map((tag, i) => (
              <span key={i} className="badge-secondary text-xs">{typeof tag === 'object' ? (tag as any)[locale] || (tag as any).en : tag}</span>
            ))}
          </div>
        )}
        <Link
          href={`/islands/${slug}/`}
          className="inline-flex items-center gap-1 text-brand-primary font-semibold text-sm hover:gap-2 transition-all duration-200"
        >
          {t('sections.learnMore')}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default IslandCard;
