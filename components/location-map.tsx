"use client";

import dynamic from 'next/dynamic';

const MapContent = dynamic(
  () => import('./map-content'),
  {
    ssr: false,
    loading: () => <div className="flex h-64 w-full items-center justify-center rounded-[1.25rem] border border-slate-800 bg-slate-900 text-sm text-slate-400">Loading map…</div>,
  }
);

export function LocationMap() {
  return <MapContent />;
}
