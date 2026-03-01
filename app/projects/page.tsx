import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Full-stack and analytical systems focused on performance, scalability, and real-world problem solving. Built with Next.js, React, Node.js, and MongoDB.',
  openGraph: {
    title: 'Projects | Yash Parmar',
    description: 'Full-stack and analytical systems focused on performance, scalability, and real-world problem solving.',
    url: 'https://yashparmar.dev/projects',
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-16">
        
        {/* Title Section */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Projects
          </h1>
          <p className="text-gray-400 text-lg">
            A selection of full-stack and analytical systems focused on performance, scalability, and real-world problem solving.
          </p>
        </div>

        {/* Featured Project */}
        <div className="border border-gray-700 rounded-xl p-10 bg-gray-900/40 space-y-6">
          <span className="text-xs uppercase tracking-wide text-indigo-400">
            Featured Project
          </span>
          
          <h2 className="text-3xl font-semibold">TradeJournal Pro+</h2>
          
          <p className="text-gray-400">
            Multi-market trading analytics platform with rule-based scoring, session analytics, and behavioral tracking.
          </p>
          
          <div className="flex flex-wrap gap-2">
            <span className="border border-gray-600 rounded px-3 py-1 text-xs">Next.js</span>
            <span className="border border-gray-600 rounded px-3 py-1 text-xs">Node.js</span>
            <span className="border border-gray-600 rounded px-3 py-1 text-xs">MongoDB</span>
            <span className="border border-gray-600 rounded px-3 py-1 text-xs">JWT</span>
            <span className="border border-gray-600 rounded px-3 py-1 text-xs">Analytics Engine</span>
          </div>
          
          <div className="flex gap-4">
            <Link 
              href="/projects/tradejournal"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-md text-sm font-medium"
            >
              View Case Study
            </Link>
            <a 
              href="#"
              className="border border-gray-600 hover:border-gray-400 px-5 py-2 rounded-md text-sm"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Other Projects */}
        <div className="space-y-8 mt-12">
          <h2 className="text-2xl font-semibold">Other Projects</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Electrotrack */}
            <div className="border border-gray-800 rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold">Electrotrack</h3>
              <p className="text-gray-400 text-sm">
                Real-time electrical consumption monitoring and analytics system.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="border border-gray-600 rounded px-3 py-1 text-xs">IoT</span>
                <span className="border border-gray-600 rounded px-3 py-1 text-xs">React</span>
                <span className="border border-gray-600 rounded px-3 py-1 text-xs">Python</span>
              </div>
              <a 
                href="#"
                className="inline-block border border-gray-600 px-4 py-1.5 rounded-md text-xs"
              >
                View Details
              </a>
            </div>

            {/* ML Disease Detection */}
            <div className="border border-gray-800 rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold">ML Disease Detection</h3>
              <p className="text-gray-400 text-sm">
                Machine learning model for early disease detection from medical imaging.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="border border-gray-600 rounded px-3 py-1 text-xs">Python</span>
                <span className="border border-gray-600 rounded px-3 py-1 text-xs">TensorFlow</span>
                <span className="border border-gray-600 rounded px-3 py-1 text-xs">OpenCV</span>
              </div>
              <a 
                href="#"
                className="inline-block border border-gray-600 px-4 py-1.5 rounded-md text-xs"
              >
                View Details
              </a>
            </div>

            {/* Face Beats */}
            <div className="border border-gray-800 rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold">Face Beats</h3>
              <p className="text-gray-400 text-sm">
                Face detection music player with emotion-based playlist generation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="border border-gray-600 rounded px-3 py-1 text-xs">Python</span>
                <span className="border border-gray-600 rounded px-3 py-1 text-xs">OpenCV</span>
                <span className="border border-gray-600 rounded px-3 py-1 text-xs">ML</span>
              </div>
              <a 
                href="#"
                className="inline-block border border-gray-600 px-4 py-1.5 rounded-md text-xs"
              >
                View Details
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
