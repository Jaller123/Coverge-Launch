"use client";

import { useEffect, useState } from "react";

const heroVideos = [
  "/Coverge-Launch-videos/1409899-uhd_3840_2160_25fps.mp4",
  "/Coverge-Launch-videos/1644693-hd_1920_1080_30fps.mp4",
  "/Coverge-Launch-videos/3115738-uhd_3840_2160_24fps.mp4",
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previewPlaying, setPreviewPlaying] = useState(false);

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

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-indigo-400/20 blur-[140px]" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-pink-400/15 blur-[120px]" />
        </div>

        <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 pb-16 pt-10 sm:px-10">
          <header className="flex flex-col gap-4 fade-up sm:flex-row sm:items-center">
            <a className="font-anton text-3xl tracking-tight" href="/">
              COVERGE
            </a>
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/70 sm:ml-auto sm:justify-end">
              <a
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:bg-white/10"
                href="/news"
              >
                News
              </a>
              <a
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:bg-white/10"
                href="/contact"
              >
                Contact
              </a>
            </div>
          </header>

          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 lg:p-12">
            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-8 fade-up fade-delay-1">
                <div
                  className="self-end whitespace-nowrap text-right text-2xl font-semibold uppercase tracking-[0.18em] text-white/85 sm:text-5xl sm:tracking-[0.25em] lg:text-6xl"
                  style={{ textShadow: "0 0 18px rgba(123, 176, 255, 0.65)" }}
                >
                  Coming soon
                </div>
                <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70 sm:ml-auto">
                  Private beta
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/70 sm:text-right">
                  Built by entrepreneurs, for entrepreneurs
                </p>
                <div className="space-y-6">
                <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  A digital platform where ideas meet the people who help them
                  grow.
                </h1>
                <p className="max-w-xl text-lg text-white/70">
                  Coverge connects entrepreneurs, investors, and
                  problem-solvers to develop ideas that drive real societal
                  impact.
                </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <label className="sr-only" htmlFor="waitlist-email">
                    Email address
                  </label>
                  <input
                    className="w-full rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 sm:w-80"
                    id="waitlist-email"
                    placeholder="you@company.com"
                    type="email"
                  />
                  <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-blue-100">
                    Join the waitlist
                  </button>
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Early access - No spam
                </p>
                <div className="grid gap-3 text-sm text-white/70 sm:grid-cols-3">
                  <div className="glass-strong rounded-2xl p-4">
                    <p className="text-2xl font-semibold text-white">6-12</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                      Months to launch
                    </p>
                  </div>
                  <div className="glass-strong rounded-2xl p-4">
                    <p className="text-2xl font-semibold text-white">MVP</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                      In progress
                    </p>
                  </div>
                  <div className="glass-strong rounded-2xl p-4">
                    <p className="text-2xl font-semibold text-white">Seed</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                      Funding focus
                    </p>
                  </div>
                </div>
                <div className="glass-strong mx-auto w-full max-w-2xl overflow-hidden rounded-3xl">
                  <div className="border-b border-white/10 bg-white/5 px-5 py-3 text-center">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                      Product preview
                    </p>
                  </div>
                  <div className="group relative">
                    <video
                      className="h-64 w-full object-cover sm:h-72 lg:h-80"
                      controls
                      preload="metadata"
                      onPlay={() => setPreviewPlaying(true)}
                      onPause={() => setPreviewPlaying(false)}
                      onEnded={() => setPreviewPlaying(false)}
                    >
                      <source
                        src="/Coverge-Launch-videos/VID_20260109_142148 (online-video-cutter.com).mp4"
                        type="video/mp4"
                      />
                    </video>
                    <div
                      className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                        previewPlaying ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white/80 backdrop-blur-sm">
                        <span className="ml-1 text-3xl">▶</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 fade-up fade-delay-2">
                <div className="glass-strong rounded-3xl p-6">
                  <h3 className="text-lg font-semibold">Why Coverge exists</h3>
                  <ul className="mt-4 space-y-3 text-sm text-white/70">
                    <li>Matching, community, learning, and collaboration.</li>
                    <li>Support for startups, entrepreneurs, and investors.</li>
                    <li>Helps ideas with potential create real impact.</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                    Vision
                  </p>
                  <p className="mt-3 text-sm text-white/70">
                    A world where every idea with potential gets a chance to
                    grow and transform.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="glass rounded-3xl p-6 fade-up fade-delay-2">
              <h3 className="text-lg font-semibold">The platform</h3>
              <p className="mt-3 text-sm text-white/70">
                An integrated ecosystem combining matching, community, learning,
                and real collaboration to build sustainable innovation.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-white/50">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  Entrepreneurs
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  Investors
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  Problem-solvers
                </span>
              </div>
            </div>
            <div className="glass rounded-3xl p-6 fade-up fade-delay-3">
              <h3 className="text-lg font-semibold">Future plans</h3>
              <div className="mt-6 space-y-4 text-sm text-white/70">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <span>Platform launch</span>
                  <span className="text-white/40">6-12 months</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <span>Strategic partnerships</span>
                  <span className="text-white">In motion</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <span>Seed funding</span>
                  <span className="text-white/40">Upcoming</span>
                </div>
              </div>
            </div>
          </section>


          <footer className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center fade-up fade-delay-3">
            <span>(c) 2026 Coverge</span>
            <div className="flex gap-4">
              <a
                className="text-white/70 hover:text-white"
                href="https://www.linkedin.com/company/covergese/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BFJlZAAkzRJmYMsISnRd%2FhA%3D%3D"
              >
                LinkedIn
              </a>
              <a
                className="text-white/70 hover:text-white"
                href="mailto:coverge.se@outlook.com"
              >
                coverge.se@outlook.com
              </a>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
