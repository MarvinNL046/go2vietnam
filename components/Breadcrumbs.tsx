import Link from 'next/link';
import { useTranslation } from '../hooks/useTranslation';
import { siteConfig } from '../site.config';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { t } = useTranslation('common');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": items.map((item, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "name": item.name,
              "item": `${siteConfig.seo.siteUrl}${item.href}`
            }))
          })
        }}
      />
      <nav className="mb-8" aria-label={t('common.breadcrumb')}>
        <ol className="flex items-center gap-1.5 text-sm">
          {items.map((item, index) => (
            <li key={index} className="inline-flex items-center">
              {index > 0 && (
                <svg className="w-3.5 h-3.5 text-warm-300 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              )}
              {index === items.length - 1 ? (
                <span className="text-warm-900 font-medium">{item.name}</span>
              ) : (
                <Link href={item.href} className="text-warm-500 hover:text-brand-primary transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
