export const ProjectDetailModal = ({ project, onClose }) => {
    if (!project) return null;

    const {
        title,
        role,
        releaseStatus,
        teamSize,
        duration,
        tools,
        status,
        heroMedia,
        summary,
        vision,
        responsibilities,
        deepDives,
        lessons,
        gallery,
        platformTags,
        storefrontLinks,
    } = project;

    const renderMedia = (src) => {
        const isVideo = src?.match(/\.(mp4|webm|ogg)$/i);
        const isGif = src?.match(/\.(gif)$/i);
        const isImage = src?.match(/\.(png|jpe?g|svg|webp)$/i);

        if (isVideo) {
            return (
                <video
                    src={src}
                    controls
                    muted
                    loop
                    playsInline
                    className="w-full rounded-3xl border border-white/10 bg-black/70"
                />
            );
        }

        if (isGif || isImage) {
            return <img src={src} alt={title} className="w-full rounded-3xl border border-white/10 object-cover" />;
        }

        return (
            <div className="flex h-full min-h-[260px] items-center justify-center rounded-3xl border border-white/10 bg-slate-950/80 p-8 text-center text-sm text-gray-400">
                Add a hero gameplay video or animated GIF for this project.
            </div>
        );
    };

    const linkButtons = Object.entries(storefrontLinks || {}).filter(([, url]) => url);

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 px-4 py-8 sm:px-6">
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/95 shadow-2xl shadow-black/70">
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/70 p-3 text-white transition hover:bg-white/10"
                    aria-label="Close project details"
                >
                    ×
                </button>

                <div className="grid gap-10 p-8 lg:grid-cols-[1.8fr_1fr] lg:p-10">
                    <div className="space-y-6">
                        <p className="text-sm uppercase tracking-[0.35em] text-purple-400/80">Full Journey</p>
                        <h2 className="text-4xl font-semibold text-white">{title}</h2>
                        <p className="text-gray-300 leading-relaxed">{summary}</p>

                        <div className="grid gap-3 sm:grid-cols-2">
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                                <p className="text-sm uppercase tracking-[0.3em] text-purple-400/80">Role</p>
                                <p className="mt-3 text-white font-medium">{role}</p>
                            </div>
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                                <p className="text-sm uppercase tracking-[0.3em] text-purple-400/80">Status</p>
                                <p className="mt-3 text-white font-medium">{releaseStatus}</p>
                            </div>
                        </div>
                    </div>

                    <aside className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
                        <div>
                            <p className="text-sm uppercase tracking-[0.28em] text-purple-400/80">Quick Facts</p>
                            <ul className="mt-4 space-y-4 text-gray-300">
                                <li>
                                    <span className="block text-sm text-white">Team Size</span>
                                    <span className="text-gray-400">{teamSize}</span>
                                </li>
                                <li>
                                    <span className="block text-sm text-white">Duration</span>
                                    <span className="text-gray-400">{duration}</span>
                                </li>
                                <li>
                                    <span className="block text-sm text-white">Engine / Tools</span>
                                    <span className="text-gray-400">{tools.join(', ')}</span>
                                </li>
                                <li>
                                    <span className="block text-sm text-white">Project Status</span>
                                    <span className="text-gray-400">{status}</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-sm uppercase tracking-[0.28em] text-purple-400/80">Links</p>
                            <div className="mt-4 flex flex-wrap gap-3">
                                {linkButtons.length ? (
                                    linkButtons.map(([label, url]) => (
                                        <a
                                            key={label}
                                            href={url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-500"
                                        >
                                            {label === 'github' ? 'GitHub' : label === 'itch' ? 'itch.io' : label === 'steam' ? 'Steam' : 'Website'}
                                        </a>
                                    ))
                                ) : (
                                    <p className="text-gray-500">No external links added yet.</p>
                                )}
                            </div>
                        </div>
                    </aside>
                </div>

                <div className="grid gap-10 lg:grid-cols-[1.8fr_1fr] lg:p-10">
                    <div className="space-y-10">
                        <section className="space-y-4">
                            <h3 className="text-2xl font-semibold text-white">The Vision</h3>
                            <p className="text-gray-300 leading-relaxed">{vision}</p>
                        </section>

                        <section className="space-y-4">
                            <h3 className="text-2xl font-semibold text-white">My Responsibilities</h3>
                            <ul className="list-disc space-y-3 pl-5 text-gray-300">
                                {responsibilities.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        <section className="space-y-12">
                            {deepDives.map((dive, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 ${
                                        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    }`}
                                >
                                    <div className="lg:w-1/2">
                                        <h4 className="text-xl font-semibold text-white">{dive.title}</h4>
                                        <p className="mt-4 text-gray-300 leading-relaxed">{dive.description}</p>
                                    </div>
                                    <div className="lg:w-1/2">
                                        {renderMedia(dive.media || heroMedia || '')}
                                    </div>
                                </div>
                            ))}
                        </section>

                        <section className="space-y-4">
                            <h3 className="text-2xl font-semibold text-white">Journey & Lessons</h3>
                            <p className="text-gray-300 leading-relaxed">{lessons}</p>
                        </section>

                        {gallery?.length > 0 && (
                            <section className="space-y-4">
                                <h3 className="text-2xl font-semibold text-white">Media Gallery</h3>
                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {gallery.map((image, index) => (
                                        <div key={index} className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80">
                                            {image ? (
                                                <img src={image} alt={`${title} gallery ${index + 1}`} className="h-40 w-full object-cover" />
                                            ) : (
                                                <div className="flex h-40 items-center justify-center text-sm text-gray-500">Add gallery image</div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    <div>
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                            <h3 className="text-xl font-semibold text-white">Quick Snapshot</h3>
                            <div className="mt-6 space-y-4 text-gray-300">
                                <div>
                                    <p className="text-sm text-purple-400/90">Release Status</p>
                                    <p>{releaseStatus}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-purple-400/90">Team Size</p>
                                    <p>{teamSize}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-purple-400/90">Duration</p>
                                    <p>{duration}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-purple-400/90">Tools</p>
                                    <p>{tools.join(', ')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
