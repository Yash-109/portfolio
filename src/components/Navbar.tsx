"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  User,
  Code2,
  FolderKanban,
  Award,
  GraduationCap,
  Mail,
  type LucideIcon,
} from "lucide-react";

interface NavLink {
  label: string;
  href: string;
  section: string | null;
  Icon: LucideIcon;
}

const navLinks: NavLink[] = [
  { label: "Home",          href: "/",               section: null,            Icon: House          },
  { label: "About",         href: "/#about",          section: "about",         Icon: User           },
  { label: "Skills",        href: "/#skills",         section: "skills",        Icon: Code2          },
  { label: "Projects",      href: "/#projects",       section: "projects",      Icon: FolderKanban   },
  { label: "Certifications",href: "/#certifications", section: "certifications",Icon: Award          },
  { label: "Education",     href: "/#education",      section: "education",     Icon: GraduationCap  },
  { label: "Contact",       href: "/#contact",        section: "contact",       Icon: Mail           },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section by which one is closest to top of viewport
      const sections = navLinks
        .filter((l) => l.section)
        .map((l) => ({ section: l.section!, el: document.getElementById(l.section!) }))
        .filter((s) => s.el !== null);

      if (window.scrollY < 80) {
        setActiveSection(null);
        return;
      }

      let closest: string | null = null;
      let closestDist = Infinity;
      for (const { section, el } of sections) {
        const top = el!.getBoundingClientRect().top;
        const dist = Math.abs(top - 100);
        if (dist < closestDist) { closestDist = dist; closest = section; }
      }
      setActiveSection(closest);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string | null
  ) => {
    if (!section) {
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection(null);
      }
      setIsMenuOpen(false);
      return;
    }
    e.preventDefault();
    const el = document.getElementById(section);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const isActive = (link: NavLink) =>
    link.section === null
      ? activeSection === null && pathname === "/"
      : activeSection === link.section;

  return (
    <>
      {/* ── Vertical right-side dock (desktop) ── */}
      <aside className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center pointer-events-none">
        <nav
          aria-label="Main navigation"
          className={`
            pointer-events-auto
            flex flex-col items-center gap-1
            px-2 py-3
            rounded-full
            border
            backdrop-blur-2xl
            transition-all duration-500
            ${scrolled
              ? "bg-white/[0.07] border-teal-500/15 shadow-[0_8px_40px_rgba(0,0,0,0.6),0_0_0_1px_rgba(20,184,166,0.06)]"
              : "bg-white/[0.04] border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            }
          `}
        >
          {navLinks.map((link) => {
            const active = isActive(link);
            const { Icon } = link;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.section)}
                title={link.label}
                aria-label={link.label}
                className="group relative flex items-center justify-center w-10 h-10 rounded-full cursor-pointer select-none transition-all duration-200"
              >
                {/* Active chip background */}
                <span
                  className={`
                    absolute inset-0 rounded-full transition-all duration-300
                    ${active
                      ? "bg-teal-500/20 shadow-[0_0_16px_4px_rgba(20,184,166,0.25)]"
                      : "bg-transparent group-hover:bg-white/8"
                    }
                  `}
                />

                {/* Icon */}
                <Icon
                  size={18}
                  strokeWidth={active ? 2.2 : 1.8}
                  className={`
                    relative z-10 transition-all duration-200
                    ${active
                      ? "text-teal-400 drop-shadow-[0_0_8px_rgba(45,212,191,0.8)]"
                      : "text-gray-500 group-hover:text-white"
                    }
                  `}
                />

                {/* Tooltip — appears to the left */}
                <span
                  className="
                    pointer-events-none
                    absolute right-full mr-3
                    px-2.5 py-1 rounded-lg
                    bg-[#0d1a2a]/90 border border-white/10 backdrop-blur-xl
                    text-xs font-medium text-gray-200 whitespace-nowrap
                    opacity-0 translate-x-1 scale-95
                    group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100
                    transition-all duration-150
                    shadow-[0_4px_16px_rgba(0,0,0,0.4)]
                  "
                >
                  {link.label}
                </span>
              </a>
            );
          })}
        </nav>
      </aside>

      {/* ── Mobile hamburger button ── */}
      <header className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
          className={`
            flex flex-col items-center justify-center w-11 h-11 rounded-full
            border backdrop-blur-2xl gap-1.5
            transition-all duration-300
            ${scrolled
              ? "bg-white/[0.07] border-teal-500/15 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              : "bg-white/[0.04] border-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
            }
          `}
        >
          <span className={`block w-4 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-4 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-4 h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </header>

      {/* ── Mobile full-screen overlay ── */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden
          flex flex-col items-center justify-center
          bg-[#020817]/95 backdrop-blur-2xl
          transition-all duration-300
          ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <div className="absolute w-72 h-72 rounded-full bg-teal-500/8 blur-3xl pointer-events-none" />

        <nav className="relative flex flex-col items-center gap-2 w-full px-8">
          {navLinks.map((link, i) => {
            const active = isActive(link);
            const { Icon } = link;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.section)}
                style={{ transitionDelay: isMenuOpen ? `${i * 40}ms` : "0ms" }}
                className={`
                  w-full max-w-xs flex items-center gap-4 px-6 py-3.5 rounded-2xl
                  border transition-all duration-300
                  ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                  ${active
                    ? "text-teal-400 bg-teal-500/10 border-teal-500/30 shadow-[0_0_20px_rgba(20,184,166,0.15)]"
                    : "text-gray-400 bg-transparent border-transparent hover:text-white hover:bg-white/5 hover:border-white/10"
                  }
                `}
              >
                <Icon
                  size={20}
                  strokeWidth={active ? 2.2 : 1.8}
                  className={active ? "text-teal-400 drop-shadow-[0_0_6px_rgba(45,212,191,0.7)]" : ""}
                />
                <span className="text-lg font-medium">{link.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
}
