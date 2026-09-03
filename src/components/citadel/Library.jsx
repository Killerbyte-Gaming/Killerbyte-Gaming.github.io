const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useEffect, useState } from "react";
import { Play, Eye, Clock } from "lucide-react";
import { Image } from "@/components/ui/image";
import { formatDistanceToNow } from "date-fns";

import { PARCHMENT_TEXTURE, CITADEL_LINKS, CONTENT } from "@/lib/citadelData";
import SectionDivider from "./SectionDivider";

function ContentTile({ item }) {
  const large = item.size === "large";
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block overflow-hidden rounded-sm border-chisel bg-[hsl(210_16%_10%)] ${
        large ? "md:row-span-2 md:col-span-2" : ""
      }`}
    >
      <div className="relative h-full min-h-[200px] w-full">
        {item.thumb ? (
          <Image
            src={item.thumb}
            alt={item.title}
            fittingType="fill"
            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:saturate-[0.7]"
          />
        ) : (
          <Image
            src={PARCHMENT_TEXTURE}
            alt="Aged parchment"
            fittingType="fill"
            className="h-full w-full object-cover opacity-20 transition-all duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-[#0A0C10]/40 to-transparent" />

        {/* Loot-table tooltip */}
        <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
          <div className="mb-2 inline-flex items-center gap-1.5 rounded-sm border border-[hsl(43_74%_53%_/_0.4)] bg-black/50 px-2 py-1 font-mono-ui text-[10px] tracking-widest text-[hsl(43_74%_65%)]">
            {item.kind === "Epic Quest" ? "★ EPIC QUEST" : "⚡ QUICK XP"}
          </div>
          <h3
            className={`font-heading font-bold uppercase leading-tight tracking-wide text-[hsl(0_0%_94%)] ${
              large ? "text-lg md:text-2xl" : "text-sm md:text-base"
            }`}
          >
            {item.title}
          </h3>
          <p className="mt-1 font-mono-ui text-[11px] tracking-wide text-[hsl(38_20%_62%)]">
            {item.series}
          </p>
          <div className="mt-3 flex items-center gap-4 font-mono-ui text-[10px] tracking-widest text-[hsl(0_0%_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" /> {item.length}
            </span>
            <span className="inline-flex items-center gap-1">
              <Eye className="h-3 w-3" /> WATCH
            </span>
          </div>
        </div>

        {/* Play badge */}
        <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-[hsl(43_74%_53%_/_0.5)] bg-black/50 text-[hsl(43_74%_65%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Play className="h-4 w-4 fill-current" />
        </div>
      </div>
    </a>
  );
}

// Maps a live RSS video onto the tome-tile shape.
function toTile(video, index) {
  return {
    title: video.title,
    series: formatDistanceToNow(new Date(video.published), { addSuffix: true }),
    length: video.isShort ? "SHORT" : "VIDEO",
    kind: video.isShort ? "Quick XP" : "Epic Quest",
    url: video.link,
    thumb: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
    size: index < 2 ? "large" : "small",
  };
}

export default function Library() {
  const [items, setItems] = useState(CONTENT);
  const [live, setLive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    db.functions
      .invoke("fetchLatestVideos", {})
      .then((res) => {
        const videos = res?.data?.videos || [];
        if (mounted && videos.length > 0) {
          setItems(videos.slice(0, 10).map(toTile));
          setLive(true);
        }
      })
      .catch(() => {})
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="library" className="relative px-6 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="font-mono-ui text-xs tracking-inscription text-[hsl(38_20%_62%)]">
            VIEW 03
          </span>
          <h2 className="mt-3 font-heading text-4xl font-black uppercase tracking-inscription text-[hsl(0_0%_94%)] md:text-5xl">
            The Library of <span className="text-gilded">Wisdom</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[hsl(0_0%_70%)]">
            Tomes of the grind — long-form quest chronicles and quick-XP clips,
            summoned fresh from the channel.
          </p>
        </div>

        <SectionDivider label="The Tomes" />

        {/* Feed status line */}
        <p className="mb-6 text-center font-mono-ui text-[10px] tracking-widest">
          {loading ? (
            <span className="shimmer bg-clip-text text-transparent">
              ⟡ SUMMONING THE LATEST TOMES… ⟡
            </span>
          ) : live ? (
            <span className="text-[hsl(187_100%_55%)]">
              ● LIVE FEED — UPDATED WITH EVERY UPLOAD
            </span>
          ) : (
            <span className="text-[hsl(38_20%_45%)]">
              ◆ DISPLAYING THE ARCHIVED TOMES ◆
            </span>
          )}
        </p>

        {/* Asymmetrical masonry grid */}
        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[200px]">
          {items.map((item) => (
            <ContentTile key={item.title} item={item} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={CITADEL_LINKS.youtubeVideos}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border-chisel px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-inscription text-[hsl(0_0%_85%)] transition-colors hover:text-[hsl(43_74%_65%)]"
          >
            Open the Full Library
          </a>
        </div>
      </div>
    </section>
  );
}