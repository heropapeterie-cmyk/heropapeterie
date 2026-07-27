import Link from 'next/link';

const products = [
  {
    title: 'Office Stationery Packs',
    description: 'Premium notebooks, folders, pens, and branded office essentials for everyday business use.',
  },
  {
    title: 'Printing Materials',
    description: 'Brochures, business cards, pamphlets, and other professional print-ready materials.',
  },
  {
    title: 'Branding & Signage',
    description: 'Logo-ready materials, signage options, and visually polished promotional items.',
  },
  {
    title: 'ICT Accessories',
    description: 'Reliable tech essentials to support modern workspaces and business operations.',
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.12),_transparent_35%),linear-gradient(135deg,_#f8fafc_0%,_#f3f6fb_100%)]">
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0F4C81]">Products</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Discover the products that keep businesses running smoothly.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Hero Papeterie Ltd offers dependable products for offices, schools, institutions, and growing businesses across Rwanda.
          </p>
          <Link href="#newsletter" className="mt-8 inline-flex rounded-full bg-[#0F4C81] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0F4C81]/20 transition hover:-translate-y-0.5 hover:bg-[#0b3d6d]">
            Subscribe to our Newsletter
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <article key={product.title} className="rounded-[1.75rem] border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F4C81]/10 text-[#0F4C81]">
                <svg viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M6 3a1 1 0 0 0-1 1v1H4a1 1 0 0 0-1 1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a1 1 0 0 0-1-1h-1V4a1 1 0 0 0-1-1H6Zm0 3h8V5H6v1Zm-1 3h10v6H5V9Z" />
                </svg>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-slate-900">{product.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
