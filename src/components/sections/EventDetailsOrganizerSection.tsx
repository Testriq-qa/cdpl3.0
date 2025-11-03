import type { PastEvent } from "@/data/eventsData";

type Props = { event: PastEvent };

export default function EventDetailsOrganizerSection({ event }: Props) {
  return (
    <section className="w-full bg-white text-neutral-900">
      <div className="mx-auto max-w-none px-0 py-0">
        <div className="rounded-2xl border border-black/10 bg-white shadow-sm">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight">Organizer</h2>
            <div className="mt-3 text-[15px] leading-relaxed text-neutral-800">
              {event.organization || "Not specified"}
            </div>
            {event.organizerDetails ? (
              <p className="mt-2 text-sm text-neutral-600">{event.organizerDetails}</p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
