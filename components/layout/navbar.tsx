import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-brand-900">
          Hero Papeterie Ltd
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-brand-900"
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
}
