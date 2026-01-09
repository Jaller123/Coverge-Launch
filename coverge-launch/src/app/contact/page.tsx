 "use client";

import { useEffect, useState } from "react";

const heroVideos = [
  "/Coverge-Launch-videos/1409899-uhd_3840_2160_25fps.mp4",
  "/Coverge-Launch-videos/1644693-hd_1920_1080_30fps.mp4",
  "/Coverge-Launch-videos/3115738-uhd_3840_2160_24fps.mp4",
];

export default function ContactPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroVideos.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen text-white">
      <div className="pointer-events-none absolute inset-0">
        {heroVideos.map((src, index) => (
          <video
            key={src}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-45" : "opacity-0"
            }`}
          >
            <source src={src} type="video/mp4" />
          </video>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#03050c]/30 via-[#050814]/30 to-[#050814]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050814] via-[#0b1433]/60 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-10 px-6 pb-20 pt-12 sm:px-10">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-semibold tracking-tight">
              Coverge
            </span>
            <span className="hidden rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70 sm:inline">
              Contact
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/70">
            <a
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:bg-white/10"
              href="/"
            >
              Home
            </a>
            <a
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:bg-white/10"
              href="/news"
            >
              News
            </a>
          </div>
        </header>

        <section className="glass rounded-3xl p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-white/50">
            Contact
          </p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Reach the team
          </h1>
          <p className="mt-4 text-base text-white/70">
            Want to collaborate or learn more? Send us a message and we will
            follow up.
          </p>

          <form className="mt-6 space-y-4">
            <label className="sr-only" htmlFor="contact-name">
              Name
            </label>
            <input
              className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50"
              id="contact-name"
              placeholder="Your name"
              type="text"
            />
            <label className="sr-only" htmlFor="contact-email">
              Email address
            </label>
            <input
              className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50"
              id="contact-email"
              placeholder="you@company.com"
              type="email"
            />
            <label className="sr-only" htmlFor="contact-message">
              Message
            </label>
            <textarea
              className="h-36 w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50"
              id="contact-message"
              placeholder="Tell us how we can help."
            />
            <button className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-blue-100">
              Send message
            </button>
            <p className="text-xs text-white/50">
              Your message will be shared directly with the Coverge team.
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}
