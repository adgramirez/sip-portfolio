"use client";

/* eslint-disable @next/next/no-img-element */

import { motion, useSpring } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);

  // Hover gradient animation logic (kept intact for your future use)
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // If you uncomment these later, make sure to import useMotionTemplate
  // const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  // const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <section
      ref={ref}
      className="w-screen h-screen flex items-center justify-center snap-start"
    >
      <motion.div
        onMouseMove={onMouseMove}
        // Smooth entrance animation: fades in, slides up slightly, and scales to normal
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        // amount: 0.3 means the animation triggers when 30% of the card is visible
        viewport={{ once: false, amount: 0.3 }} 
        className="relative bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-900 text-white px-10 py-12 rounded-3xl shadow-2xl max-w-5xl w-[90%] overflow-hidden border border-transparent hover:border-zinc-400/60 group transition-colors duration-500"
      >
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src="/assets/MyPicture.jpg"
              alt="Aaron Daniel Ramirez"
              className="w-44 h-44 md:w-56 md:h-56 rounded-full border-4 border-white shadow-2xl object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6 text-zinc-300 text-xl md:text-2xl leading-relaxed">
            <h2 className="text-5xl font-extrabold mb-4 text-white tracking-tight">
              About Me
            </h2>
            <p>
              I am{" "}
              <span className="font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent">
                Aaron Daniel Ramirez
              </span>
              , a{" "}
              <span className="font-semibold text-white drop-shadow-glow">
                curious
              </span>{" "}
              and{" "}
              <span className="font-semibold text-white drop-shadow-glow">
                driven
              </span>{" "}
              4th Year Computer Science student who enjoys bringing ideas to life
              through code.
            </p>
            <p>
              While I started out working mostly behind the scenes with{" "}
              <span className="text-purple-400 font-medium drop-shadow-glow">
                backend logic
              </span>
              , I&apos;ve recently been exploring the creative side of tech—building
              interfaces, designing user flows, and diving into{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent animate-text-glow font-semibold">
                mobile development
              </span>
              .
            </p>
            <p>
              I enjoy{" "}
              <span className="text-white font-semibold drop-shadow-glow">
                learning new tools
              </span>{" "}
              and finding better ways to make digital experiences smoother and more
              engaging.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}