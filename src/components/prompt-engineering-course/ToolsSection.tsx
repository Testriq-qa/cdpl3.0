// components/sections/ToolsSection.tsx
export default function ToolsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          Tools & Technologies <span className="text-green-600">You'll Master</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-green-100 to-blue-100 p-4 rounded-xl font-bold text-gray-800 shadow-md">ChatGPT</div>
          <div className="bg-gradient-to-br from-green-100 to-blue-100 p-4 rounded-xl font-bold text-gray-800 shadow-md">DALL-E</div>
          <div className="bg-gradient-to-br from-green-100 to-blue-100 p-4 rounded-xl font-bold text-gray-800 shadow-md">Midjourney</div>
          <div className="bg-gradient-to-br from-green-100 to-blue-100 p-4 rounded-xl font-bold text-gray-800 shadow-md">Stable Diffusion</div>
          <div className="bg-gradient-to-br from-green-100 to-blue-100 p-4 rounded-xl font-bold text-gray-800 shadow-md">Prompt Tools</div>
          <div className="bg-gradient-to-br from-green-100 to-blue-100 p-4 rounded-xl font-bold text-gray-800 shadow-md">Google Bard</div>
          <div className="bg-gradient-to-br from-green-100 to-blue-100 p-4 rounded-xl font-bold text-gray-800 shadow-md">Claude AI</div>
          <div className="bg-gradient-to-br from-green-100 to-blue-100 p-4 rounded-xl font-bold text-gray-800 shadow-md">Groq</div>
        </div>
      </div>
    </section>
  );
}