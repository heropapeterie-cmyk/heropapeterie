import { Hero } from '@/components/hero';
import { LocationMap } from '@/components/location-map';
import dynamic from 'next/dynamic';

const RequestForm = dynamic(() => import('@/components/request-form'), { ssr: false });
const Gallery = dynamic(() => import('@/components/gallery'), { ssr: false });

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main>
        <Hero />

        <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 text-center sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0F4C81]">What we offer</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">Practical supplies and support for offices, schools, and growing teams.</h2>
            <p className="mt-4 text-lg text-slate-600">From stationery and printing to branding and ICT essentials, Hero Papeterie keeps everyday operations simple and dependable.</p>
          </div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold">Featured products</h2>
              <p className="mt-2 text-sm text-slate-600">A quick look at popular categories — explore the full catalog on the Products page.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-200 p-4">
                  <div className="h-40 w-full rounded-md bg-slate-100" />
                  <h3 className="mt-3 font-semibold">Notebooks & Paper</h3>
                  <p className="mt-1 text-sm text-slate-600">High quality paper and notebooks for classrooms and offices.</p>
                </div>
                <div className="rounded-lg border border-slate-200 p-4">
                  <div className="h-40 w-full rounded-md bg-slate-100" />
                  <h3 className="mt-3 font-semibold">Pens & Writing</h3>
                  <p className="mt-1 text-sm text-slate-600">Reliable pens and markers for everyday use.</p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold">Gallery</h3>
                <div className="mt-3">
                  <Gallery />
                </div>
              </div>
            </div>

            <aside className="rounded-lg border border-slate-200 p-6">
              <h3 className="font-semibold">Request a quote</h3>
              <p className="mt-2 text-sm text-slate-600">Tell us what you need and our team will respond quickly.</p>
              {/* Client form handles validation and submission */}
              <div className="mt-4">
                <RequestForm />
              </div>
            </aside>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-center">Frequently asked questions</h2>
          <div className="mt-8 space-y-4">
            <details className="rounded-lg border border-slate-200 p-4">
              <summary className="cursor-pointer font-medium">Do you deliver outside Kigali?</summary>
              <p className="mt-2 text-sm text-slate-600">Yes — we serve clients across Rwanda. Delivery times depend on distance and order size.</p>
            </details>
            <details className="rounded-lg border border-slate-200 p-4">
              <summary className="cursor-pointer font-medium">Can you handle bulk orders for institutions?</summary>
              <p className="mt-2 text-sm text-slate-600">Absolutely — we offer institutional pricing and customised quotes for large orders.</p>
            </details>
            <details className="rounded-lg border border-slate-200 p-4">
              <summary className="cursor-pointer font-medium">Do you offer printing and branding services?</summary>
              <p className="mt-2 text-sm text-slate-600">Yes — from logos and signage to printed marketing materials and business stationery.</p>
            </details>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold">Visit our store</h2>
              <p className="mt-2 text-sm text-slate-600">KK 4 Avenue, Gikondo Sector, Kicukiro District, Kigali City, Rwanda.</p>
              <p className="mt-4 text-sm text-slate-600">We are happy to welcome institutions and walk-in customers — contact us for appointments or quotes.</p>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200">
              <LocationMap />
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
