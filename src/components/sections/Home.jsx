import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Stefan Milinovic
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Software Engineer & Game Developer specializing in Godot, gameplay
            systems, and 2D pixel art. I build polished game prototypes,
            procedural systems, and player-first mechanics for fast iteration
            and strong replay value.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#projects"
              className="bg-purple-700 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Games
            </a>

            <a
              href="/resume.pdf"
              className="border border-purple-600/50 text-purple-100 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-purple-600/20"
            >
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
