"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = storedTheme ? storedTheme === 'dark' : prefersDark;
    setIsDark(shouldUseDark);
    document.body.classList.toggle('dark', shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark ? 'dark' : 'light';
    setIsDark(!isDark);
    document.body.classList.toggle('dark', !isDark);
    window.localStorage.setItem('theme', nextTheme);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F4C81] text-sm font-semibold text-white shadow-lg shadow-[#0F4C81]/20">
            HP
          </div>
          <div>
            <p className="text-base font-semibold tracking-tight text-slate-900">Hero Papeterie Ltd</p>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">Business Solutions</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-600 hover:text-[#0F4C81]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="hidden rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition hover:border-[#0F4C81]/30 hover:text-[#0F4C81] sm:inline-flex"
            aria-label="Toggle dark mode"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <Link
            href="#contact"
            className="rounded-full bg-[#0F4C81] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#0F4C81]/20 transition hover:-translate-y-0.5 hover:bg-[#0b3d6d]"
          >
            Get in touch
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm md:hidden"
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-600" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <button type="button" onClick={toggleTheme} className="flex items-center gap-2 text-sm font-medium text-slate-700">
              {isDark ? '☀️ Light mode' : '🌙 Dark mode'}
            </button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
