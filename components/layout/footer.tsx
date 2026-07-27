import Link from 'next/link';
// Use a lightweight thumbnail in the footer to avoid duplicate interactive maps
import { NewsletterForm } from '@/components/newsletter-form';

const socialLinks = [
  { href: 'https://www.facebook.com', label: 'Facebook' },
  { href: 'https://www.instagram.com', label: 'Instagram' },
  { href: 'https://www.linkedin.com', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div>
            <p className="text-lg font-semibold text-white">Hero Papeterie Ltd</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
              Office stationery, school materials, printing, branding, and ICT solutions for businesses and institutions across Rwanda.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="rounded-full border border-slate-700 px-3 py-1.5 text-sm text-slate-300 hover:border-[#D4AF37] hover:text-[#D4AF37]">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>📍 KK 4 Avenue, Gikondo Sector</li>
              <li>🏙️ Kicukiro District, Kigali, Rwanda</li>
              <li>📞 +250 788 000 000</li>
              <li>✉️ info@heropapeterie.rw</li>
            </ul>
          </div>

          <div id="newsletter">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">Newsletter</p>
            <p className="mt-3 text-sm leading-7 text-slate-400">Receive updates on products, services, and offers from Hero Papeterie Ltd.</p>
            <NewsletterForm />
          </div>
        </div>

          <div className="mt-8 rounded-[1.5rem] border border-slate-800 bg-slate-900/80 p-4">
            <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">Visit us</p>
                <p className="mt-2 text-sm leading-7 text-slate-400">We are conveniently located in Gikondo, serving clients across Kigali and Rwanda with efficient support.</p>
              </div>
              <div className="overflow-hidden rounded-[1.25rem] border border-slate-800">
                <a href="#location" className="flex h-40 items-center justify-center bg-gradient-to-br from-slate-800 to-slate-700 px-4 text-sm text-slate-300">
                  View map & directions
                </a>
              </div>
            </div>
          </div>
      </div>
    </footer>
  );
}
