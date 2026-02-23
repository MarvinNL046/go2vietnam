import SEOHead from '../components/SEOHead';
import { siteConfig } from '../site.config';

export default function Terms() {
  return (
    <>
      <SEOHead
        title={`Terms of Service - ${siteConfig.name}`}
        description={`Terms of service for ${siteConfig.domain}`}
      />
      <div className="container-custom py-12 lg:py-16">
        <h1 className="font-display text-display-sm text-warm-900 mb-8">Terms of Service</h1>
        <div className="prose-custom">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <h2>Acceptance of Terms</h2>
          <p>By accessing {siteConfig.domain}, you agree to these terms of service. If you do not agree, please do not use our website.</p>
          <h2>Content</h2>
          <p>The information on this website is for general informational purposes only. While we strive for accuracy, travel information may change without notice. Always verify details before your trip.</p>
          <h2>Affiliate Disclosure</h2>
          <p>This website participates in affiliate programs. We may earn commissions from qualifying purchases made through links on our site.</p>
          <h2>Limitation of Liability</h2>
          <p>{siteConfig.name} shall not be liable for any travel-related decisions made based on information provided on this website.</p>
        </div>
      </div>
    </>
  );
}
