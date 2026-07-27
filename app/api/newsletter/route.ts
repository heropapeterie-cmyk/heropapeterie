import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // TODO: integrate with real mailing provider (Mailgun, SendGrid, etc.)
    // For now, accept and return success
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }
}
