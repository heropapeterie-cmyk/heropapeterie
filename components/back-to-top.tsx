"use client";

import { useEffect, useState } from 'react';

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 320);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#0F4C81]/10 bg-[#0F4C81] text-white shadow-lg shadow-[#0F4C81]/20 transition hover:-translate-y-1 hover:bg-[#0b3d6d] focus:outline-none focus:ring-2 focus:ring-[#0F4C81] focus:ring-offset-2"
      aria-label="Back to top"
    >
      <svg viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M10 4a1 1 0 0 1 .7.3l4.5 4.5a1 1 0 0 1-1.4 1.4L11 7.4V15a1 1 0 1 1-2 0V7.4L6.2 10.2a1 1 0 0 1-1.4-1.4l4.5-4.5A1 1 0 0 1 10 4Z" />
      </svg>
    </button>
  );
}
