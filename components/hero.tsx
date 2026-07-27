import Link from 'next/link';

const trustIndicators = ['Professional Service', 'Quality Products', 'Fast Delivery'];

const services = [
  {
    title: 'Office Stationery',
    description: 'A complete range of office essentials, school materials, and everyday business supplies.',
  },
  {
    title: 'Printing Services',
    description: 'Reliable photocopying, document printing, and professional print-ready materials.',
  },
  {
    title: 'Branding & Graphic Design',
    description: 'Visual identity support for signage, marketing materials, and presentation needs.',
  },
  {
    title: 'ICT Solutions',
    description: 'Practical digital support and technology-ready solutions for modern operations.',
  },
  {
    title: 'Office Equipment',
    description: 'Essential furniture and equipment for productive offices, schools, and institutions.',
  },
  {
    title: 'Corporate Supply Solutions',
    description: 'Dependable sourcing for organizations seeking a trusted one-stop partner.',
  },
];

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

          <div className="animate-fade-in-right">
            <div className="relative mx-auto max-w-2xl">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#0F4C81] via-[#1d4ed8]/10 to-[#D4AF37]/20 blur-3xl" aria-hidden="true" />
              <div className="relative rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-[0_30px_80px_rgba(15,76,129,0.15)] backdrop-blur sm:p-6 lg:p-8">
                <div className="space-y-4">
                  <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">Featured range</p>
                        <h2 className="mt-1 text-xl font-semibold text-slate-900">Business essentials</h2>
                        <p className="mt-2 max-w-sm text-sm leading-7 text-slate-600">
                          A carefully curated selection of everyday products for offices, schools, and growing businesses.
                        </p>
                      </div>
                      <span className="inline-flex rounded-full bg-[#0F4C81] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                        New
                      </span>
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-[1.25rem] border border-slate-200 bg-[#0F4C81]/5 p-4">
                        <div className="h-12 rounded-2xl bg-[#0F4C81]/20" />
                        <p className="mt-3 text-sm font-semibold text-slate-800">Notebooks</p>
                      </div>
                      <div className="rounded-[1.25rem] border border-slate-200 bg-[#D4AF37]/10 p-4">
                        <div className="h-12 rounded-2xl bg-[#D4AF37]/30" />
                        <p className="mt-3 text-sm font-semibold text-slate-800">Pens</p>
                      </div>
                      <div className="rounded-[1.25rem] border border-slate-200 bg-slate-100 p-4">
                        <div className="h-12 rounded-2xl bg-slate-300" />
                        <p className="mt-3 text-sm font-semibold text-slate-800">Files</p>
                      </div>
                      <div className="rounded-[1.25rem] border border-slate-200 bg-white p-4">
                        <div className="h-12 rounded-2xl border border-dashed border-slate-300" />
                        <p className="mt-3 text-sm font-semibold text-slate-800">Cards</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-[#0F4C81] to-[#125b92] p-5 text-white shadow-lg">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">Printer</p>
                          <p className="mt-1 font-semibold">Print-ready setup</p>
                        </div>
                        <div className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
                          On demand
                        </div>
                      </div>
                      <div className="mt-5 rounded-[1.25rem] border border-white/20 bg-white/10 p-4">
                        <div className="rounded-[1rem] border border-white/20 bg-white/15 p-4">
                          <div className="h-2.5 w-24 rounded-full bg-white/70" />
                          <div className="mt-4 flex gap-2">
                            <div className="h-2 w-2 rounded-full bg-white/80" />
                            <div className="h-2 w-10 rounded-full bg-white/50" />
                            <div className="h-2 w-16 rounded-full bg-white/30" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">Laptop</p>
                          <p className="mt-1 font-semibold text-slate-900">Digital support</p>
                        </div>
                        <div className="h-10 w-10 rounded-2xl border border-slate-200 bg-slate-100" />
                      </div>
                      <div className="mt-4 rounded-[1rem] border border-slate-200 bg-slate-50 p-3">
                        <div className="h-20 rounded-[0.8rem] border border-dashed border-slate-300 bg-white" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-2 rounded-full bg-[#D4AF37] px-3 py-1.5 text-sm font-semibold text-slate-900">
                        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                          <path d="M10 3a1 1 0 0 1 1 1v5.6l3.2 2.2a1 1 0 0 1-1.2 1.6l-3.5-2.4A1 1 0 0 1 9 10V4a1 1 0 0 1 1-1Z" />
                        </svg>
                        Fast delivery
                      </div>
                      <p className="text-sm font-medium text-slate-600">Serving Kigali and Rwanda</p>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-[1.15rem] border border-slate-200 bg-white p-3">
                        <p className="text-sm font-semibold text-slate-900">Office Supplies</p>
                        <p className="mt-1 text-sm text-slate-600">Desks, chairs, storage & more</p>
                      </div>
                      <div className="rounded-[1.15rem] border border-slate-200 bg-white p-3">
                        <p className="text-sm font-semibold text-slate-900">Branding</p>
                        <p className="mt-1 text-sm text-slate-600">Logos, signage & print assets</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8 lg:pb-32">
        <div id="services" className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-soft sm:p-8 lg:p-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0F4C81]">Our Services</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">Integrated solutions for every kind of workspace</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-600">
              From stationery and school materials to printing, design, ICT support, and office equipment, Hero Papeterie Ltd is built to be your dependable one-stop partner.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F4C81]/10 text-[#0F4C81]">
                  <svg viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M6 3a1 1 0 0 0-1 1v1H4a1 1 0 0 0-1 1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a1 1 0 0 0-1-1h-1V4a1 1 0 0 0-1-1H6Zm0 3h8V5H6v1Zm-1 3h10v6H5V9Z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="contact" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8 lg:pb-32">
        <div className="rounded-[2rem] border border-[#0F4C81]/10 bg-[#0F4C81] p-8 text-white shadow-[0_20px_60px_rgba(15,76,129,0.2)] sm:p-10 lg:flex lg:items-center lg:justify-between lg:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">Contact us</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Let’s help you find the right solution</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-100">
              Visit Hero Papeterie Ltd at KK 4 Avenue, Gikondo Sector, Kicukiro District, Kigali City, Rwanda, and request a quote for your next project.
            </p>
          </div>
          <Link
            href="#hero-heading"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0F4C81] transition hover:-translate-y-0.5 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0F4C81] lg:mt-0"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
