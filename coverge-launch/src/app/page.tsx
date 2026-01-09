"use client";

import { useEffect, useState } from "react";

const heroVideos = [
  "/Coverge-Launch-videos/1409899-uhd_3840_2160_25fps.mp4",
  "/Coverge-Launch-videos/1644693-hd_1920_1080_30fps.mp4",
  "/Coverge-Launch-videos/3115738-uhd_3840_2160_24fps.mp4",
];

export default function Home() {
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

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-indigo-400/20 blur-[140px]" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-pink-400/15 blur-[120px]" />
        </div>

        <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 pb-16 pt-10 sm:px-10">
          <header className="flex items-center justify-between fade-up">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-semibold tracking-tight">
                Coverge
              </span>
              <span className="hidden rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70 sm:inline">
                Coming soon
              </span>
            </div>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/60">
              Private beta
            </span>
          </header>

          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 lg:p-12">
            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-8 fade-up fade-delay-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                  Built by entrepreneurs for entrepreneurs
                </div>
                <div className="space-y-6">
                  <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                    A private launch network for founders shipping in public.
                  </h1>
                  <p className="max-w-xl text-lg text-white/70">
                    Coverge helps early teams share traction, find
                    collaborators, and stay accountable without losing momentum
                    in noisy feeds.
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
                  Early access invites - No spam
                </p>
                <div className="grid gap-3 text-sm text-white/70 sm:grid-cols-3">
                  <div className="glass-strong rounded-2xl p-4">
                    <p className="text-2xl font-semibold text-white">Q2 2026</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                      Private beta
                    </p>
                  </div>
                  <div className="glass-strong rounded-2xl p-4">
                    <p className="text-2xl font-semibold text-white">12+</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                      Founder circles
                    </p>
                  </div>
                  <div className="glass-strong rounded-2xl p-4">
                    <p className="text-2xl font-semibold text-white">0%</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                      Noise, all signal
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 fade-up fade-delay-2">
                <div className="glass-strong rounded-3xl p-6">
                  <h3 className="text-lg font-semibold">Why founders join</h3>
                  <ul className="mt-4 space-y-3 text-sm text-white/70">
                    <li>Fast feedback on traction, pricing, and positioning.</li>
                    <li>Private circles for accountability and co-building.</li>
                    <li>Launch playbooks vetted by operators who have shipped.</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                    Landscape reel
                  </p>
                  <p className="mt-3 text-sm text-white/70">
                    A rotating set of clips keeps the hero alive. Want a cross
                    fade or timed swaps? I can wire that next.
                  </p>
                  <div className="mt-4 flex gap-3">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60">
                      Clip 1
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60">
                      Clip 2
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60">
                      Clip 3
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="glass rounded-3xl p-6 fade-up fade-delay-2">
              <h3 className="text-lg font-semibold">Social proof, no hype</h3>
              <p className="mt-3 text-sm text-white/70">
                Built by product leaders who have shipped in fintech, health,
                and creator tools. Early founders already shaping the roadmap.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-white/50">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  Ex-Stripe
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  Indie founders
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  Angel-backed
                </span>
              </div>
            </div>
            <div className="glass rounded-3xl p-6 fade-up fade-delay-3">
              <h3 className="text-lg font-semibold">Launch timeline</h3>
              <div className="mt-6 space-y-4 text-sm text-white/70">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <span>Idea and design</span>
                  <span className="text-white/40">Complete</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <span>Private beta</span>
                  <span className="text-white">Now</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <span>Public launch</span>
                  <span className="text-white/40">Q3 2026</span>
                </div>
              </div>
            </div>
          </section>

          <footer className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center fade-up fade-delay-3">
            <span>(c) 2026 Coverge</span>
            <div className="flex gap-4">
              <a className="text-white/70 hover:text-white" href="https://x.com">
                Twitter
              </a>
              <a
                className="text-white/70 hover:text-white"
                href="https://www.linkedin.com"
              >
                LinkedIn
              </a>
              <a
                className="text-white/70 hover:text-white"
                href="mailto:hello@coverge.app"
              >
                hello@coverge.app
              </a>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
