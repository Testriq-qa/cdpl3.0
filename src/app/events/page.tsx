import { EventsHero, EventServices, PastEvents, CorporateRegistrationModal } from '@/components/events';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Training & Events | Expert-Led Programs for Organizations',
  description: 'Customized training programs, workshops, and expert sessions for corporates, academic institutions, and government organizations. 150+ events conducted, 25K+ professionals trained.',
  keywords: 'corporate training, workshops, expert talks, faculty development, STTP, industrial visits, on-job training, train the trainer, academic training programs',
  openGraph: {
    title: 'Corporate Training & Events | Expert-Led Programs',
    description: 'Customized training programs for your organization. 150+ events conducted, 25K+ professionals trained.',
    type: 'website',
  },
};

export default function EventsPage() {
  return (
    <>
      {/* Hero Section */}
      <EventsHero />

      {/* Services Section */}
      <EventServices />

      {/* Past Events Section */}
      <PastEvents />

      {/* Corporate Registration Modal */}
      <CorporateRegistrationModal />
    </>
  );
}
