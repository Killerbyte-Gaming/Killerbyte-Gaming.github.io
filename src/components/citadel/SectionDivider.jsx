import { Sword } from "lucide-react";

// "The Great Divide" — a gold-inlayed horizontal rule.
export default function SectionDivider({ label }) {
  return (
    <div className="flex items-center justify-center gap-4 py-10 md:py-14">
      <span className="h-px w-16 md:w-28 bg-gradient-to-r from-transparent to-[hsl(43_74%_53%)]" />
      <span className="flex items-center gap-3 text-[hsl(43_74%_60%)]">
        <Sword className="h-4 w-4 rotate-90 opacity-70" />
        {label && (
          <span className="font-heading text-xs md:text-sm tracking-inscription uppercase">
            {label}
          </span>
        )}
        <Sword className="h-4 w-4 -rotate-90 opacity-70" />
      </span>
      <span className="h-px w-16 md:w-28 bg-gradient-to-l from-transparent to-[hsl(43_74%_53%)]" />
    </div>
  );
}