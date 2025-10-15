# Event Pages Components

Complete event management system with landing page and individual event detail pages. Modern, SEO-optimized, and conversion-focused design.

## Component Architecture

```
events/
├── EventsHero.tsx          - Hero section for events landing page
├── UpcomingEvents.tsx      - Grid of upcoming event cards
├── PastEvents.tsx          - Past events with recordings & galleries
├── EventDetailHero.tsx     - Individual event hero with registration
├── EventAgenda.tsx         - Event schedule timeline
├── EventFAQ.tsx            - Frequently asked questions accordion
├── index.ts                - Export all components
└── README.md               - This file
```

---

## Events Landing Page Components

### 1. EventsHero

**Purpose**: Eye-catching hero section for events landing page

**Features**:
- ✅ Gradient purple-blue background
- ✅ Animated floating background elements
- ✅ "Upcoming Tech Events & Workshops" badge
- ✅ Large headline with gradient text
- ✅ 4 stats cards (Events Hosted, Participants, Cities, Free Events)
- ✅ Glassmorphism design on cards
- ✅ Dual CTAs (Browse Events + View Past Events)
- ✅ Wave separator at bottom
- ✅ Smooth animations

**Stats Displayed**:
- 50+ Events Hosted
- 10K+ Participants
- 15+ Cities Covered
- 100% Free Events

---

### 2. UpcomingEvents

**Purpose**: Display upcoming events with featured section

**Features**:
- ✅ Featured events section (highlighted with yellow border)
- ✅ Event cards with images/placeholders
- ✅ Category badges with custom colors
- ✅ Date, time, location with icons
- ✅ Seats left indicator (color-coded: red/orange/green)
- ✅ Location type icons (🌐 online, 📍 offline, 🔄 hybrid)
- ✅ Speaker names
- ✅ "Register Now - Free" CTA button
- ✅ Hover effects and animations
- ✅ Responsive grid (1/2/3 columns)

**Event Card Includes**:
- Category badge
- Featured badge (if applicable)
- Event image/placeholder
- Title
- Description (2-line clamp)
- Date, time, location
- Seats availability
- Speakers list
- Registration CTA

**Color Coding for Seats**:
- **Red**: ≤20% seats left (Urgent)
- **Orange**: 21-50% seats left (Limited)
- **Green**: >50% seats left (Available)

---

### 3. PastEvents

**Purpose**: Showcase past events with recordings and galleries

**Features**:
- ✅ Past event cards with images
- ✅ Category badges
- ✅ Recording badge (red with play icon)
- ✅ Date and attendee count
- ✅ Event highlights list
- ✅ "Watch Recording" button
- ✅ "Gallery" button with photo count
- ✅ "View All Past Events" CTA
- ✅ Hover effects

**Past Event Card Includes**:
- Event image/placeholder
- Category badge
- Recording availability badge
- Title
- Date and location
- Attendee count
- Event highlights (bullet points)
- Action buttons (Recording + Gallery)

---

## Individual Event Detail Page Components

### 4. EventDetailHero

**Purpose**: Detailed event information with sticky registration card

**Features**:
- ✅ Back to events button
- ✅ Category badge
- ✅ Large event title
- ✅ Detailed description
- ✅ Event meta cards (Date, Time, Location, Seats)
- ✅ Featured event image
- ✅ Speakers section with avatars
- ✅ **Sticky registration card** (right sidebar)
- ✅ Registration fee display
- ✅ Seats left alert
- ✅ "Register Now" CTA
- ✅ Share and Save buttons
- ✅ Organizer information
- ✅ "Why Attend?" benefits list

**Layout**:
- **Left Column (2/3)**: Event details, image, speakers
- **Right Column (1/3)**: Sticky registration card

**Registration Card Features**:
- Gradient header with price
- Seats left alert (color-coded)
- Large "Register Now" button
- Share and Save buttons
- Organizer info
- Why Attend benefits

---

### 5. EventAgenda

**Purpose**: Display event schedule in timeline format

**Features**:
- ✅ Vertical timeline with gradient line
- ✅ Alternating left/right layout (desktop)
- ✅ Time badges with icons
- ✅ Type-based color coding
- ✅ Session cards with details
- ✅ Speaker names
- ✅ Icon indicators for session types
- ✅ "Download Full Agenda" CTA
- ✅ Responsive (stacks on mobile)

**Session Types & Colors**:
- **Session** (Purple): Keynotes, talks, panels
- **Break** (Orange): Coffee breaks, lunch
- **Workshop** (Blue): Hands-on workshops
- **Networking** (Green): Networking sessions
- **Closing** (Pink): Closing remarks, certificates

**Agenda Items Include**:
- Time slot
- Session title
- Description
- Speaker name (if applicable)
- Type icon and color

---

### 6. EventFAQ

**Purpose**: Answer common questions about the event

**Features**:
- ✅ Accordion-style FAQ
- ✅ Smooth expand/collapse animations
- ✅ First item open by default
- ✅ Chevron rotation animation
- ✅ Hover effects
- ✅ Contact card at bottom
- ✅ Email and Call CTAs
- ✅ Gradient background on contact card

**FAQ Topics Covered**:
- Is the event free?
- Certificate availability
- Prior experience requirements
- What to bring
- Food provisions
- Refund policy
- Session recordings
- Parking information
- Bringing guests
- Cancellation policy

---

## Page Structure

### Events Landing Page (`/events/page.tsx`)

```tsx
import { EventsHero, UpcomingEvents, PastEvents } from '@/components/events';

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <UpcomingEvents />
      <PastEvents />
    </>
  );
}
```

### Individual Event Page (`/events/[slug]/page.tsx`)

```tsx
import { EventDetailHero, EventAgenda, EventFAQ } from '@/components/events';

export default function EventDetailPage({ params }) {
  const event = getEventData(params.slug);
  
  return (
    <>
      <EventDetailHero event={event} />
      <EventAgenda />
      <EventFAQ />
    </>
  );
}
```

---

## Design System

### Color Palette
- **Primary**: Purple (#9333EA to #7E22CE)
- **Secondary**: Blue (#2563EB to #1D4ED8)
- **Accent**: Yellow (#FBBF24), Orange (#F97316), Green (#10B981)
- **Backgrounds**: Gradients from purple/blue/indigo

### Typography
- **Hero Headings**: 4xl to 6xl, bold
- **Section Headings**: 4xl, bold
- **Card Titles**: xl to 2xl, bold
- **Body Text**: sm to lg, regular
- **Meta Info**: xs to sm, medium

### Spacing
- **Section Padding**: py-16 to py-20
- **Card Padding**: p-4 to p-6
- **Grid Gaps**: gap-4 to gap-8

### Animations
- **Hover Effects**: transform, shadow, translate
- **Transitions**: duration-200 to duration-500
- **Floating Animations**: Custom keyframes for blobs
- **Accordion**: max-height transitions

---

## SEO Optimization

### Metadata (Landing Page)
```tsx
export const metadata = {
  title: 'Tech Events & Workshops | Learn from Industry Experts',
  description: 'Join our exclusive tech events and workshops...',
  keywords: 'tech events, workshops, webinars, AI ML events...',
  openGraph: { ... },
};
```

### Metadata (Event Detail Page)
```tsx
export async function generateMetadata({ params }) {
  const event = getEventData(params.slug);
  return {
    title: `${event.title} | Tech Events`,
    description: event.description,
    keywords: `${event.category}, tech event...`,
  };
}
```

### Semantic HTML
- Proper heading hierarchy (H1, H2, H3)
- `<article>` tags for event cards
- `<section>` tags for page sections
- Descriptive alt text for images
- ARIA labels where needed

---

## Responsive Design

### Breakpoints
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (lg, xl)

### Layout Changes
- **Mobile**: Single column, stacked cards
- **Tablet**: 2 columns for event cards
- **Desktop**: 3 columns for regular events, 2 for featured

### Registration Card (Event Detail)
- **Desktop**: Sticky sidebar (right column)
- **Mobile**: Stacks below content

---

## Conversion Optimization

### Multiple CTAs
- Hero section: 2 CTAs
- Each event card: Register button
- Event detail: Large register button + share/save
- FAQ: Contact CTAs

### Urgency & Scarcity
- Seats left indicators (color-coded)
- "Only X seats left!" alerts
- Featured event badges
- Limited time messaging

### Social Proof
- Stats in hero (10K+ participants, 50+ events)
- Attendee counts on past events
- Speaker credentials
- Event highlights

### Trust Signals
- Free event badges
- Certificate mentions
- Organizer information
- Speaker profiles with companies

---

## Customization Guide

### Update Event Data

**Upcoming Events** (`UpcomingEvents.tsx`):
```tsx
const events = [
  {
    id: "1",
    title: "Your Event Title",
    description: "Event description...",
    date: "November 15-16, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Your Venue",
    locationType: "offline", // or "online", "hybrid"
    category: "AI & ML",
    categoryColor: "bg-purple-500",
    seats: 100,
    seatsLeft: 23,
    price: "Free",
    featured: true,
    slug: "/events/your-event-slug",
    speakers: ["Speaker 1", "Speaker 2"],
  },
  // Add more events...
];
```

**Past Events** (`PastEvents.tsx`):
```tsx
const pastEvents = [
  {
    id: "1",
    title: "Past Event Title",
    date: "September 15, 2024",
    location: "Bangalore",
    attendees: 500,
    category: "Web Development",
    categoryColor: "bg-blue-500",
    highlights: ["Highlight 1", "Highlight 2"],
    videoUrl: "/events/recording-url",
    galleryCount: 150,
    slug: "/events/past/event-slug",
  },
];
```

### Change Colors

```tsx
// Category colors
categoryColor: "bg-purple-500"  // Purple
categoryColor: "bg-blue-500"    // Blue
categoryColor: "bg-green-500"   // Green
categoryColor: "bg-orange-500"  // Orange
categoryColor: "bg-pink-500"    // Pink
```

### Modify Agenda

```tsx
// In EventAgenda.tsx
const agenda = [
  {
    time: "9:00 AM - 9:30 AM",
    title: "Session Title",
    description: "Session description...",
    speaker: "Speaker Name",
    type: "session", // or "break", "workshop", "networking", "closing"
  },
];
```

### Update FAQ

```tsx
// In EventFAQ.tsx
const faqs = [
  {
    question: "Your question?",
    answer: "Your answer...",
  },
];
```

---

## Integration with Backend

### Fetch Events from API

```tsx
// In UpcomingEvents.tsx
const [events, setEvents] = useState([]);

useEffect(() => {
  fetch('/api/events/upcoming')
    .then(res => res.json())
    .then(data => setEvents(data));
}, []);
```

### Fetch Event Detail

```tsx
// In [slug]/page.tsx
const getEventData = async (slug: string) => {
  const response = await fetch(`/api/events/${slug}`);
  return response.json();
};
```

### Registration Form

Connect the "Register Now" button to your registration form/API:

```tsx
<button onClick={() => handleRegistration(event.id)}>
  Register Now
</button>

const handleRegistration = async (eventId: string) => {
  // Open modal or redirect to registration form
  // Or make API call to register user
};
```

---

## Performance Tips

1. **Image Optimization**: Use Next.js Image component
2. **Lazy Loading**: Dynamic imports for heavy components
3. **Caching**: Cache event data with SWR or React Query
4. **CDN**: Serve images from CDN
5. **Code Splitting**: Separate landing and detail page bundles

---

## Accessibility

- ✅ Keyboard navigation support
- ✅ ARIA labels for interactive elements
- ✅ Focus states for all buttons/links
- ✅ Color contrast meets WCAG AA
- ✅ Screen reader friendly
- ✅ Semantic HTML structure

---

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Future Enhancements

- [ ] Add calendar integration (Google Calendar, iCal)
- [ ] Implement event reminders
- [ ] Add social sharing with preview cards
- [ ] Include event countdown timers
- [ ] Add waitlist functionality
- [ ] Implement event reviews/ratings
- [ ] Add speaker profile pages
- [ ] Include live chat during events
- [ ] Add event check-in system
- [ ] Implement post-event surveys

---

## Notes

- All components use TypeScript for type safety
- Tailwind CSS for styling
- Lucide React for icons
- Next.js 15 App Router conventions
- Components are fully responsive
- All animations use CSS transforms
- Forms need backend integration
- Replace mock data with actual API calls
