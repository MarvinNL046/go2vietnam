import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '../hooks/useTranslation';

interface CityCardProps {
  name: string;
  slug: string;
  image: string;
  region?: string;
  highlights?: (string | { en: string; nl?: string })[];
  description?: string;
}

const CityCard: React.FC<CityCardProps> = ({ name, slug, image, region, highlights = [], description }) => {
  const { t, locale } = useTranslation('common');
  const visibleHighlights = highlights.slice(0, 2);
  const moreCount = highlights.length - 2;

  return (
    <div className="card group">
      <Link href={`/city/${slug}/`}>
        <div className="relative h-52 overflow-hidden rounded-t-2xl">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
          {region && (
            <span className="badge-primary absolute top-3 right-3">
              {region}
            </span>
          )}
        </div>
      </Link>
      <div className="p-5">
        <h3 className="font-display font-bold text-lg text-warm-900 mb-1">{name}</h3>
        {description && (
          <p className="text-warm-500 text-sm line-clamp-2 mb-3">{description}</p>
        )}
        {visibleHighlights.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {visibleHighlights.map((h, i) => (
              <span key={i} className="text-xs bg-warm-100 text-warm-600 px-2.5 py-1 rounded-full">{typeof h === 'object' ? (h as any)[locale] || (h as any).en : h}</span>
            ))}
            {moreCount > 0 && (
              <span className="badge-primary text-xs">+{moreCount} {t('common.more')}</span>
            )}
          </div>
        )}
        <Link
          href={`/city/${slug}/`}
          className="inline-flex items-center gap-1 text-brand-primary font-semibold text-sm hover:gap-2 transition-all duration-200"
        >
          {t('sections.exploreCity')}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default CityCard;
