import { Github, Linkedin, Mail } from "lucide-react";

const SOCIAL_LINKS = [
  { label: "GitHub",   href: "https://github.com/Yash-109",                    Icon: Github,   external: true  },
  { label: "LinkedIn", href: "https://linkedin.com/in/yash-parmar-b99796289",  Icon: Linkedin, external: true  },
  { label: "Email",    href: "mailto:yashparmar1027@gmail.com",                 Icon: Mail,     external: false },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-24">
      {/* Teal top accent glow line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-teal-500/25 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-white font-medium">Yash Parmar</p>
            <p>Full-Stack Developer &middot; Systems &amp; Analytics Focused</p>
          </div>

          <div className="flex gap-5 items-center">
            {SOCIAL_LINKS.map(({ label, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center gap-1.5 hover:text-teal-400 transition-colors duration-200"
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-6">
          &copy; {new Date().getFullYear()} Yash Parmar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
