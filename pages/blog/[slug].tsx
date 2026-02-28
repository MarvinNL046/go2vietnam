import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../hooks/useTranslation';
import { siteConfig } from '../../site.config';

const { getPostBySlug, getPostSlugs } = require('../../lib/blog');

interface BlogPostProps {
  post: any;
}

export default function BlogPost({ post }: BlogPostProps) {
  const { t, locale } = useTranslation('common');

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt || t('seo.blogFallbackDesc').replace('{0}', post.title).replace('{1}', siteConfig.name),
    image: post.image || undefined,
    datePublished: post.date || undefined,
    dateModified: post.updatedAt || post.date || undefined,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.seo.siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.seo.siteUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.seo.siteUrl}/blog/${post.slug}/`,
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t('nav.home'), item: siteConfig.seo.siteUrl },
      { '@type': 'ListItem', position: 2, name: t('nav.blog'), item: `${siteConfig.seo.siteUrl}/blog/` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${siteConfig.seo.siteUrl}/blog/${post.slug}/` },
    ],
  };

  return (
    <>
      <SEOHead
        title={`${post.title} - ${siteConfig.name}`}
        description={post.excerpt || t('seo.blogFallbackDesc').replace('{0}', post.title).replace('{1}', siteConfig.name)}
        ogImage={post.image}
        path={`/blog/${post.slug}/`}
        jsonLd={[articleJsonLd, breadcrumbJsonLd]}
      />
      <div className="container-custom py-8 lg:py-12">
        <Breadcrumbs items={[
          { name: t('nav.home'), href: '/' },
          { name: t('nav.blog'), href: '/blog/' },
          { name: post.title, href: `/blog/${post.slug}/` },
        ]} />

        {/* Hero Image */}
        {post.image && (
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-10 shadow-soft-xl">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-3 mb-3">
                {post.category && (
                  <span className="badge-primary">{post.category}</span>
                )}
                <span className="text-white/80 text-sm">
                  {new Date(post.date).toLocaleDateString(locale === 'nl' ? 'nl-NL' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
              <h1 className="font-display text-display-sm md:text-display-md text-white">{post.title}</h1>
            </div>
          </div>
        )}

        {!post.image && (
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              {post.category && (
                <span className="badge-primary">{post.category}</span>
              )}
              <span className="text-warm-400 text-sm">
                {new Date(post.date).toLocaleDateString(locale === 'nl' ? 'nl-NL' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
            <h1 className="font-display text-display-sm md:text-display-md text-warm-900">{post.title}</h1>
          </div>
        )}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag: string, i: number) => (
              <span
                key={i}
                className="bg-warm-100 text-warm-600 px-3 py-1 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Content */}
        <div
          className="prose-custom"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getPostSlugs();
  return {
    paths: slugs.map((slug: string) => ({ params: { slug } })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params?.slug as string);
  if (!post) return { notFound: true };
  return {
    props: { post },
    revalidate: 86400,
  };
};
