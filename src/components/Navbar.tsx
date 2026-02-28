"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 64; // Height of sticky navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight - 20; // Extra 20px padding

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="sticky top-0 z-50 bg-[#0F172A]/80 backdrop-blur-md border-b border-slate-800"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-white hover:text-gray-300 transition-colors"
            >
              Yash Parmar
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/")
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Home
              </Link>
              <a
                href="/#skills"
                onClick={(e) => handleSmoothScroll(e, "skills")}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Skills
              </a>
              <Link
                href="/projects"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/projects")
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Projects
              </Link>
              <a
                href="/#certifications"
                onClick={(e) => handleSmoothScroll(e, "certifications")}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Certifications
              </a>
              <a
                href="/#education"
                onClick={(e) => handleSmoothScroll(e, "education")}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Education
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Resume
              </a>
              <a
                href="https://github.com/Yash-109"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0F172A]/95 backdrop-blur-md border-t border-slate-800">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
              isActive("/")
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Home
          </Link>
          <a
            href="/#skills"
            onClick={(e) => handleSmoothScroll(e, "skills")}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            Skills
          </a>
          <Link
            href="/projects"
            onClick={() => setIsMenuOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
              isActive("/projects")
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Projects
          </Link>
          <a
            href="/#certifications"
            onClick={(e) => handleSmoothScroll(e, "certifications")}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            Certifications
          </a>
          <a
            href="/#education"
            onClick={(e) => handleSmoothScroll(e, "education")}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            Education
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white transition-colors"
          >
            Resume
          </a>
          <a
            href="https://github.com/Yash-109"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
