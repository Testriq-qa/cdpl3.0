import type { PastEvent } from "@/data/eventsData";
import { MapPin } from "lucide-react";

type Props = { event: PastEvent };

export default function EventDetailsVenueSection({ event }: Props) {
  const venue: string = event.venue ?? event.location;
  const address: string | undefined = event.venueAddress;
  const mapUrl: string | undefined = event.mapUrl;

  return (
    <section className="w-full bg-white text-neutral-900">
      <div className="mx-auto max-w-none px-0 py-0">
        <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm ring-1 ring-black/5">
          <div className="p-6 md:p-8">
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white shadow-sm ring-1 ring-black/5">
                <MapPin className="h-5 w-5 text-sky-600" />
              </div>
              <div className="min-w-0">
                <h2 className="text-2xl font-bold tracking-tight">Venue</h2>
                <p className="mt-2 break-words text-[15px] font-semibold text-neutral-900">
                  {venue || "Not specified"}
                </p>
                {address ? (
                  <p className="mt-1 break-words text-sm text-neutral-700">{address}</p>
                ) : null}
                {mapUrl ? (
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex text-sm font-semibold text-sky-700 hover:text-sky-900"
                  >
                    View on map →
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
