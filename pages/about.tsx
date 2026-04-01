import Image from 'next/image';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import { useTranslation } from '../hooks/useTranslation';
import { siteConfig } from '../site.config';

const contentAreas = [
  {
    icon: '\u{1F3D9}',
    title: 'Cities & Regions',
    description: 'In-depth guides to Hanoi, Ho Chi Minh City, Da Nang, Hoi An, and destinations across Vietnam.',
  },
  {
    icon: '\u{1F35C}',
    title: 'Food & Drinks',
    description: 'From pho to banh mi, discover the world-renowned flavors of Vietnamese cuisine.',
  },
  {
    icon: '\u{1F6F5}',
    title: 'Transport',
    description: 'Navigate sleeper buses, trains, domestic flights, motorbikes, and local transport.',
  },
  {
    icon: '\u{1F4C4}',
    title: 'Visa & Practical Info',
    description: 'Up-to-date visa requirements, health tips, currency exchange, and travel essentials.',
  },
  {
    icon: '\u{26C5}',
    title: 'Weather & Seasons',
    description: 'Month-by-month weather data across three climate zones to help you plan your visit.',
  },
  {
    icon: '\u{1F3DD}',
    title: 'Islands & Nature',
    description: 'Phu Quoc, Ha Long Bay, Ninh Binh, and the stunning natural landscapes of Vietnam.',
  },
];

const eeatPrinciples = [
  {
    letter: 'E',
    label: 'Experience',
    description: 'Our content is informed by firsthand travel experience across Vietnam.',
  },
  {
    letter: 'E',
    label: 'Expertise',
    description: 'Content is written by experienced travel writers who specialize in Southeast Asia.',
  },
  {
    letter: 'A',
    label: 'Authoritativeness',
    description: 'We cite official sources, local businesses, and verified data in all our guides.',
  },
  {
    letter: 'T',
    label: 'Trustworthiness',
    description: 'Articles are fact-checked, regularly updated, and transparent about affiliate relationships.',
  },
];

export default function AboutPage() {
  const { t, locale } = useTranslation('common');

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.seo.siteUrl,
    description: siteConfig.tagline,
    logo: `${siteConfig.seo.siteUrl}/images/logo.png`,
    sameAs: [],
  };

  return (
    <>
      <SEOHead
        title={`About ${siteConfig.name} - Your Trusted ${siteConfig.destination} Travel Guide`}
        description={`Learn about ${siteConfig.name}, your comprehensive guide to planning the perfect ${siteConfig.destination} trip. Expert advice, local insights, and trusted recommendations.`}
        path="/about"
        jsonLd={organizationJsonLd}
      />

      <div className="container-custom py-12 lg:py-16">
        <h1 className="font-display text-display-sm text-warm-900 mb-4">About {siteConfig.name}</h1>
        <p className="text-warm-600 text-lg mb-8">{siteConfig.tagline}</p>

        <div className="prose-custom max-w-3xl">
          {/* Our Mission */}
          <h2>Our Mission</h2>
          <p>
            {siteConfig.name} was created with one goal: to be the most helpful,
            accurate, and comprehensive travel resource for anyone visiting {siteConfig.destination}.
            Whether you&apos;re a first-time visitor or a returning traveler, we provide
            the practical information you need to make the most of your trip.
          </p>
          <p>
            From exploring the ancient streets of Hoi An to navigating the bustling markets of Hanoi,
            from finding the best pho in Ho Chi Minh City to understanding visa requirements, we cover
            every aspect of traveling in {siteConfig.destination} with clear, actionable advice.
          </p>

          {/* What We Cover */}
          <h2>What We Cover</h2>
          <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            {contentAreas.map((area) => (
              <div
                key={area.title}
                className="bg-warm-50 rounded-xl p-5"
              >
                <div className="text-2xl mb-2">{area.icon}</div>
                <h3 className="font-bold text-warm-900 mb-1">{area.title}</h3>
                <p className="text-warm-500 text-sm">{area.description}</p>
              </div>
            ))}
          </div>

          {/* E-E-A-T Section */}
          <h2>Content You Can Trust</h2>
          <p>
            We follow the E-E-A-T framework to ensure every article meets high standards
            of quality, accuracy, and usefulness.
          </p>
          <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            {eeatPrinciples.map((principle, index) => (
              <div key={index} className="bg-warm-50 rounded-xl p-5 text-center">
                <div className="w-10 h-10 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold">{principle.letter}</span>
                </div>
                <h3 className="font-bold text-warm-900 mb-1">{principle.label}</h3>
                <p className="text-warm-500 text-sm">{principle.description}</p>
              </div>
            ))}
          </div>

          {/* Meet the Founder */}
          <div className="not-prose bg-warm-50 rounded-xl p-6 my-6">
            <h2 className="text-2xl font-bold text-warm-900 mb-4">Meet the Founder</h2>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <Image
                  src="/images/team/marvin.webp"
                  alt="Marvin — Founder of Go2Vietnam"
                  width={180}
                  height={180}
                  className="rounded-2xl object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-warm-900 mb-2">Marvin</h3>
                <p className="text-sm text-brand-primary font-medium mb-3">Founder &amp; Developer</p>
                <p className="text-warm-700 mb-3">
                  Marvin is a Dutch travel technology specialist and the creator of the Go2 Travel Network — a growing
                  family of independent destination guides. With a passion for exploring Vietnam and a background in
                  web development, he builds data-driven, practical travel guides that help travelers plan better trips.
                </p>
                <p className="text-warm-700">
                  The Go2 network now spans multiple destinations across Asia, Europe, and the Americas, with each site
                  offering in-depth city guides, local food recommendations, transport routes, and honest travel advice.
                </p>
              </div>
            </div>
          </div>

          {/* Affiliate Disclosure */}
          <h2>Affiliate Disclosure</h2>
          <p>
            {siteConfig.name} contains affiliate links to trusted travel services
            including hotels, tours, eSIM providers, and transport bookings. When you
            book through these links, we may earn a small commission at no extra cost
            to you.
          </p>
          <p>
            This revenue helps us keep the site running and maintain our content. We only
            recommend services we genuinely believe in. Our editorial opinions are never
            influenced by affiliate partnerships.
          </p>

          {/* Contact */}
          <h2>Get in Touch</h2>
          <p>
            Have a question, suggestion, or want to collaborate? We&apos;d love to hear from you.
            Reach out to us and we&apos;ll get back to you as soon as possible.
          </p>
          <p>
            <a
              href={`mailto:hello@${siteConfig.domain}`}
              className="text-brand-primary hover:text-brand-primary-600"
            >
              hello@{siteConfig.domain}
            </a>
          </p>

          {/* Explore CTA */}
          <h2>Start Exploring {siteConfig.destination}</h2>
          <div className="not-prose flex flex-wrap gap-3 my-4">
            <Link href="/city/" className="bg-white border border-warm-200 text-warm-700 px-5 py-2.5 rounded-lg font-semibold hover:border-brand-primary hover:text-brand-primary transition-colors">
              Cities
            </Link>
            <Link href="/food/" className="bg-white border border-warm-200 text-warm-700 px-5 py-2.5 rounded-lg font-semibold hover:border-brand-primary hover:text-brand-primary transition-colors">
              Food
            </Link>
            <Link href="/transport/" className="bg-white border border-warm-200 text-warm-700 px-5 py-2.5 rounded-lg font-semibold hover:border-brand-primary hover:text-brand-primary transition-colors">
              Transport
            </Link>
            <Link href="/blog/" className="bg-white border border-warm-200 text-warm-700 px-5 py-2.5 rounded-lg font-semibold hover:border-brand-primary hover:text-brand-primary transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => ({ props: {}, revalidate: 604800 });
