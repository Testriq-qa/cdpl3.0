import { ContactHeroSection } from '@/components/sections/ContactHeroSection';
import { ContactMethodsSection } from '@/components/sections/ContactMethodSection';
import { ContactOfficeMapSection } from '@/components/sections/ContactOfficeMapSection';
import { ContactBookCallSection } from '@/components/sections/ContactBookCall';
import { ContactFAQSection } from '@/components/sections/ContactFAQSection';
import ContactReviewSection from '@/components/sections/ContactReviewSection';

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
