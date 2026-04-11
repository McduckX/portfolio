import { RevealOnScroll } from "../RevealOnScroll";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section id="home" className="min-h-screen py-20 relative overflow-hidden">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent leading-tight">
              Hi, I'm Stefan Milinovic
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              I build practical, scalable software that connects data, design,
              and human impact. This portfolio highlights my learning,
              reflections, and career-focused artifacts for a strong COOP 2100
              presentation.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-slate-950 border border-white/10 p-8 shadow-xl shadow-black/20">
              <h2 className="text-3xl font-semibold text-white mb-6">
                Table of Contents
              </h2>
              <ul className="space-y-4 text-slate-300">
                <li>
                  <Link
                    to="/discover-myself"
                    className="text-purple-300 hover:text-purple-200 underline"
                  >
                    Discover Myself
                  </Link>{" "}
                  – self-assessment, values, learning philosophy, and reflective
                  career purpose.
                </li>
                <li>
                  <Link
                    to="/career"
                    className="text-purple-300 hover:text-purple-200 underline"
                  >
                    Career & Experience
                  </Link>{" "}
                  – education, work history, and goals.
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-purple-300 hover:text-purple-200 underline"
                  >
                    Artifacts
                  </a>{" "}
                  – project work that demonstrates my learning integration.
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-purple-300 hover:text-purple-200 underline"
                  >
                    Contact
                  </a>{" "}
                  – how to reach me and request supporting documents.
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-slate-950 border border-white/10 p-8 shadow-xl shadow-black/20">
              <h2 className="text-3xl font-semibold text-white mb-6">
                At a Glance
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  <strong>Program:</strong> B.Eng. in Software Engineering, York
                  University (Expected April 2028).
                </p>
                <p>
                  <strong>Current focus:</strong> building accessible,
                  data-driven, and experience-rich software for public-facing
                  projects and digital learning.
                </p>
                <p>
                  <strong>Portfolio goal:</strong> align artifacts with career
                  development, self-reflection, and practical growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
