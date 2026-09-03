import { Lock, PackageOpen } from "lucide-react";
import { Image } from "@/components/ui/image";
import { IRON_TEXTURE, CITADEL_LINKS } from "@/lib/citadelData";
import SectionDivider from "./SectionDivider";

// Empty inventory slots — the armory is being forged.
const SLOTS = Array.from({ length: 9 });

function InventorySlot({ index }) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-sm border-chisel bg-[hsl(210_16%_9%)]">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-[hsl(38_20%_40%)] transition-colors duration-300 group-hover:text-[hsl(43_74%_60%)]">
        <Lock className="h-5 w-5" />
        <span className="font-mono-ui text-[9px] tracking-widest">EMPTY</span>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rare-drop-glow" />
      </div>
    </div>
  );
}

export default function Armory() {
  return (
    <section id="armory" className="relative px-6 py-16 md:px-10">
      <div className="absolute inset-0 -z-10">
        <Image
          src={IRON_TEXTURE}
          alt="Forged iron backdrop"
          fittingType="fill"
          className="h-full w-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-[#0A0C10]/85" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="font-mono-ui text-xs tracking-inscription text-[hsl(38_20%_62%)]">
            VIEW 02
          </span>
          <h2 className="mt-3 font-heading text-4xl font-black uppercase tracking-inscription text-[hsl(0_0%_94%)] md:text-5xl">
            The <span className="text-gilded">Armory</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[hsl(0_0%_70%)]">
            Legendary loot, forged for the faithful. The inventory stands ready —
            each cell awaits a relic to be equipped.
          </p>
        </div>

        <SectionDivider label="Forging Soon" />

        {/* 3x3 inventory grid */}
        <div className="mx-auto grid max-w-2xl grid-cols-3 gap-3 md:gap-4">
          {SLOTS.map((_, i) => (
            <InventorySlot key={i} index={i} />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="inline-flex items-center gap-2 font-mono-ui text-xs tracking-widest text-[hsl(38_20%_55%)]">
            <PackageOpen className="h-4 w-4" /> THE FORGE IS BEING STOKED
          </p>
          <a
            href={CITADEL_LINKS.beacons}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border-chisel px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-inscription text-[hsl(0_0%_85%)] transition-colors hover:text-[hsl(43_74%_65%)]"
          >
            Scout the Supply Lines
          </a>
        </div>
      </div>
    </section>
  );
}