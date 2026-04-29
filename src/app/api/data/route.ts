import { Response } from 'next';
import { EVENTS, USERS, STATS } from '@/lib/data';

export async function GET(): Promise<Response> {
  const data = {
    ok: true,
    data: {
      events: EVENTS,
      users: USERS,
      stats: STATS,
    },
  };

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export async function POST(request: Request): Promise<Response> {
  const jsonData = await request.json();
  console.log('Received POST data:', jsonData);

  const data = {
    ok: true,
    message: 'Demo mode — data not persisted',
  };

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}