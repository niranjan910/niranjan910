"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORD = "Niranjan";
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function LoadingOverlay() {
  // Start visible. We render the SAME thing on server and first client paint
  // (done === false), so there is no hydration mismatch. Dismissal is driven
  // entirely by an effect that only runs after hydration.
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Respect reduced-motion: snap away almost immediately.
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    // Lock body scroll while the overlay is up so the reveal feels controlled.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Total on-screen time: letter stagger + hold. Reduced motion = quick.
    const HOLD = reduce ? 250 : 1850;
    const t = window.setTimeout(() => setDone(true), HOLD);

    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  // When the exit animation completes we make doubly sure scrolling is restored
  // (the effect cleanup also does this, but only on unmount).
  const handleExitComplete = () => {
    document.body.style.overflow = "";
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {!done && (
        <motion.div
          key="loader"
          aria-hidden="true"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "radial-gradient(ellipse 70% 80% at 50% 50%,#1a0a2e 0%,#10051D 55%,#090414 100%)",
            // pointerEvents stays on while visible so it covers UI; AnimatePresence
            // unmounts it entirely when done, so interactivity is never blocked after.
          }}
        >
          <div style={{ position: "relative", display: "flex", overflow: "hidden", padding: "0 4px" }}>
            {WORD.split("").map((ch, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.06 * i,
                  ease: EASE,
                }}
                style={{
                  display: "inline-block",
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2.4rem,9vw,5.5rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-1px",
                  background: "linear-gradient(90deg,#FFFFFF,#D96BFF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  willChange: "transform, opacity",
                }}
              >
                {ch}
              </motion.span>
            ))}

            {/* Underline sweep that draws in beneath the word */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
              style={{
                position: "absolute",
                left: 4,
                right: 4,
                bottom: -6,
                height: 2,
                transformOrigin: "left center",
                background: "linear-gradient(90deg,#FF8A3D,#C85CFF)",
                borderRadius: 2,
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
