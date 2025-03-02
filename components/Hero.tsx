"use client";

import { WavyPaths } from "./WavyPaths";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Bounded } from "./Bounded";
import { ButtonLink } from "./ButtonLink";
import { SlideIn } from "./SlideIn";
import { Heading } from "./Heading";
import clsx from "clsx";
import { useEffect, useRef } from "react";

const MASK_CLASSES =
  "[mask-image:url(/video-mask.png)] [mask-mode:alpha] [mask-position:center_center] [mask-repeat:no-repeat] [mask-size:100%_auto]";

const featureVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const pathVariants: Variants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" }
  }
};

const MysticalSymbol = ({ className, symbol }: { className: string; symbol: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.8, 1, 0.8] }}
    transition={{ duration: 3, repeat: Infinity }}
    className={clsx("text-3xl absolute z-10", className)}
  >
    {symbol}
  </motion.div>
);

const MysticalSymbols = {
  runes: ["ᚠ", "ᚻ", "ᚹ", "ᚣ", "ᛋ", "ᛟ"],
  zodiac: ["♈", "♊", "♋", "♌", "♍", "♐"],
  mystical: ["✧", "⚝", "⚯", "♅", "☯", "⚡"]
};

// Enhanced particle effect with trails
const createParticle = (canvas: HTMLCanvasElement) => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  size: Math.random() * 2 + 1,
  speedX: Math.random() * 2 - 1,
  speedY: Math.random() * 2 - 1,
  hue: Math.random() * 60 + 250, // Purple to pink hues
  trail: [] as { x: number; y: number }[]
});

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Enhanced particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 50 }, () => createParticle(canvas));

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Update trail
        particle.trail.push({ x: particle.x, y: particle.y });
        if (particle.trail.length > 20) particle.trail.shift();

        // Draw trail
        ctx.beginPath();
        ctx.moveTo(particle.trail[0]?.x, particle.trail[0]?.y);
        particle.trail.forEach(point => {
          ctx.lineTo(point.x, point.y);
        });
        ctx.strokeStyle = `hsla(${particle.hue}, 100%, 50%, 0.1)`;
        ctx.stroke();

        // Draw particle
        ctx.fillStyle = `hsla(${particle.hue}, 100%, 50%, 0.8)`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around screen
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;
      });

      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <Bounded className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-950 to-zinc-950">
      {/* Enhanced Mystical Gradient Overlays */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-violet-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        {/* Magical light beams */}
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
      </div>

      {/* Mystical Symbols Layer */}
      <div className="absolute inset-0 overflow-hidden">
        {MysticalSymbols.runes.map((rune, i) => (
          <MysticalSymbol
            key={`rune-${i}`}
            className={`top-${Math.random() * 100}% left-${Math.random() * 100}%`}
            symbol={rune}
          />
        ))}
        {/* Magical Energy Rings */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-purple-500/20 rounded-full blur-sm"
        />
      </div>

      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-40"
      />

      {/* Floating Mystical Symbols */}
      <MysticalSymbol className="top-1/4 left-1/4" symbol="✧" />
      <MysticalSymbol className="top-1/3 right-1/4" symbol="⚝" />
      <MysticalSymbol className="bottom-1/4 left-1/3" symbol="⚯" />
      <MysticalSymbol className="top-1/2 right-1/3" symbol="♅" />
      <MysticalSymbol className="bottom-1/3 right-1/4" symbol="☯" />

      {/* Main Content Container with enhanced effects */}
      <div className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center">
        {/* Crystal Ornaments */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-20 w-40 h-40"
          style={{
            background: "linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))",
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
          }}
        />

        {/* Content Container with enhanced mystical styling */}
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-gradient-conic from-purple-500/30 via-transparent to-transparent blur-3xl"
          />

          {/* Main Heading Section */}
          <div className="text-center max-w-4xl mx-auto relative">
            <SlideIn>
              <div className="relative inline-block">
                <Heading size="lg" as="h1" className="relative z-10">
                  <span className="block text-6xl md:text-7xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 drop-shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                    Unlock the Secrets
                  </span>
                  <span className="block text-5xl md:text-6xl font-bold text-white/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                    of Your Numbers
                  </span>
                </Heading>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-2xl rounded-full animate-pulse" />
              </div>
            </SlideIn>

            <SlideIn>
              <p className="mt-8 text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Your numbers hold the key to self-discovery, success, and harmony. Let numerology and psychology guide you to a life aligned with your true destiny.
              </p>
            </SlideIn>

            {/* Enhanced CTA Section */}
            <div className="mt-12 flex flex-wrap gap-6 justify-center items-center">
              <SlideIn>
                <ButtonLink
                  href="/consultation"
                  icon="plus"
                  color="purple"
                  className="transform hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/20"
                >
                  Free Consultation
                </ButtonLink>
              </SlideIn>
              <SlideIn>
                <ButtonLink
                  href="/book"
                  icon="cart"
                  color="pink"
                  className="transform hover:scale-105 transition-transform duration-300 shadow-lg shadow-pink-500/20"
                >
                  Book Appointment
                </ButtonLink>
              </SlideIn>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-5 mix-blend-color-dodge">
        <Image src="/grid-pattern.png" alt="" fill className="object-cover" />
      </div>

      {/* Mystical Rotating Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-10 w-20 h-20">
          <Image src="/wheel.png" width={80} height={80} alt="" className="opacity-20" />
        </div>
        <div className="absolute bottom-1/4 right-10 w-16 h-16">
          <Image src="/bearing.png" width={60} height={60} alt="" className="opacity-20" />
        </div>
      </motion.div>

      {/* Enhanced Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 opacity-80">
        <WavyPaths />
      </div>
    </Bounded>
  );
}
