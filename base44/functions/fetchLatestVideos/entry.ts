// Fetches the latest uploads from the Killerbyte Gaming YouTube channel
// via the public channel RSS feed (no API key required).
const CHANNEL_ID = "UCpAoQMXFb5Zq7d7egXOjveg";

function decodeXml(text) {
  return text
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .trim();
}

function parseEntry(entry) {
  const id = (entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/) || [])[1];
  const rawTitle = (entry.match(/<title>([^<]*)<\/title>/) || [])[1] || "";
  const link = (entry.match(/<link rel="alternate" href="([^"]+)"/) || [])[1];
  const published = (entry.match(/<published>([^<]+)<\/published>/) || [])[1];
  return {
    id,
    title: decodeXml(rawTitle),
    link: link || `https://www.youtube.com/watch?v=${id}`,
    published,
    isShort: link ? link.includes("/shorts/") : false,
  };
}

export default async function (req) {
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`
    );
    if (!res.ok) {
      return Response.json(
        { error: "YouTube feed unavailable" },
        { status: 502 }
      );
    }
    const xml = await res.text();
    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)]
      .map((m) => parseEntry(m[1]))
      .filter((v) => v.id && v.title && v.published)
      .slice(0, 10);
    return Response.json({ videos: entries });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}