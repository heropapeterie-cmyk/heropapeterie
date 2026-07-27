import Link from 'next/link';

const trustIndicators = ['Professional Service', 'Quality Products', 'Fast Delivery'];

// services moved to page-level to avoid repetition

const businessDetails = [
  'Rwandan business headquartered in Kigali, Rwanda',
  'Serving businesses, schools, institutions, and individuals',
  'Focused on dependable quality, responsive service, and long-term partnerships',
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.12),_transparent_35%),linear-gradient(135deg,_#f8fafc_0%,_#f3f6fb_100%)]">
      <div className="absolute left-[-5rem] top-[-4rem] h-56 w-56 rounded-full bg-[#0F4C81]/10 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-[-3rem] right-[-2rem] h-64 w-64 rounded-full bg-[#D4AF37]/20 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0F4C81]/15 bg-white/90 px-4 py-2 text-sm font-semibold text-[#0F4C81] shadow-sm backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D4AF37]" aria-hidden="true" />
              Trusted Business Solutions in Rwanda
            </div>

            <h1
              id="hero-heading"
              className="mt-6 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Everything Your Office, School &amp; Business Needs — All in One Place.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Hero Papeterie Ltd provides quality stationery, printing, branding, ICT solutions, and office supplies for businesses,
              schools, institutions, and individuals across Rwanda.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#newsletter"
                className="inline-flex items-center justify-center rounded-full bg-[#0F4C81] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0F4C81]/20 transition hover:-translate-y-0.5 hover:bg-[#0b3d6d] focus:outline-none focus:ring-2 focus:ring-[#0F4C81] focus:ring-offset-2"
              >
                Subscribe to our Newsletter
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0F4C81]/30 hover:text-[#0F4C81] focus:outline-none focus:ring-2 focus:ring-[#0F4C81] focus:ring-offset-2"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {trustIndicators.map((indicator) => (
                <div key={indicator} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm">
                  <svg viewBox="0 0 20 20" className="h-4 w-4 text-[#D4AF37]" fill="currentColor" aria-hidden="true">
                    <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.2 7.2a1 1 0 0 1-1.4 0l-3.2-3.2a1 1 0 1 1 1.4-1.4l2.5 2.5 6.5-6.5a1 1 0 0 1 1.4 0Z" />
                  </svg>
                  {indicator}
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0F4C81]">Company Profile</p>
                <h2 className="mt-2 text-xl font-semibold text-slate-900">Hero Papeterie Ltd</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Located at KK 4 Avenue, Gikondo Sector, Kicukiro District, Kigali City, Rwanda, we provide integrated business solutions
                  designed to support growth and daily operations.
                </p>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                {businessDetails.map((detail) => (
                  <li key={detail} className="flex items-start gap-2">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#D4AF37]" aria-hidden="true" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* right-hand product/details column removed to avoid duplication with page-level sections */}
        </div>
      </div>

      {/* Hero is intentionally concise; page-level sections provide full details (services, contact, map) */}
    </section>
  );
}
