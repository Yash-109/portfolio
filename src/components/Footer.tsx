export default function Footer() {
  return (
    <footer className="relative mt-16">
      {/* Top teal accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-center">
        <p className="text-[13px] font-medium tracking-wide text-center">
          <span className="text-teal-400 font-semibold">Yash Parmar</span>
          <span className="mx-3 text-white/20">&middot;</span>
          <span className="text-white/40">
            Full-Stack Developer &amp; ML Engineer
          </span>
          <span className="mx-3 text-white/20">&middot;</span>
          <span className="text-white/25">
            &copy; {new Date().getFullYear()}
          </span>
        </p>
      </div>
    </footer>
  );
}
