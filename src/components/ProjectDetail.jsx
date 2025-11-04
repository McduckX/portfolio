import { useParams, Link } from "react-router-dom";
import { getProjectById } from "../data/projects";

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4 py-28">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
            Project not found
          </h1>
          <p className="text-gray-400 mb-6">We couldn't find a project with id "{id}".</p>
          <Link to="/#home" className="text-purple-400 hover:text-purple-300 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </main>
    );
  }

  const { title, description, demo, notes, tech } = project;

  // Helper to render video either as HTML5 video or embedded iframe (YouTube, etc.)
  const renderVideo = (url) => {
    if (!url) return null;

    const isYouTube = /youtube\.com|youtu\.be/.test(url);
    if (isYouTube) {
      // Basic YouTube embed support (expects full watch URL or short youtu.be URL)
      let embedUrl = url;
      // Convert typical watch URLs to embed format
      const watchMatch = url.match(/v=([^&]+)/);
      const shortMatch = url.match(/youtu\.be\/([^?]+)/);
      const videoId = (watchMatch && watchMatch[1]) || (shortMatch && shortMatch[1]);
      if (videoId) {
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
      }
      return (
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full rounded-lg border border-white/10"
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }

    const isVideoFile = /(\.mp4|\.webm|\.ogg)$/i.test(url);
    if (isVideoFile) {
      return (
        <video
          className="w-full rounded-lg border border-white/10"
          src={url}
          controls
          preload="metadata"
        />
      );
    }

    // Fallback: simple link if the format isn't recognized
    return (
      <a href={url} target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300">
        Open video demo ↗
      </a>
    );
  };

  const cardHover = "hover:-translate-y-1 hover:border-purple-600/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all";

  // Convert URLs in plain text into clickable links and preserve line breaks
  const linkifyText = (text) => {
    if (!text) return null;
    const urlLike = /(https?:\/\/[^\s]+|www\.[^\s]+)/gi;
    const parts = text.split(urlLike);
    return parts.map((part, i) => {
      const isUrl = /^(https?:\/\/|www\.)/i.test(part);
      if (isUrl) {
        const href = part.startsWith("http") ? part : `https://${part}`;
        return (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-purple-400 hover:text-purple-300 underline underline-offset-2"
          >
            {part}
          </a>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  const renderNotes = (text) => {
    if (!text) return <span>No additional notes yet.</span>;
    const lines = text.split(/\r?\n/);
    return lines.map((line, idx) => (
      <span key={idx}>
        {linkifyText(line)}
        {idx < lines.length - 1 ? <br /> : null}
      </span>
    ));
  };

  return (
    <main className="min-h-screen px-4 py-28 flex justify-center">
      <div className={`max-w-5xl w-full p-6 md:p-10 rounded-xl border border-white/10 ${cardHover}`}>
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
            {title}
          </h1>
          {tech && tech.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              {tech.map((t) => (
                <span key={t} className="bg-purple-600/10 text-purple-400 py-1 px-3 rounded-full text-sm">
                  {t}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="grid grid-cols-1 gap-6">
          <section className={`p-5 rounded-xl border border-white/10 ${cardHover}`}>
            <h2 className="text-2xl font-semibold mb-3 text-white">Project Description</h2>
            <p className="text-gray-300 leading-relaxed">
              {description || "No description provided yet."}
            </p>
          </section>

          <section className={`p-5 rounded-xl border border-white/10 ${cardHover}`}>
            <h2 className="text-2xl font-semibold mb-3 text-white">Demo</h2>
            {demo?.images?.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {demo.images.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`${title} demo ${idx + 1}`}
                    className="w-full h-auto rounded-lg border border-white/10 object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
            )}
            {demo?.video ? (
              <div className="mt-2">{renderVideo(demo.video)}</div>
            ) : (
              <p className="text-gray-400">Add image URLs and a video link to this project's demo to showcase it here.</p>
            )}
          </section>

          <section className={`p-5 rounded-xl border border-white/10 ${cardHover}`}>
            <h2 className="text-2xl font-semibold mb-3 text-white">Additional Info</h2>
            <p className="text-gray-300 leading-relaxed">
              {renderNotes(notes)}
            </p>
          </section>

          <div className="flex justify-between items-center pt-2">
            <Link to="/#home" className="text-purple-400 hover:text-purple-300">← Back to Home</Link>
            <Link to="/#projects" className="text-purple-400 hover:text-purple-300">Back to Projects Grid →</Link>
          </div>
        </div>
      </div>
    </main>
  );
};
