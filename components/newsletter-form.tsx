"use client";

import React, { useState } from 'react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const validate = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    if (!validate(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setMessage('Thanks — you are subscribed!');
        setEmail('');
      } else {
        const data = await res.json();
        setMessage(data?.error || 'Something went wrong.');
      }
    } catch (err) {
      setMessage('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="mt-4 flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        aria-label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="w-full rounded-full border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-white outline-none ring-0 placeholder:text-slate-500"
      />
      <button
        type="submit"
        disabled={loading}
        className="rounded-full bg-[#D4AF37] px-4 py-2.5 text-sm font-semibold text-slate-950 transition disabled:opacity-60"
      >
        {loading ? 'Subscribing…' : 'Subscribe'}
      </button>
      {message ? <p className="col-span-full mt-2 text-sm text-slate-300">{message}</p> : null}
    </form>
  );
}
