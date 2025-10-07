import { ContactHeroSection } from '@/components/Sections/ContactHeroSection';
import { ContactMethodsSection } from '@/components/Sections/ContactMethodSection';
import { ContactOfficeMapSection } from '@/components/Sections/ContactOfficeMapSection';
import { ContactReviewSection } from '@/components/Sections/ContactReviewSection';
import { ContactBookCallSection } from '@/components/Sections/ContactBookCall';
import { ContactFAQSection } from '@/components/Sections/ContactFAQSection';

export default function ContactPage() {
  return (
    <main className="relative min-h-[220vh]">
      <ContactHeroSection />
      <ContactMethodsSection />
      <ContactOfficeMapSection />
      <ContactReviewSection />
      <ContactBookCallSection />
      <ContactFAQSection />
    </main>
  );
}
