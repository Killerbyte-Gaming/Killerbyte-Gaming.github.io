import { useEffect, useState } from "react";

// A scroll progress bar styled as an OSRS XP bar filling from level 1 to 99.
export default function XpProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setProgress(pct);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const level = Math.max(1, Math.round(1 + progress * 98));

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="h-1.5 w-full bg-black/60 border-b border-[hsl(38_26%_24%)]">
        <div
          className="h-full bg-gradient-to-r from-[hsl(43_74%_40%)] via-[hsl(43_80%_55%)] to-[hsl(43_90%_70%)] transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%`, boxShadow: "0 0 12px hsl(43 80% 55% / 0.7)" }}
        />
      </div>
      <div className="pointer-events-none absolute right-3 top-2 font-mono-ui text-[10px] tracking-widest text-[hsl(43_74%_65%)]">
        LVL {level}
      </div>
    </div>
  );
}