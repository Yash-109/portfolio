import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#0F172A]">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="space-y-8 max-w-4xl">
          
          <p className="text-sm uppercase tracking-wide text-indigo-400">
            Full-Stack Developer
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight">
            I build analytical systems focused on performance, scalability, and disciplined execution.
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl">
            I design and develop full-stack applications that go beyond CRUD — integrating rule engines, analytics pipelines, and structured system architecture.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link 
              href="/projects"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-md font-medium"
            >
              View Projects
            </Link>
            <a 
              href="/resume.pdf"
              className="border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-md font-medium"
            >
              Download Resume
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
