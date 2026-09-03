import XpProgressBar from "@/components/citadel/XpProgressBar";
import Hero from "@/components/citadel/Hero";
import Library from "@/components/citadel/Library";
import Armory from "@/components/citadel/Armory";
import GuildHall from "@/components/citadel/GuildHall";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0C10] text-[hsl(0_0%_94%)]">
      <XpProgressBar />
      <Hero />
      <Library />
      <Armory />
      <GuildHall />
    </main>
  );
}