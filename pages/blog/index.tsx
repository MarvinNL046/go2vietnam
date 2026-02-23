import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useTranslation } from '../../hooks/useTranslation';
import { siteConfig } from '../../site.config';

const { getAllPosts } = require('../../lib/blog');

interface BlogIndexProps {
  posts: any[];
}

export default function BlogIndex({ posts }: BlogIndexProps) {
  const { t } = useTranslation('common');

  return (
    <>
      <SEOHead
        title={`Travel Blog - ${siteConfig.name}`}
        description={`Latest ${siteConfig.destination} travel tips, guides, and stories.`}
      />
      <div className="container-custom py-8 lg:py-12">
        <Breadcrumbs items={[
          { name: t('nav.home'), href: '/' },
          { name: t('nav.blog'), href: '/blog/' },
        ]} />

        <div className="mb-10">
          <h1 className="font-display text-display-sm text-warm-900 mb-2">
            {siteConfig.destination} Travel Blog
          </h1>
          <p className="text-warm-500 text-lg">
            Stories, tips, and insights for your next adventure
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <div className="mx-auto w-20 h-20 mb-6 text-warm-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
              </svg>
            </div>
            <p className="text-warm-500 text-lg font-medium mb-2">No posts yet</p>
            <p className="text-warm-400 text-sm">Blog coming soon! Stay tuned for travel stories and tips.</p>
          </div>
        ) : (
          <div className="animate-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {posts.map((post: any) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="card group overflow-hidden"
              >
                <div className="relative h-52 overflow-hidden rounded-t-2xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {post.category && (
                    <span className="badge-primary absolute top-3 left-3">
                      {post.category}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-xs text-warm-400 mb-2">
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <h2 className="font-display font-bold text-lg text-warm-900 group-hover:text-brand-primary transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-warm-500 text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  return {
    props: { posts },
    revalidate: 86400,
  };
};
