import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { GameCard } from "../GameCard";
import { ProjectDetailModal } from "../ProjectDetailModal";
import { games } from "../../data/projects";

export const Projects = () => {
    const [selectedGame, setSelectedGame] = useState(null);

    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto px-4">
                    <div className="mb-12 text-center">
                        <p className="text-sm uppercase tracking-[0.35em] text-purple-400/80 mb-3">Featured games</p>
                        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                            Game Development Showcase
                        </h2>
                        <p className="max-w-2xl mx-auto text-gray-400">
                            A modular showcase built to highlight gameplay systems, engine work, and production-ready game builds.
                            Swap in new titles as you publish them and keep the page fast with lightweight media.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {games.map((game) => (
                            <GameCard key={game.id} game={game} onViewDetails={setSelectedGame} />
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <a
                            href="https://itch.io/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center rounded-full border border-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-600/20"
                        >
                            View older prototypes & game jams on itch.io →
                        </a>
                    </div>
                </div>
            </RevealOnScroll>

            {selectedGame && (
                <ProjectDetailModal project={selectedGame} onClose={() => setSelectedGame(null)} />
            )}
        </section>
    );
};