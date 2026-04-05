import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then((result) => {
                alert("Message Sent!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => alert("Oops! Something went wrong. Please try again."));
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
                    <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent text-center">
                        {" "}
                        Get In Touch
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                        <a
                            href="mailto:stefan@example.com"
                            className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center transition hover:border-purple-600/30"
                        >
                            <p className="text-sm uppercase tracking-[0.28em] text-purple-400 mb-2">Email</p>
                            <p className="text-white font-medium">stefan@example.com</p>
                        </a>
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center transition hover:border-purple-600/30"
                        >
                            <p className="text-sm uppercase tracking-[0.28em] text-purple-400 mb-2">LinkedIn</p>
                            <p className="text-white font-medium">linkedin.com/in/stefan</p>
                        </a>
                        <a
                            href="https://github.com/McduckX"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center transition hover:border-purple-600/30"
                        >
                            <p className="text-sm uppercase tracking-[0.28em] text-purple-400 mb-2">GitHub</p>
                            <p className="text-white font-medium">github.com/McduckX</p>
                        </a>
                    </div>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-600 focus:bg-purple-600/5"
                                placeholder="Your Name"
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-600 focus:bg-purple-600/5"
                                placeholder="example@gmail.com"
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                            />
                        </div>

                        <div className="relative">
              <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-600 focus:bg-purple-600/5"
                  placeholder="Your Message..."
                  onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                  }
              />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-purple-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};