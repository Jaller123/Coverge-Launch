 "use client";

import { useEffect, useState } from "react";

const heroVideos = [
  "/Coverge-Launch-videos/1409899-uhd_3840_2160_25fps.mp4",
  "/Coverge-Launch-videos/1644693-hd_1920_1080_30fps.mp4",
  "/Coverge-Launch-videos/3115738-uhd_3840_2160_24fps.mp4",
];

export default function NewsPage() {
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
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <a className="font-anton text-3xl tracking-tight" href="/">
              Coverge
            </a>
            <span className="hidden rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70 sm:inline">
              News
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/70 sm:ml-auto sm:justify-end">
            <a
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:bg-white/10"
              href="/"
            >
              Home
            </a>
            <a
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:bg-white/10"
              href="/contact"
            >
              Contact
            </a>
          </div>
        </header>

        <section className="glass rounded-3xl p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-white/50">
            In the news
          </p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Product progress and funding
          </h1>
          <p className="mt-4 text-base text-white/70">
            We have completed the first design phase and are now testing
            internally to polish every detail before opening a strong beta
            experience.
          </p>
          <p className="mt-4 text-base text-white/70">
            We are also in active conversations with contacts and partners to
            secure funding for the next build phase.
          </p>
        </section>

        <section className="grid gap-6 sm:grid-cols-2">
          <div className="glass-strong rounded-3xl p-6">
            <h2 className="text-lg font-semibold">Launch window</h2>
            <p className="mt-3 text-sm text-white/70">
              Over the next 6-12 months we are focused on shipping the platform,
              establishing strategic partnerships, and preparing a seeded beta.
            </p>
          </div>
          <div className="glass-strong rounded-3xl p-6">
            <h2 className="text-lg font-semibold">What is next</h2>
            <p className="mt-3 text-sm text-white/70">
              We are curating early members, refining the onboarding flow, and
              testing collaboration tools with a small founder cohort.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
