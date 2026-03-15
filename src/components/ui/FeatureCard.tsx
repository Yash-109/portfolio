import { ReactNode, CSSProperties } from "react";

interface FeatureCardProps {
  title: string;
  description: ReactNode;
  className?: string;
  titleClassName?: string;
  hoverTitle?: boolean;
  style?: CSSProperties;
}

export default function FeatureCard({
  title,
  description,
  className = "",
  titleClassName = "",
  hoverTitle = true,
  style,
}: FeatureCardProps) {
  return (
    <div
      className={`group rounded-xl p-6 border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] hover:border-teal-500/40 transition-all duration-300 hover:-translate-y-1 ${className}`}
      style={style}
    >
      <h3
        className={`font-bold text-lg mb-3 transition-colors duration-200 ${
          hoverTitle ? "group-hover:text-teal-400" : ""
        } ${titleClassName}`}
      >
        {title}
      </h3>
      <p className="text-gray-300 text-base leading-relaxed">{description}</p>
    </div>
  );
}
