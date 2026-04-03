import Image from 'next/image';
import Link from 'next/link';

interface AuthorBioProps {
  name: string;
  locale?: string;
}

const authorData: Record<string, { bio: Record<string, string>; credentials: Record<string, string> }> = {
  'Go2Vietnam Team': {
    bio: {
      en: 'We are a team of travel writers and Vietnam enthusiasts who explore the country year-round. Our guides are based on first-hand experience, local knowledge, and verified official sources.',
      nl: 'Wij zijn een team van reisschrijvers en Vietnam-liefhebbers die het land het hele jaar door verkennen. Onze gidsen zijn gebaseerd op eigen ervaring, lokale kennis en geverifieerde officiële bronnen.',
    },
    credentials: {
      en: 'Exploring Vietnam since 2020 | 40+ provinces visited | Updated monthly',
      nl: 'Vietnam verkennen sinds 2020 | 40+ provincies bezocht | Maandelijks bijgewerkt',
    },
  },
};

export default function AuthorBio({ name, locale = 'en' }: AuthorBioProps) {
  const lang = locale === 'nl' ? 'nl' : 'en';
  const author = authorData[name] || authorData['Go2Vietnam Team'];

  return (
    <div className="mt-12 pt-8 border-t" itemScope itemType="https://schema.org/Person">
      <div className="flex items-start gap-4">
        <Image
          src="/images/team/marvin.webp"
          alt={name}
          width={56}
          height={56}
          className="flex-shrink-0 w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold text-lg" itemProp="name">{name}</h3>
          <p className="text-sm text-brand-secondary font-medium mt-0.5">
            {author.credentials[lang]}
          </p>
          <p className="text-gray-600 mt-2 text-sm" itemProp="description">
            {author.bio[lang]}
          </p>
          <Link
            href="/"
            className="text-brand-secondary text-sm hover:underline mt-2 inline-block"
          >
            {lang === 'nl' ? 'Meer over ons' : 'More about us'} &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
