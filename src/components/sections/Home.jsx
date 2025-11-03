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
                        A motivated software developer with a focus on web development, data analytics,
                        and backend systems. Skilled in problem-solving and delivering data-driven solutions,
                        with a passion for AI, robotics, and advanced programming concepts. Dedicated to continuous
                        learning and applying innovative approaches to software development.

                    </p>
                    <div className="flex justify-center space-x-4">
                        <a
                            href="#projects"
                            className="bg-purple-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                        >
                            View Projects
                        </a>

                        <a
                            href="#contact"
                            className="border border-purple-600/50 text-purple-600 py-3 px-6 rounded font-medium transition-all duration-200
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-purple-600/10"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};