import { RevealOnScroll } from "../RevealOnScroll";
import whyMeVideo from "../../reference_resources/Stefan_Milinovic_WhyMe_Pitch_2026.mp4";
import e33Image from "../../reference_resources/E33.png";

export const DiscoverMyself = () => {
  return (
    <section
      id="discover"
      className="min-h-screen py-20 bg-slate-950 text-slate-100"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Discover Myself
            </h1>
            <p className="text-slate-400 max-w-3xl leading-relaxed">
              This section reflects my personal and professional identity, the
              values that guide my growth, and how I connect my academic
              learning to real-world goals. It is designed to show how I
              intentionally build a coherent ePortfolio around a career in
              software engineering.
            </p>
          </div>
          <div className="mb-12 rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-xl shadow-black/20">
            <h2 className="text-3xl font-semibold mb-4 text-purple-300">
              Why Me Video
            </h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Watch my personal introduction to understand why I am a strong
              candidate for COOP 2100, how I think about professional growth,
              and why I choose to build technology with empathy.
            </p>
            <video
              src={whyMeVideo}
              controls
              className="w-full rounded-3xl border border-white/10"
            />
          </div>

          <div className="grid gap-10">
            <article className="rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-xl shadow-black/20">
              <h2 className="text-3xl font-semibold mb-4 text-purple-300">
                Personal Story & Career Motivation
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                I grew up in a busy Toronto apartment with my parents, sister,
                and aunt. That early environment taught me the value of
                collaboration, resilience, and caring for the people around me.
                Creative outlets like music and dance became my way of
                translating energy into disciplined practice.
              </p>
              <p className="text-slate-300 leading-relaxed">
                I chose Software Engineering because it lets me combine
                structured problem solving with creative expression. I want to
                build products that are useful, inclusive, and emotionally
                engaging – not just technically correct.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-xl shadow-black/20">
              <h2 className="text-3xl font-semibold mb-4 text-purple-300">
                Values, Learning Philosophy, and Strengths
              </h2>
              <ul className="list-disc list-inside space-y-3 text-slate-300 leading-relaxed">
                <li>
                  <strong>Curiosity:</strong> I explore new tools and patterns
                  by asking why they matter before I ask how to use them.
                </li>
                <li>
                  <strong>Empathy:</strong> I prioritize accessibility and clear
                  communication so my work is useful for other people, not just
                  myself.
                </li>
                <li>
                  <strong>Collaboration:</strong> I believe the strongest
                  solutions come from listening to teammates, stakeholders, and
                  users.
                </li>
              </ul>
              <p className="text-slate-300 leading-relaxed mt-4">
                My learning approach is to map new concepts onto familiar
                systems. When I learn a new framework, I relate it to previous
                projects and break the problem into repeatable building blocks.
                This helps me stay organized and turn complex ideas into
                practical results.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-xl shadow-black/20">
              <h2 className="text-3xl font-semibold mb-4 text-purple-300">
                Career Goals & Growth Plan
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                I am pursuing a career that blends software development, digital
                accessibility, and educational experiences. My goals are
                grounded in both technical skill growth and professional
                maturity.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-950 p-5 border border-white/10">
                  <h3 className="font-semibold text-white mb-2">
                    Short-term Goal
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Build an accessible, playable Godot game prototype within
                    four months and document all usability decisions with
                    team-ready reflections.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-950 p-5 border border-white/10">
                  <h3 className="font-semibold text-white mb-2">
                    Long-term Goal
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Grow into a digital product developer who can lead
                    experiences at the intersection of education, storytelling,
                    and human-centered design.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-xl shadow-black/20">
              <h2 className="text-3xl font-semibold mb-4 text-purple-300">
                Curated Artifact & Reflection
              </h2>
              <div className="mb-6 flex justify-center">
                <img
                  src={e33Image}
                  alt="Clair Obscur Expedition 33 game artwork"
                  className="rounded-lg border border-white/10 max-w-full h-auto"
                />
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                The game <em>Clair Obscur Expedition 33</em> is an important
                inspiration for me because it demonstrates how a small, creative
                team can produce emotionally rich work. The project reminds me
                that technical craftsmanship is most meaningful when it supports
                strong narrative and player connection.
              </p>
              <p className="text-slate-300 leading-relaxed">
                In my own work, I aim to use technology as a way to strengthen
                learning, accessibility, and the human experience — not just to
                add features.
              </p>
            </article>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
