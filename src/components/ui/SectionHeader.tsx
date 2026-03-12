interface SectionHeaderProps {
  title:     string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="mt-4 mx-auto h-[2px] w-16 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full opacity-70" />
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
