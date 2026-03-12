interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  count?: string;
}

export default function SectionHeader({ title, subtitle, count }: SectionHeaderProps) {
  return (
    <header className="text-center mb-16 md:mb-24">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
        {title}
      </h2>
      {/* Accent underline bar */}
      <div className="mt-4 mx-auto h-[3px] w-20 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 opacity-80 shadow-[0_0_10px_rgba(20,184,166,0.4)]" />
      {count && (
        <div className="mt-5 flex justify-center">
          <span
            className="text-xs font-mono px-3 py-1 rounded-full"
            style={{
              border:     "1px solid rgba(20,184,166,0.30)",
              background: "rgba(20,184,166,0.08)",
              color:      "#5eead4",
            }}
          >
            {count}
          </span>
        </div>
      )}
      {subtitle && (
        <p className="mt-6 text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </header>
  );
}
