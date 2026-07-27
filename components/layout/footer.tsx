import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-lg font-semibold text-white">Hero Papeterie Ltd</p>
          <p className="mt-2 max-w-md text-sm">
            Office stationery, school materials, printing, branding, and ICT solutions for businesses and institutions in Rwanda.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm sm:flex-row sm:gap-6">
          <Link href="#services" className="hover:text-white">
            Services
          </Link>
          <Link href="#contact" className="hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
