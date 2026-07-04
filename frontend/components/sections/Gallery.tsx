"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { site } from "@/data/site";
import { ArrowUpRightIcon } from "@/components/ui/icons";

/**
 * ─────────────────────────────────────────────
 *  GALLERY  →  image-only offset masonry under the hero.
 * ─────────────────────────────────────────────
 *  Three columns — the center column sits higher and runs taller, the
 *  side columns are offset downward for a staggered rhythm. The whole
 *  grid scales up as it scrolls into view (expands, mirroring the navbar
 *  resize on scroll).
 *
 *  Drop your images into /public/gallery and point each slot's `src`
 *  at them (e.g. "/gallery/1.jpg"). Slots left as `null` render a
 *  neutral placeholder. Images are grayscale, revealing color on hover.
 */
type Slot = { src: string | null; aspect: string };

// For now every slot reuses the one available photo — swap these for
// real gallery images (drop files in /public/gallery) when ready.
const PLACEHOLDER = "/Profile_Image/About_1.png";

const columns: Slot[][] = [
  // Left column (offset down)
  [
    { src: PLACEHOLDER, aspect: "aspect-square" },
    { src: PLACEHOLDER, aspect: "aspect-square" },
    { src: PLACEHOLDER, aspect: "aspect-square" },
  ],
  // Center column (taller, sits higher)
  [
    { src: PLACEHOLDER, aspect: "aspect-square" },
    { src: PLACEHOLDER, aspect: "aspect-square" },
    { src: PLACEHOLDER, aspect: "aspect-square" },
  ],
  // Right column (offset down)
  [
    { src: PLACEHOLDER, aspect: "aspect-square" },
    { src: PLACEHOLDER, aspect: "aspect-square" },
    { src: PLACEHOLDER, aspect: "aspect-square" },
  ],
];

function Tile({ slot }: { slot: Slot }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[4px] border border-white/[0.08] bg-surface ${slot.aspect}`}
    >
      {slot.src ? (
        <Image
          src={slot.src}
          alt=""
          fill
          sizes="(max-width: 640px) 40vw, 30vw"
          className="object-cover grayscale transition-all duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-surface to-base">
          <svg
            width={26}
            height={26}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted/40"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.5-3.5a2 2 0 0 0-2.8 0L5 21" />
          </svg>
        </div>
      )}
    </div>
  );
}

export function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  // Scrub scale from the section entering the viewport to reaching center —
  // the grid "expands" into place as you scroll to it.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);

  return (
    <section
      aria-label="Visual gallery"
      className="relative overflow-hidden px-6 py-8 sm:py-10"
    >
      <motion.div ref={ref} style={{ scale }} className="origin-center">
        <div className="flex items-start gap-2">
          {columns.map((col, ci) => {
            const isCenter = ci === 1;
            return (
              <div
                key={ci}
                className={`flex flex-col gap-2 ${
                  isCenter ? "flex-[1.15]" : "flex-1 pt-8 sm:pt-14"
                }`}
              >
                {col.map((slot, i) => (
                  <Tile key={i} slot={slot} />
                ))}
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* White CTA → Behance */}
      <div className="mt-8 flex justify-center sm:mt-10">
        <a
          href={site.socials.behance}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-base transition-colors duration-300 hover:bg-white/90"
        >
          View Designs
          <ArrowUpRightIcon className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}
