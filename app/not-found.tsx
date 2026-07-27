export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0F4C81]">404</p>
      <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Page not found</h1>
      <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
        The page you are looking for does not exist, but Hero Papeterie Ltd is ready to support your business with dependable stationery, printing, branding, and ICT solutions.
      </p>
    </div>
  );
}
