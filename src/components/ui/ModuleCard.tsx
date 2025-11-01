// components/ui/ModuleCard.tsx
interface ModuleCardProps {
  number: string;
  title: string;
  topics: string[];
  projects: string[];
  outcome: string;
}

export default function ModuleCard({ number, title, topics, projects, outcome }: ModuleCardProps) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition">
      <div className="flex items-center mb-4">
        <span className="text-3xl font-bold text-orange-500 mr-3">{number}</span>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4 text-sm md:text-base">
        {topics.map((topic, i) => (
          <li key={i}>{topic}</li>
        ))}
      </ul>
      <div className="mb-4">
        <p className="font-semibold text-orange-600 text-sm">Projects:</p>
        <ul className="list-circle list-inside text-gray-600 text-sm ml-4">
          {projects.map((proj, i) => (
            <li key={i}>{proj}</li>
          ))}
        </ul>
      </div>
      <p className="text-sm italic text-gray-700 bg-gray-50 p-3 rounded-lg">
        <strong>Learning Outcome:</strong> {outcome}
      </p>
    </div>
  );
}