import Image from 'next/image'

export const runtime = 'edge' as const;

export async function GET() {
  return new Response('Success from Edge Runtime!', {
    status: 200,
    headers: { 'Content-Type': 'text/plain' },
  });
}
