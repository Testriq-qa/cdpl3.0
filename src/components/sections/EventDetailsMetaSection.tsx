import { Calendar, MapPin, Users } from "lucide-react";
import type { PastEvent } from "@/data/eventsData";

type Props = { event: PastEvent; fullWidth?: boolean };

export default function EventDetailsMetaSection({ event, fullWidth = false }: Props) {
  // When used inside the 2-col grid, remove inner container cap/padding
  const wrap = fullWidth
    ? "grid grid-cols-1 gap-4 md:grid-cols-3"
    : "mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8";

  return (
    <section className="w-full bg-white text-neutral-900">
      <div className={wrap}>
        <MetaCard
          icon={<Calendar className="h-5 w-5 text-orange-600" />}
          label="Date"
          value={event.date}
          ring="ring-orange-100"
          bg="from-orange-50 to-amber-50"
        />
        <MetaCard
          icon={<MapPin className="h-5 w-5 text-sky-600" />}
          label="Location"
          value={event.location}
          ring="ring-sky-100"
          bg="from-sky-50 to-cyan-50"
        />
        <MetaCard
          icon={<Users className="h-5 w-5 text-violet-600" />}
          label="Participants"
          value={`${event.attendees} people`}
          ring="ring-violet-100"
          bg="from-violet-50 to-fuchsia-50"
        />
      </div>
    </section>
  );
}

function MetaCard({
  icon,
  label,
  value,
  ring,
  bg,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  ring: string;
  bg: string;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl border border-black/10 shadow-sm ring-1",
        ring,
        "bg-gradient-to-br",
        bg,
      ].join(" ")}
    >
      <div className="relative flex items-start gap-3 p-5">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-white shadow-sm ring-1 ring-black/5">
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-xs font-medium text-neutral-500">{label}</p>
          <p className="truncate text-sm font-semibold">{value}</p>
        </div>
      </div>
    </div>
  );
}
