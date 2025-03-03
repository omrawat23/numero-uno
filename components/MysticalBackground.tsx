"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MysticalBackground() {
  return (
    <>
      {/* Base Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-violet-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      {/* Animated Light Beams */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent"
            style={{
              transform: `rotate(${120 * i}deg)`
            }}
          />
        ))}
      </div>

      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 mix-blend-color-dodge">
        <Image
          src="/grid-pattern.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Mystical Portal Effect */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
        style={{
          background: "radial-gradient(circle, rgba(147,51,234,0.1) 0%, rgba(236,72,153,0.05) 50%, transparent 70%)",
          filter: "blur(40px)"
        }}
      />
    </>
  );
}
