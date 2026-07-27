import Link from 'next/link';

const categories = [
  {
    title: 'Office Stationery',
    description: 'Everyday essentials for productive workspaces and professional offices.',
    items: ['A4 paper', 'Exercise books', 'Notebooks', 'Files and folders', 'Pens', 'Markers', 'Pencils', 'Staplers', 'Paper clips', 'Sticky notes', 'Envelopes', 'Binders', 'Desk organizers'],
  },
  {
    title: 'School Supplies',
    description: 'Learning materials prepared for classrooms, students, and educational institutions.',
    items: ['Exercise books', 'School files', 'Drawing books', 'Rulers', 'Geometry sets', 'Whiteboard markers', 'Chalk', 'Student folders', 'Classroom organizers'],
  },
  {
    title: 'Printing & Business Materials',
    description: 'Professional print products for communications, promotions, and daily administration.',
    items: ['Business cards', 'Letterheads', 'Invoices', 'Receipts', 'Brochures', 'Flyers', 'Posters', 'Forms', 'Labels', 'Stickers', 'Calendars', 'Booklets', 'Menus'],
  },
  {
    title: 'Branding & Signage',
    description: 'Visual materials that help businesses present their brand clearly and professionally.',
    items: ['Logo printing', 'Name badges', 'Table tents', 'Display boards', 'Signage', 'Promotional banners', 'Window stickers', 'Branded folders'],
  },
  {
    title: 'Packaging & Office Support',
    description: 'Practical supplies that keep orders, storage, and daily operations organized.',
    items: ['Packaging boxes', 'Cartons', 'Tape', 'Bubble wrap', 'Shipping labels', 'Packing materials', 'Storage boxes', 'File boxes'],
  },
  {
    title: 'ICT & Tech Accessories',
    description: 'Reliable tools and accessories that support modern offices and digital workflows.',
    items: ['Flash drives', 'Phone chargers', 'Computer cables', 'Keyboard accessories', 'Mice', 'Headphones', 'Printer supplies', 'Toners and cartridges', 'Power strips'],
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.12),_transparent_35%),linear-gradient(135deg,_#f8fafc_0%,_#f3f6fb_100%)]">
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0F4C81]">Products</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            A complete catalog of products for offices, schools, and growing businesses.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Hero Papeterie Ltd provides a wide range of stationery, printing, branding, packaging, and ICT products tailored for everyday operations across Rwanda.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#newsletter" className="inline-flex rounded-full bg-[#0F4C81] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0F4C81]/20 transition hover:-translate-y-0.5 hover:bg-[#0b3d6d]">
              Subscribe to our Newsletter
            </Link>
            <Link href="/" className="inline-flex rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-[#0F4C81]/30 hover:text-[#0F4C81]">
              Back to Home
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {categories.map((category) => (
            <article key={category.title} className="rounded-[1.75rem] border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F4C81]/10 text-[#0F4C81]">
                <svg viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M6 3a1 1 0 0 0-1 1v1H4a1 1 0 0 0-1 1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a1 1 0 0 0-1-1h-1V4a1 1 0 0 0-1-1H6Zm0 3h8V5H6v1Zm-1 3h10v6H5V9Z" />
                </svg>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-slate-900">{category.title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{category.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#D4AF37]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
