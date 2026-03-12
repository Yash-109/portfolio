"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import {
  House,
  User,
  Code2,
  FolderKanban,
  Award,
  GraduationCap,
  Mail,
  Menu,
  X,
  type LucideIcon,
} from "lucide-react";

interface NavLink {
  label: string;
  href: string;
  section: string | null;
  Icon: LucideIcon;
}

const navLinks: NavLink[] = [
  { label: "Home",           href: "/",               section: null,            Icon: House          },
  { label: "About",          href: "/#about",          section: "about",         Icon: User           },
  { label: "Skills",         href: "/#skills",         section: "skills",        Icon: Code2          },
  { label: "Projects",       href: "/#projects",       section: "projects",      Icon: FolderKanban   },
  { label: "Certifications", href: "/#certifications", section: "certifications",Icon: Award          },
  { label: "Education",      href: "/#education",      section: "education",     Icon: GraduationCap  },
  { label: "Contact",        href: "/#contact",        section: "contact",       Icon: Mail           },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen]     = useState(false);
  const [mounted, setMounted]           = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scrolled, setScrolled]         = useState(false);
  const pathname = usePathname();
  const { activeSection } = useActiveSection();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string | null
  ) => {
    e.preventDefault();
    if (!section) {
      if (pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      const el = document.getElementById(section);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const isActive = (link: NavLink) =>
    link.section === null
      ? activeSection === null && pathname === "/"
      : activeSection === link.section;

  return (
    <>
      {/* ══ Floating pill — desktop center ══ */}
      <div
        className={`
          fixed top-5 left-1/2 -translate-x-1/2 z-50
          hidden md:block
          transition-all duration-500
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}
        `}
      >
        <nav
          aria-label="Main navigation"
          className={`
            flex items-center gap-1 px-2 py-2 rounded-full backdrop-blur-2xl
            border transition-all duration-500
            ${scrolled
              ? "bg-[rgba(6,10,20,0.88)] border-white/[0.1] shadow-[0_8px_40px_rgba(0,0,0,0.7),0_0_0_1px_rgba(20,184,166,0.12),inset_0_1px_0_rgba(255,255,255,0.07)]"
              : "bg-[rgba(8,12,24,0.72)] border-white/[0.07] shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_0_1px_rgba(20,184,166,0.06),inset_0_1px_0_rgba(255,255,255,0.05)]"
            }
          `}
        >
          {navLinks.map((link, i) => {
            const active = isActive(link);
            const { Icon } = link;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.section)}
                aria-current={active ? "page" : undefined}
                aria-label={link.label}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ transitionDelay: mounted ? `${i * 55}ms` : "0ms" }}
                className={`
                  relative flex items-center justify-center
                  w-10 h-10 rounded-full cursor-pointer outline-none select-none
                  transition-all duration-300
                  focus-visible:ring-2 focus-visible:ring-teal-400
                  focus-visible:ring-offset-1 focus-visible:ring-offset-slate-900
                  ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-75"}
                  ${active
                    ? "text-teal-400 bg-teal-500/[0.13] shadow-[0_0_20px_rgba(20,184,166,0.22)]"
                    : "text-slate-400 hover:text-teal-300 hover:bg-white/[0.07] hover:scale-110"
                  }
                `}
              >
                <Icon size={18} strokeWidth={active ? 2.2 : 1.8} />

                {/* Active pulse dot */}
                {active && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.9)]" />
                )}

                {/* Hover tooltip — positioned BELOW the pill */}
                <span
                  className={`
                    absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 z-[60]
                    px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap pointer-events-none
                    bg-[rgba(6,10,20,0.95)] border border-teal-500/20 text-slate-200
                    shadow-[0_4px_20px_rgba(0,0,0,0.6),0_0_0_1px_rgba(20,184,166,0.08)]
                    transition-all duration-200
                    ${hoveredIndex === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}
                  `}
                >
                  {link.label}
                </span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* ══ Floating button — mobile top-right ══ */}
      <div
        className={`
          fixed top-4 right-5 z-50 md:hidden
          transition-all duration-500
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}
        `}
      >
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className={`
            relative flex items-center justify-center
            w-11 h-11 rounded-full cursor-pointer outline-none
            bg-[rgba(8,12,24,0.75)] backdrop-blur-2xl
            border border-white/[0.08]
            shadow-[0_8px_24px_rgba(0,0,0,0.55),0_0_0_1px_rgba(20,184,166,0.07),inset_0_1px_0_rgba(255,255,255,0.07)]
            transition-all duration-300
            ${isMenuOpen ? "text-teal-400 bg-teal-500/[0.12]" : "text-slate-400 hover:text-teal-300"}
          `}
        >
          <span className={`absolute transition-all duration-300 ${isMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-75"}`}>
            <X size={18} strokeWidth={2} />
          </span>
          <span className={`absolute transition-all duration-300 ${isMenuOpen ? "opacity-0 -rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}`}>
            <Menu size={18} strokeWidth={2} />
          </span>
        </button>
      </div>

      {/* ══ Mobile dropdown ══ */}
      <div
        className={`
          fixed top-[68px] right-5 z-40 md:hidden w-52
          bg-[rgba(8,12,24,0.88)] backdrop-blur-2xl
          border border-white/[0.07] rounded-2xl
          shadow-[0_16px_48px_rgba(0,0,0,0.65),0_0_0_1px_rgba(20,184,166,0.07),inset_0_1px_0_rgba(255,255,255,0.06)]
          overflow-hidden
          transition-all duration-300 ease-out
          ${isMenuOpen
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
          }
        `}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col p-1.5 gap-0.5">
          {navLinks.map((link, i) => {
            const active = isActive(link);
            const { Icon } = link;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.section)}
                aria-current={active ? "page" : undefined}
                style={{ transitionDelay: isMenuOpen ? `${i * 35}ms` : "0ms" }}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-xl
                  text-sm font-medium cursor-pointer select-none outline-none
                  transition-all duration-200
                  focus-visible:ring-2 focus-visible:ring-teal-400
                  ${isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}
                  ${active
                    ? "bg-teal-500/[0.12] text-teal-400"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                  }
                `}
              >
                <Icon
                  size={16}
                  strokeWidth={active ? 2.2 : 1.8}
                  className={active ? "drop-shadow-[0_0_5px_rgba(45,212,191,0.7)]" : ""}
                />
                <span>{link.label}</span>
                {active && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_6px_rgba(45,212,191,0.8)]" />
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
}
