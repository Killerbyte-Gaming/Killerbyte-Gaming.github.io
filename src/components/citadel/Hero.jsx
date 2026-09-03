import { Flame, ChevronRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { CITADEL_LINKS, HERO_IMAGE, IRON_TEXTURE } from "@/lib/citadelData";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      {/* Full-bleed iron texture backdrop */}
      <div className="absolute inset-0">
        <Image
          src={IRON_TEXTURE}
          alt="Hammered iron backdrop"
          fittingType="fill"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0C10]/80 via-[#0A0C10]/70 to-[#0A0C10]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0A0C10_85%)]" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-24 pb-32 md:grid-cols-2 md:px-10">
        {/* Left — signature artifact */}
        <div className="materialize order-2 md:order-1">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-3 rounded-sm border-chisel" />
            <div className="overflow-hidden rounded-sm border-chisel">
              <Image
                src={HERO_IMAGE}
                alt="An iron gauntlet cradling a glowing cyan gemstone"
                fittingType="fill"
                className="aspect-[3/4] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 font-mono-ui text-[10px] tracking-widest text-[hsl(43_74%_60%)]">
              ◆ SIGNATURE ARTIFACT ◆
            </div>
          </div>
        </div>

        {/* Right — live status & call to action */}
        <div className="materialize order-1 flex flex-col gap-8 md:order-2">
          <div className="font-mono-ui text-xs tracking-inscription text-[hsl(38_20%_62%)]">
            OLD SCHOOL RUNESCAPE · CONTENT CHRONICLE
          </div>

          <h1 className="font-heading text-5xl font-black uppercase leading-[1.05] tracking-inscription text-[hsl(0_0%_94%)] sm:text-6xl md:text-7xl">
            Killerbyte
            <span className="block text-gilded">Gaming</span>
          </h1>

          <p className="max-w-md text-lg leading-relaxed text-[hsl(0_0%_80%)]">
            A digital citadel forged for the grind. Stream the live campaign,
            study the slayer tomes, and join a guild of strategists chasing
            glory from level one to ninety-nine.
          </p>

          {/* Live status module */}
          <a
            href={CITADEL_LINKS.twitch}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-3 rounded-sm border-chisel bg-[hsl(210_16%_12%)] px-5 py-3 transition-colors hover:bg-[hsl(210_16%_16%)]"
          >
            <Flame className="torch-flicker h-5 w-5 text-[hsl(187_100%_55%)]" />
            <span className="font-mono-ui text-xs tracking-widest text-[hsl(0_0%_80%)]">
              <span className="text-[hsl(187_100%_60%)]">●</span> CITADEL STATUS
            </span>
            <span className="font-mono-ui text-xs tracking-widest text-[hsl(38_20%_62%)] group-hover:text-[hsl(43_74%_65%)]">
              ENTER THE HALL →
            </span>
          </a>

          {/* Primary CTA */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={CITADEL_LINKS.twitch}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-gradient-to-b from-[hsl(43_80%_55%)] to-[hsl(43_70%_40%)] px-8 py-4 font-heading text-sm font-bold uppercase tracking-inscription text-[#0A0C10] shadow-[0_8px_24px_rgba(212,175,55,0.3)] transition-all hover:shadow-[0_10px_30px_rgba(212,175,55,0.5)] hover:brightness-110"
            >
              Enter the Citadel
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              type="button"
              onClick={() => document.getElementById("library")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 rounded-sm border-chisel px-8 py-4 font-heading text-sm font-bold uppercase tracking-inscription text-[hsl(0_0%_85%)] transition-colors hover:text-[hsl(43_74%_65%)]"
            >
              Study the Tomes
            </button>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-24 left-1/2 z-10 -translate-x-1/2 font-mono-ui text-[10px] tracking-widest text-[hsl(38_20%_50%)] md:bottom-8">
        ▼ DESCEND INTO THE CHRONICLE ▼
      </div>
    </section>
  );
}