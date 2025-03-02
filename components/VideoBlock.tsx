"use client"

import { Bounded } from "@/components/Bounded";
import { SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SlideIn } from "./SlideIn";
import { Heading } from "./Heading";
import { ButtonLink } from "./ButtonLink";

// Custom type definitions
type KeyTextField = string;

interface VideoBlockSlice {
  id: string;
  slice_type: string;
  variation: string;
  primary: {
    youtube_video_id: KeyTextField;
  };
}

const MASK_CLASSES =
  "[mask-image:url(/video-mask.png)] [mask-mode:alpha] [mask-position:center_center] [mask-repeat:no-repeat] [mask-size:100%_auto]";

const isValidText = (text: KeyTextField | null | undefined): text is string => {
  return typeof text === "string" && text.length > 0;
};

export type VideoBlockProps = SliceComponentProps<VideoBlockSlice>;

const VideoBlock = ({ slice }: VideoBlockProps): JSX.Element => {
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
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texture bg-zinc-900"
    >
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
        {/* Left side content */}
        <div className="flex flex-col items-center gap-8 text-center md:items-start md:text-left">
          <SlideIn>
            <Heading size="lg" as="h2" className="text-white">
              About me
            </Heading>
          </SlideIn>
          <SlideIn>
            <div className="max-w-md text-lg leading-relaxed text-white">
              Discover our unique collection of handcrafted skateboards. Each piece is
              carefully designed and customized to meet your style and preferences.
            </div>
          </SlideIn>
          <SlideIn>
            <ButtonLink href="#" color="lime">
              Learn More
            </ButtonLink>
          </SlideIn>
        </div>

        {/* Right side video with masks */}
        <div className="relative aspect-video">
          {/* Masks */}
          <div
            className={clsx(
              MASK_CLASSES,
              "bg-brand-lime absolute inset-0 ~translate-x-2/3 ~translate-y-2/3"
            )}
          />
          <div
            className={clsx(
              MASK_CLASSES,
              "bg-white absolute inset-0 ~translate-x-1/3 ~translate-y-1/2"
            )}
          />
          <div
            className={clsx(
              MASK_CLASSES,
              "bg-white absolute inset-0 ~translate-x-1/2 ~-translate-y-1/3"
            )}
          />

          {/* Video container with mask */}
          <div className={clsx(MASK_CLASSES, "relative h-full")}>
            {isValidText(slice.primary.youtube_video_id) && (
              <div className="relative h-full w-full" ref={containerRef}>
                {isInView && (
                               <Image
                               src="/card-gurl.png"
                               alt="Video thumbnail"
                               fill
                               className="object-cover"
                               priority
                             />
                )}
              </div>
            )}
            {/* Texture overlay */}
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
};

export default VideoBlock;
