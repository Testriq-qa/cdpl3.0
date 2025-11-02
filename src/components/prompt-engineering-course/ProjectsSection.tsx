// components/sections/ProjectsSection.tsx
export default function ProjectsSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-green-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
                    Real-World <span className="text-green-600">Prompt Projects</span>
                </h2>
                <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto mb-16">
                    Create AI-powered applications using prompt engineering.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">AI Content Generator</h3>
                        <p className="text-gray-600">Build a blog post generator using GenAI prompts.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Code Assistant Bot</h3>
                        <p className="text-gray-600">Create a coding helper with advanced prompting.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Image Generation Tool</h3>
                        <p className="text-gray-600">Develop a DALL-E like image creator with prompts.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}