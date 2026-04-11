import { RevealOnScroll } from "../RevealOnScroll";
import resume from "../../reference_resources/Stefan_Milinovic_Winter2026_Resume.pdf";

export const Career = () => {
  return (
    <section
      id="career"
      className="min-h-screen py-20 bg-slate-950 text-slate-100"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Career & Experience
            </h1>
            <p className="text-slate-400 max-w-3xl leading-relaxed">
              This section documents my education, professional experience, and
              career planning so the portfolio shows how my work samples connect
              to real goals and ongoing growth.
            </p>
            <div className="mt-6">
              <a
                href={resume}
                download
                className="inline-flex items-center rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
              >
                Download my resume
              </a>
            </div>
          </div>

          <div className="grid gap-10">
            <article className="rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-xl shadow-black/20">
              <h2 className="text-3xl font-semibold mb-4 text-purple-300">
                Education & Professional Summary
              </h2>
              <ul className="space-y-4 text-slate-300 leading-relaxed">
                <li>
                  <strong>B.Eng. in Software Engineering</strong> – York
                  University (Expected April 2028). Core areas include: Web
                  Development, Data Analytics, Cloud APIs, Embedded Systems, and
                  UX-focused engineering.
                </li>
                <li>
                  <strong>Portfolio Focus:</strong> software projects, analytics
                  reports, and user-centered tools that demonstrate integration
                  of technical skills with design, communication, and
                  career-ready professional practice.
                </li>
              </ul>
            </article>

            <article className="rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-xl shadow-black/20">
              <h2 className="text-3xl font-semibold mb-4 text-purple-300">
                Ontario Science Centre | Co-op Developer
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Working alongside the Digital & Innovation team, I contributed
                to public-facing educational experiences focused on
                accessibility, gameplay flow, and inclusive design.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-950 p-5 border border-white/10">
                  <h3 className="font-semibold text-white mb-2">
                    Responsibilities
                  </h3>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>
                      Developed interactive STEM experiences using Godot and
                      Three.js.
                    </li>
                    <li>
                      Refined accessibility workflows for audio, visual, and
                      control interactions.
                    </li>
                    <li>
                      Worked with leadership to align game concepts with public
                      learning goals.
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-slate-950 p-5 border border-white/10">
                  <h3 className="font-semibold text-white mb-2">Outcomes</h3>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>
                      Pitched an accessible climate-change experience concept
                      that advanced to leadership review.
                    </li>
                    <li>
                      Helped transition existing workflows toward WCAG-first
                      design and improved usability reviews.
                    </li>
                    <li>
                      Grew from task execution to contributing product ideas in
                      cross-disciplinary team discussions.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mt-4">
                Reflection: This experience shifted my focus from coding
                features to shaping systems that support real visitors. It
                taught me that strong software is built when technical decisions
                are grounded in empathy, accessibility, and public impact.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-xl shadow-black/20">
              <h2 className="text-3xl font-semibold mb-4 text-purple-300">
                Havas CX Canada | Data Analyst Intern
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                During this internship I worked on data-driven reporting,
                analytics migrations, and quality assurance for digital
                experiences across enterprise accounts.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-950 p-5 border border-white/10">
                  <h3 className="font-semibold text-white mb-2">
                    Responsibilities
                  </h3>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>
                      Led QA testing for iOS, Android, and web applications.
                    </li>
                    <li>
                      Executed GA4 migration and verified event data for Rogers
                      Bank and Scene+.
                    </li>
                    <li>
                      Built dashboards in Power BI and Tableau to communicate
                      client KPIs.
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-slate-950 p-5 border border-white/10">
                  <h3 className="font-semibold text-white mb-2">Outcomes</h3>
                  <ul className="list-disc list-inside text-slate-300 space-y-2">
                    <li>
                      Delivered standardized analytics templates adopted across
                      5+ client projects.
                    </li>
                    <li>
                      Improved reporting reliability for stakeholders through
                      careful data validation.
                    </li>
                    <li>
                      Built business-facing dashboards that simplified
                      decision-making for non-technical users.
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mt-4">
                Reflection: The internship helped me translate technical
                analytics work into meaningful business outcomes. It
                strengthened my ability to communicate technical findings in a
                clear, user-centered way.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-xl shadow-black/20">
              <h2 className="text-3xl font-semibold mb-4 text-purple-300">
                Career Planning & Goals
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl bg-slate-950 p-5 border border-white/10">
                  <h3 className="font-semibold text-white mb-3">
                    Goal 1: Accessible Development
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Build a game prototype using accessible controls, text
                    alternatives, and readability guidelines within four months.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-950 p-5 border border-white/10">
                  <h3 className="font-semibold text-white mb-3">
                    Goal 2: Communication
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Lead three team knowledge-sharing sessions and document
                    learnings from each one.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-950 p-5 border border-white/10">
                  <h3 className="font-semibold text-white mb-3">
                    Goal 3: Portfolio Integration
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Connect every featured project to course learning and career
                    goals through reflections.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
