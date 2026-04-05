export const GameCard = ({ game, onViewDetails }) => {
    const {
        title,
        role,
        releaseStatus,
        teamSize,
        duration,
        tools,
        status,
        platformTags,
        media,
        contributions,
        storefrontLinks,
    } = game;

    const isVideo = media?.match(/\.(mp4|webm|ogg)$/i);
    const isGif = media?.match(/\.(gif)$/i);
    const isImage = media?.match(/\.(png|jpe?g|svg|webp)$/i);

    const linkEntries = storefrontLinks
        ? Object.entries(storefrontLinks).filter(([, url]) => url)
        : [];

    const iconForLink = (label) => {
        if (label === 'github') {
            return (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.38-1.333-1.748-1.333-1.748-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.8 1.305 3.485.998.107-.776.418-1.305.76-1.605-2.665-.304-5.466-1.333-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.125-.303-.535-1.524.115-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013.005-.405c1.02.005 2.045.138 3.005.405 2.285-1.552 3.285-1.23 3.285-1.23.655 1.652.245 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.815 1.1.815 2.22 0 1.605-.015 2.9-.015 3.295 0 .315.21.69.825.57C20.565 21.795 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
            );
        }

        if (label === 'itch') {
            return (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M2 12C2 6.476 6.477 2 12 2s10 4.476 10 10-4.477 10-10 10S2 17.524 2 12Z" fill="#FA5C5C" />
                    <path d="M7 12.5c0 1.933 1.566 3.5 3.5 3.5S14 14.433 14 12.5 12.434 9 10.5 9 7 10.567 7 12.5Zm5 0c0 .828-.672 1.5-1.5 1.5S9 13.328 9 12.5 9.672 11 10.5 11 12 11.672 12 12.5Z" fill="#fff" />
                </svg>
            );
        }

        if (label === 'steam') {
            return (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.7 6.2a3 3 0 0 0-4.35 0 3.003 3.003 0 0 0-.62 3.06c-.1.03-.2.06-.3.09l-3.6-1.8a1 1 0 0 0-1.32.46l-2 4.25a3.01 3.01 0 1 0 1.16.76l1.74-3.69 2.93 1.47a3.001 3.001 0 1 0 2.96-1.48l-2.75-1.37a3.002 3.002 0 0 0 .57-1.2 3 3 0 0 0 2.3-2.32Z" />
                </svg>
            );
        }

        return (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <path d="M15 3h6v6" />
                <path d="m10 14 10-10" />
            </svg>
        );
    };

    const stats = [
        { label: 'Team', value: teamSize },
        { label: 'Duration', value: duration },
        { label: 'Tools', value: tools?.join(', ') },
        { label: 'Status', value: status },
    ].filter((item) => item.value);

    return (
        <article className="grid gap-8 lg:grid-cols-[1.2fr_1fr] items-start p-6 rounded-3xl border border-white/10 bg-white/5 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-purple-600/30">
            <div className="rounded-3xl border border-white/10 bg-black/80">
                <div className="relative overflow-hidden">
                    {isVideo ? (
                        <video
                            src={media}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-full w-full min-h-[300px] object-cover"
                        />
                    ) : isGif ? (
                        <img src={media} alt={`${title} demo`} className="h-full w-full min-h-[300px] object-cover" />
                    ) : isImage ? (
                        <img src={media} alt={`${title} artwork`} className="h-full w-full min-h-[300px] object-cover" />
                    ) : (
                        <div className="flex h-[300px] items-center justify-center bg-slate-950/80 p-8 text-center text-sm text-gray-400">
                            Replace this box with an optimized gameplay loop (.mp4 / .webm) or animated GIF.
                        </div>
                    )}
                </div>
                <div className="flex flex-wrap gap-3 border-t border-white/10 bg-slate-950/90 p-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="rounded-2xl bg-white/5 px-3 py-2 text-xs text-gray-300">
                            <p className="font-semibold text-white">{stat.label}</p>
                            <p>{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col justify-between">
                <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-purple-400/80 mb-3">{releaseStatus}</p>
                    <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
                    <p className="text-gray-300 mb-5">Role: <span className="text-purple-300">{role}</span></p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {platformTags?.map((tag) => (
                            <span key={tag} className="rounded-full border border-white/10 bg-purple-600/10 px-3 py-1 text-xs text-purple-200">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <ul className="space-y-3 text-gray-300 mb-6">
                        {contributions.map((point, index) => (
                            <li key={index} className="flex gap-3">
                                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-purple-400" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                    {linkEntries.length > 0 ? (
                        linkEntries.map(([label, url]) => (
                            <a
                                key={label}
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-500"
                            >
                                {iconForLink(label)}
                                <span>{label === 'github' ? 'GitHub' : label === 'itch' ? 'itch.io' : label === 'steam' ? 'Steam' : 'Website'}</span>
                            </a>
                        ))
                    ) : (
                        <span className="text-gray-500">Add storefront links for this project.</span>
                    )}
                    {onViewDetails && (
                        <button
                            type="button"
                            onClick={() => onViewDetails(game)}
                            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:border-purple-600/30 hover:bg-purple-600/10"
                        >
                            View Details
                        </button>
                    )}
                </div>
            </div>
        </article>
    );
};
