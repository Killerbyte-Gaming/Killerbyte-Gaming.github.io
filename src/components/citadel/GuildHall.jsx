import { Twitch, Youtube, Facebook, Link2, ArrowUp } from "lucide-react";
import { CITADEL_LINKS } from "@/lib/citadelData";

const SOCIALS = [
  { label: "Twitch", href: CITADEL_LINKS.twitch, Icon: Twitch, hint: "Live Campaign" },
  { label: "YouTube", href: CITADEL_LINKS.youtube, Icon: Youtube, hint: "The Tomes" },
  { label: "Facebook", href: CITADEL_LINKS.facebook, Icon: Facebook, hint: "The Scouts" },
  { label: "All Links", href: CITADEL_LINKS.beacons, Icon: Link2, hint: "The Hub" },
];

// Smooth-scrolls to a section (works under hash-based routing)
const scrollTo = (id) => () =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function GuildHall() {
  return (
    <>
      {/* Footer chronicle */}
      <footer className="relative border-t border-[hsl(38_26%_24%)] px-6 pb-28 pt-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="font-heading text-2xl font-black uppercase tracking-inscription">
                Killerbyte <span className="text-gilded">Gaming</span>
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-[hsl(0_0%_65%)]">
                A chronicle of the Old School RuneScape grind — from the first
                copper to the final skillcape.
              </p>
            </div>

            <div>
              <h4 className="font-mono-ui text-xs tracking-inscription text-[hsl(43_74%_60%)]">
                THE GUILD HALL
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-[hsl(0_0%_75%)]">
                <li><button type="button" onClick={scrollTo("hero")} className="transition-colors hover:text-[hsl(43_74%_65%)]">The Grand Exchange</button></li>
                <li><button type="button" onClick={scrollTo("library")} className="transition-colors hover:text-[hsl(43_74%_65%)]">Library of Wisdom</button></li>
                <li><button type="button" onClick={scrollTo("armory")} className="transition-colors hover:text-[hsl(43_74%_65%)]">The Armory</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono-ui text-xs tracking-inscription text-[hsl(43_74%_60%)]">
                JOIN THE GUILD
              </h4>
              <p className="mt-4 text-sm leading-relaxed text-[hsl(0_0%_65%)]">
                Every follower strengthens the citadel. Choose your banner below.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[hsl(38_26%_24%)] pt-6 sm:flex-row">
            <p className="font-mono-ui text-[10px] tracking-widest text-[hsl(38_20%_45%)]">
              ◆ FORGED IN THE OBSIDIAN CITADEL ◆
            </p>
            <button
              type="button"
              onClick={scrollTo("hero")}
              className="inline-flex items-center gap-1.5 font-mono-ui text-[10px] tracking-widest text-[hsl(38_20%_55%)] transition-colors hover:text-[hsl(43_74%_65%)]"
            >
              <ArrowUp className="h-3 w-3" /> RETURN TO THE SUMMIT
            </button>
          </div>
        </div>
      </footer>

      {/* Pinned utility belt — social guild hall */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[hsl(38_26%_24%)] bg-[hsl(210_20%_5%)]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-around px-4 py-3">
          {SOCIALS.map(({ label, href, Icon, hint }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-1 flex-col items-center gap-1 transition-colors"
              aria-label={label}
            >
              <Icon className="h-5 w-5 text-[hsl(0_0%_70%)] transition-all duration-300 group-hover:scale-110 group-hover:text-[hsl(43_74%_65%)]" />
              <span className="font-mono-ui text-[8px] tracking-widest text-[hsl(38_20%_50%)] transition-colors group-hover:text-[hsl(43_74%_60%)]">
                {label.toUpperCase()}
              </span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}