import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const tools = ["React", "Node.js", "TailwindCSS", "Git", "Power BI", "Tableau", "AWS", "GA4", "Puter.js", "OpenAI API"];

    const languages = ["Java", "Python", "C", "SQL", "JavaScript", "TypeScript", "HTML/CSS"];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent text-center">
                        {" "}
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            I build practical, scalable software — from AI-powered tools to data dashboards —
                            and love turning ideas into clean, efficient code.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    {tools.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-purple-600/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-600/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    ">
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Languages</h3>
                                <div className="flex flex-wrap gap-2">
                                    {languages.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-purple-600/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-600/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong> B.Eng. in Software Engineering </strong> – York University (Expected Apr 2028)
                                </li>
                                <li>
                                    Relevant Coursework & Skills: Data Structures, Algorithms, Web Development,
                                    Data Analytics, Embedded Systems, Cloud & API Integration
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">
                                        {" "}
                                        Data Analyst Intern – Havas CX Canada (May–Aug 2024){" "}
                                    </h4>
                                    <p>
                                        Worked on cross-platform QA testing, GA4 migration, analytics dashboards (Power BI, Tableau),
                                        and SEO/data reporting for enterprise clients such as Rogers Bank and Scene+.
                                    </p>
                                </div>

                                {/* For more experiences later on
                                <div>
                                    <h4 className="font-semibold">
                                        {" "}
                                        Intern at DEF Startups (2019){" "}
                                    </h4>
                                    <p>
                                        Assisted in building front-end components and integration
                                        REST APIs
                                    </p>
                                </div>
                                */}
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};