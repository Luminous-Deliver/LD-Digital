import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Privacy Policy | L&D Digital"
        description="Read L&D Digital's privacy policy. Learn how we collect, use, and protect your personal data in compliance with UK GDPR regulations."
        keywords="privacy policy, data protection, GDPR, cookies policy"
      />
      <ScrollProgressBar />
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 md:pt-44 md:pb-24">
        <BreadcrumbNav />
        <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-8 mt-4">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <p className="text-muted-foreground">Last updated: 20/10/2026</p>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">1. Introduction</h2>
            <p>
              L&D Digital ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fill out contact forms</li>
              <li>Request a quote or consultation</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us via email or WhatsApp</li>
            </ul>
            <p className="mt-4">This information may include: name, email address, phone number, company name, and any information you provide in messages.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited</li>
              <li>Referring website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you quotes, proposals, and project updates</li>
              <li>Improve our website and services</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">4. Cookies</h2>
            <p>
              We don't use analytics, advertising or tracking cookies, and this website doesn't set cookies of its own.
            </p>
            <p className="mt-4">If you close the announcement bar or open the quick-contact button, your browser remembers that in its local storage so we don't show the same prompt again. The site also keeps a copy of its own files in your browser so pages load faster next time. You can clear both in your browser settings.</p>
            <p className="mt-4">Our fonts are stored on our own website, so loading a page doesn't send your details to a font provider. Our forms are run by Tally and protected from spam by Cloudflare Turnstile.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">5. Data Sharing and Disclosure</h2>
            <p>We do not sell your personal data. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> Third-party services that help us operate our website (e.g., hosting and form handling)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">7. Your Rights (UK GDPR)</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Rectify inaccurate data</li>
              <li>Request erasure of your data</li>
              <li>Restrict processing of your data</li>
              <li>Data portability</li>
              <li>Object to processing</li>
              <li>Withdraw consent</li>
            </ul>
            <p className="mt-4">To exercise these rights, contact us at: <a href="mailto:contact@luminousanddeliver.co.uk" className="text-primary hover:underline">contact@luminousanddeliver.co.uk</a></p>
            <h3 className="text-xl font-semibold mt-6 mb-2">Complaints about your data</h3>
            <p>If you're unhappy with how we've handled your personal data, email <a href="mailto:contact@luminousanddeliver.co.uk" className="text-primary hover:underline">contact@luminousanddeliver.co.uk</a> with "Data complaint" in the subject line. We'll acknowledge your complaint within 30 days, look into it, keep you updated and tell you the outcome. If you're still unhappy after that, you can complain to the <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Information Commissioner's Office</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">8. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">9. Third-Party Services</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.</p>
            <p className="mt-4">Third-party services we use:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cloudflare (website hosting, security and spam protection)</li>
              <li>Tally Forms (form submissions)</li>
              <li>WhatsApp (customer communication)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">10. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under 18. We do not knowingly collect personal data from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by the "Last updated" date at the top of this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">12. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <ul className="list-none space-y-2 mt-4">
              <li><strong>Email:</strong> <a href="mailto:contact@luminousanddeliver.co.uk" className="text-primary hover:underline">contact@luminousanddeliver.co.uk</a></li>
              <li><strong>Phone:</strong> <a href="tel:+447356260648" className="text-primary hover:underline">+44 7356 260648</a></li>
              <li><strong>Address:</strong> London, UK</li>
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;