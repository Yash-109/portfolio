export default function Footer() {
  return (
    <footer className="relative mt-0">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/60 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-base font-semibold text-teal-400">Yash Parmar</span>
          <span className="text-white/30">&middot;</span>
          <span className="text-sm text-white/60 font-medium">Full-Stack Developer &amp; ML Engineer</span>
        </div>
        <span className="text-sm text-white/50 font-medium">&copy; {new Date().getFullYear()} Yash Parmar. All rights reserved.</span>
      </div>
    </footer>
  );
}
