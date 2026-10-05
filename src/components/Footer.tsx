export default function Footer() {
  return (
    <footer className="px-6 pb-8 pt-4">
      <div className="mx-auto max-w-6xl border-t border-slate-300/60 pt-6 text-center dark:border-white/10">
        <p className="text-sm text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} Moises Gonzalez
        </p>

        <p className="mt-1 text-xs text-slate-400 dark:text-slate-600">
          Designed &amp; developed by Moises Gonzalez · AI-assisted with ChatGPT
        </p>
      </div>
    </footer>
  );
}