export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-200 py-8 border-t border-white/10 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-white">Stefan Milinovic</p>
          <p className="text-sm text-slate-400">
            Email: stefan.milinovic25@gmail.com
          </p>
        </div>
        <div className="text-sm text-slate-400">
          <a
            href="https://www.linkedin.com/in/stefan-milinovic"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-white"
          >
            LinkedIn
          </a>
        </div>
        <div className="text-sm text-slate-400">
          Date Last Updated: April 10, 2026
        </div>
      </div>
    </footer>
  );
};
