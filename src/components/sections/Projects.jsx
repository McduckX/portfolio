import { RevealOnScroll } from "../RevealOnScroll";
import { Link } from "react-router-dom";

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent text-center">
                        {" "}
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-600/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> AI Resume Screener – ATS Matching Tool</h3>
                            <p className="text-gray-400 mb-4">
                                Web app that analyzes resumes against job postings and generates real-time ATS scores with feedback for improvement.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "TypeScript", "TailwindCSS", "OpenAI API", "Puter.js"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-purple-600/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-600/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    ">
                    {tech}
                  </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <Link
                                    to="/projects/ai-resume-screener"
                                    className="text-purple-400 hover:text-purple-300 transition-colors my-4"
                                >
                                    View Project →
                                </Link>
                            </div>
                        </div>
                        <div
                            className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-purple-600/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
                        >
                            <h3 className="text-xl font-bold mb-2">E-Commerce Website Redesign</h3>
                            <p className="text-gray-400 mb-4">
                                Redesigned a full storefront UI, boosting performance, SEO, and fixing broken multi-provider payment flows.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["WordPress", "React", "CSS", "Google Pay", "Apple Pay", "PayPal"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="
                      bg-purple-600/10 text-purple-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-purple-600/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <Link
                                    to="/projects/ecommerce-redesign"
                                    className="text-purple-400 hover:text-purple-300 transition-colors my-4"
                                >
                                    View Project →
                                </Link>
                            </div>
                        </div>

                        <div
                            className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-purple-600/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
                        >
                            <h3 className="text-xl font-bold mb-2">Mini Math Education Tool (Arduino)</h3>
                            <p className="text-gray-400 mb-4">
                                Interactive embedded math device for Grades 1–5 using hardware-based arithmetic flashcards.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Arduino", "Java", "Grove Beginner Kit"].map(
                                    (tech) => (
                                        <span
                                            key={tech}
                                            className="
                      bg-purple-600/10 text-purple-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-purple-600/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                                        >
                      {tech}
                    </span>
                                    )
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <Link
                                    to="/projects/arduino-math-tool"
                                    className="text-purple-400 hover:text-purple-300 transition-colors my-4"
                                >
                                    View Project →
                                </Link>
                            </div>
                        </div>

                        <div
                            className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-purple-600/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
                        >
                            <h3 className="text-xl font-bold mb-2">Power BI Analytics Dashboard (Internal)</h3>
                            <p className="text-gray-400 mb-4">
                                Built a unified dashboard template to standardize reporting across multiple client projects and KPIs.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Power BI", "Excel", "Tableau", "Looker Studio"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="
                      bg-purple-600/10 text-purple-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-purple-600/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center ">
                                <Link
                                    to="/projects/power-bi-dashboard"
                                    className="text-purple-400 hover:text-purple-300 transition-colors my-4"
                                >
                                    View Project →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};