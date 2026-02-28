export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-white font-medium">Yash Parmar</p>
            <p>Full-Stack Developer · Systems & Analytics Focused</p>
          </div>

          <div className="flex gap-6 items-center">
            <a
              href="https://github.com/Yash-109"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yash-parmar-b99796289"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:yashparmar1027@gmail.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
            <a
              href="/Yash_Parmar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-6">
          © 2026 Yash Parmar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
