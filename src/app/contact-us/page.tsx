import { ContactHeroSection } from '@/components/sections/ContactHeroSection';
import { ContactMethodsSection } from '@/components/sections/ContactMethodSection';
import { ContactOfficeMapSection } from '@/components/sections/ContactOfficeMapSection';
import { ContactReviewSection } from '@/components/sections/ContactReviewSection';
import { ContactBookCallSection } from '@/components/sections/ContactBookCall';
import { ContactFAQSection } from '@/components/sections/ContactFAQSection';

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
