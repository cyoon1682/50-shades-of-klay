const ALLOWED = new Set([
  'site.api.espn.com',
  'site.web.api.espn.com',
  'sports.core.api.espn.com',
]);

function ttlFor(pathname) {
  if (/\/(summary|scoreboard)$/.test(pathname)) return 15;
  if (/\/schedule$/.test(pathname)) return 120;
  if (/\/roster$|\/teams$/.test(pathname)) return 6 * 3600;
  return 300;
}

export default async (req) => {
  const raw = new URL(req.url).searchParams.get('url');
  let target;
  try { target = new URL(raw); } catch { return json({ error: 'Missing or bad url' }, 400); }
  if (target.protocol !== 'https:' || !ALLOWED.has(target.hostname)) {
    return json({ error: 'Host not allowed' }, 403);
  }
  try {
    const res = await fetch(target, {
      headers: { accept: 'application/json', 'user-agent': 'Mozilla/5.0 (50 Shades of Klay)' },
    });
    const body = await res.text();
    const ttl = ttlFor(target.pathname);
    return new Response(body, {
      status: res.status,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'access-control-allow-origin': '*',
        'cache-control': 'public, max-age=0, must-revalidate',
        'netlify-cdn-cache-control': res.ok ? `public, durable, max-age=${ttl}, stale-while-revalidate=${ttl * 2}` : 'no-store',
      },
    });
  } catch (e) {
    return json({ error: 'ESPN unreachable' }, 502);
  }
};

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });
}

export const config = { path: '/api/espn' };
