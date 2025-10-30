'use client';

interface RequestButtonProps {
  serviceTitle: string;
}

export default function RequestButton({ serviceTitle }: RequestButtonProps) {
  const handleClick = () => {
    const event = new CustomEvent('openCorporateRegistration', {
      detail: { service: serviceTitle }
    });
    window.dispatchEvent(event);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
    >
      Request This Service
    </button>
  );
}