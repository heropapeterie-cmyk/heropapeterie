"use client";

import React, { useState } from 'react';

export function RequestForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const validateEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    if (!name || !validateEmail(email) || !message) {
      setStatus('Please complete all fields with a valid email.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus('Request sent — we will reply shortly.');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const data = await res.json();
        setStatus(data?.error || 'Unable to send request.');
      }
    } catch (err) {
      setStatus('Network error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-3">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="rounded border border-slate-200 px-3 py-2" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="rounded border border-slate-200 px-3 py-2" />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your project" className="rounded border border-slate-200 px-3 py-2" rows={4} />
      <button type="submit" disabled={loading} className="rounded bg-[#0F4C81] px-4 py-2 text-sm font-semibold text-white">
        {loading ? 'Sending…' : 'Send request'}
      </button>
      {status ? <p className="mt-2 text-sm text-slate-600">{status}</p> : null}
    </form>
  );
}

export default RequestForm;
