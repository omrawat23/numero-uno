"use client"

import { Bounded } from "@/components/Bounded";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import MysticalBackground from "./MysticalBackground";

interface VideoBlockProps {
  imageSrc: string;
  imageAlt?: string;
}

const MASK_CLASSES =
  "[mask-image:url(/video-mask.png)] [mask-mode:alpha] [mask-position:center_center] [mask-repeat:no-repeat] [mask-size:100%_auto]";

export default function VideoBlock({ imageSrc, imageAlt = "Image" }: VideoBlockProps): JSX.Element {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentContainerRef = containerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0, rootMargin: "1500px" }
    );

    if (currentContainerRef) {
      observer.observe(currentContainerRef);
    }

    return () => {
      if (currentContainerRef) {
        observer.unobserve(currentContainerRef);
      }
    };
  });

  return (
    <Bounded className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-950 to-zinc-950">
      <MysticalBackground />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 via-transparent to-transparent" />
      </div>

      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
        <div className="relative aspect-video">
          <div className={clsx(MASK_CLASSES, "bg-brand-lime absolute inset-0 ~translate-x-2/3 ~translate-y-2/3")} />
          <div className={clsx(MASK_CLASSES, "bg-white absolute inset-0 ~translate-x-1/3 ~translate-y-1/2")} />
          <div className={clsx(MASK_CLASSES, "bg-white absolute inset-0 ~translate-x-1/2 ~-translate-y-1/3")} />

          <div className={clsx(MASK_CLASSES, "relative h-full")}>
            <div className="relative h-full w-full" ref={containerRef}>
              {isInView && (
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              )}
            </div>
            <Image
              src="/image-texture.png"
              alt=""
              fill
              className="pointer-events-none object-cover opacity-30"
            />
          </div>
        </div>
      </div>
    </Bounded>
  );
}
