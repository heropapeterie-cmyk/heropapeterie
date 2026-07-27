import Link from 'next/link';

const trustIndicators = ['Professional Service', 'Quality Products', 'Fast Delivery'];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
      >
        <source src="https://cdn.coverr.co/videos/coverr-printing-press-1560866326154/1080p.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#050816]/80" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-100 backdrop-blur">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
            Trusted Business Solutions in Rwanda
          </div>

          <h1 id="hero-heading" className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Premium stationery, print, and business essentials for every workplace.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-200">
            Hero Papeterie Ltd supports offices, schools, and institutions with dependable supplies, professional printing, and tailored service.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="#newsletter" className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">
              Subscribe to our Newsletter
            </Link>
            <Link href="#services" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
              Explore Services
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {trustIndicators.map((indicator) => (
              <div key={indicator} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-slate-100 backdrop-blur">
                <svg viewBox="0 0 20 20" className="h-4 w-4 text-amber-400" fill="currentColor" aria-hidden="true">
                  <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.2 7.2a1 1 0 0 1-1.4 0l-3.2-3.2a1 1 0 1 1 1.4-1.4l2.5 2.5 6.5-6.5a1 1 0 0 1 1.4 0Z" />
                </svg>
                {indicator}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
